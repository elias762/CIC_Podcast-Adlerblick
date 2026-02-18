"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

const CORRECT_PASSWORD = "Andreas26";
const AUTH_KEY = "cic-authenticated";

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem(AUTH_KEY);
    if (stored === "true") {
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, "true");
      setAuthenticated(true);
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      setTimeout(() => setError(false), 3000);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-cic-bg">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-cic-separator border-t-cic-teal" />
      </div>
    );
  }

  if (authenticated) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen items-center justify-center bg-cic-bg">
      <div
        className={`w-full max-w-sm ${shaking ? "animate-shake" : ""}`}
      >
        <div className="apple-card p-8">
          {/* Logo & Branding */}
          <div className="flex flex-col items-center mb-8">
            <Image
              src="/adlerblick-logo.png"
              alt="Der Adlerblick"
              width={200}
              height={200}
              className="h-20 w-20 rounded-[18px] shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
              priority
            />
            <h1 className="mt-4 text-[20px] font-bold tracking-tight text-cic-text">
              Der Adlerblick
            </h1>
            <p className="mt-1 text-[13px] text-cic-text-tertiary">
              Insight Platform
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <label className="block text-[11px] font-semibold uppercase tracking-widest text-cic-text-tertiary/70 mb-2">
              Passwort
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                <Lock className="h-4 w-4 text-cic-text-tertiary" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Passwort eingeben"
                autoFocus
                className={`w-full rounded-xl border bg-cic-bg/80 py-3 pl-10 pr-12 text-[14px] text-cic-text placeholder:text-cic-text-tertiary/50 outline-none transition-colors ${
                  error
                    ? "border-red-300 focus:border-red-400"
                    : "border-cic-border focus:border-cic-teal"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-cic-text-tertiary hover:text-cic-text transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>

            {error && (
              <p className="mt-2 text-[12px] text-red-500 font-medium">
                Falsches Passwort. Bitte erneut versuchen.
              </p>
            )}

            <button
              type="submit"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-cic-teal py-3 text-[14px] font-semibold text-white hover:bg-cic-teal/90 transition-colors"
            >
              Anmelden
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-center">
            <Image
              src="/cic-logo.jpg"
              alt="CIC"
              width={80}
              height={20}
              className="h-4 w-auto opacity-30"
            />
          </div>
        </div>
      </div>

      {/* Shake animation */}
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
