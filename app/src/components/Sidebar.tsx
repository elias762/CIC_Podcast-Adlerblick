"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import {
  LayoutDashboard,
  Mic,
  BookOpen,
  MessageSquare,
  Mail,
  Upload,
  Settings,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Episoden", href: "/episodes", icon: Mic },
  { name: "Wissensdatenbank", href: "/knowledge", icon: BookOpen },
  { name: "KI-Assistent", href: "/assistant", icon: MessageSquare },
  { name: "Newsletter", href: "/newsletter", icon: Mail },
  { name: "Upload", href: "/upload", icon: Upload },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-[260px] flex-col apple-vibrancy border-r border-cic-border/60">
      {/* Podcast brand — Adlerblick logo */}
      <div className="flex flex-col items-center px-5 pt-5 pb-2">
        <Image
          src="/adlerblick-logo.png"
          alt="Der Adlerblick — mit Andreas Schmaler"
          width={200}
          height={200}
          className="h-16 w-16 rounded-[14px] shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
          priority
        />
        <p className="mt-2.5 text-[13px] font-bold tracking-tight text-cic-text">
          Der Adlerblick
        </p>
        <p className="text-[10px] font-medium text-cic-text-tertiary">
          Insight Platform
        </p>
      </div>

      {/* Section label */}
      <div className="px-5 pt-4 pb-1.5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-cic-text-tertiary/70 px-2">
          Plattform
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 overflow-y-auto">
        <div className="space-y-[2px]">
          {navigation.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  "flex items-center gap-2.5 rounded-lg px-2.5 py-[7px] text-[13px] transition-all duration-150",
                  isActive
                    ? "bg-black/[0.06] font-semibold text-cic-text shadow-[inset_0_0.5px_0_rgba(255,255,255,0.1)]"
                    : "font-medium text-cic-text-secondary hover:bg-black/[0.04] hover:text-cic-text"
                )}
              >
                <item.icon
                  className={clsx(
                    "h-[16px] w-[16px] flex-shrink-0",
                    isActive ? "text-cic-teal" : "text-cic-text-tertiary"
                  )}
                  strokeWidth={isActive ? 2 : 1.5}
                />
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="px-3 pb-3">
        <div className="border-t border-black/[0.06] pt-2 mb-1" />
        <Link
          href="/settings"
          className="flex items-center gap-2.5 rounded-lg px-2.5 py-[7px] text-[13px] font-medium text-cic-text-secondary transition-all duration-150 hover:bg-black/[0.04] hover:text-cic-text"
        >
          <Settings className="h-[16px] w-[16px] text-cic-text-tertiary" strokeWidth={1.5} />
          Einstellungen
        </Link>
        <div className="mt-2 flex items-center gap-2 px-2.5">
          <Image
            src="/cic-logo.jpg"
            alt="CIC"
            width={80}
            height={20}
            className="h-4 w-auto opacity-40"
          />
        </div>
      </div>
    </aside>
  );
}
