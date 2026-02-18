"use client";

import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { useState, useCallback } from "react";
import {
  Mail,
  Copy,
  Download,
  Mic,
  Users,
  Send,
  Check,
  Building2,
  Clock,
  ChevronDown,
  ChevronUp,
  Sparkles,
  UserCheck,
  CalendarClock,
  Circle,
} from "lucide-react";
import { episodes, crmContacts } from "@/lib/data";
import type { CrmContact } from "@/lib/types";

const statusConfig: Record<CrmContact["status"], { label: string; color: string; icon: React.ElementType }> = {
  new: { label: "Neu", color: "bg-blue-50 text-blue-600 border-blue-100", icon: Circle },
  contacted: { label: "Kontaktiert", color: "bg-emerald-50 text-emerald-600 border-emerald-100", icon: UserCheck },
  scheduled: { label: "Geplant", color: "bg-amber-50 text-amber-600 border-amber-100", icon: CalendarClock },
};

function ContactRow({
  contact,
  isSent,
  onSend,
}: {
  contact: CrmContact;
  isSent: boolean;
  onSend: (contactId: string) => void;
}) {
  const st = statusConfig[contact.status];
  const StIcon = st.icon;

  return (
    <div className="flex items-center gap-3 py-2.5 px-1">
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-cic-teal-light/80 to-cic-teal text-[10px] font-bold text-white shadow-sm">
        {contact.avatar}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-[12px] font-semibold text-cic-text truncate">{contact.name}</span>
          <span className={`inline-flex items-center gap-1 rounded-full px-1.5 py-[1px] text-[9px] font-semibold border ${st.color}`}>
            <StIcon className="h-2 w-2" strokeWidth={2} />
            {st.label}
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="text-[11px] text-cic-text-tertiary truncate">{contact.role}</span>
          <span className="h-[2px] w-[2px] rounded-full bg-cic-text-tertiary flex-shrink-0" />
          <span className="text-[11px] text-cic-text-tertiary truncate">{contact.company}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        {contact.lastContacted && (
          <span className="hidden xl:flex items-center gap-1 text-[10px] text-cic-text-tertiary">
            <Clock className="h-2.5 w-2.5" />
            {contact.lastContacted}
          </span>
        )}
        {isSent ? (
          <span className="flex items-center gap-1.5 rounded-lg bg-emerald-50 border border-emerald-100 px-3 py-[5px] text-[11px] font-semibold text-emerald-600">
            <Check className="h-3 w-3" strokeWidth={2.5} />
            Gesendet
          </span>
        ) : (
          <button
            onClick={() => onSend(contact.id)}
            className="flex items-center gap-1.5 rounded-lg bg-cic-teal px-3 py-[5px] text-[11px] font-semibold text-white hover:bg-cic-teal-light transition-all shadow-[0_1px_3px_rgba(3,95,106,0.3)]"
          >
            <Send className="h-3 w-3" />
            Senden
          </button>
        )}
      </div>
    </div>
  );
}

