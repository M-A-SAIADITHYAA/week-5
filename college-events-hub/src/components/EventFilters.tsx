import { EventType } from '@/types';
import { format } from 'date-fns';

interface FilterProps {
  filters: {
    search: string;
    type: EventType | 'all';
    startDate: string;
    endDate: string;
    college: string;
    location: string;
  };
  onFilterChange: (name: string, value: string) => void;
  colleges: string[];
  locations: string[];
}

export default function EventFilters({ filters, onFilterChange, colleges, locations }: FilterProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {/* Search Input */}
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-indigo-700 mb-1">
            Search
          </label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search events..."
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-purple-900 placeholder-purple-400"
            value={filters.search}
            onChange={(e) => onFilterChange('search', e.target.value)}
          />
        </div>

        {/* Event Type Filter */}
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-indigo-700 mb-1">
            Event Type
          </label>
          <select
            id="type"
            name="type"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-purple-900"
            value={filters.type}
            onChange={(e) => onFilterChange('type', e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="event">Event</option>
            <option value="hackathon">Hackathon</option>
            <option value="workshop">Workshop</option>
          </select>
        </div>

        {/* Start Date Filter */}
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-indigo-700 mb-1">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-purple-900"
            value={filters.startDate}
            onChange={(e) => onFilterChange('startDate', e.target.value)}
          />
        </div>

        {/* End Date Filter */}
        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-indigo-700 mb-1">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-purple-900"
            value={filters.endDate}
            onChange={(e) => onFilterChange('endDate', e.target.value)}
          />
        </div>

        {/* College Filter */}
        <div>
          <label htmlFor="college" className="block text-sm font-medium text-indigo-700 mb-1">
            College
          </label>
          <select
            id="college"
            name="college"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-purple-900"
            value={filters.college}
            onChange={(e) => onFilterChange('college', e.target.value)}
          >
            <option value="">All Colleges</option>
            {colleges.map((college) => (
              <option key={college} value={college}>
                {college}
              </option>
            ))}
          </select>
        </div>

        {/* Location Filter */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-indigo-700 mb-1">
            Location
          </label>
          <select
            id="location"
            name="location"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-purple-900"
            value={filters.location}
            onChange={(e) => onFilterChange('location', e.target.value)}
          >
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
