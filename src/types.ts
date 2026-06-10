export interface SkillItem {
  label: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  items: SkillItem[];
}

export interface ProjectItem {
  name: string;
  description: string;
  tags: string[];
  accent: string;
}

export interface TimelineItem {
  label: string;
  period: string;
  description: string;
}
