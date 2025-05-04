import { Event } from '@/types';

export const events: Event[] = [
  {
    id: '1',
    title: 'Tech Innovation Summit 2025',
    type: 'event',
    date: '2025-05-15',
    college: 'MIT College of Engineering',
    description: 'Join us for a day of technological innovation and networking with industry experts.',
    location: 'Main Auditorium',
    registrationUrl: 'https://example.com/register',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800',
  },
  {
    id: '2',
    title: 'AI Hackathon',
    type: 'hackathon',
    date: '2025-06-01',
    college: 'Stanford Tech Institute',
    description: '24-hour hackathon focused on artificial intelligence and machine learning projects.',
    location: 'Innovation Lab',
    registrationUrl: 'https://example.com/hackathon',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800',
  },
  {
    id: '3',
    title: 'Web Development Workshop',
    type: 'workshop',
    date: '2025-05-20',
    college: 'Digital Arts University',
    description: 'Learn modern web development techniques with React and Next.js.',
    location: 'Computer Lab 101',
    registrationUrl: 'https://example.com/workshop',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800',
  },
];
