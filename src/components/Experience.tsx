import { Briefcase, Code, Award } from "lucide-react";
import { Card } from "@/components/ui/card";


const Experience = () => {
  const experiences = [
    {
      role: "MERN Stack Developer Training",
      company: "NXTWAVE",
      type: "Training",
      description: "Intensive hands-on training in full-stack web development with focus on MERN stack technologies.",
      highlights: [
        "Building complete web applications from scratch",
        "Learning industry best practices and modern development workflows",
        "Working with MongoDB, Express.js, React.js, and Node.js",
      ],
      icon: Code,
      color: "primary",
      logo: "https://cdn.brandfetch.io/idIfKGA02M/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1756455674031",
    },
    {
      role: "Competitive Coding Intern",
      company: "United Global Info Services Pvt. Ltd.",
      type: "Internship",
      description: "Focused on algorithmic problem-solving and competitive programming.",
      highlights: [
        "Solved 100+ problems on LeetCode and HackerRank",
        "Mastered data structures and algorithms",
        "Improved problem-solving efficiency and code optimization",
      ],
      icon: Award,
      color: "secondary",
      logo: "https://cdn.brandfetch.io/idsw5fErFm/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
    },
    {
      role: "Python Development Intern",
      company: "United Global Info Services Pvt. Ltd.",
      type: "Internship",
      description: "Worked on Python application development and optimization.",
      highlights: [
        "Developed and optimized Python applications",
        "Implemented debugging solutions for complex issues",
        "Learned best practices in Python programming",
      ],
      icon: Briefcase,
      color: "accent",
      logo: "https://cdn.brandfetch.io/idsw5fErFm/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Career Path</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Experience & Training</h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <Card
                key={index}
                className="p-8 shadow-card hover:shadow-hover transition-smooth transform hover:-translate-y-1 animate-fade-in bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className={`${exp.logo ? 'w-32 h-32' : 'w-16 h-16'} flex-shrink-0 rounded-2xl flex items-center justify-center shadow-card overflow-hidden`}>
                    {exp.logo ? (
                      <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-cover" />
                    ) : (
                      <div className={`w-full h-full bg-gradient-${exp.color} flex items-center justify-center`}>
                        <Icon className="text-white" size={32} />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                        <p className="text-lg text-primary font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-2">
                        {/* <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                          {exp.period}
                        </span> */}
                        <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
