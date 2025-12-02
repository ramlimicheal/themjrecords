
export interface Beat {
  id: string;
  title: string;
  genre: string;
  bpm: number;
  plays: number;
  price: number;
  audioSrc?: string; // URL to the audio file
  duration?: string; // Display string e.g. "3:45"
  key?: string; // Musical key e.g. "Cm"
}

export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  quote: string;
  expertise: string[];
  description: string;
}

export interface ServicePackage {
  title: string;
  turnaround: string;
  price: string;
  description: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
}

export interface LiveEvent {
  title: string;
  type: string;
  description: string;
  idealFor: string;
}

export interface PortfolioItem {
  title: string;
  artist: string;
  streams: string;
  type: 'Track' | 'Album' | 'Placement';
}

export interface BlogPost {
  title: string;
  category: string;
  date: string;
}