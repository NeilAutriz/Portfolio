'use client';

import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import ProjectShowcase from '@/components/sections/ProjectShowcase';
import SkillsMastery from '@/components/sections/SkillsMastery';
import JourneyTimeline from '@/components/sections/JourneyTimeline';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div className="relative z-10 overflow-x-hidden">
        <ProjectShowcase />
        <SkillsMastery />
        <JourneyTimeline />
        <Contact />
      </div>
    </main>
  );
}
