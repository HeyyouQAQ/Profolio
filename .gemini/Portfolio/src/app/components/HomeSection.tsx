import { ImageWithFallback } from './figma/ImageWithFallback';
import { RevealOnScroll } from './ui/RevealOnScroll';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from './ui/button';

interface HomeSectionProps {
  heroImage: string;
}

export function HomeSection({ heroImage }: HomeSectionProps) {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <RevealOnScroll>
            <div className="space-y-2">
              <p className="text-blue-600 tracking-wide">WELCOME TO MY PORTFOLIO</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl">
                Hi, I'm <span className="text-blue-600">Wong Zi Jian</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600">
                Diploma Student in Software Engineering
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm software engineering student at Tunku Abdul Rahman University of Management and Technology (TARUMT). Before my graduation I have one internship at Sri Komputer locate at Kota Kinabalu Sabah. When in the internship my role as the consulting department at app development position, worked on web application development and system documentation during my internship, with responsibilities covering UI/UX design, frontend development, testing support, and deployment preparation. Developed frontend interfaces using React, TypeScript, and Tailwind CSS, designed UI/UX layouts in Figma, prepared workflow documentation, and supported project updates for web-based systems. Also gained hands-on experience through on-site technical support activities, including hardware testing, network support, and system troubleshooting..
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.4}>
            <div className="flex gap-8 pt-4">

              <div>
                <p className="text-3xl text-blue-600">5</p>
                <p className="text-gray-600">Academic Projects</p>
              </div>
              <div>
                <p className="text-3xl text-blue-600">1</p>
                <p className="text-gray-600">Internship Projects</p>
              </div>
              <div>
                <p className="text-3xl text-blue-600">1</p>
                <p className="text-gray-600">Self Projects</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Right Image */}
        <div className="relative">
          <RevealOnScroll delay={0.3}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={heroImage}
                alt="Professional workspace"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
            </div>
          </RevealOnScroll>
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-600 rounded-full opacity-20 blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}
