import { useState, useEffect } from 'react';
import { Navigation, MobileNavigation } from './components/Navigation';
import { HomeSection } from './components/HomeSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';

import profileImage from '../assets/profile.jpg';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const heroImage = profileImage;

  // Handle scroll to section
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Desktop Navigation */}
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />

      {/* Mobile Navigation */}
      <MobileNavigation activeSection={activeSection} onSectionChange={handleSectionChange} />

      {/* Sections */}
      <HomeSection heroImage={heroImage} />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6 text-center mb-16 md:mb-0">
        <p className="text-gray-400">
        </p>
      </footer>
    </div>
  );
}
