import React from 'react';
import PropertyHighlights from '../components/PropertyHighlights';

export const metadata = {
  title: 'Property Highlights Demo',
  description: 'A demo of the Property Highlights component',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">Property Highlights Demo</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <PropertyHighlights />
        </div>
      </div>
    </main>
  );
}