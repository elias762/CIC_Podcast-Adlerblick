export interface Episode {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  status: "processing" | "completed" | "draft";
  audioUrl?: string;
  transcript?: string;
  insights: InsightExtraction;
  tags: string[];
}

export interface InsightExtraction {
  executiveSummary: string;
  keyInsights: KeyInsight[];
  strategicImplications: string[];
  actionItems: ActionItem[];
  practiceObservations: PracticeObservation[];
  targetAudience: TargetAudience;
  newsletterDraft: string;
}

export interface KeyInsight {
  title: string;
  description: string;
  category: "leadership" | "strategy" | "operations" | "digital" | "culture";
}

export interface ActionItem {
  text: string;
  priority: "high" | "medium" | "low";
}

export interface PracticeObservation {
  title: string;
  description: string;
}

export interface TargetAudience {
  industries: string[];
  roles: string[];
  companySize: string;
}

export interface KnowledgeItem {
  id: string;
  title: string;
  content: string;
  category: string;
  sourceEpisode: string;
  date: string;
  tags: string[];
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export interface CrmContact {
  id: string;
  name: string;
  company: string;
  role: string;
  industry: string;
  email: string;
  avatar: string;
  suggestedEpisodes: string[];
  lastContacted?: string;
  status: "new" | "contacted" | "scheduled";
}
