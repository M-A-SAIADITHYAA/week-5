import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { EventProvider } from "@/context/EventContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "College Events Hub",
  description: "Discover college events, hackathons, and workshops across multiple institutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
        <EventProvider>
          <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <a href="/" className="text-xl font-bold text-indigo-600">College Events Hub</a>
                </div>
                <div className="flex items-center space-x-4">
                  <a href="/events" className="text-gray-700 hover:text-indigo-600">Events</a>
                  <a href="/hackathons" className="text-gray-700 hover:text-indigo-600">Hackathons</a>
                  <a href="/workshops" className="text-gray-700 hover:text-indigo-600">Workshops</a>
                </div>
              </div>
            </div>
          </nav>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
        </EventProvider>
      </body>
    </html>
  );
}
