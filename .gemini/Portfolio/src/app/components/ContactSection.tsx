import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';
import { RevealOnScroll } from './ui/RevealOnScroll';


export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'biiwong10@gmail.com',
      link: 'mailto:biiwong10@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '016-803-6878',
      link: 'tel:0168036878',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'MDLD 2972 LOT 28 Taman Aman, Jalan Silam 91100 Lahad Datu Sabah',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', link: 'https://github.com/HeyyouQAQ', color: 'hover:bg-gray-900' },
    { icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/wong-zi-jian-a93a68363/', color: 'hover:bg-gray-900' },
    { icon: Instagram, label: 'Instagram', link: 'https://www.instagram.com/biiwong_0605/', color: 'hover:bg-gray-900' },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 flex items-center justify-center px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl w-full">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <p className="text-blue-600 tracking-wide mb-2">GET IN TOUCH</p>
            <h2 className="text-4xl md:text-5xl mb-4">Contact Me</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col items-center gap-12">
          {/* Contact Information */}
          <div className="space-y-12 w-full max-w-2xl">
            <div className="text-center">
              <h3 className="text-2xl mb-8">Let's Connect</h3>
              <div className="grid gap-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-center gap-6 p-6 rounded-xl border border-gray-200 hover:border-blue-600 hover:shadow-md transition-all duration-300 bg-white group">
                      <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-gray-500 mb-1 pointer-events-none">{item.label}</p>
                        <p className="text-gray-900 font-medium break-all">{item.value}</p>
                      </div>
                    </div>
                  );

                  return (
                    <RevealOnScroll key={item.label} delay={index * 0.1}>
                      {item.link ? (
                        <a href={item.link} className="block">
                          {content}
                        </a>
                      ) : (
                        <div>{content}</div>
                      )}
                    </RevealOnScroll>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h3 className="text-xl mb-6">Follow Me</h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <RevealOnScroll key={social.label} delay={0.2 + (index * 0.1)}>
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-14 h-14 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white hover:shadow-lg hover:-translate-y-1`}
                        aria-label={social.label}
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    </RevealOnScroll>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
