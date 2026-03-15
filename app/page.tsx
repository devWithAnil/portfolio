'use client';

import Hero from '@/components/hero'
import Services from '@/components/service';
import Resume from '@/components/resume';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import ClientReview from '@/components/client-review';
import Contact from '@/components/contact';

const HomePage = () => {
  return (
    <main>
      <section id="hero"><Hero /></section>
      <section id="services"><Services /></section>
      <section id="experience"><Resume /></section>
      <section id="works"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="testimonials"><ClientReview /></section>
      <section id="contact"><Contact /></section>
    </main>
  )
}

export default HomePage;