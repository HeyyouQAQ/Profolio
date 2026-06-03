import { Calendar, MapPin, Briefcase, Github, ExternalLink } from 'lucide-react';
import { RevealOnScroll } from './ui/RevealOnScroll';

export function ExperienceSection() {
  const experiences = [
    {
      company: 'Stock Management App',
      position: 'Self Project',
      period: '2026',
      description: 'A stock management app allow user to manage and record their stock to achieve thier financial purpose',
      achievements: [
        'Languages Used: Flutter',
        'Tools Used: SQlite, SQLCipher'
      ],
    },
    {
      company: 'Gold Trading Website',
      position: 'Internship Project 1',
      period: '2026',
      description: 'A e commerce website allow goldbar for selldown and buy',
      achievements: [
        'Languages Used: React, RUST, MariaDB',
        'Used PuTTY deploy company server',
      ],
    },
    {
      company: 'Sri Komputer Sdn. Bhd.',
      companyLink: 'https://web.srikom.com.my/',
      position: 'Consulting Service Department',
      period: '12/Jan/2026 - 31/MAY/2026',
      description: 'Worked on follow the daily provided task include new peoject, update existing project, special task about company issues and also on-site work.',
      achievements: [
        'Programing language learned, professional documentation, deployment preparation, support to on-site user, UI/UX design and workflow documentation.',
      ],
    },
    {
      company: 'Tunku Abdul Rahman University of Management and Technology (TARUMT)',
      position: 'Diploma in Software Engineering',
      period: '2024 - 2026',
      description: 'Pursuing Diploma in Software Engineering.',
      achievements: [
        'Relevant coursework in Systems Development, Programming, and Database Design',
      ],
    },
    {
      company: 'Restaurant Human Resources and Worker Management System',
      position: 'Website Project (Semester 5)',
      period: 'Semester 5',
      description: 'Values-driven development for HR management.',
      achievements: [
        'Languages Used: PHP, HTML, CSS, JavaScript',
        'Implemented worker management tables and HR functions',
      ],
      githubLink: 'https://github.com/HeyyouQAQ/MiniProject',
    },
    {
      company: 'Video Game Purchase and Wallet System',
      position: 'Assembly Project (Semester 3)',
      period: 'Semester 3',
      description: 'Low-level programming project for game store management.',
      achievements: [
        'Languages Used: Assembly',
        'Handled memory management and direct hardware interaction concepts',
      ],
      githubLink: 'https://github.com/HeyyouQAQ/Video-Game-Purchase-and-Wallet-System',
    },
    {
      company: 'Library System',
      position: 'Java Project (Semester 3)',
      period: 'Semester 3',
      description: 'Desktop application for library management.',
      achievements: [
        'Languages Used: Java',
        'Object-Oriented Programming principles applied',
      ],
      githubLink: 'https://github.com/HeyyouQAQ/Library-System',
    },
    {
      company: 'Hotel Reservation Database Design',
      position: 'Database Project (Semester 2)',
      period: 'Semester 2',
      description: 'Database schema design and normalization.',
      achievements: [
        'Languages Used: SQL',
        'Designed efficient tables for hotel system',
      ],
      githubLink: 'https://github.com/HeyyouQAQ/Hotel-Reservation-Database-Design',
    },
    {
      company: 'Fast Food Ordering System',
      position: 'C++ Project (Semester 1)',
      period: 'Semester 1',
      description: 'Console-based ordering system.',
      achievements: [
        'Languages Used: C++ Language',
        'Fundamentals of programming and logic',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 flex items-center justify-center px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl w-full">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <p className="text-blue-600 tracking-wide mb-2">MY PATH</p>
            <h2 className="text-4xl md:text-5xl mb-4">Education & Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My academic journey and the practical projects I've built along the way.
            </p>
          </div>
        </RevealOnScroll>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-0 md:pl-24">
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                <RevealOnScroll delay={index * 0.1}>
                  <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl mb-1">{exp.position}</h3>
                        {exp.companyLink ? (
                          <a
                            href={exp.companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg text-blue-600 hover:text-blue-800 hover:underline transition-colors inline-flex items-center gap-1 group/link"
                          >
                            {exp.company}
                            <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover/link:opacity-100 transition-opacity" />
                          </a>
                        ) : (
                          <p className="text-lg text-blue-600">{exp.company}</p>
                        )}
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Key Achievements:</p>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.githubLink && (
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <a
                          href={exp.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors group"
                        >
                          <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          <span>View Project</span>
                        </a>
                      </div>
                    )}
                  </div>
                </RevealOnScroll>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
