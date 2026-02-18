import { Episode, KnowledgeItem, CrmContact } from "./types";

export const episodes: Episode[] = [
  {
    id: "ep-001",
    title: "Führung, Stabilität und Verantwortung im modernen Mittelstand",
    description:
      "Über Orientierung statt Kontrolle, funktionierende Systeme statt Druck, Arbeitsfähigkeit als Wirtschaftsfaktor und digitale Resilienz als Führungsaufgabe.",
    date: "2026-02-14",
    duration: "47 Min.",
    status: "completed",
    tags: [
      "Führung",
      "Mittelstand",
      "IT-Sicherheit",
      "Organisationsentwicklung",
      "Resilienz",
    ],
    insights: {
      executiveSummary: `Unternehmen bewegen sich heute in einem Spannungsfeld aus steigender Komplexität, wachsender Regulierung und zunehmender digitaler Vernetzung. Führung bedeutet in diesem Umfeld nicht mehr primär Kontrolle, sondern Orientierung. Mitarbeitende benötigen Klarheit darüber, wohin sich das Unternehmen entwickelt und welchen Beitrag sie dazu leisten. Fehlt diese Einordnung, entsteht Unsicherheit – unabhängig davon, wie gut strategische Entscheidungen tatsächlich sind.

Gleichzeitig zeigt sich in vielen Organisationen, dass Leistungsfähigkeit nicht durch Druck entsteht, sondern durch funktionierende Systeme. Klare Prozesse, eindeutige Verantwortlichkeiten und transparente Kommunikation reduzieren Reibungsverluste und schaffen produktive Arbeitsbedingungen.

Ein zunehmend kritischer Faktor ist die Arbeitsfähigkeit der Belegschaft. Steigende Fehlzeiten sind selten ein isoliertes Gesundheitsproblem, sondern häufig Ausdruck struktureller Überlastung, fehlender Orientierung oder mangelnder Sinnorientierung.

Parallel dazu wächst die Verantwortung von Unternehmen im digitalen Raum. IT-Sicherheit ist keine technische Detailfrage mehr, sondern Teil unternehmerischer Sorgfaltspflicht.`,
      keyInsights: [
        {
          title: "Orientierung schlägt Geschwindigkeit",
          description:
            "Veränderung erzeugt erst dann Unsicherheit, wenn Einordnung fehlt.",
          category: "leadership",
        },
        {
          title: "Leistung entsteht im System",
          description:
            "Klare Prozesse erhöhen Produktivität stärker als zusätzlicher Druck.",
          category: "operations",
        },
        {
          title: "Gesundheit ist ein wirtschaftlicher Faktor",
          description:
            "Arbeitsfähigkeit entsteht durch Struktur, klar definierte Erwartungen und Sinnorientierung.",
          category: "culture",
        },
        {
          title: "IT-Sicherheit ist Führungsaufgabe",
          description:
            "Digitale Risiken betreffen Strategie, Reputation und wirtschaftliche Stabilität.",
          category: "digital",
        },
        {
          title: "Der Mensch bleibt der entscheidende Sicherheitsfaktor",
          description:
            "Technologie schützt nur, wenn Mitarbeitende sensibilisiert sind.",
          category: "digital",
        },
      ],
      strategicImplications: [
        "Unternehmen sollten Führung stärker als Orientierungsleistung verstehen und nicht ausschließlich als operative Steuerung. Klarheit über Ziele, Rollen und Prioritäten schafft Stabilität in dynamischen Zeiten.",
        "Die Leistungsfähigkeit einer Organisation hängt maßgeblich von der Qualität ihrer Strukturen ab. Prozessklarheit, reduzierte Komplexität und transparente Kommunikation wirken nachhaltiger als kurzfristige Motivationsmaßnahmen.",
        "Arbeitsfähigkeit und Motivation sind zentrale wirtschaftliche Faktoren. Führungskräfte sollten Arbeitsbedingungen aktiv gestalten, um Überlastung und innere Distanzierung zu vermeiden.",
        "Digitale Resilienz wird zu einem strategischen Wettbewerbsfaktor. Prävention, Sensibilisierung und strukturierte Risikobewertung sind entscheidend, um wirtschaftliche Schäden und Reputationsverluste zu vermeiden.",
      ],
      actionItems: [
        {
          text: "Zukunftsbild und strategische Richtung regelmäßig kommunizieren",
          priority: "high",
        },
        {
          text: "Prozesse vereinfachen und Verantwortlichkeiten klar definieren",
          priority: "high",
        },
        {
          text: "Mitarbeitende aktiv in Veränderungen einbinden",
          priority: "high",
        },
        {
          text: "IT-Sicherheitsbewusstsein systematisch stärken",
          priority: "medium",
        },
        {
          text: "Risiken präventiv analysieren statt erst im Schadensfall reagieren",
          priority: "medium",
        },
        {
          text: "Führung als kontinuierliche Orientierungsleistung verstehen",
          priority: "high",
        },
      ],
      practiceObservations: [
        {
          title: "Cyberangriff mit monatelanger Einschränkung",
          description:
            "Ein Geschäftsführer berichtete, dass sein Unternehmen trotz vorhandener Sicherheitsmaßnahmen nach einem Cyberangriff monatelang eingeschränkt handlungsfähig war. Der wirtschaftliche Schaden entstand weniger durch den Angriff selbst als durch den langen Wiederanlauf der Prozesse.",
        },
        {
          title: "Manipulierte Zahlungskommunikation",
          description:
            "In einem anderen Fall überwies ein Unternehmen eine hohe Summe an einen vermeintlichen Lieferanten. Durch manipulierte E-Mail-Kommunikation war die Zahlung auf ein fremdes Konto umgeleitet worden. Solche Angriffe nutzen nicht technische Schwächen, sondern Vertrauen und Routine.",
        },
        {
          title: "Leistungssteigerung durch Vereinfachung",
          description:
            "Organisationsentwicklungsprojekte zeigen, dass Leistungsprobleme häufig nicht auf mangelnde Motivation zurückzuführen sind. Erst die Vereinfachung von Prozessen und klarere Entscheidungswege führen zu spürbaren Verbesserungen.",
        },
      ],
      targetAudience: {
        industries: [
          "Industrie & Produktion",
          "Maschinenbau",
          "Bau & Handwerk",
          "Gesundheitswesen",
          "Logistik",
          "Dienstleistungen",
        ],
        roles: [
          "Geschäftsführer",
          "COO",
          "CISO",
          "Personalleiter",
          "Führungskräfte Mittelstand",
        ],
        companySize: "50 – 2.000+ Mitarbeitende",
      },
      newsletterDraft: `**Adlerblick Insight | Führung, Stabilität und Verantwortung**

Liebe Leserinnen und Leser,

in der aktuellen Ausgabe unseres Adlerblick-Podcasts geht es um ein Thema, das viele Führungskräfte im Mittelstand bewegt: Wie schaffe ich Stabilität in einer Zeit wachsender Komplexität?

**Die zentrale Erkenntnis:** Führung bedeutet heute nicht mehr primär Kontrolle, sondern Orientierung. Mitarbeitende brauchen Klarheit über die Richtung – fehlt sie, entsteht Unsicherheit, unabhängig von der Qualität der Strategie.

**Drei Impulse für Ihre Organisation:**

1. **Systeme statt Druck** – Klare Prozesse und Verantwortlichkeiten steigern die Leistung nachhaltiger als Motivationsmaßnahmen.

2. **Gesundheit als Wirtschaftsfaktor** – Steigende Fehlzeiten sind oft Ausdruck struktureller Probleme, nicht individueller Schwäche.

3. **IT-Sicherheit ist Chefsache** – Automatisierte Angriffe treffen zunehmend den Mittelstand. Nachweisbare Sorgfalt wird zur Pflicht.

**Praxis-Beispiel:** Ein Unternehmen war nach einem Cyberangriff monatelang eingeschränkt – nicht wegen des Angriffs selbst, sondern wegen des langen Wiederanlaufs der Prozesse.

Möchten Sie erfahren, wie Ihr Unternehmen Stabilität, Leistungsfähigkeit und digitale Resilienz systematisch stärken kann?

→ Sprechen Sie uns an für ein vertrauliches Gespräch.

Herzliche Grüße,
Ihr CIC-Team

---
CIC | Consulting · Impulsgeber · Coaching
www.cic-consulting.de`,
    },
  },
  {
    id: "ep-002",
    title: "Nachfolge gestalten – Wenn Führungswechsel zur Chance wird",
    description:
      "Wie inhabergeführte Unternehmen den Generationenwechsel erfolgreich gestalten und welche Rolle klare Strukturen dabei spielen.",
    date: "2026-01-28",
    duration: "52 Min.",
    status: "completed",
    tags: ["Nachfolge", "Generationenwechsel", "Transformation", "Mittelstand"],
    insights: {
      executiveSummary:
        "Der Generationenwechsel ist für viele mittelständische Unternehmen eine der größten Herausforderungen. Erfolgreiche Nachfolge gelingt nicht durch punktuelle Übergabe, sondern durch systematische Vorbereitung, klare Rollenverteilung und die Bereitschaft, gewachsene Strukturen zu hinterfragen.",
      keyInsights: [
        {
          title: "Nachfolge ist ein Prozess, kein Event",
          description:
            "Erfolgreiche Übergaben beginnen Jahre vor dem tatsächlichen Wechsel.",
          category: "strategy",
        },
        {
          title: "Loslassen ist eine Führungskompetenz",
          description:
            "Die abtretende Generation muss aktiv Raum schaffen für neue Entscheidungswege.",
          category: "leadership",
        },
        {
          title: "Struktur überbrückt Unsicherheit",
          description:
            "Klare Governance und definierte Entscheidungsrahmen geben allen Beteiligten Sicherheit.",
          category: "operations",
        },
      ],
      strategicImplications: [
        "Frühzeitige Nachfolgeplanung als strategisches Projekt aufsetzen, nicht als operatives To-Do behandeln.",
        "Externe Begleitung hilft, emotionale Dynamiken professionell zu kanalisieren.",
        "Die neue Führung braucht ein eigenes Profil – Kopieren der Vorgänger führt selten zum Erfolg.",
      ],
      actionItems: [
        {
          text: "Nachfolgeplanung als strategisches Projekt formalisieren",
          priority: "high",
        },
        {
          text: "Rollenklärung zwischen abtretender und übernehmender Generation",
          priority: "high",
        },
        {
          text: "Governance-Strukturen für Übergangsphase definieren",
          priority: "medium",
        },
      ],
      practiceObservations: [
        {
          title: "Gescheiterter Generationenwechsel durch fehlende Loslösung",
          description:
            "Ein Familienunternehmen scheiterte beim ersten Nachfolgeversuch, weil der Senior-Chef weiterhin operative Entscheidungen traf, obwohl die Übergabe formal abgeschlossen war.",
        },
      ],
      targetAudience: {
        industries: [
          "Familienunternehmen",
          "Maschinenbau",
          "Handel",
          "Produktion",
        ],
        roles: [
          "Geschäftsführer",
          "Gesellschafter",
          "Nachfolger",
          "Beiräte",
        ],
        companySize: "50 – 500 Mitarbeitende",
      },
      newsletterDraft: `**Adlerblick Insight | Nachfolge gestalten**

Liebe Leserinnen und Leser,

der Generationenwechsel ist keine Übergabe, sondern eine Transformation. In unserer neuesten Podcastfolge beleuchten wir, warum Nachfolge Jahre vor dem tatsächlichen Wechsel beginnen muss.

**Kernbotschaft:** Loslassen ist eine Führungskompetenz. Die abtretende Generation muss aktiv Raum schaffen – für neue Wege, neue Ideen und ein eigenes Profil der Nachfolge.

**Drei Impulse:**

1. **Prozess statt Event** – Nachfolge braucht einen Fahrplan, keine Ad-hoc-Entscheidungen.
2. **Governance schafft Sicherheit** – Klare Entscheidungsrahmen helfen allen Beteiligten.
3. **Eigenes Profil** – Die neue Führung muss ihren eigenen Weg finden.

→ Lesen Sie die vollständige Analyse auf unserer Insight-Plattform.

Herzliche Grüße,
Ihr CIC-Team`,
    },
  },
  {
    id: "ep-003",
    title: "Kulturwandel beginnt oben – oder gar nicht",
    description:
      "Warum Kulturinitiativen scheitern, wenn sie nicht von der Führung vorgelebt werden, und was erfolgreiche Kulturentwicklung ausmacht.",
    date: "2026-01-14",
    duration: "39 Min.",
    status: "completed",
    tags: [
      "Unternehmenskultur",
      "Change Management",
      "Führung",
      "Transformation",
    ],
    insights: {
      executiveSummary:
        "Kulturwandel wird häufig als HR-Projekt verstanden – ein Irrtum. Nachhaltige Kulturveränderung beginnt in der Führungsetage und zeigt sich im täglichen Verhalten der Führungskräfte. Ohne echtes Vorleben bleibt jede Kulturinitiative Rhetorik.",
      keyInsights: [
        {
          title: "Kultur ist, was täglich gelebt wird",
          description:
            "Nicht die Leitwerte an der Wand, sondern das Verhalten in Drucksituationen definiert die Kultur.",
          category: "culture",
        },
        {
          title: "Führung ist das Betriebssystem der Kultur",
          description:
            "Jede Führungsentscheidung sendet kulturelle Signale an die Organisation.",
          category: "leadership",
        },
      ],
      strategicImplications: [
        "Kulturentwicklung als Führungsentwicklung verstehen und entsprechend investieren.",
        "Konsistenz zwischen kommunizierten und gelebten Werten als Schlüsselindikator messen.",
      ],
      actionItems: [
        {
          text: "Führungskräfte-Reflexion zu gelebten vs. kommunizierten Werten durchführen",
          priority: "high",
        },
        {
          text: "Kulturentwicklung in Führungskräfteentwicklung integrieren",
          priority: "medium",
        },
      ],
      practiceObservations: [],
      targetAudience: {
        industries: [
          "Branchenübergreifend",
          "Dienstleistungen",
          "Produktion",
        ],
        roles: ["Geschäftsführer", "HR-Leiter", "Führungskräfte"],
        companySize: "100 – 2.000+ Mitarbeitende",
      },
      newsletterDraft: `**Adlerblick Insight | Kulturwandel beginnt oben**

Liebe Leserinnen und Leser,

Kulturinitiativen scheitern, wenn sie nicht vorgelebt werden. Unsere neueste Analyse zeigt: Kultur ist kein HR-Projekt, sondern ein Führungsthema.

**Die Erkenntnis:** Nicht die Leitwerte an der Wand entscheiden, sondern das Verhalten unter Druck. Jede Führungsentscheidung ist ein kulturelles Signal.

→ Die vollständigen Erkenntnisse auf unserer Insight-Plattform.

Herzliche Grüße,
Ihr CIC-Team`,
    },
  },
  {
    id: "ep-004",
    title: "Strategie ohne Umsetzung ist Illusion – Execution im Mittelstand",
    description:
      "Warum brillante Strategien in vielen Unternehmen versanden und wie der Mittelstand eine Brücke zwischen Plan und Wirkung bauen kann.",
    date: "2025-12-18",
    duration: "44 Min.",
    status: "completed",
    tags: ["Strategie", "Umsetzung", "Execution", "Mittelstand", "OKR"],
    insights: {
      executiveSummary: `Viele mittelständische Unternehmen investieren erhebliche Ressourcen in Strategieentwicklung – und scheitern dann an der Umsetzung. Die Ursache liegt selten an mangelnder Willenskraft, sondern an fehlenden Übersetzungsmechanismen zwischen strategischer Absicht und operativem Alltag.

Erfolgreiche Umsetzung braucht drei Elemente: klare Priorisierung (nicht alles gleichzeitig), sichtbare Fortschrittsmessung (nicht erst am Jahresende) und konsequente Führungsaufmerksamkeit (Strategie als Tagesgeschäft, nicht als Sonderprojekt).

OKRs und ähnliche Frameworks können helfen – aber nur, wenn sie als Führungsinstrument verstanden werden, nicht als Controlling-Tool.`,
      keyInsights: [
        {
          title: "Die Umsetzungslücke ist ein Führungsproblem",
          description:
            "Strategien scheitern nicht an Qualität, sondern an fehlender Übersetzung in den Alltag.",
          category: "strategy",
        },
        {
          title: "Priorisierung schlägt Ambition",
          description:
            "Weniger Ziele mit voller Aufmerksamkeit bewirken mehr als viele parallele Initiativen.",
          category: "strategy",
        },
        {
          title: "Fortschritt muss sichtbar sein",
          description:
            "Quartalsweise Reviews schaffen Momentum und ermöglichen frühzeitige Kurskorrektur.",
          category: "operations",
        },
        {
          title: "OKRs sind ein Führungsinstrument",
          description:
            "Frameworks wirken nur, wenn sie Gespräche auslösen, nicht Reports.",
          category: "operations",
        },
      ],
      strategicImplications: [
        "Strategieumsetzung als eigenständige Führungskompetenz entwickeln und nicht dem Zufall überlassen.",
        "Regelmäßige, kurzzyklische Reviews etablieren, um strategische Prioritäten im Bewusstsein zu halten.",
        "Umsetzungsfortschritt als festen Bestandteil der Führungskräfte-Kommunikation verankern.",
      ],
      actionItems: [
        {
          text: "Maximal 3–5 strategische Prioritäten pro Quartal definieren",
          priority: "high",
        },
        {
          text: "Monatliche Strategy Reviews mit dem Führungsteam einführen",
          priority: "high",
        },
        {
          text: "OKR-Pilotprojekt in einem Unternehmensbereich starten",
          priority: "medium",
        },
        {
          text: "Strategische Ziele in operative Teamziele herunterbrechen",
          priority: "high",
        },
      ],
      practiceObservations: [
        {
          title: "Strategieoffensive ohne Wirkung",
          description:
            "Ein produzierendes Unternehmen hatte eine aufwendige Strategieentwicklung mit externen Beratern durchgeführt. 18 Monate später waren weniger als 20% der definierten Maßnahmen umgesetzt – nicht aus mangelndem Willen, sondern weil das Tagesgeschäft die strategischen Prioritäten verdrängte.",
        },
        {
          title: "OKR-Einführung mit Kulturbruch",
          description:
            "Ein Mittelständler führte OKRs ein, behandelte sie aber wie klassische KPIs mit Top-Down-Vorgaben. Das Ergebnis war Frust statt Fokus. Erst als die Führung verstand, dass OKRs Gespräche ermöglichen sollen statt Kontrolle, kam Bewegung in die Umsetzung.",
        },
      ],
      targetAudience: {
        industries: [
          "Industrie & Produktion",
          "Maschinenbau",
          "IT & Software",
          "Handel",
        ],
        roles: [
          "Geschäftsführer",
          "Strategieleiter",
          "COO",
          "Bereichsleiter",
        ],
        companySize: "100 – 1.000 Mitarbeitende",
      },
      newsletterDraft: `**Adlerblick Insight | Strategie ohne Umsetzung ist Illusion**

Liebe Leserinnen und Leser,

warum versanden selbst brillante Strategien? Unsere neueste Episode zeigt: Die Umsetzungslücke ist kein Motivationsproblem – sie ist ein Führungsproblem.

**Die zentrale Erkenntnis:** Weniger Ziele mit voller Aufmerksamkeit bewirken mehr als zehn parallele Initiativen.

**Drei Impulse:**

1. **Priorisierung statt Ambition** – Maximal 3–5 strategische Prioritäten pro Quartal.
2. **Sichtbarer Fortschritt** – Monatliche Reviews statt jährlicher Bilanz.
3. **Gespräche statt Reports** – OKRs als Führungsinstrument, nicht als Controlling-Tool.

→ Die vollständige Analyse auf unserer Insight-Plattform.

Herzliche Grüße,
Ihr CIC-Team`,
    },
  },
  {
    id: "ep-005",
    title: "Fachkräftemangel neu denken – Warum Employer Branding allein nicht reicht",
    description:
      "Der Fachkräftemangel ist real, aber die Antwort liegt nicht nur im Recruiting. Über interne Hebel, die oft übersehen werden.",
    date: "2025-12-03",
    duration: "41 Min.",
    status: "completed",
    tags: ["Fachkräfte", "Employer Branding", "Retention", "HR-Strategie", "Mittelstand"],
    insights: {
      executiveSummary: `Der Fachkräftemangel dominiert die strategische Agenda vieler Unternehmen. Die meisten reagieren mit verstärktem Recruiting und Employer-Branding-Kampagnen. Dabei werden interne Hebel systematisch unterschätzt: Fluktuation reduzieren, vorhandene Potenziale entwickeln und Arbeitsbedingungen so gestalten, dass Menschen bleiben wollen.

Unternehmen, die ausschließlich auf externe Gewinnung setzen, betreiben häufig kostspielige Symptombekämpfung. Der entscheidende Wettbewerbsvorteil entsteht dort, wo Mitarbeitende nicht nur gewonnen, sondern gehalten und entwickelt werden.`,
      keyInsights: [
        {
          title: "Retention schlägt Recruiting",
          description:
            "Jede verhinderte Kündigung spart das 1,5- bis 2-fache eines Jahresgehalts.",
          category: "strategy",
        },
        {
          title: "Führung ist der wichtigste Retention-Faktor",
          description:
            "Menschen verlassen selten Unternehmen – sie verlassen Vorgesetzte.",
          category: "leadership",
        },
        {
          title: "Entwicklung ist das neue Gehalt",
          description:
            "Perspektive und Wachstum binden stärker als reine Vergütungserhöhungen.",
          category: "culture",
        },
        {
          title: "Interne Mobilität wird unterschätzt",
          description:
            "Viele Unternehmen suchen extern, was intern bereits vorhanden ist.",
          category: "operations",
        },
      ],
      strategicImplications: [
        "Fluktuationskosten systematisch erfassen und als strategische Kennzahl etablieren.",
        "Führungskräfteentwicklung als zentralen Hebel für Mitarbeiterbindung priorisieren.",
        "Karrierepfade und Entwicklungsmöglichkeiten transparent kommunizieren.",
        "Exit-Interviews systematisch auswerten und strukturelle Ursachen adressieren.",
      ],
      actionItems: [
        {
          text: "Fluktuationsanalyse der letzten 24 Monate durchführen",
          priority: "high",
        },
        {
          text: "Stay-Interviews mit Leistungsträgern implementieren",
          priority: "high",
        },
        {
          text: "Internes Talent-Mapping aufbauen",
          priority: "medium",
        },
        {
          text: "Führungskräfte in Mitarbeiterbindung schulen",
          priority: "high",
        },
        {
          text: "Onboarding-Prozess evaluieren und verbessern",
          priority: "medium",
        },
      ],
      practiceObservations: [
        {
          title: "Recruiting-Budget ohne Wirkung",
          description:
            "Ein Dienstleistungsunternehmen verdoppelte sein Recruiting-Budget, ohne die Fluktuation zu senken. Erst eine Führungskräfte-Entwicklung und verbesserte Onboarding-Prozesse führten zu messbarer Stabilisierung der Belegschaft.",
        },
        {
          title: "Interne Karrierepfade als Gamechanger",
          description:
            "Ein Produktionsunternehmen führte transparente Entwicklungspfade ein – inklusive Fach- und Führungskarrieren. Die Fluktuation sank innerhalb eines Jahres um 30%, ohne dass die Gehälter erhöht wurden.",
        },
      ],
      targetAudience: {
        industries: [
          "Branchenübergreifend",
          "IT & Software",
          "Gesundheitswesen",
          "Produktion",
          "Dienstleistungen",
        ],
        roles: [
          "Geschäftsführer",
          "HR-Leiter",
          "Personalentwickler",
          "Bereichsleiter",
        ],
        companySize: "50 – 2.000 Mitarbeitende",
      },
      newsletterDraft: `**Adlerblick Insight | Fachkräftemangel neu denken**

Liebe Leserinnen und Leser,

der Fachkräftemangel ist real – aber die Antwort liegt nicht nur im Recruiting. Unsere neueste Analyse zeigt: Die stärksten Hebel liegen im Unternehmen selbst.

**Die zentrale Erkenntnis:** Retention schlägt Recruiting. Jede verhinderte Kündigung spart das 1,5- bis 2-fache eines Jahresgehalts.

**Drei Impulse:**

1. **Führung bindet** – Menschen verlassen Vorgesetzte, nicht Unternehmen.
2. **Entwicklung vor Gehalt** – Perspektive und Wachstum binden stärker.
3. **Interne Mobilität** – Suchen Sie nicht extern, was intern vorhanden ist.

**Praxis-Beispiel:** Transparente Karrierepfade senkten die Fluktuation um 30% – ohne Gehaltserhöhungen.

→ Die vollständige Analyse auf unserer Insight-Plattform.

Herzliche Grüße,
Ihr CIC-Team`,
    },
  },
  {
    id: "ep-006",
    title: "Entscheidungen unter Unsicherheit – Führen ohne vollständige Information",
    description:
      "Wie Führungskräfte in unsicheren Situationen handlungsfähig bleiben und warum Perfektionismus der größte Feind guter Entscheidungen ist.",
    date: "2025-11-19",
    duration: "36 Min.",
    status: "completed",
    tags: ["Entscheidungen", "Führung", "Unsicherheit", "Agilität", "Resilienz"],
    insights: {
      executiveSummary: `In einer zunehmend komplexen Welt müssen Führungskräfte Entscheidungen treffen, ohne alle Informationen zu haben. Das ist kein Defizit, sondern Normalzustand. Die Fähigkeit, unter Unsicherheit handlungsfähig zu bleiben, wird zur zentralen Führungskompetenz.

Perfektionismus und übermäßige Absicherung führen zu Entscheidungsstau und verpassten Chancen. Erfolgreiche Führungskräfte entwickeln eine Praxis der guten-genug-Entscheidung – schnell, reversibel und lernorientiert.`,
      keyInsights: [
        {
          title: "80% Klarheit reicht für 90% der Entscheidungen",
          description:
            "Die letzten 20% Informationen kosten unverhältnismäßig viel Zeit und Geld.",
          category: "leadership",
        },
        {
          title: "Reversibilität bestimmt das nötige Absicherungsniveau",
          description:
            "Unterscheide zwischen Einbahnstraßen-Entscheidungen und Zweibahnstraßen-Entscheidungen.",
          category: "strategy",
        },
        {
          title: "Entscheidungsarchitektur reduziert Willkür",
          description:
            "Klare Kriterien und definierte Entscheidungsprozesse erhöhen Qualität und Geschwindigkeit.",
          category: "operations",
        },
      ],
      strategicImplications: [
        "Entscheidungsprozesse explizit gestalten – wer entscheidet was, mit welchem Informationsstand.",
        "Experimentierräume schaffen, in denen schnelle, reversible Entscheidungen getroffen werden können.",
        "Fehlerkultur stärken – Lernschleifen sind wertvoller als fehlerfreie Planung.",
      ],
      actionItems: [
        {
          text: "Entscheidungsmatrix für Führungsteam erstellen (reversibel vs. irreversibel)",
          priority: "high",
        },
        {
          text: "Decision Journals für wichtige strategische Entscheidungen einführen",
          priority: "medium",
        },
        {
          text: "Retrospektiven nach wichtigen Entscheidungen etablieren",
          priority: "medium",
        },
        {
          text: "Entscheidungsbefugnisse klarer delegieren",
          priority: "high",
        },
      ],
      practiceObservations: [
        {
          title: "Analyseparalyse im Vorstand",
          description:
            "Ein Unternehmen verlor einen wichtigen Marktvorsprung, weil der Vorstand eine Investitionsentscheidung über 8 Monate hinauszögerte – um letztlich mit 95% Datengrundlage die gleiche Entscheidung zu treffen, die nach 3 Monaten mit 75% Daten möglich gewesen wäre.",
        },
        {
          title: "Experimentierräume mit schnellen Ergebnissen",
          description:
            "Ein IT-Dienstleister führte sogenannte Two-Pizza-Teams ein, die mit eigenem Budget kleine Experimente durchführen durften. Die besten Ideen wurden skaliert, die schlechtesten kosteten wenig. Das Ergebnis: 3x mehr Innovation bei gleichem Budget.",
        },
      ],
      targetAudience: {
        industries: [
          "Branchenübergreifend",
          "IT & Software",
          "Beratung",
          "Industrie",
        ],
        roles: [
          "Geschäftsführer",
          "Vorstände",
          "Bereichsleiter",
          "Projektleiter",
        ],
        companySize: "50 – 5.000 Mitarbeitende",
      },
      newsletterDraft: `**Adlerblick Insight | Entscheidungen unter Unsicherheit**

Liebe Leserinnen und Leser,

Perfektionismus ist der größte Feind guter Entscheidungen. In unserer neuesten Episode zeigen wir, warum 80% Klarheit für die meisten Entscheidungen ausreicht.

**Die zentrale Erkenntnis:** Unterscheiden Sie zwischen Einbahnstraßen und Zweibahnstraßen. Reversible Entscheidungen brauchen weniger Absicherung.

**Drei Impulse:**

1. **Tempo vor Perfektion** – Die letzten 20% Informationen kosten unverhältnismäßig viel.
2. **Entscheidungsarchitektur** – Klare Kriterien erhöhen Qualität UND Geschwindigkeit.
3. **Lernschleifen** – Fehler sind günstiger als verpasste Chancen.

→ Die vollständige Analyse auf unserer Insight-Plattform.

Herzliche Grüße,
Ihr CIC-Team`,
    },
  },
  {
    id: "ep-007",
    title: "Kommunikation in der Krise – Vertrauen aufbauen, wenn es darauf ankommt",
    description:
      "Was erfolgreiche Krisenkommunikation ausmacht und warum Transparenz und Geschwindigkeit wichtiger sind als perfekte Botschaften.",
    date: "2025-11-05",
    duration: "38 Min.",
    status: "completed",
    tags: ["Krisenkommunikation", "Vertrauen", "Führung", "Transparenz", "Reputation"],
    insights: {
      executiveSummary: `Krisen treffen Unternehmen oft unvorbereitet – nicht weil es keine Risiken gab, sondern weil Kommunikationspläne fehlten oder nicht getestet wurden. Die ersten 48 Stunden einer Krise entscheiden über den langfristigen Reputationsschaden.

Erfolgreiche Krisenkommunikation folgt drei Prinzipien: Geschwindigkeit vor Perfektion, Empathie vor Information, Konsistenz vor Vollständigkeit. Führungskräfte, die in der Krise sichtbar und authentisch kommunizieren, stärken das Vertrauen – selbst wenn sie noch nicht alle Antworten haben.`,
      keyInsights: [
        {
          title: "Die ersten 48 Stunden entscheiden",
          description:
            "Wer in der Krise schweigt, verliert die Deutungshoheit an andere.",
          category: "leadership",
        },
        {
          title: "Empathie vor Information",
          description:
            "Betroffene wollen zuerst gehört werden, dann informiert.",
          category: "culture",
        },
        {
          title: "Krisenpläne sind wertlos ohne Übung",
          description:
            "Regelmäßige Simulationen machen den Unterschied zwischen Theorie und Handlungsfähigkeit.",
          category: "operations",
        },
      ],
      strategicImplications: [
        "Krisenkommunikationspläne entwickeln und mindestens jährlich in Simulationen testen.",
        "Führungskräfte in Krisenkommunikation schulen – authentische Kommunikation unter Druck ist trainierbar.",
        "Stakeholder-Mapping als Vorbereitung: Wer muss in welcher Reihenfolge informiert werden?",
      ],
      actionItems: [
        {
          text: "Krisenkommunikationsplan erstellen oder aktualisieren",
          priority: "high",
        },
        {
          text: "Krisenübung mit dem Führungsteam durchführen",
          priority: "high",
        },
        {
          text: "Stakeholder-Kommunikationsmatrix aufbauen",
          priority: "medium",
        },
        {
          text: "Medientraining für Geschäftsführung und Sprecher",
          priority: "low",
        },
      ],
      practiceObservations: [
        {
          title: "Vertrauensgewinn durch frühe Transparenz",
          description:
            "Ein Lebensmittelhersteller kommunizierte einen Produktrückruf proaktiv und transparent. Obwohl der finanzielle Schaden erheblich war, stieg das Kundenvertrauen nach der Krise messbar an – weil die Kommunikation als ehrlich und verantwortungsvoll wahrgenommen wurde.",
        },
        {
          title: "Reputationsschaden durch Schweigen",
          description:
            "Ein Dienstleister reagierte auf einen Datenschutzvorfall erst nach Medienberichterstattung. Die verspätete Kommunikation wurde als Verschleierung interpretiert und verursachte einen deutlich größeren Reputationsschaden als der Vorfall selbst.",
        },
      ],
      targetAudience: {
        industries: [
          "Branchenübergreifend",
          "Lebensmittel",
          "Gesundheitswesen",
          "Finanzdienstleistungen",
        ],
        roles: [
          "Geschäftsführer",
          "Kommunikationsleiter",
          "Pressesprecher",
          "Krisenmanager",
        ],
        companySize: "100 – 5.000+ Mitarbeitende",
      },
      newsletterDraft: `**Adlerblick Insight | Kommunikation in der Krise**

Liebe Leserinnen und Leser,

die ersten 48 Stunden einer Krise entscheiden über den Reputationsschaden. Unsere neueste Episode zeigt, was erfolgreiche Krisenkommunikation ausmacht.

**Die zentrale Erkenntnis:** Geschwindigkeit schlägt Perfektion. Wer schweigt, verliert die Deutungshoheit.

**Drei Impulse:**

1. **Sichtbar sein** – Führungskräfte, die sich zeigen, stärken Vertrauen.
2. **Empathie zuerst** – Betroffene wollen gehört werden, bevor sie Fakten brauchen.
3. **Üben, üben, üben** – Krisenpläne ohne Simulation sind Theorie.

**Praxis-Beispiel:** Ein Produktrückruf mit proaktiver Kommunikation führte zu höherem Kundenvertrauen als vor der Krise.

→ Die vollständige Analyse auf unserer Insight-Plattform.

Herzliche Grüße,
Ihr CIC-Team`,
    },
  },
  {
    id: "ep-008",
    title: "Digitale Transformation jenseits der Technologie",
    description:
      "Warum Digitalisierung kein IT-Projekt ist und wie der Mittelstand den kulturellen Wandel hinter der Technologie gestalten kann.",
    date: "2025-10-22",
    duration: "50 Min.",
    status: "completed",
    tags: ["Digitalisierung", "Transformation", "Kultur", "Prozesse", "Change"],
    insights: {
      executiveSummary: `Digitale Transformation wird in vielen Unternehmen als Technologieprojekt behandelt – neue Software, neue Tools, neue Systeme. Doch die größten Hürden sind selten technischer Natur. Sie liegen in der Kultur, den Prozessen und der Bereitschaft der Organisation, Gewohnheiten zu verändern.

Erfolgreiche digitale Transformation beginnt beim Geschäftsmodell, nicht beim Tool. Die Frage lautet nicht 'Welche Software brauchen wir?', sondern 'Welche Wertschöpfung wollen wir ermöglichen und welche Arbeitsweisen müssen sich dafür verändern?'`,
      keyInsights: [
        {
          title: "Transformation ist ein Geschäftsmodell-Thema",
          description:
            "Die Frage ist nicht welches Tool, sondern welche Wertschöpfung digital ermöglicht werden soll.",
          category: "digital",
        },
        {
          title: "70% des Scheiterns liegt an der Kultur",
          description:
            "Technologie scheitert selten – Akzeptanz und Nutzung sind die wahren Engpässe.",
          category: "culture",
        },
        {
          title: "Kleine Schritte, schnelle Erfolge",
          description:
            "Pilotprojekte schaffen Vertrauen und Momentum besser als Big-Bang-Rollouts.",
          category: "strategy",
        },
        {
          title: "Daten als strategisches Asset",
          description:
            "Wer Daten nicht strukturiert erfasst, kann keine datengetriebenen Entscheidungen treffen.",
          category: "digital",
        },
      ],
      strategicImplications: [
        "Digitalisierungsstrategie vom Geschäftsmodell ableiten, nicht von der Technologie.",
        "Change Management als integralen Bestandteil jedes Digitalisierungsprojekts einplanen.",
        "Digitale Kompetenz auf allen Ebenen systematisch aufbauen – nicht nur in der IT.",
        "Datenqualität und -governance als Grundlage für digitale Wertschöpfung priorisieren.",
      ],
      actionItems: [
        {
          text: "Digitale Reifegradanalyse des Unternehmens durchführen",
          priority: "high",
        },
        {
          text: "Pilotprojekt mit hoher Sichtbarkeit und schnellem Nutzen identifizieren",
          priority: "high",
        },
        {
          text: "Digitale Kompetenzentwicklung für Führungskräfte starten",
          priority: "medium",
        },
        {
          text: "Datenstrategie und Governance-Rahmen definieren",
          priority: "medium",
        },
        {
          text: "Change-Begleitung für laufende Digitalisierungsprojekte sicherstellen",
          priority: "high",
        },
      ],
      practiceObservations: [
        {
          title: "ERP-Einführung ohne Change Management",
          description:
            "Ein mittelständischer Maschinenbauer investierte 2 Millionen Euro in ein neues ERP-System. Nach 12 Monaten nutzten nur 40% der Mitarbeitenden das System wie vorgesehen – weil die Schulung technisch orientiert war und den kulturellen Wandel ignorierte.",
        },
        {
          title: "Digitaler Vertrieb als Pilotprojekt",
          description:
            "Ein Handelsunternehmen startete mit einem digitalen Angebotskonfigurator als Pilotprojekt. Der schnelle, sichtbare Nutzen für den Vertrieb erzeugte eine Sogwirkung in andere Abteilungen und beschleunigte die weitere Digitalisierung.",
        },
      ],
      targetAudience: {
        industries: [
          "Maschinenbau",
          "Handel",
          "Produktion",
          "Logistik",
          "Dienstleistungen",
        ],
        roles: [
          "Geschäftsführer",
          "CTO",
          "CDO",
          "IT-Leiter",
          "Bereichsleiter",
        ],
        companySize: "50 – 2.000 Mitarbeitende",
      },
      newsletterDraft: `**Adlerblick Insight | Digitale Transformation jenseits der Technologie**

Liebe Leserinnen und Leser,

Digitalisierung ist kein IT-Projekt. Unsere neueste Episode zeigt, warum 70% der Transformationsprojekte an der Kultur scheitern, nicht an der Technologie.

**Die zentrale Erkenntnis:** Die Frage lautet nicht 'Welche Software brauchen wir?', sondern 'Welche Wertschöpfung wollen wir ermöglichen?'

**Drei Impulse:**

1. **Geschäftsmodell vor Tool** – Digitalisierung beginnt bei der Wertschöpfung.
2. **Kleine Schritte** – Pilotprojekte schaffen Vertrauen besser als Big-Bang-Rollouts.
3. **Daten als Asset** – Ohne Datenqualität keine datengetriebenen Entscheidungen.

**Praxis-Beispiel:** Ein digitaler Angebotskonfigurator als Pilotprojekt erzeugte eine Sogwirkung in die gesamte Organisation.

→ Die vollständige Analyse auf unserer Insight-Plattform.

Herzliche Grüße,
Ihr CIC-Team`,
    },
  },
];

