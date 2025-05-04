# College Events Hub

A modern web application for discovering and managing college events, hackathons, and workshops. Built with Next.js, TypeScript, and Tailwind CSS.



## Features

### Event Discovery
- Browse upcoming college events in a modern, responsive grid layout
- View event details including title, date, location, and description
- See event type badges (Event, Hackathon, Workshop)
- Click through to event registration pages

### Event Submission
- Submit new events through a user-friendly form
- Required fields validation
- Support for different event types
- Automatic image assignment

### Advanced Filtering
- Search events by title and description
- Filter by event type (Event, Hackathon, Workshop)
- Date range filtering
- College-specific filtering
- Location-based filtering
- Real-time filter updates

### Responsive Design
- Mobile-friendly layout
- Adaptive grid system
- Touch-friendly interface
- Consistent experience across devices

## Technology Stack

- **Frontend Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context
- **Form Handling**: React Hooks
- **Date Handling**: date-fns
- **Icons**: Heroicons

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/college-events-hub.git
cd college-events-hub
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                   # Next.js app directory
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout
│   └── submit-event/     # Event submission page
├── components/           # React components
│   └── EventFilters.tsx  # Event filtering component
├── context/              # React Context
│   └── EventContext.tsx  # Event state management
├── data/                 # Static data
│   └── events.ts         # Sample events
└── types/                # TypeScript types
    └── index.ts          # Type definitions
```

## Usage

### Browsing Events
- Visit the home page to see all events
- Use the filter bar at the top to refine your search:
  - Type in the search box to find specific events
  - Select an event type from the dropdown
  - Choose a date range
  - Filter by college or location

### Submitting Events
1. Click the "Submit Event" button
2. Fill out the form with event details:
   - Event title
   - Event type
   - Date
   - College name
   - Location
   - Description
   - Registration URL (optional)
3. Click "Submit" to add your event

## Current Limitations

- Events are stored in memory and will reset on page refresh
- Images are currently assigned automatically from a preset collection
- Authentication and user management not yet implemented

## Future Enhancements

- [ ] Persistent storage with a backend database
- [ ] User authentication and authorization
- [ ] Custom image upload for events
- [ ] Email notifications for new events
- [ ] Event categories and tags
- [ ] Social sharing features

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Demo


https://github.com/user-attachments/assets/befd0683-2449-4507-95be-c63c20709684



