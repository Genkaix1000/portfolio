import { chromium } from 'playwright';

async function generatePDF() {
  console.log('🚀 Starting PDF generation...');
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const url = 'http://localhost:3000/cv';
  
  // Wait for server to be ready
  let serverReady = false;
  let retries = 0;
  while (!serverReady && retries < 30) {
    try {
      const response = await page.goto(url);
      if (response && response.status() === 200) {
        serverReady = true;
      }
    } catch (e) {
      console.log('⏳ Waiting for server to start...');
      await new Promise(resolve => setTimeout(resolve, 1000));
      retries++;
    }
  }

  if (!serverReady) {
    console.error('❌ Server not responding after 30 seconds.');
    await browser.close();
    process.exit(1);
  }

  try {
    console.log(`🌐 Navigating to ${url}...`);
    // Wait for networkidle to ensure all assets (images, fonts) are loaded
    await page.goto(url, { waitUntil: 'networkidle' });
    
    console.log('📄 Exporting PDF...');
    await page.pdf({
      path: 'CV_Matias_Sasin.pdf',
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px'
      }
    });

    console.log('✅ PDF generated successfully: CV_Matias_Sasin.pdf');
  } catch (error) {
    console.error('❌ Error generating PDF:', error);
  } finally {
    await browser.close();
  }
}

generatePDF();
