'use client';

import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import AboutMe from '@/components/sections/AboutMe';
import ProjectShowcase from '@/components/sections/ProjectShowcase';
import SkillsMastery from '@/components/sections/SkillsMastery';
import JourneyTimeline from '@/components/sections/JourneyTimeline';
import Contact from '@/components/sections/Contact';
import ParticlesBackground from '@/components/ui/ParticlesBackground';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div className="relative z-10 overflow-x-hidden space-y-0">
        {/* Dark subtle particles background for the rest of the site */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <ParticlesBackground type="stars" />
        </div>
        {/* About Me section with no space before it to attach smoothly to hero */}
        <div className="mt-0">
          <AboutMe />
        </div>
        <div className="mb-[-2rem] md:mb-[-3rem] lg:mb-[-4rem]">
          <ProjectShowcase />
        </div>
        <div className="mt-24 md:mt-28 lg:mt-32 mb-[-2rem] md:mb-[-3rem] lg:mb-[-4rem]">
          <SkillsMastery />
        </div>
        <div className="mt-20 md:mt-24 lg:mt-28 mb-[-2rem] md:mb-[-3rem] lg:mb-[-4rem]">
          <JourneyTimeline />
        </div>
        <div className="mt-20 md:mt-24 lg:mt-28">
          <Contact />
        </div>
      </div>
    </main>
  );
}