export const knowledgeItems: KnowledgeItem[] = [
  {
    id: "ki-001",
    title: "Orientierung als Führungsprinzip",
    content:
      "Führung bedeutet in komplexen Umfeldern nicht Kontrolle, sondern Orientierung. Mitarbeitende brauchen Klarheit über die Richtung des Unternehmens und ihren Beitrag dazu. Fehlt diese Einordnung, entsteht Unsicherheit – unabhängig von der Qualität strategischer Entscheidungen.",
    category: "Führung",
    sourceEpisode: "ep-001",
    date: "2026-02-14",
    tags: ["Führung", "Orientierung", "Kommunikation"],
  },
  {
    id: "ki-002",
    title: "Systemische Leistungsfähigkeit",
    content:
      "Leistungsfähigkeit entsteht nicht durch Druck, sondern durch funktionierende Systeme. Klare Prozesse, eindeutige Verantwortlichkeiten und transparente Kommunikation reduzieren Reibungsverluste. Unternehmen, die Strukturen vereinfachen, erleben häufig einen Leistungsanstieg ohne erhöhten Druck.",
    category: "Organisation",
    sourceEpisode: "ep-001",
    date: "2026-02-14",
    tags: ["Prozesse", "Leistung", "Struktur"],
  },
  {
    id: "ki-003",
    title: "Arbeitsfähigkeit als Wirtschaftsfaktor",
    content:
      "Steigende Fehlzeiten sind selten ein isoliertes Gesundheitsproblem, sondern Ausdruck struktureller Überlastung, fehlender Orientierung oder mangelnder Sinnorientierung. Führungskräfte beeinflussen Motivation und Gesundheit stärker als viele organisatorische Maßnahmen.",
    category: "Gesundheit & Arbeitsfähigkeit",
    sourceEpisode: "ep-001",
    date: "2026-02-14",
    tags: ["Gesundheit", "Motivation", "Fehlzeiten"],
  },
  {
    id: "ki-004",
    title: "IT-Sicherheit als Führungsverantwortung",
    content:
      "IT-Sicherheit ist keine technische Detailfrage, sondern Teil unternehmerischer Sorgfaltspflicht. Geschäftsführungen tragen persönlich Verantwortung für digitale Resilienz. Entscheidend ist nachweisbare Sorgfalt: systematische Risikobewertung und angemessene Maßnahmen.",
    category: "Digital & Sicherheit",
    sourceEpisode: "ep-001",
    date: "2026-02-14",
    tags: ["IT-Sicherheit", "Cyber", "Compliance", "Risikomanagement"],
  },
  {
    id: "ki-005",
    title: "Nachfolge als strategischer Prozess",
    content:
      "Erfolgreiche Nachfolge im Mittelstand beginnt Jahre vor dem tatsächlichen Wechsel. Es ist ein strategisches Projekt, kein operatives To-Do. Die abtretende Generation muss aktiv Raum schaffen. Externe Begleitung hilft, emotionale Dynamiken professionell zu kanalisieren.",
    category: "Nachfolge",
    sourceEpisode: "ep-002",
    date: "2026-01-28",
    tags: ["Nachfolge", "Familienunternehmen", "Generationenwechsel"],
  },
  {
    id: "ki-006",
    title: "Kultur als Führungsaufgabe",
    content:
      "Kulturwandel beginnt in der Führungsetage und zeigt sich im täglichen Verhalten. Nicht die Leitwerte an der Wand, sondern das Verhalten in Drucksituationen definiert die Kultur. Jede Führungsentscheidung sendet kulturelle Signale an die Organisation.",
    category: "Unternehmenskultur",
    sourceEpisode: "ep-003",
    date: "2026-01-14",
    tags: ["Kultur", "Werte", "Change Management"],
  },
  {
    id: "ki-007",
    title: "Die Umsetzungslücke schließen",
    content:
      "Strategien scheitern selten an ihrer Qualität, sondern an fehlenden Übersetzungsmechanismen zwischen strategischer Absicht und operativem Alltag. Maximal 3–5 Prioritäten pro Quartal, sichtbare Fortschrittsmessung und konsequente Führungsaufmerksamkeit sind die Schlüsselfaktoren.",
    category: "Strategie",
    sourceEpisode: "ep-004",
    date: "2025-12-18",
    tags: ["Strategie", "Execution", "OKR", "Umsetzung"],
  },
  {
    id: "ki-008",
    title: "Retention als strategischer Hebel",
    content:
      "Jede verhinderte Kündigung spart das 1,5- bis 2-fache eines Jahresgehalts. Menschen verlassen selten Unternehmen – sie verlassen Vorgesetzte. Perspektive und Wachstumsmöglichkeiten binden stärker als reine Vergütungserhöhungen. Interne Mobilität wird systematisch unterschätzt.",
    category: "Führung",
    sourceEpisode: "ep-005",
    date: "2025-12-03",
    tags: ["Retention", "Fachkräfte", "Führung", "Mitarbeiterbindung"],
  },
  {
    id: "ki-009",
    title: "Entscheiden mit 80% Klarheit",
    content:
      "80% Klarheit reicht für 90% der Entscheidungen. Die letzten 20% Informationen kosten unverhältnismäßig viel Zeit und Geld. Erfolgreiche Führungskräfte unterscheiden zwischen reversiblen und irreversiblen Entscheidungen und passen ihr Absicherungsniveau entsprechend an.",
    category: "Führung",
    sourceEpisode: "ep-006",
    date: "2025-11-19",
    tags: ["Entscheidungen", "Unsicherheit", "Führungskompetenz"],
  },
  {
    id: "ki-010",
    title: "Die ersten 48 Stunden in der Krise",
    content:
      "Erfolgreiche Krisenkommunikation folgt drei Prinzipien: Geschwindigkeit vor Perfektion, Empathie vor Information, Konsistenz vor Vollständigkeit. Wer in der Krise schweigt, verliert die Deutungshoheit. Krisenpläne ohne regelmäßige Simulation sind wertlose Theorie.",
    category: "Führung",
    sourceEpisode: "ep-007",
    date: "2025-11-05",
    tags: ["Krisenkommunikation", "Reputation", "Transparenz"],
  },
  {
    id: "ki-011",
    title: "Digitalisierung beginnt beim Geschäftsmodell",
    content:
      "Die Frage ist nicht 'Welche Software brauchen wir?', sondern 'Welche Wertschöpfung wollen wir ermöglichen?'. 70% der Digitalisierungsprojekte scheitern an der Kultur, nicht an der Technologie. Pilotprojekte mit schnellem, sichtbarem Nutzen schaffen Vertrauen und Momentum.",
    category: "Digital & Sicherheit",
    sourceEpisode: "ep-008",
    date: "2025-10-22",
    tags: ["Digitalisierung", "Transformation", "Change Management"],
  },
  {
    id: "ki-012",
    title: "Daten als strategisches Asset",
    content:
      "Ohne strukturierte Datenerfassung und Datenqualität sind datengetriebene Entscheidungen unmöglich. Datenstrategie und Governance-Rahmen sind Voraussetzung für jeden digitalen Fortschritt. Viele Unternehmen investieren in Tools, bevor die Datengrundlage steht.",
    category: "Digital & Sicherheit",
    sourceEpisode: "ep-008",
    date: "2025-10-22",
    tags: ["Daten", "Governance", "Digitalisierung", "Strategie"],
  },
  {
    id: "ki-013",
    title: "OKRs richtig einsetzen",
    content:
      "OKRs wirken nur als Führungsinstrument, nicht als Controlling-Tool. Sie sollen Gespräche auslösen, nicht Reports generieren. Top-Down-Vorgaben untergraben den Sinn des Frameworks. Erst wenn die Führung versteht, dass OKRs Alignment statt Kontrolle schaffen sollen, entfalten sie ihre Wirkung.",
    category: "Organisation",
    sourceEpisode: "ep-004",
    date: "2025-12-18",
    tags: ["OKR", "Führungsinstrumente", "Alignment", "Strategie"],
  },
  {
    id: "ki-014",
    title: "Fehlerkultur als Innovationsmotor",
    content:
      "Unternehmen, die Experimentierräume schaffen und schnelle, reversible Entscheidungen ermöglichen, erzielen mehr Innovation bei gleichem Budget. Fehler sind günstiger als verpasste Chancen. Lernschleifen nach Entscheidungen sind wertvoller als fehlerfreie Planung im Vorfeld.",
    category: "Unternehmenskultur",
    sourceEpisode: "ep-006",
    date: "2025-11-19",
    tags: ["Fehlerkultur", "Innovation", "Experimentieren", "Lernen"],
  },
];

