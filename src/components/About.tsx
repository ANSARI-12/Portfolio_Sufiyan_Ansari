import { GraduationCap, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "United College of Engineering and Research, Rewa",
      affiliated: "Dr. A.P.J Abdul Kalam Technical University, Lucknow",
      year: "2020 - 2024",
      icon: "🎓",
    },
    {
      degree: "12th Standard",
      institution: "Jesus Christ School, Rewa, M.P",
      year: "2020",
      icon: "📚",
    },
    {
      degree: "10th Standard",
      institution: "Jesus Christ School, Rewa, M.P",
      year: "2018",
      icon: "📖",
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Get To Know</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">About Me</h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <div className="space-y-6 animate-fade-in">
            <Card className="p-8 shadow-card hover:shadow-hover transition-smooth bg-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">My Journey</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I am a fresher graduate engineering student with a passion for software development. 
                    I completed my B.Tech and have learned trending skills like <strong>React, Node, Python, C++, and JavaScript</strong>.
                  </p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Throughout my academic journey, I've focused on building practical skills through hands-on projects 
                and internships. I'm particularly interested in <strong>Full-Stack Web Development</strong> using the 
                MERN stack, and I continuously work on improving my problem-solving abilities through competitive coding.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                My goal is to contribute to innovative projects that make a real-world impact while continuously 
                learning and growing as a software developer. I believe in writing clean, maintainable code and 
                following industry best practices.
              </p>
            </Card>
          </div>

          {/* Right: Education Timeline */}
          <div className="space-y-6 animate-fade-in delay-200">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Calendar className="text-primary" size={28} />
              Education Timeline
            </h3>
            
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 shadow-card hover:shadow-hover transition-smooth transform hover:-translate-y-1 bg-card"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{edu.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <h4 className="text-lg font-bold">{edu.degree}</h4>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-medium">{edu.institution}</p>
                    {edu.affiliated && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Affiliated to {edu.affiliated}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
