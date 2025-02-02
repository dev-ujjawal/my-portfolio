import React from 'react';
import { Code2, Database, Layout, Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          About <span className="text-cyan-500">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I'm a second-year engineering student with a passion for full-stack web development.
              My journey in tech started with simple HTML pages and has evolved into creating
              complex web applications using modern technologies.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I love solving problems through code and am constantly learning new technologies
              to improve my skills. When I'm not coding, you can find me participating in
              hackathons, contributing to open-source projects, or exploring new tech trends.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <SkillCard
              icon={<Layout />}
              title="Front-End"
              description="Creating beautiful, responsive interfaces with modern frameworks"
            />
            <SkillCard
              icon={<Database />}
              title="Back-End"
              description="Building robust server-side applications and APIs"
            />
            <SkillCard
              icon={<Code2 />}
              title="Programming"
              description="Proficient in multiple programming languages"
            />
            <SkillCard
              icon={<Terminal />}
              title="Tools"
              description="Experienced with modern development tools and practices"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all transform hover:scale-105">
    <div className="text-cyan-500 mb-4">{icon}</div>
    <h3 className="text-white font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

export default About;