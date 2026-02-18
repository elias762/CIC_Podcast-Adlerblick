import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Mic,
  Lightbulb,
  Target,
  CheckCircle2,
  AlertTriangle,
  Mail,
  ArrowLeft,
  BookOpen,
  Users,
  Building2,
  Sparkles,
  Copy,
} from "lucide-react";
import { episodes } from "@/lib/data";

const categoryStyle: Record<string, string> = {
  leadership: "bg-cic-teal-subtle text-cic-teal border border-cic-teal/10",
  strategy: "bg-blue-50 text-blue-600 border border-blue-100",
  operations: "bg-amber-50 text-amber-600 border border-amber-100",
  digital: "bg-cic-coral-subtle text-cic-coral border border-cic-coral/10",
  culture: "bg-purple-50 text-purple-600 border border-purple-100",
};

const categoryLabel: Record<string, string> = {
  leadership: "Führung",
  strategy: "Strategie",
  operations: "Organisation",
  digital: "Digital",
  culture: "Kultur",
};

const priorityStyle: Record<string, string> = {
  high: "text-red-500",
  medium: "text-amber-500",
  low: "text-cic-text-tertiary",
};

export default async function EpisodeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const episode = episodes.find((e) => e.id === id);
  if (!episode) notFound();

  const insights = episode.insights;

  return (
    <>
      <Header title="Episode" subtitle={`${episode.date} · ${episode.duration}`} />
      <div className="px-8 py-6">
        <Link
          href="/episodes"
          className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-cic-text-tertiary hover:text-cic-teal transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Zurück
        </Link>

        {/* Title Card */}
        <div className="mt-5 apple-card p-7">
          <div className="flex items-start gap-5">
            <Image
              src="/adlerblick-logo.png"
              alt="Der Adlerblick"
              width={96}
              height={96}
              className="h-12 w-12 flex-shrink-0 rounded-[14px] object-cover shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
            />
            <div>
              <h2 className="text-[22px] font-bold tracking-tight text-cic-text leading-tight">
                {episode.title}
              </h2>
              <p className="mt-1.5 text-[13px] leading-relaxed text-cic-text-secondary max-w-2xl">
                {episode.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {episode.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-cic-separator px-2 py-[3px] text-[10px] font-semibold text-cic-text-tertiary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-6">
          {/* Main Column */}
          <div className="col-span-2 space-y-4">
            {/* Executive Summary */}
            <section className="apple-card p-7">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-[15px] w-[15px] text-cic-text-tertiary" strokeWidth={1.5} />
                <h3 className="text-[13px] font-semibold text-cic-text">
                  Executive Summary
                </h3>
              </div>
              <div className="space-y-3">
                {insights.executiveSummary.split("\n\n").map((p, i) => (
                  <p key={i} className="text-[13px] leading-[1.75] text-cic-text-secondary">
                    {p}
                  </p>
                ))}
              </div>
            </section>

            {/* Key Insights */}
            <section className="apple-card p-7">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="h-[15px] w-[15px] text-cic-coral" strokeWidth={1.5} />
                <h3 className="text-[13px] font-semibold text-cic-text">
                  Zentrale Erkenntnisse
                </h3>
              </div>
              <div className="space-y-2.5">
                {insights.keyInsights.map((insight, i) => (
                  <div key={i} className="rounded-xl bg-cic-bg/80 border border-cic-border/50 p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`rounded-md px-2 py-[2px] text-[10px] font-semibold ${categoryStyle[insight.category]}`}>
                        {categoryLabel[insight.category]}
                      </span>
                    </div>
                    <p className="text-[13px] font-semibold text-cic-text">
                      {insight.title}
                    </p>
                    <p className="mt-1 text-[12px] text-cic-text-secondary leading-relaxed">
                      {insight.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Strategic Implications */}
            <section className="apple-card p-7">
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-[15px] w-[15px] text-blue-500" strokeWidth={1.5} />
                <h3 className="text-[13px] font-semibold text-cic-text">
                  Strategische Implikationen
                </h3>
              </div>
              <div className="space-y-3">
                {insights.strategicImplications.map((imp, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-cic-separator text-[10px] font-bold text-cic-text-tertiary mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-[13px] leading-[1.7] text-cic-text-secondary">
                      {imp}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Action Items */}
            <section className="apple-card p-7">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="h-[15px] w-[15px] text-emerald-500" strokeWidth={1.5} />
                <h3 className="text-[13px] font-semibold text-cic-text">
                  Handlungsempfehlungen
                </h3>
              </div>
              <div className="space-y-1.5">
                {insights.actionItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl bg-cic-bg/80 border border-cic-border/50 px-4 py-3">
                    <div className={`h-[6px] w-[6px] rounded-full ${priorityStyle[item.priority]} bg-current`} />
                    <span className="flex-1 text-[12px] text-cic-text">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Practice Observations */}
            {insights.practiceObservations.length > 0 && (
              <section className="apple-card p-7">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="h-[15px] w-[15px] text-amber-500" strokeWidth={1.5} />
                  <h3 className="text-[13px] font-semibold text-cic-text">
                    Praxisbeobachtungen
                  </h3>
                </div>
                <div className="space-y-4">
                  {insights.practiceObservations.map((obs, i) => (
                    <div key={i} className="border-l-[2px] border-cic-coral/30 pl-4 py-0.5">
                      <p className="text-[12px] font-semibold text-cic-text">
                        {obs.title}
                      </p>
                      <p className="mt-1 text-[12px] leading-[1.7] text-cic-text-secondary">
                        {obs.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Newsletter */}
            <section className="apple-card p-7">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-[15px] w-[15px] text-cic-coral" strokeWidth={1.5} />
                  <h3 className="text-[13px] font-semibold text-cic-text">
                    Newsletter-Entwurf
                  </h3>
                </div>
                <button className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-semibold text-cic-text-tertiary hover:bg-cic-separator transition-colors">
                  <Copy className="h-3 w-3" />
                  Kopieren
                </button>
              </div>
              <div className="rounded-xl bg-cic-bg/80 border border-cic-border/50 p-5">
                <pre className="whitespace-pre-wrap text-[12px] leading-[1.75] text-cic-text-secondary font-[inherit]">
                  {insights.newsletterDraft}
                </pre>
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-4">
            {/* Target Audience */}
            <div className="apple-card p-5">
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-[15px] w-[15px] text-cic-text-tertiary" strokeWidth={1.5} />
                <h3 className="text-[12px] font-semibold text-cic-text">
                  Zielgruppe
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-cic-text-tertiary/70 mb-2">
                    Rollen
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {insights.targetAudience.roles.map((role) => (
                      <span key={role} className="rounded-md bg-cic-teal-subtle px-2 py-[3px] text-[10px] font-semibold text-cic-teal border border-cic-teal/10">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-cic-text-tertiary/70 mb-1">
                    Unternehmensgröße
                  </p>
                  <p className="text-[12px] font-medium text-cic-text">
                    {insights.targetAudience.companySize}
                  </p>
                </div>
              </div>
            </div>

            {/* Industries */}
            <div className="apple-card p-5">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="h-[15px] w-[15px] text-cic-text-tertiary" strokeWidth={1.5} />
                <h3 className="text-[12px] font-semibold text-cic-text">
                  Relevante Branchen
                </h3>
              </div>
              <div className="space-y-1">
                {insights.targetAudience.industries.map((ind) => (
                  <div key={ind} className="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[12px] text-cic-text-secondary">
                    <div className="h-[5px] w-[5px] rounded-full bg-cic-coral/60" />
                    {ind}
                  </div>
                ))}
              </div>
            </div>

            {/* Usage Tip */}
            <div className="rounded-2xl bg-gradient-to-br from-cic-teal-subtle to-cic-teal-subtle/50 border border-cic-teal/8 p-5">
              <Sparkles className="h-[15px] w-[15px] text-cic-teal" strokeWidth={1.5} />
              <p className="mt-2.5 text-[12px] font-semibold text-cic-text">
                Nutzungsempfehlung
              </p>
              <p className="mt-1 text-[12px] leading-[1.65] text-cic-text-secondary">
                Ideal für die Vorbereitung von Kundengesprächen mit
                Geschäftsführern im Mittelstand zu Organisationsentwicklung
                oder IT-Sicherheit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
