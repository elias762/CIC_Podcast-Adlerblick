"use client";

import { useState } from "react";
import { Timer, Scissors, Loader2, CheckCircle2, ChevronDown, ChevronUp, Sparkles } from "lucide-react";

interface ShortenEpisodeProps {
  episodeTitle: string;
  originalDuration: string;
  executiveSummary: string;
  keyInsights: { title: string; description: string; category: string }[];
  actionItems: { text: string; priority: string }[];
}

const processingSteps = [
  "Transkript analysieren",
  "Kernaussagen identifizieren",
  "Kurzfassung generieren",
  "Audio-Schnitt optimieren",
];

export default function ShortenEpisode({
  episodeTitle,
  originalDuration,
  executiveSummary,
  keyInsights,
  actionItems,
}: ShortenEpisodeProps) {
  const [state, setState] = useState<"idle" | "processing" | "done">("idle");
  const [currentStep, setCurrentStep] = useState(0);
  const [expanded, setExpanded] = useState(true);

  // Generate condensed content from real episode data
  const condensedSummary = executiveSummary.split("\n\n")[0];
  const topInsights = keyInsights.slice(0, 3);
  const topActions = actionItems.filter((a) => a.priority === "high").slice(0, 3);

  const handleShorten = () => {
    setState("processing");
    setCurrentStep(0);

    // Simulate processing steps
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step >= processingSteps.length) {
        clearInterval(interval);
        setTimeout(() => setState("done"), 600);
      } else {
        setCurrentStep(step);
      }
    }, 900);
  };

  const handleReset = () => {
    setState("idle");
    setCurrentStep(0);
  };

  if (state === "idle") {
    return (
      <button
        onClick={handleShorten}
        className="flex items-center gap-2 rounded-xl bg-cic-teal-subtle border border-cic-teal/10 px-4 py-2.5 text-[12px] font-semibold text-cic-teal hover:bg-cic-teal/10 transition-colors"
      >
        <Scissors className="h-3.5 w-3.5" />
        Auf 15 Min. kürzen
      </button>
    );
  }

  if (state === "processing") {
    return (
      <div className="apple-card p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cic-teal-subtle">
            <Loader2 className="h-4 w-4 text-cic-teal animate-spin" />
          </div>
          <div>
            <p className="text-[13px] font-semibold text-cic-text">
              Kurzfassung wird erstellt
            </p>
            <p className="text-[11px] text-cic-text-tertiary">
              {originalDuration} → 15 Min.
            </p>
          </div>
        </div>

        <div className="space-y-2.5">
          {processingSteps.map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              {i < currentStep ? (
                <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
              ) : i === currentStep ? (
                <Loader2 className="h-4 w-4 text-cic-teal animate-spin flex-shrink-0" />
              ) : (
                <div className="h-4 w-4 rounded-full border-2 border-cic-separator flex-shrink-0" />
              )}
              <span
                className={`text-[12px] ${
                  i <= currentStep
                    ? "text-cic-text font-medium"
                    : "text-cic-text-tertiary"
                }`}
              >
                {step}
              </span>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-1 rounded-full bg-cic-separator overflow-hidden">
          <div
            className="h-full rounded-full bg-cic-teal transition-all duration-700 ease-out"
            style={{
              width: `${((currentStep + 1) / processingSteps.length) * 100}%`,
            }}
          />
        </div>
      </div>
    );
  }

  // state === "done"
  return (
    <div className="apple-card overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b border-cic-border/50">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50">
            <Timer className="h-4 w-4 text-emerald-600" />
          </div>
          <div>
            <p className="text-[13px] font-semibold text-cic-text">
              15-Minuten-Kurzfassung
            </p>
            <p className="text-[11px] text-cic-text-tertiary">
              {originalDuration} → 15 Min. ({topInsights.length} Erkenntnisse, {topActions.length} Handlungsempfehlungen)
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="rounded-lg px-2.5 py-1.5 text-[11px] font-semibold text-cic-text-tertiary hover:bg-cic-separator transition-colors"
          >
            Zurücksetzen
          </button>
          <button
            onClick={() => setExpanded(!expanded)}
            className="rounded-lg p-1.5 text-cic-text-tertiary hover:bg-cic-separator transition-colors"
          >
            {expanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {expanded && (
        <div className="p-5 space-y-5">
          {/* Condensed Summary */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <Sparkles className="h-3 w-3 text-cic-teal" />
              <p className="text-[11px] font-bold uppercase tracking-widest text-cic-text-tertiary/70">
                Zusammenfassung
              </p>
            </div>
            <p className="text-[13px] leading-[1.75] text-cic-text-secondary">
              {condensedSummary}
            </p>
          </div>

          {/* Top Insights */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-cic-text-tertiary/70 mb-2">
              Top-Erkenntnisse
            </p>
            <div className="space-y-2">
              {topInsights.map((insight, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 rounded-lg bg-cic-bg/80 border border-cic-border/50 px-3.5 py-2.5"
                >
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-cic-teal-subtle text-[10px] font-bold text-cic-teal mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-[12px] font-semibold text-cic-text">
                      {insight.title}
                    </p>
                    <p className="text-[11px] text-cic-text-secondary leading-relaxed">
                      {insight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Action Items */}
          {topActions.length > 0 && (
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-cic-text-tertiary/70 mb-2">
                Wichtigste Handlungsempfehlungen
              </p>
              <div className="space-y-1.5">
                {topActions.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 rounded-lg bg-cic-bg/80 border border-cic-border/50 px-3.5 py-2.5"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                    <span className="text-[12px] text-cic-text">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Simulated audio player */}
          <div className="rounded-xl bg-gradient-to-r from-cic-teal-subtle to-cic-teal-subtle/30 border border-cic-teal/10 p-4">
            <div className="flex items-center justify-between mb-2.5">
              <p className="text-[11px] font-semibold text-cic-teal">
                Kurzfassung Audio
              </p>
              <span className="text-[11px] font-medium text-cic-teal/70">
                15:00
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-cic-teal text-white hover:bg-cic-teal/90 transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-3.5 w-3.5 ml-0.5"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <div className="flex-1 h-1 rounded-full bg-cic-teal/20">
                <div className="h-full w-0 rounded-full bg-cic-teal" />
              </div>
              <span className="text-[10px] text-cic-teal/70">0:00</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
