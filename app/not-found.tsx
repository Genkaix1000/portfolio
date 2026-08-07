"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";

export default function NotFound() {
  const { locale } = useLocale();
  const copy =
    locale === "en"
      ? {
          code: "404",
          title: "This route isn't on the map.",
          body: "The page doesn't exist — or it never wanted to be found.",
          home: "Back home",
        }
      : {
          code: "404",
          title: "Esta ruta no está en el mapa.",
          body: "La página no existe — o nunca quiso ser encontrada.",
          home: "Volver al inicio",
        };

  return (
    <main className="not-found">
      <div className="not-found-panel">
        <p className="not-found-code">{copy.code}</p>
        <h1>{copy.title}</h1>
        <p>{copy.body}</p>
        <Link href="/">{copy.home} →</Link>
      </div>
    </main>
  );
}