function NewsletterCard({ episode }: { episode: (typeof episodes)[0] }) {
  const [expanded, setExpanded] = useState(false);
  const [showContacts, setShowContacts] = useState(true);
  const [sentList, setSentList] = useState<string[]>([]);
  const [isSending, setIsSending] = useState(false);

  const matchedContacts = crmContacts.filter((c) =>
    c.suggestedEpisodes.includes(episode.id)
  );

  const handleSend = useCallback((contactId: string) => {
    setSentList((prev) => (prev.includes(contactId) ? prev : [...prev, contactId]));
  }, []);

  const handleSendAll = useCallback(() => {
    setIsSending(true);
    const ids = matchedContacts.map((c) => c.id);
    let index = 0;
    const tick = () => {
      if (index < ids.length) {
        setSentList((prev) => (prev.includes(ids[index]) ? prev : [...prev, ids[index]]));
        index++;
        setTimeout(tick, 300);
      } else {
        setIsSending(false);
      }
    };
    tick();
  }, [matchedContacts]);

  const sentCount = sentList.length;
  const allSent = matchedContacts.length > 0 && matchedContacts.every((c) => sentList.includes(c.id));

  return (
    <div className="apple-card overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-cic-border/60">
        <div className="flex items-center gap-3.5">
          <Image
            src="/adlerblick-logo.png"
            alt="Adlerblick"
            width={72}
            height={72}
            className="h-9 w-9 flex-shrink-0 rounded-[8px] object-cover"
          />
          <div>
            <h3 className="text-[13px] font-semibold text-cic-text">
              {episode.title}
            </h3>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-[11px] text-cic-text-tertiary">{episode.date}</span>
              <span className="h-[2px] w-[2px] rounded-full bg-cic-text-tertiary" />
              <Link
                href={`/episodes/${episode.id}`}
                className="flex items-center gap-1 text-[11px] font-medium text-cic-teal hover:text-cic-teal-light transition-colors"
              >
                <Mic className="h-3 w-3" />
                Episode
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <button className="flex items-center gap-1.5 rounded-lg px-2.5 py-[6px] text-[11px] font-semibold text-cic-text-tertiary hover:bg-cic-separator transition-colors">
            <Copy className="h-3 w-3" />
            Kopieren
          </button>
          <button className="flex items-center gap-1.5 rounded-lg px-2.5 py-[6px] text-[11px] font-semibold text-cic-text-tertiary hover:bg-cic-separator transition-colors">
            <Download className="h-3 w-3" />
            Export
          </button>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 rounded-lg px-2.5 py-[6px] text-[11px] font-semibold text-cic-text-tertiary hover:bg-cic-separator transition-colors"
          >
            {expanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
            Vorschau
          </button>
        </div>
      </div>

      {/* Newsletter Content — collapsible */}
      {expanded && (
        <div className="p-6 border-b border-cic-border/60 bg-cic-separator/30">
          <div className="mx-auto max-w-xl rounded-xl bg-white border border-cic-border/50 p-6 shadow-sm">
            <pre className="whitespace-pre-wrap text-[12px] leading-[1.75] text-cic-text-secondary font-[inherit]">
              {episode.insights.newsletterDraft}
            </pre>
          </div>
        </div>
      )}

      {/* CRM Contacts Section */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={() => setShowContacts(!showContacts)}
            className="flex items-center gap-2 text-[12px] font-semibold text-cic-text"
          >
            <Users className="h-[14px] w-[14px] text-cic-text-tertiary" strokeWidth={1.5} />
            <span>Vorgeschlagene Empfänger</span>
            <span className="rounded-full bg-cic-teal/10 px-2 py-[1px] text-[10px] font-bold text-cic-teal tabular-nums">
              {matchedContacts.length}
            </span>
            {sentCount > 0 && (
              <span className="rounded-full bg-emerald-50 border border-emerald-100 px-2 py-[1px] text-[10px] font-bold text-emerald-600 tabular-nums">
                {sentCount} gesendet
              </span>
            )}
            {showContacts ? (
              <ChevronUp className="h-3 w-3 text-cic-text-tertiary" />
            ) : (
              <ChevronDown className="h-3 w-3 text-cic-text-tertiary" />
            )}
          </button>
          {showContacts && matchedContacts.length > 0 && !allSent && (
            <button
              onClick={handleSendAll}
              disabled={isSending}
              className="flex items-center gap-1.5 rounded-lg bg-cic-teal px-3.5 py-[5px] text-[11px] font-semibold text-white hover:bg-cic-teal-light transition-all shadow-[0_1px_3px_rgba(3,95,106,0.3)] disabled:opacity-50"
            >
              <Send className="h-3 w-3" />
              {isSending ? "Wird gesendet..." : "An alle senden"}
            </button>
          )}
          {allSent && (
            <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
              <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
              Alle gesendet
            </span>
          )}
        </div>

        {showContacts && (
          <div className="rounded-xl bg-cic-bg/60 border border-cic-border/40 px-4 py-1 divide-y divide-cic-border/40">
            {matchedContacts.map((contact) => (
              <ContactRow
                key={contact.id}
                contact={contact}
                isSent={sentList.includes(contact.id)}
                onSend={handleSend}
              />
            ))}
          </div>
        )}

        {showContacts && matchedContacts.length > 0 && (
          <div className="mt-3 flex items-center gap-1.5 text-[10px] text-cic-text-tertiary">
            <Sparkles className="h-3 w-3" />
            <span>
              KI-Empfehlung basierend auf Branche, Rolle und Themeninteresse der Kontakte
            </span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-cic-border/60 bg-cic-separator/50 px-6 py-3">
        <div className="flex items-center gap-5 text-[11px] text-cic-text-tertiary">
          <span>
            <span className="font-medium text-cic-text-secondary">Zielgruppe:</span>{" "}
            {episode.insights.targetAudience.roles.slice(0, 3).join(", ")}
          </span>
          <span>
            <span className="font-medium text-cic-text-secondary">Branchen:</span>{" "}
            {episode.insights.targetAudience.industries.slice(0, 3).join(", ")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function NewsletterPage() {
  const totalContacts = crmContacts.length;
  const newContacts = crmContacts.filter((c) => c.status === "new").length;

  return (
    <>
      <Header title="Newsletter" subtitle="Automatisch generierte Kundenkommunikation" />
      <div className="px-8 py-6">
        {/* CRM Overview Bar */}
        <div className="apple-card px-5 py-4 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-cic-teal-subtle">
                <Users className="h-[15px] w-[15px] text-cic-teal" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[11px] text-cic-text-tertiary">CRM-Kontakte</p>
                <p className="text-[16px] font-bold text-cic-text tabular-nums">{totalContacts}</p>
              </div>
            </div>
            <div className="h-8 w-px bg-cic-border/60" />
            <div>
              <p className="text-[11px] text-cic-text-tertiary">Neue Kontakte</p>
              <p className="text-[16px] font-bold text-blue-600 tabular-nums">{newContacts}</p>
            </div>
            <div className="h-8 w-px bg-cic-border/60" />
            <div>
              <p className="text-[11px] text-cic-text-tertiary">Newsletter bereit</p>
              <p className="text-[16px] font-bold text-cic-text tabular-nums">{episodes.length}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-cic-text-tertiary">
            <Building2 className="h-3.5 w-3.5" />
            <span>Empfehlungen basieren auf CRM-Profilen und Episoden-Themen</span>
          </div>
        </div>

        {/* Newsletter Cards */}
        <div className="space-y-4">
          {episodes.map((episode) => (
            <NewsletterCard key={episode.id} episode={episode} />
          ))}
        </div>
      </div>
    </>
  );
}
