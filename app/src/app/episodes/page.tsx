import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Lightbulb } from "lucide-react";
import { episodes } from "@/lib/data";

export default function EpisodesPage() {
  return (
    <>
      <Header
        title="Episoden"
        subtitle="Alle analysierten Podcast-Folgen"
      />
      <div className="px-8 py-6">
        <div className="space-y-2">
          {episodes.map((episode) => (
            <Link
              key={episode.id}
              href={`/episodes/${episode.id}`}
              className="group flex items-start gap-5 apple-card p-6"
            >
              <Image
                src="/adlerblick-logo.png"
                alt="Adlerblick"
                width={88}
                height={88}
                className="h-11 w-11 flex-shrink-0 rounded-[12px] object-cover shadow-sm"
              />

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 text-[11px] text-cic-text-tertiary">
                  <span>{episode.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {episode.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Lightbulb className="h-3 w-3" />
                    {episode.insights.keyInsights.length} Erkenntnisse
                  </span>
                  <span className="ml-auto rounded-full bg-emerald-50 px-2.5 py-[3px] text-[10px] font-semibold text-emerald-600 border border-emerald-100">
                    Analysiert
                  </span>
                </div>

                <h3 className="mt-2 text-[15px] font-semibold tracking-tight text-cic-text group-hover:text-cic-teal transition-colors duration-200">
                  {episode.title}
                </h3>

                <p className="mt-1.5 text-[13px] leading-relaxed text-cic-text-secondary line-clamp-2">
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

              <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-cic-text-tertiary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
