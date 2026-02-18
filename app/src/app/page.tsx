import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import {
  Mic,
  Lightbulb,
  BookOpen,
  Mail,
  ArrowRight,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { episodes, dashboardStats, categories } from "@/lib/data";

function StatCard({
  icon: Icon,
  label,
  value,
  trend,
}: {
  icon: React.ElementType;
  label: string;
  value: number;
  trend?: string;
}) {
  return (
    <div className="apple-card p-5">
      <div className="flex items-center justify-between">
        <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-cic-separator">
          <Icon className="h-[15px] w-[15px] text-cic-text-secondary" strokeWidth={1.5} />
        </div>
        {trend && (
          <span className="flex items-center gap-0.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-600">
            <TrendingUp className="h-2.5 w-2.5" />
            {trend}
          </span>
        )}
      </div>
      <p className="mt-4 text-[28px] font-bold tracking-tight text-cic-text">
        {value}
      </p>
      <p className="mt-0.5 text-[12px] font-medium text-cic-text-tertiary">{label}</p>
    </div>
  );
}

function EpisodeRow({ episode }: { episode: (typeof episodes)[0] }) {
  return (
    <Link
      href={`/episodes/${episode.id}`}
      className="group flex items-center gap-4 apple-card px-5 py-4"
    >
      <Image
        src="/adlerblick-logo.png"
        alt="Adlerblick"
        width={80}
        height={80}
        className="h-10 w-10 flex-shrink-0 rounded-[10px] object-cover"
      />

      <div className="flex-1 min-w-0">
        <h3 className="text-[13px] font-semibold text-cic-text truncate group-hover:text-cic-teal transition-colors duration-200">
          {episode.title}
        </h3>
        <div className="mt-0.5 flex items-center gap-2.5">
          <span className="text-[11px] text-cic-text-tertiary">
            {episode.date}
          </span>
          <span className="h-[2px] w-[2px] rounded-full bg-cic-text-tertiary" />
          <span className="text-[11px] text-cic-text-tertiary">
            {episode.duration}
          </span>
          <span className="h-[2px] w-[2px] rounded-full bg-cic-text-tertiary" />
          <span className="text-[11px] text-cic-text-tertiary">
            {episode.insights.keyInsights.length} Erkenntnisse
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        <span className="rounded-full bg-emerald-50 px-2.5 py-[3px] text-[10px] font-semibold text-emerald-600 border border-emerald-100">
          Analysiert
        </span>
        <ArrowRight className="h-3.5 w-3.5 text-cic-text-tertiary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
      </div>
    </Link>
  );
}

export default function Dashboard() {
  return (
    <>
      <Header title="Dashboard" />
      <div className="px-8 py-6">
        {/* Stats */}
        <div className="grid grid-cols-4 gap-3">
          <StatCard
            icon={Mic}
            label="Episoden"
            value={dashboardStats.totalEpisodes}
            trend="+1"
          />
          <StatCard
            icon={Lightbulb}
            label="Erkenntnisse"
            value={dashboardStats.totalInsights}
            trend="+5"
          />
          <StatCard
            icon={BookOpen}
            label="Wissenseinträge"
            value={dashboardStats.knowledgeItems}
          />
          <StatCard
            icon={Mail}
            label="Newsletter"
            value={dashboardStats.newslettersGenerated}
          />
        </div>

        <div className="mt-8 grid grid-cols-3 gap-6">
          {/* Episodes */}
          <div className="col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[13px] font-semibold text-cic-text">
                Aktuelle Episoden
              </h2>
              <Link
                href="/episodes"
                className="text-[12px] font-medium text-cic-teal hover:text-cic-teal-light transition-colors"
              >
                Alle anzeigen
              </Link>
            </div>
            <div className="space-y-2">
              {episodes.map((episode) => (
                <EpisodeRow key={episode.id} episode={episode} />
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Top Insight */}
            <div className="apple-card p-5">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-3.5 w-3.5 text-cic-teal" strokeWidth={1.5} />
                <h3 className="text-[12px] font-semibold text-cic-text">
                  Top-Erkenntnis
                </h3>
              </div>
              <blockquote className="border-l-[2px] border-cic-teal/40 pl-3.5">
                <p className="text-[13px] font-semibold leading-snug text-cic-text">
                  Orientierung schlägt Geschwindigkeit.
                </p>
                <p className="mt-1.5 text-[12px] leading-relaxed text-cic-text-secondary">
                  Veränderung erzeugt erst dann Unsicherheit, wenn Einordnung
                  fehlt.
                </p>
              </blockquote>
              <Link
                href="/episodes/ep-001"
                className="mt-4 inline-flex items-center gap-1 text-[11px] font-semibold text-cic-teal hover:text-cic-teal-light transition-colors"
              >
                Zur Analyse
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Categories */}
            <div className="apple-card p-5">
              <h3 className="text-[12px] font-semibold text-cic-text mb-4">
                Wissenskategorien
              </h3>
              <div className="space-y-2.5">
                {categories.map((cat) => (
                  <div key={cat.name} className="flex items-center gap-2.5">
                    <div
                      className="h-[7px] w-[7px] rounded-full"
                      style={{ backgroundColor: cat.color }}
                    />
                    <span className="flex-1 text-[12px] text-cic-text-secondary">
                      {cat.name}
                    </span>
                    <span className="text-[11px] font-semibold text-cic-text-tertiary tabular-nums">
                      {cat.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              <Link
                href="/upload"
                className="flex items-center justify-center gap-2 rounded-[12px] bg-cic-teal px-5 py-3 text-[13px] font-semibold text-white transition-all duration-200 hover:bg-cic-teal-light shadow-[0_1px_3px_rgba(3,95,106,0.3)] hover:shadow-[0_4px_12px_rgba(3,95,106,0.25)]"
              >
                <Mic className="h-[15px] w-[15px]" strokeWidth={1.5} />
                Neue Episode hochladen
              </Link>
              <Link
                href="/assistant"
                className="flex items-center justify-center gap-2 apple-card px-5 py-3 text-[13px] font-semibold text-cic-text hover:!shadow-[var(--shadow-card-hover)]"
              >
                KI-Assistent fragen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
