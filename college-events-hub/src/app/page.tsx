'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEvents } from '@/context/EventContext';
import { format, isWithinInterval, parseISO } from 'date-fns';
import EventFilters from '@/components/EventFilters';
import { useState, useMemo } from 'react';
import { EventType } from '@/types';

export default function Home() {
  const { events } = useEvents();

  // Extract unique colleges and locations for filters
  const colleges = useMemo(() => [
    ...new Set(events.map((event) => event.college)),
  ], [events]);

  const locations = useMemo(() => [
    ...new Set(events.map((event) => event.location)),
  ], [events]);

  // Filter state
  const [filters, setFilters] = useState({
    search: '',
    type: 'all' as EventType | 'all',
    startDate: '',
    endDate: '',
    college: '',
    location: '',
  });

  // Handle filter changes
  const handleFilterChange = (name: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Filter events
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      // Search filter
      if (
        filters.search &&
        !event.title.toLowerCase().includes(filters.search.toLowerCase()) &&
        !event.description.toLowerCase().includes(filters.search.toLowerCase())
      ) {
        return false;
      }

      // Type filter
      if (filters.type !== 'all' && event.type !== filters.type) {
        return false;
      }

      // Date filter
      if (filters.startDate && filters.endDate) {
        const eventDate = parseISO(event.date);
        const startDate = parseISO(filters.startDate);
        const endDate = parseISO(filters.endDate);
        if (!isWithinInterval(eventDate, { start: startDate, end: endDate })) {
          return false;
        }
      }

      // College filter
      if (filters.college && event.college !== filters.college) {
        return false;
      }

      // Location filter
      if (filters.location && event.location !== filters.location) {
        return false;
      }

      return true;
    });
  }, [events, filters]);
  return (
    <main className="min-h-screen">
      <div className="py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-600 mb-2 tracking-tight">Upcoming College Events</h1>
          <p className="text-lg text-purple-700 mb-6">Discover events, hackathons, and workshops near you</p>

          <a
            href="/submit-event"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            <svg className="mr-2 -ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Submit Event
          </a>
        </div>

        <EventFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          colleges={colleges}
          locations={locations}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {event.image && (
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium
                    ${event.type === 'hackathon' ? 'bg-purple-100 text-purple-800' :
                      event.type === 'workshop' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'}`
                  }>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                  <span className="text-sm text-gray-500">
                    {format(new Date(event.date), 'MMM d, yyyy')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg className="h-5 w-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  {event.college}
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg className="h-5 w-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  {event.location}
                </div>
                {event.registrationUrl && (
                  <a
                    href={event.registrationUrl}
                    className="block w-full text-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Now
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
