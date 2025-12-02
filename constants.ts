
import { Beat, NavItem, TeamMember, ServicePackage, Testimonial, LiveEvent, PortfolioItem, BlogPost } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', href: '/', isActive: true },
  { label: 'PRODUCERS', href: '/about' },
  { label: 'BEAT STORE', href: '/beats' },
  { label: 'SERVICES', href: '/services' },
  { label: 'CONTACT', href: '/contact' },
];

export const TOP_BEATS: Beat[] = [
  {
    id: '1',
    title: 'NEON GRAVES',
    genre: 'Dark Melodic Trap',
    bpm: 140,
    plays: 12500,
    price: 49.99,
    duration: "3:42",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    key: "Cm"
  },
  {
    id: '2',
    title: 'VELVET ROPE',
    genre: '90s RnB Sample Flip',
    bpm: 92,
    plays: 9800,
    price: 49.99,
    duration: "2:55",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    key: "F#m"
  },
  {
    id: '3',
    title: 'CAIRO DRIP',
    genre: 'Afrobeat-Trap Fusion',
    bpm: 105,
    plays: 11200,
    price: 49.99,
    duration: "3:15",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    key: "Gm"
  },
  {
    id: '4',
    title: 'MIDNIGHT TOKYO',
    genre: 'Cinematic Drill',
    bpm: 144,
    plays: 8400,
    price: 49.99,
    duration: "3:30",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    key: "Am"
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Ramli T. Michael",
    role: "The Sonic Architect",
    quote: "Every song has a fingerprint. My job is to find and polish it until it shines.",
    expertise: ["Cinematic Composition", "Technical Mixing", "Live Instrumentation"],
    description: "Renowned for intricate, emotion-driven compositions and surgical mixing precision. His work bridges organic instrumentation with cutting-edge digital sound design."
  },
  {
    name: "Judah",
    role: "The Vocal Producer's Producer",
    quote: "If the voice doesn't connect, the beat doesn't matter. I build the track around the artist's truth.",
    expertise: ["Vocal Production", "Rap Flow Design", "Competitive Mastering"],
    description: "A vocalist/rapper's producer who understands performance from the inside. Specializes in vocal production, impactful arrangements, and mastering that competes with chart-toppers."
  }
];

export const SERVICES: ServicePackage[] = [
  {
    title: "Mastering Only",
    turnaround: "48 hours",
    price: "$75/track",
    description: "Final polish for already-mixed songs. Competitive loudness and format optimization."
  },
  {
    title: "Mix + Master",
    turnaround: "5-7 days",
    price: "$250/track",
    description: "Full stem mixing, surgical balancing, spatial design, and final mastering."
  },
  {
    title: "Custom Production",
    turnaround: "10-14 days",
    price: "From $500",
    description: "A beat built exclusively for you. Includes full stems and exclusive rights."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "I sent Ramli a messy vocal recording from my bedroom. What came back sounded like I recorded it at Electric Lady.",
    author: "Maya R.",
    role: "Independent R&B Artist"
  },
  {
    text: "Judah doesn't just make beats; he coaches you through the performance. His vocal chain alone is worth the session.",
    author: "Alex 'KAI' Chen",
    role: "Rap Artist"
  },
  {
    text: "Commissioning a custom beat was the best investment. They nailed the brief on the first try.",
    author: "Santi",
    role: "Afrofusion Artist"
  }
];

export const LIVE_EVENTS: LiveEvent[] = [
  {
    title: "Ramli T. Michael Live",
    type: "Production Sets",
    description: "Live beat production sets with MIDI controllers and instruments, blending original productions with curated hits.",
    idealFor: "Lounge Venues, Art Galleries, Private Events",
  },
  {
    title: "Judah Live",
    type: "Performance Sets",
    description: "Full-performance sets rapping and singing over produced tracks with high-energy crowd engagement.",
    idealFor: "Festivals, Club Nights, Concert Support",
  },
  {
    title: "The Duo Experience",
    type: "Hybrid Show",
    description: "A unique 'making-of' show: producing beats live, then performing over them. Behind-the-scenes storytelling.",
    idealFor: "Music Conferences, Workshops, Special Showcases",
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: "Midnight in Malibu",
    artist: "Ramli T. Michael",
    streams: "2.4M",
    type: "Track"
  },
  {
    title: "Block Party",
    artist: "feat. Judah",
    streams: "1.8M",
    type: "Track"
  },
  {
    title: "Saudade",
    artist: "Instrumental",
    streams: "1.5M",
    type: "Track"
  },
  {
    title: "Eclipse EP",
    artist: "Emerging Artist",
    streams: "500K+",
    type: "Album"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "How to Choose the Right Type Beat for Your Vocal Style",
    category: "Production",
    date: "Oct 24"
  },
  {
    title: "Mixing Vocals Like a Pro: 5 Techniques Judah Swears By",
    category: "Engineering",
    date: "Nov 02"
  },
  {
    title: "From Beat to Release: A Step-by-Step Guide",
    category: "Industry",
    date: "Nov 15"
  }
];