export const crmContacts: CrmContact[] = [
  {
    id: "crm-001",
    name: "Dr. Thomas Berger",
    company: "Berger Maschinenbau GmbH",
    role: "Geschäftsführer",
    industry: "Maschinenbau",
    email: "t.berger@berger-maschinenbau.de",
    avatar: "TB",
    suggestedEpisodes: ["ep-001", "ep-004", "ep-008"],
    lastContacted: "2026-01-15",
    status: "contacted",
  },
  {
    id: "crm-002",
    name: "Sabine Keller",
    company: "MedTech Solutions AG",
    role: "COO",
    industry: "Gesundheitswesen",
    email: "s.keller@medtech-solutions.de",
    avatar: "SK",
    suggestedEpisodes: ["ep-001", "ep-005", "ep-006"],
    lastContacted: "2026-02-03",
    status: "contacted",
  },
  {
    id: "crm-003",
    name: "Martin Hoffmann",
    company: "Hoffmann & Söhne KG",
    role: "Gesellschafter",
    industry: "Familienunternehmen",
    email: "m.hoffmann@hoffmann-soehne.de",
    avatar: "MH",
    suggestedEpisodes: ["ep-002", "ep-003"],
    status: "new",
  },
  {
    id: "crm-004",
    name: "Julia Reiter",
    company: "NordLog Spedition GmbH",
    role: "Personalleitung",
    industry: "Logistik",
    email: "j.reiter@nordlog.de",
    avatar: "JR",
    suggestedEpisodes: ["ep-005", "ep-003", "ep-007"],
    lastContacted: "2025-12-20",
    status: "contacted",
  },
  {
    id: "crm-005",
    name: "Andreas Weber",
    company: "Weber IT-Consulting",
    role: "Geschäftsführer",
    industry: "IT & Software",
    email: "a.weber@weber-itc.de",
    avatar: "AW",
    suggestedEpisodes: ["ep-008", "ep-001", "ep-006"],
    status: "new",
  },
  {
    id: "crm-006",
    name: "Claudia Braun",
    company: "Stadtwerke Mittelhessen",
    role: "Vorstand Personal",
    industry: "Energie & Versorgung",
    email: "c.braun@sw-mittelhessen.de",
    avatar: "CB",
    suggestedEpisodes: ["ep-005", "ep-003", "ep-001"],
    lastContacted: "2026-02-10",
    status: "scheduled",
  },
  {
    id: "crm-007",
    name: "Frank Meister",
    company: "Meister Bau AG",
    role: "Geschäftsführer",
    industry: "Bau & Handwerk",
    email: "f.meister@meister-bau.de",
    avatar: "FM",
    suggestedEpisodes: ["ep-002", "ep-004", "ep-001"],
    status: "new",
  },
  {
    id: "crm-008",
    name: "Lisa Engel",
    company: "ProVita Kliniken GmbH",
    role: "Klinikleitung",
    industry: "Gesundheitswesen",
    email: "l.engel@provita-kliniken.de",
    avatar: "LE",
    suggestedEpisodes: ["ep-007", "ep-005", "ep-003"],
    lastContacted: "2026-01-28",
    status: "contacted",
  },
  {
    id: "crm-009",
    name: "Stefan Große",
    company: "Große Automotive Zulieferer",
    role: "CTO",
    industry: "Automotive",
    email: "s.grosse@grosse-automotive.de",
    avatar: "SG",
    suggestedEpisodes: ["ep-008", "ep-004", "ep-006"],
    status: "new",
  },
  {
    id: "crm-010",
    name: "Katrin Vogt",
    company: "Vogt & Partner Steuerberatung",
    role: "Managing Partnerin",
    industry: "Beratung",
    email: "k.vogt@vogt-partner.de",
    avatar: "KV",
    suggestedEpisodes: ["ep-006", "ep-002", "ep-007"],
    lastContacted: "2026-02-12",
    status: "scheduled",
  },
];

export const dashboardStats = {
  totalEpisodes: 8,
  totalInsights: 27,
  knowledgeItems: 14,
  newslettersGenerated: 8,
};

export const categories = [
  { name: "Führung", count: 7, color: "#035f6a" },
  { name: "Organisation", count: 5, color: "#0a7c89" },
  { name: "Strategie", count: 4, color: "#3b82f6" },
  { name: "Digital & Sicherheit", count: 5, color: "#cc8b6e" },
  { name: "Unternehmenskultur", count: 4, color: "#8b5cf6" },
  { name: "Nachfolge", count: 1, color: "#64748b" },
  { name: "Gesundheit & Arbeitsfähigkeit", count: 1, color: "#059669" },
];
