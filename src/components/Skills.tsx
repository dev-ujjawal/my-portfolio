import React from 'react';

const skillCategories = [
  {
    title: 'Front-End',
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'React.js', level: 80 },
      { name: 'Tailwind CSS', level: 75 },
    ],
  },
  {
    title: 'Back-End',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'PHP', level: 70 },
      { name: 'SQL', level: 75 },
      { name: 'Express.js', level: 70 },
    ],
  },
  {
    title: 'Programming',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Java', level: 75 },
      { name: 'C++', level: 70 },
      { name: 'C', level: 65 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'GitHub', level: 85 },
      { name: 'APIs', level: 75 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Technical <span className="text-cyan-500">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-gray-300">{name}</span>
      <span className="text-cyan-500">{level}%</span>
    </div>
    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

export default Skills;