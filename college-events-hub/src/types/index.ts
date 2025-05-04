export type EventType = 'event' | 'hackathon' | 'workshop';

export interface Event {
  id: string;
  title: string;
  type: EventType;
  date: string;
  college: string;
  description: string;
  location: string;
  registrationUrl?: string;
  image?: string;
}
