import { useState } from 'react';
import { Code2, Palette, Database, Globe, Smartphone, Boxes, ExternalLink, FileText } from 'lucide-react';
import { RevealOnScroll } from './ui/RevealOnScroll';

const certificates = [
  {
    name: 'Intro to Cybersecurity (Cisco)',
    link: '/I2CSUpdate20251016-34-80lmuj.pdf',
  },
  {
    name: 'Responsive Web Design Certification (FreeCodeCamp)',
    link: 'https://www.freecodecamp.org/certification/heyyouqaq/responsive-web-design-v9',
  },
  {
    name: 'Legacy Responsive Web Design V8 (FreeCodeCamp)',
    link: 'https://www.freecodecamp.org/certification/heyyouqaq/responsive-web-design',
  },
];

export function SkillsSection() {
  const [selectedCertIndex, setSelectedCertIndex] = useState(0);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['C++', 'Java', 'Python', 'Assembly'],
      color: 'blue',
    },
    {
      title: 'Web Developement',
      icon: Globe,
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      color: 'purple',
    },
    {
      title: 'Database & Systems',
      icon: Database,
      skills: ['MySQL / SQL', 'Networking', 'SQLite'],
      color: 'green',
    },
    {
      title: 'Languages',
      icon: Smartphone,
      skills: ['English (Proficient)', 'Chinese (Fluent)', 'Malay (Fluent)'],
      color: 'pink',
    },
    {
      title: 'Certifications',
      icon: Palette,
      skills: certificates.map((c) => c.name),
      color: 'cyan',
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string; btnBg: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', btnBg: 'bg-blue-600' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', btnBg: 'bg-purple-600' },
    green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', btnBg: 'bg-green-600' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', btnBg: 'bg-orange-600' },
    pink: { bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-200', btnBg: 'bg-pink-600' },
    cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-200', btnBg: 'bg-cyan-600' },
  };

  return (
    <section id="skills" className="py-20 md:py-32 flex items-center justify-center px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl w-full">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <p className="text-blue-600 tracking-wide mb-2">WHAT I DO</p>
            <h2 className="text-4xl md:text-5xl mb-4">My Skills</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive set of skills across design and development to bring your projects to life
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color];

            return (
              <RevealOnScroll key={category.title} delay={index * 0.1}>
                <div
                  className="group p-6 bg-white rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col relative"
                >
                  <div className={`w-14 h-14 rounded-lg ${colors.bg} ${colors.text} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl mb-3">{category.title}</h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => {
                      if (category.title === 'Certifications') {
                        const isActive = skillIdx === selectedCertIndex;
                        return (
                          <button
                            key={skill}
                            onClick={() => setSelectedCertIndex(skillIdx)}
                            className={`px-3 py-1 text-sm rounded-full border text-left transition-all duration-300 ${isActive
                              ? 'bg-cyan-600 text-white border-cyan-600 shadow-md font-medium scale-105'
                              : 'bg-cyan-50 text-cyan-600 border-cyan-200 hover:bg-cyan-100 hover:border-cyan-300 cursor-pointer hover:scale-102'
                              }`}
                          >
                            <span className="flex items-center gap-1.5">
                              {isActive && (
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-pulse shrink-0"></span>
                              )}
                              {skill}
                            </span>
                          </button>
                        );
                      }
                      return (
                        <span
                          key={skill}
                          className={`px-3 py-1 text-sm ${colors.bg} ${colors.text} rounded-full border ${colors.border}`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                  {category.title === 'Certifications' && (
                    <div className="mt-auto pt-6">
                      <a
                        href={certificates[selectedCertIndex].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-medium text-white ${colors.btnBg} rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300`}
                      >
                        <span>Select To View Certificate</span>
                        {certificates[selectedCertIndex].link.endsWith('.pdf') ? (
                          <FileText className="w-4 h-4" />
                        ) : (
                          <ExternalLink className="w-4 h-4" />
                        )}
                      </a>
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section >
  );
}
