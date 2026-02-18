"use client";

import { Search, Bell } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-[52px] items-center justify-between apple-glass border-b border-black/[0.06] px-8">
      <div className="flex items-baseline gap-3">
        <h1 className="text-[17px] font-semibold tracking-[-0.02em] text-cic-text">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[13px] text-cic-text-tertiary">{subtitle}</p>
        )}
      </div>

      <div className="flex items-center gap-2">
        {/* Spotlight-style search */}
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 h-[13px] w-[13px] -translate-y-1/2 text-cic-text-tertiary" />
          <input
            type="text"
            placeholder="Suchen..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className={clsx(
              "h-[30px] rounded-lg pl-7 pr-3 text-[12px] text-cic-text placeholder:text-cic-text-tertiary transition-all duration-200 apple-focus",
              searchFocused
                ? "w-64 bg-white border border-cic-border-strong shadow-[0_0_0_3px_rgba(3,95,106,0.08)]"
                : "w-48 bg-black/[0.04] border border-transparent"
            )}
          />
          {!searchFocused && !searchQuery && (
            <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded bg-white/80 px-1.5 py-0.5 text-[10px] font-medium text-cic-text-tertiary border border-cic-border/60 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
              /
            </kbd>
          )}
        </div>

        {/* Notification */}
        <button className="relative flex h-[30px] w-[30px] items-center justify-center rounded-lg transition-colors hover:bg-black/[0.04]">
          <Bell className="h-[15px] w-[15px] text-cic-text-secondary" strokeWidth={1.5} />
          <span className="absolute right-1.5 top-1.5 h-[7px] w-[7px] rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        {/* Avatar */}
        <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-gradient-to-b from-cic-teal-light to-cic-teal text-[10px] font-bold text-white shadow-[0_1px_3px_rgba(0,0,0,0.12)]">
          DL
        </div>
      </div>
    </header>
  );
}

function clsx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
