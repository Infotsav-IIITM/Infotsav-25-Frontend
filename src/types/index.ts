export interface Event {
  id: string;
  title: string;
  description: string;
  time: string;
  date: string;
  category: 'technical' | 'cultural' | 'workshop';
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  level: number;
  skills: string[];
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  tier: 'title' | 'gold' | 'silver' | 'bronze';
  website?: string;
}

export interface ScheduleItem {
  id: string;
  time: string;
  event: string;
  venue: string;
  type: 'event' | 'break' | 'keynote';
}