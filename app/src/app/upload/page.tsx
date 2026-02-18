"use client";

import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";
import { Upload, Mic, Video, FileAudio, Check, Loader2 } from "lucide-react";

type UploadState = "idle" | "uploading" | "processing" | "complete";

const steps = [
  "Transkription",
  "Führungserkenntnisse extrahieren",
  "Executive Summary erstellen",
  "Newsletter-Entwurf generieren",
  "Zielgruppen identifizieren",
];

export default function UploadPage() {
  const [dragActive, setDragActive] = useState(false);
  const [uploadState, setUploadState] = useState<UploadState>("idle");
  const [fileName, setFileName] = useState("");
  const [completedSteps, setCompletedSteps] = useState(0);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file) simulateUpload(file.name);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) simulateUpload(file.name);
  };

  const simulateUpload = (name: string) => {
    setFileName(name);
    setUploadState("uploading");
    setTimeout(() => {
      setUploadState("processing");
      let step = 0;
      const interval = setInterval(() => {
        step++;
        setCompletedSteps(step);
        if (step >= steps.length) {
          clearInterval(interval);
          setTimeout(() => setUploadState("complete"), 600);
        }
      }, 800);
    }, 1500);
  };

  return (
    <>
      <Header title="Upload" subtitle="Neue Episode analysieren" />
      <div className="px-8 py-6">
        <div className="mx-auto max-w-lg">
          {uploadState === "idle" && (
            <label
              onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
              onDragLeave={() => setDragActive(false)}
              onDrop={handleDrop}
              className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-16 transition-all duration-300 ${
                dragActive
                  ? "border-cic-teal bg-cic-teal-subtle scale-[1.01]"
                  : "border-cic-border-strong/60 bg-cic-surface hover:border-cic-teal/30 hover:bg-cic-teal-subtle/30"
              }`}
            >
              <input type="file" accept="audio/*,video/*" onChange={handleFileSelect} className="hidden" />
              <Image
                src="/adlerblick-logo.png"
                alt="Adlerblick"
                width={112}
                height={112}
                className="h-14 w-14 rounded-2xl object-cover shadow-[0_2px_8px_rgba(0,0,0,0.1)] opacity-60"
              />
              <p className="mt-5 text-[14px] font-semibold text-cic-text">
                Datei ablegen oder auswählen
              </p>
              <p className="mt-1 text-[12px] text-cic-text-tertiary">
                MP3, WAV, MP4, M4A — bis zu 500 MB
              </p>
            </label>
          )}

          {uploadState !== "idle" && (
            <div className="apple-card p-10">
              <div className="flex flex-col items-center text-center">
                {uploadState === "uploading" && (
                  <>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cic-teal-subtle">
                      <Loader2 className="h-6 w-6 animate-spin text-cic-teal" strokeWidth={1.5} />
                    </div>
                    <p className="mt-5 text-[14px] font-semibold text-cic-text">Wird hochgeladen</p>
                    <p className="mt-1 text-[12px] text-cic-text-tertiary">{fileName}</p>
                  </>
                )}

                {uploadState === "processing" && (
                  <>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cic-teal-subtle">
                      <Loader2 className="h-6 w-6 animate-spin text-cic-teal" strokeWidth={1.5} />
                    </div>
                    <p className="mt-5 text-[14px] font-semibold text-cic-text">Wird analysiert</p>
                    <p className="mt-1 text-[12px] text-cic-text-tertiary">{fileName}</p>
                    <div className="mt-7 w-full max-w-xs space-y-2.5 text-left">
                      {steps.map((step, i) => (
                        <div key={i} className="flex items-center gap-3">
                          {i < completedSteps ? (
                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100">
                              <Check className="h-3 w-3 text-emerald-600" strokeWidth={2.5} />
                            </div>
                          ) : i === completedSteps ? (
                            <div className="flex h-5 w-5 items-center justify-center">
                              <Loader2 className="h-4 w-4 animate-spin text-cic-teal" strokeWidth={2} />
                            </div>
                          ) : (
                            <div className="flex h-5 w-5 items-center justify-center">
                              <div className="h-[6px] w-[6px] rounded-full bg-cic-border-strong" />
                            </div>
                          )}
                          <span className={`text-[12px] font-medium ${i <= completedSteps ? "text-cic-text" : "text-cic-text-tertiary"}`}>
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {uploadState === "complete" && (
                  <>
                    <div className="relative">
                      <Image
                        src="/adlerblick-logo.png"
                        alt="Adlerblick"
                        width={112}
                        height={112}
                        className="h-14 w-14 rounded-2xl object-cover shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                      />
                      <div className="absolute -right-1 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 border-2 border-white shadow-sm">
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </div>
                    </div>
                    <p className="mt-5 text-[14px] font-semibold text-cic-text">Analyse abgeschlossen</p>
                    <p className="mt-1 text-[12px] text-cic-text-tertiary">{fileName}</p>
                    <div className="mt-7 flex gap-2.5">
                      <a
                        href="/episodes/ep-001"
                        className="rounded-xl bg-cic-teal px-5 py-2.5 text-[12px] font-semibold text-white hover:bg-cic-teal-light transition-all shadow-[0_1px_3px_rgba(3,95,106,0.3)]"
                      >
                        Ergebnisse anzeigen
                      </a>
                      <button
                        onClick={() => { setUploadState("idle"); setFileName(""); setCompletedSteps(0); }}
                        className="rounded-xl bg-cic-separator px-5 py-2.5 text-[12px] font-semibold text-cic-text-secondary hover:bg-cic-border transition-all"
                      >
                        Weitere Datei
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Info cards */}
          <div className="mt-6 grid grid-cols-3 gap-2.5">
            {[
              { icon: Mic, label: "Transkription", desc: "Sprache zu Text" },
              { icon: FileAudio, label: "Insight-Extraktion", desc: "KI-gestützte Analyse" },
              { icon: Video, label: "Multi-Format", desc: "Audio & Video" },
            ].map((item, i) => (
              <div key={i} className="apple-card p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-cic-separator">
                  <item.icon className="h-[14px] w-[14px] text-cic-text-secondary" strokeWidth={1.5} />
                </div>
                <p className="mt-2.5 text-[12px] font-semibold text-cic-text">{item.label}</p>
                <p className="mt-0.5 text-[11px] text-cic-text-tertiary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
