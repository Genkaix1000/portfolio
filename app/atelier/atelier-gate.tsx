"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState, type FormEvent } from "react";

const PIN_LEN = 6;
const KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "CLR", "0", "ENT"] as const;

export default function AtelierGate() {
  const router = useRouter();
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  const status = useMemo(() => {
    if (busy) return "VERIFYING";
    if (error) return "DENIED";
    if (pin.length === PIN_LEN) return "READY";
    return "LOCKED";
  }, [busy, error, pin.length]);

  async function submit(value = pin) {
    if (value.length < PIN_LEN || busy) return;
    setBusy(true);
    setError(false);
    try {
      const res = await fetch("/api/atelier", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin: value }),
      });
      if (!res.ok) {
        setError(true);
        setPin("");
        return;
      }
      router.replace("/cv");
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  function onKey(key: string) {
    setError(false);
    if (key === "CLR") {
      setPin("");
      return;
    }
    if (key === "ENT") {
      void submit();
      return;
    }
    setPin((prev) => {
      if (prev.length >= PIN_LEN) return prev;
      const nextPin = prev + key;
      if (nextPin.length === PIN_LEN) queueMicrotask(() => void submit(nextPin));
      return nextPin;
    });
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    void submit();
  }

  return (
    <main className="atelier">
      <div className="atelier-atmosphere" aria-hidden="true" />
      <div className="atelier-frame">
        <header className="atelier-top">
          <p>PRIVATE ACCESS</p>
          <p className={`atelier-status is-${status.toLowerCase()}`}>{status}</p>
        </header>

        <div className="atelier-hero">
          <p className="atelier-kicker">01 — ATELIER</p>
          <h1>
            CÁMARA
            <br />
            <span>OSCURA</span>
          </h1>
          <p className="atelier-copy">
            Taller privado de CVs. Seis dígitos. Sin código, esta puerta no existe.
          </p>
        </div>

        <form onSubmit={onSubmit} className="atelier-form">
          <div className="atelier-display" aria-hidden="true">
            {Array.from({ length: PIN_LEN }).map((_, index) => (
              <span key={index} className={index < pin.length ? "is-on" : undefined}>
                {index < pin.length ? "●" : "○"}
              </span>
            ))}
          </div>

          <input
            className="atelier-sr"
            type="password"
            inputMode="numeric"
            autoComplete="one-time-code"
            value={pin}
            onChange={(event) => {
              const nextPin = event.target.value.replace(/\D/g, "").slice(0, PIN_LEN);
              setPin(nextPin);
              setError(false);
              if (nextPin.length === PIN_LEN) void submit(nextPin);
            }}
            aria-label="PIN de acceso"
          />

          <div className="atelier-pad">
            {KEYS.map((key) => (
              <button
                key={key}
                type="button"
                className={key === "ENT" ? "is-enter" : key === "CLR" ? "is-clear" : undefined}
                onClick={() => onKey(key)}
                disabled={busy}
              >
                {key}
              </button>
            ))}
          </div>

          {error ? <p className="atelier-error">ACCESO DENEGADO · reintentá</p> : null}
        </form>

        <footer className="atelier-foot">
          <a href="/">← PORTFOLIO</a>
          <span>MATÍAS ASIN · CV WORKSHOP</span>
        </footer>
      </div>
    </main>
  );
}
