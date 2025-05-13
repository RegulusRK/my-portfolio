import React from 'react';
import { Code, PaintBucket, Server, Database, Layout, BarChart } from 'lucide-react';
import * as SimpleIcons from 'simple-icons';

interface SkillCategory {
  id: number;
  title: string;
  icon: React.ReactNode;
  skills: Array<{
    name: string;
    icon: string;
  }>;
}

const Skills = () => {
  const getIconSvg = (iconName: string) => {
    const normalizedName = iconName.toLowerCase().replace(/\s+/g, '');
    const iconKey = `si${normalizedName.charAt(0).toUpperCase()}${normalizedName.slice(1)}` as keyof typeof SimpleIcons;
    const icon = SimpleIcons[iconKey] as { svg: string };
    return icon ? `data:image/svg+xml;utf8,${encodeURIComponent(icon.svg)}` : null;
  };

  const skillCategories: SkillCategory[] = [
    {
      id: 1,
      title: "Frontend",
      icon: <Layout size={24} />,
      skills: [
        { name: "HTML5", icon: "html5" },
        { name: "CSS3", icon: "css3" },
        { name: "JavaScript", icon: "javascript" },
        { name: "React", icon: "react" },
        { name: "Vue.js", icon: "vuedotjs" },
        { name: "Tailwind CSS", icon: "tailwindcss" }
      ]
    },
    {
      id: 2,
      title: "Backend",
      icon: <Server size={24} />,
      skills: [
        { name: "Node.js", icon: "nodedotjs" },
        { name: "Express", icon: "express" },
        { name: "Python", icon: "python" },
        { name: "Java", icon: "java" }
      ]
    },
    {
      id: 3,
      title: "Databases",
      icon: <Database size={24} />,
      skills: [
        { name: "MongoDB", icon: "mongodb" },
        { name: "MySQL", icon: "mysql" }
      ]
    },
    {
      id: 4,
      title: "Design",
      icon: <PaintBucket size={24} />,
      skills: [
        { name: "Figma", icon: "figma" },
        { name: "UI/UX", icon: "sketch" },
        { name: "Responsive Design", icon: "materialdesign" }
      ]
    },
    {
      id: 5,
      title: "DevOps",
      icon: <Code size={24} />,
      skills: [
        { name: "Git", icon: "git" },
        { name: "CI/CD", icon: "githubactions" },
        { name: "Vercel", icon: "vercel" }
      ]
    },
    {
      id: 6,
      title: "Data Visualization",
      icon: <BarChart size={24} />,
      skills: [
        { name: "Power BI", icon: "powerbi" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            I am continuously developing new technical skills. Here's an overview of the competencies I am <strong>exploring and refining</strong> along my journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => {
                  const iconSvg = getIconSvg(skill.icon);
                  return (
                    <span 
                      key={index}
                      className="bg-gray-700/50 text-gray-200 px-3 py-1 rounded-full text-sm transition-colors duration-300 hover:bg-blue-900/50 hover:text-blue-300 flex items-center gap-2"
                    >
                      {iconSvg && (
                        <img 
                          src={iconSvg} 
                          alt={`${skill.name} icon`} 
                          className="w-4 h-4"
                          style={{ filter: 'invert(1)' }}
                        />
                      )}
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;