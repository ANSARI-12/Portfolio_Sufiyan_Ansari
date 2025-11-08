import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download, ArrowRight } from "lucide-react";
import profileImage from "@/assets/sufiyan-profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 gradient-hero rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 gradient-accent rounded-full blur-3xl opacity-15 animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center px-4 md:px-8 py-20">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-2">
              👋 Welcome to my Portfolio
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hello, I'm{" "}
               <span style={{ color: "#00bcd4", fontWeight: 700 }}>
        Sufiyan Ansari
      </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
              Full-Stack Developer | MERN | Exploring Cloud, AI & System Design
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate B.Tech graduate with expertise in modern web development.
              Building innovative solutions with React, Node.js, Python, and cutting-edge technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group"
              >
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" size={20} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2" size={20} />
                Contact Me
              </Button>
            </div>

            {/* Download Resume Section */}
            <div className="pt-4">
              <a
                href="/sufiyan-resume.pdf"
                download="Sufiyan_Ansari_Resume.pdf"
                className="bg-white p-4 rounded-2xl shadow-hover flex items-center gap-3 hover:scale-105 transition-smooth cursor-pointer w-fit"
              >
                <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center">
                  <Download className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-600">Download Resume</p>
                  <p className="text-xs text-blue-500">Get my CV</p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/ANSARI-12"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-smooth shadow-card hover:shadow-hover"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/sufiyan-ansari"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-smooth shadow-card hover:shadow-hover"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ansarishufiyan@gmail.com"
                className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-smooth shadow-card hover:shadow-hover"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-fade-in delay-200">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative Circle */}
              <div className="absolute inset-0 gradient-accent rounded-full blur-2xl opacity-30 animate-pulse"></div>
              
              {/* Profile Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-hover transform hover:scale-105 transition-smooth">
                <img
                  src={profileImage}
                  alt="Sufiyan Ansari - Full-Stack Developer"
                  className="w-full h-auto object-cover"
                />
              </div>


            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
