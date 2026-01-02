export interface TeamMember {
  name: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  updated_at: string;
}

export interface Project {
  title: string;
  slug: string;
  summary: string;
  description: string;
  tags: string[];
  updated_at: string;
  seo_title?: string;
  seo_description?: string;
  image_url?: string;
  featured?: boolean;
}

export interface Event {
  title: string;
  slug: string;
  summary: string;
  description: string;
  start_date: string;
  end_date?: string;
  tags: string[];
  updated_at: string;
  seo_title?: string;
  seo_description?: string;
  image_url?: string;
  featured?: boolean;
}

export interface Media {
  title: string;
  slug: string;
  summary: string;
  description: string;
  url: string;
  type: "video" | "podcast" | "article";
  tags: string[];
  updated_at: string;
  seo_title?: string;
  seo_description?: string;
  image_url?: string;
  featured?: boolean;
}

export interface Press {
  title: string;
  slug: string;
  summary: string;
  description: string;
  publication: string;
  url: string;
  tags: string[];
  updated_at: string;
}

export interface Resource {
  title: string;
  slug: string;
  summary: string;
  description: string;
  file_url: string;
  category: string;
  tags: string[];
  updated_at: string;
  seo_title?: string;
  seo_description?: string;
  image_url?: string;
  featured?: boolean;
}

export interface Guideline {
  title: string;
  slug: string;
  summary: string;
  content_path: string;
  tags: string[];
  updated_at: string;
}

export interface Conference {
  year: number;
  theme: string;
  location: string;
  start_date: string;
  end_date: string;
  summary: string;
  updated_at: string;
}

export interface ConferenceProgramItem {
  year: number;
  day_label: string;
  start_time: string;
  end_time: string;
  title: string;
  speaker_names: string;
  track?: string;
  type?: string;
  tags?: string;
}

export interface ConferenceVideo {
  year: number;
  title: string;
  url: string;
  speaker?: string;
  tags?: string;
  updated_at: string;
}

export interface ConferenceSpeaker {
  year: number;
  name: string;
  role?: string;
  org?: string;
  bio_short?: string;
  url?: string;
  tags?: string[];
  updated_at: string;
}
