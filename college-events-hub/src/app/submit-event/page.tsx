'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useEvents } from '@/context/EventContext';
import { EventType } from '@/types';

export default function SubmitEvent() {
  const router = useRouter();
  const { addEvent } = useEvents();
  const [formData, setFormData] = useState<{
    title: string;
    type: EventType;
    date: string;
    college: string;
    description: string;
    location: string;
    registrationUrl: string;
  }>({
    title: '',
    type: 'event',
    date: '',
    college: '',
    description: '',
    location: '',
    registrationUrl: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Add the new event
    addEvent({
      title: formData.title,
      type: formData.type,
      date: new Date(formData.date).toISOString(),
      college: formData.college,
      description: formData.description,
      location: formData.location,
      registrationUrl: formData.registrationUrl,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80'
    });

    // Show success message and redirect
    alert('Event submitted successfully!');
    router.push('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-indigo-600 mb-2 tracking-tight">Submit New Event</h1>
        <p className="text-purple-700">Share your hackathon, workshop, or event with the community</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-indigo-700">Event Title</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-purple-900 placeholder-purple-400"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="type" className="block text-sm font-medium text-indigo-700">Event Type</label>
          <select
            name="type"
            id="type"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-purple-900 placeholder-purple-400"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="event">Event</option>
            <option value="hackathon">Hackathon</option>
            <option value="workshop">Workshop</option>
          </select>
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-indigo-700">Event Date</label>
          <input
            type="date"
            name="date"
            id="date"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-purple-900 placeholder-purple-400"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="college" className="block text-sm font-medium text-indigo-700">College Name</label>
          <input
            type="text"
            name="college"
            id="college"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-purple-900 placeholder-purple-400"
            value={formData.college}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-indigo-700">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-purple-900 placeholder-purple-400"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-indigo-700">Description</label>
          <textarea
            name="description"
            id="description"
            rows={4}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-purple-900 placeholder-purple-400"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="registrationUrl" className="block text-sm font-medium text-indigo-700">Registration URL</label>
          <input
            type="url"
            name="registrationUrl"
            id="registrationUrl"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-purple-900 placeholder-purple-400"
            value={formData.registrationUrl}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-end space-x-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Event
          </button>
        </div>
      </form>
    </div>
  );
}
