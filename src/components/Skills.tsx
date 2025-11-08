import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faDatabase);
import { Card } from "@/components/ui/card";
import softSkillsIcon from "@/assets/soft-skills-icon.png";
import languagesIcon from "@/assets/languages-icon.png";
import webTechnologiesIcon from "@/assets/web-technologies-icon.png";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: languagesIcon,
      color: "primary",
      skills: ["Python", "C", "C++", "SQL", "JavaScript (ES6+)"],
      useFontAwesome: false,
    },
    {
      title: "Web Technologies",
      icon: webTechnologiesIcon,
      color: "secondary",
      skills: ["HTML", "CSS", "Bootstrap", "React.js", "Node.js", "Express.js", "Next.js"],
      useFontAwesome: false,
    },
    {
      title: "Databases & Tools",
      icon: faDatabase,
      color: "accent",
      skills: ["MongoDB", "MySQL", "Git", "VS Code", "Microsoft Azure Fundamentals"],
      useFontAwesome: true,
    },
    {
      title: "Soft Skills",
      icon: softSkillsIcon,
      color: "primary",
      skills: ["Communication", "Teamwork", "Problem Solving", "Time Management", "Adaptability", "Continuous Learning"],
      useFontAwesome: false,
    },
  ];

  const expertise = [
    { name: "MERN Stack Development", level: 90 },
    { name: "Frontend Development (React)", level: 85 },
    { name: "Backend Development (Node.js)", level: 80 },
    { name: "Database Management", level: 75 },
    { name: "Competitive Coding", level: 70 },
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">My Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full"></div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 shadow-card hover:shadow-hover transition-smooth transform hover:-translate-y-2 animate-fade-in bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 gradient-${category.color} rounded-xl flex items-center justify-center mb-4 shadow-card`}>
                  {category.useFontAwesome ? (
                    <FontAwesomeIcon icon={category.icon} className="text-white text-2xl" />
                  ) : (
                    <img src={category.icon} alt={`${category.title} icon`} className="w-8 h-8" />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-muted text-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth flex items-center"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Expertise Levels */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Proficiency</h3>
          <div className="space-y-6">
            {expertise.map((item, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-muted-foreground">{item.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-hero rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
