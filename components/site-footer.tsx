"use client";

import { IconGithub, IconInstagram, IconLinkedin, IconMail, IconWhatsapp } from "@/components/icons";
import { useLocale } from "@/components/locale-provider";

const socials = [
  {
    href: "https://github.com/Genkaix1000",
    label: "GitHub",
    Icon: IconGithub,
  },
  {
    href: "https://www.linkedin.com/in/matias-asin-573320250/",
    label: "LinkedIn",
    Icon: IconLinkedin,
  },
  {
    href: "https://www.instagram.com/matiasasin/",
    label: "Instagram",
    Icon: IconInstagram,
  },
  {
    href: "mailto:matiasasin123@gmail.com",
    label: "Email",
    Icon: IconMail,
  },
  {
    href: "https://wa.me/5491170623866",
    label: "WhatsApp",
    Icon: IconWhatsapp,
  },
];

export function SiteFooter() {
  const { t } = useLocale();

  return (
    <footer id="contacto" className="footer-band">
      <div className="footer-shell">
        <div className="footer-main">
          <div>
            <p className="footer-brand">MATÍAS ASIN</p>
            <p>{t.footer.location}</p>
            <p>
              <a href="mailto:matiasasin123@gmail.com">matiasasin123@gmail.com</a>
              <i>·</i>
              <a href="tel:+5491170623866">+54 9 11 70623866</a>
            </p>
          </div>
          <nav className="footer-socials" aria-label={t.footer.socialAria}>
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                aria-label={label}
              >
                <Icon className="icon-md" />
                <span>{label}</span>
              </a>
            ))}
            <a
              href="/atelier"
              className="footer-atelier"
              aria-label="Atelier"
              title="· · ·"
            >
              ◆
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
