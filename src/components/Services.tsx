import { Globe, Code, Server, Cloud, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Full-Stack Web Development",
      description: "Custom web applications using the MERN Stack (MongoDB, Express, React, Node.js) with modern best practices and scalable architecture.",
      features: ["Responsive Design", "RESTful APIs", "Database Integration", "State Management"],
      color: "primary",
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "Beautiful, responsive UI design using React.js, Bootstrap, and modern CSS. Focus on user experience and performance optimization.",
      features: ["React Components", "Responsive Layouts", "CSS Animations", "Cross-browser Support"],
      color: "secondary",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Robust API creation and integration using Node.js and Express.js. Secure authentication and efficient data management.",
      features: ["REST APIs", "JWT Authentication", "Database Design", "Error Handling"],
      color: "accent",
    },
    {
      icon: Cloud,
      title: "Deployment & Optimization",
      description: "Deploy web applications to cloud platforms with performance tuning and optimization for speed and reliability.",
      features: ["Cloud Deployment", "Performance Tuning", "SEO Optimization", "Security Best Practices"],
      color: "primary",
    },
    {
      icon: Trophy,
      title: "Competitive Coding Assistance",
      description: "Guidance in algorithmic problem-solving, data structures, and code optimization for competitive programming.",
      features: ["Algorithm Design", "Code Optimization", "Problem Solving", "Interview Prep"],
      color: "secondary",
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">What I Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Services</h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Comprehensive web development services to bring your ideas to life with modern technologies and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 shadow-card hover:shadow-hover transition-smooth transform hover:-translate-y-2 animate-fade-in bg-card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 gradient-${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-card group-hover:scale-110 transition-smooth`}>
                  <Icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
