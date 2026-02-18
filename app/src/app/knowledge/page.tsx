"use client";

import Header from "@/components/Header";
import { useState } from "react";
import { Search, BookOpen, Mic, ArrowUpRight } from "lucide-react";
import { knowledgeItems, categories } from "@/lib/data";
import Link from "next/link";

export default function KnowledgePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredItems = knowledgeItems.filter((item) => {
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Header title="Wissensdatenbank" subtitle="Strukturiertes Führungs- und Beratungswissen" />
      <div className="px-8 py-6">
        {/* Search — Spotlight style */}
        <div className="relative max-w-lg">
          <Search className="absolute left-3.5 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-cic-text-tertiary" />
          <input
            type="text"
            placeholder="Wissen durchsuchen..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-11 w-full apple-card border-cic-border-strong/60 pl-10 pr-4 text-[13px] text-cic-text placeholder:text-cic-text-tertiary apple-focus transition-all duration-200 focus:shadow-[var(--shadow-card-hover),0_0_0_3px_rgba(3,95,106,0.08)]"
          />
        </div>

        {/* Segmented control — Apple style */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`rounded-full px-3.5 py-[6px] text-[11px] font-semibold transition-all duration-200 ${
              !selectedCategory
                ? "bg-cic-text text-white shadow-sm"
                : "bg-cic-surface text-cic-text-secondary border border-cic-border hover:bg-cic-separator"
            }`}
          >
            Alle
          </button>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
              className={`rounded-full px-3.5 py-[6px] text-[11px] font-semibold transition-all duration-200 ${
                selectedCategory === cat.name
                  ? "bg-cic-text text-white shadow-sm"
                  : "bg-cic-surface text-cic-text-secondary border border-cic-border hover:bg-cic-separator"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group apple-card p-5"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-cic-teal-subtle px-2 py-[2px] text-[10px] font-semibold text-cic-teal border border-cic-teal/10">
                  {item.category}
                </span>
                <span className="text-[10px] text-cic-text-tertiary">
                  {item.date}
                </span>
              </div>

              <h3 className="mt-3 text-[14px] font-semibold text-cic-text group-hover:text-cic-teal transition-colors duration-200">
                {item.title}
              </h3>

              <p className="mt-1.5 text-[12px] leading-[1.7] text-cic-text-secondary line-clamp-3">
                {item.content}
              </p>

              <div className="mt-3 flex flex-wrap gap-1">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-cic-separator px-1.5 py-[2px] text-[10px] font-medium text-cic-text-tertiary">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between pt-3 border-t border-cic-border/60">
                <Link
                  href={`/episodes/${item.sourceEpisode}`}
                  className="flex items-center gap-1.5 text-[11px] font-medium text-cic-text-tertiary hover:text-cic-teal transition-colors"
                >
                  <Mic className="h-3 w-3" />
                  Quelle
                </Link>
                <ArrowUpRight className="h-3.5 w-3.5 text-cic-text-tertiary opacity-0 group-hover:opacity-100 transition-all duration-200" />
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="mt-20 flex flex-col items-center text-center">
            <BookOpen className="h-10 w-10 text-cic-border-strong" strokeWidth={1} />
            <p className="mt-4 text-[14px] font-semibold text-cic-text">
              Keine Ergebnisse
            </p>
            <p className="mt-1 text-[12px] text-cic-text-tertiary">
              Versuche einen anderen Suchbegriff.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
