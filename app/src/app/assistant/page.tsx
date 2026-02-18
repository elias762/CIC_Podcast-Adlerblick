"use client";

import Header from "@/components/Header";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, User } from "lucide-react";
import { ChatMessage } from "@/lib/types";

const suggestedQuestions = [
  "Welche Führungserkenntnisse gibt es zum Thema Orientierung?",
  "Was sind die Handlungsempfehlungen für IT-Sicherheit?",
  "Wie spreche ich einen Kunden auf Nachfolge an?",
  "Fasse die strategischen Implikationen zusammen.",
];

const mockResponse = `Basierend auf dem CIC-Wissenspool ergeben sich mehrere relevante Perspektiven:

**Führung als Orientierungsleistung**
In dynamischen Zeiten brauchen Mitarbeitende vor allem Klarheit über die Richtung und ihren Beitrag dazu. Veränderung erzeugt erst dann Unsicherheit, wenn Einordnung fehlt.

**Systemische Leistungsfähigkeit**
Klare Prozesse und Strukturen wirken nachhaltiger als Motivationsmaßnahmen oder Druck. Unternehmen, die Strukturen vereinfachen, erleben häufig einen Leistungsanstieg.

**Digitale Resilienz**
IT-Sicherheit ist keine technische Detailfrage, sondern Teil der unternehmerischen Sorgfaltspflicht. Der Mensch bleibt der entscheidende Sicherheitsfaktor.

*Quelle: Adlerblick — Führung, Stabilität und Verantwortung (14.02.2026)*`;

export default function AssistantPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Willkommen. Ich habe Zugriff auf alle analysierten Episoden und Erkenntnisse des CIC-Wissenspools. Wie kann ich helfen?",
      timestamp: new Date().toISOString(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (text?: string) => {
    const message = text || input;
    if (!message.trim()) return;

    setMessages((prev) => [...prev, {
      id: `user-${Date.now()}`,
      role: "user",
      content: message,
      timestamp: new Date().toISOString(),
    }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [...prev, {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: mockResponse,
        timestamp: new Date().toISOString(),
      }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      <Header title="KI-Assistent" subtitle="Fragen an den CIC Wissenspool" />
      <div className="flex h-[calc(100vh-52px)] flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div className="mx-auto max-w-2xl space-y-5">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}>
                {msg.role === "assistant" && (
                  <Image
                    src="/adlerblick-logo.png"
                    alt="Adlerblick"
                    width={56}
                    height={56}
                    className="h-7 w-7 flex-shrink-0 rounded-full object-cover shadow-sm"
                  />
                )}
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  msg.role === "user"
                    ? "bg-cic-teal text-white shadow-[0_1px_3px_rgba(3,95,106,0.3)]"
                    : "apple-card !transform-none"
                }`}>
                  <pre className={`whitespace-pre-wrap font-[inherit] text-[13px] leading-[1.7] ${
                    msg.role === "user" ? "text-white/95" : "text-cic-text-secondary"
                  }`}>
                    {msg.content}
                  </pre>
                </div>
                {msg.role === "user" && (
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-cic-coral-subtle border border-cic-coral/10">
                    <User className="h-[13px] w-[13px] text-cic-coral" strokeWidth={1.5} />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3">
                <Image
                  src="/adlerblick-logo.png"
                  alt="Adlerblick"
                  width={56}
                  height={56}
                  className="h-7 w-7 flex-shrink-0 rounded-full object-cover shadow-sm"
                />
                <div className="apple-card !transform-none px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-cic-text-tertiary [animation-delay:0ms]" />
                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-cic-text-tertiary [animation-delay:150ms]" />
                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-cic-text-tertiary [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}

            {/* Suggestions */}
            {messages.length === 1 && (
              <div className="pt-4">
                <p className="text-[11px] font-semibold text-cic-text-tertiary mb-3 flex items-center gap-1.5 uppercase tracking-wider">
                  <Sparkles className="h-3 w-3" />
                  Vorschläge
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(q)}
                      className="group apple-card p-3.5 text-left"
                    >
                      <p className="text-[12px] leading-snug text-cic-text-secondary group-hover:text-cic-text transition-colors">
                        {q}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-black/[0.06] apple-glass px-8 py-4">
          <div className="mx-auto flex max-w-2xl items-center gap-2.5">
            <input
              type="text"
              placeholder="Frage stellen..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="h-10 flex-1 rounded-xl bg-cic-bg border border-cic-border px-4 text-[13px] text-cic-text placeholder:text-cic-text-tertiary apple-focus transition-all duration-200 focus:border-cic-border-strong focus:shadow-[0_0_0_3px_rgba(3,95,106,0.08)]"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim()}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-cic-teal text-white transition-all hover:bg-cic-teal-light disabled:opacity-30 shadow-[0_1px_3px_rgba(3,95,106,0.3)]"
            >
              <Send className="h-[15px] w-[15px]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
