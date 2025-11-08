import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useRef } from "react";

const Projects = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    // Start at the first slide (Nxt Trendz)
    if (carouselRef.current) {
      carouselRef.current.scrollTo(0);
    }
  }, []);

  const projects = [
    {
      title: "Nxt Trendz",
      description: "A cutting-edge e-commerce platform inspired by Amazon and Flipkart. Built with login, product listing, and detail pages using React Router and components. Implemented secure JWT authentication and REST API integration.",
      tech: ["React JS", "JavaScript", "CSS", "Bootstrap", "REST API", "JWT"],
      liveLink: "https://sufiyanNxtTrend.ccbp.tech",
      category: "E-Commerce",
      year: "2024",
    },
    {
      title: "Jobby App",
      description: "A comprehensive job search platform with secure login and protected routes. Managed login state with JWT tokens and React Router, integrating REST API calls for job data.",
      tech: ["React JS", "JavaScript", "CSS", "Bootstrap", "REST API", "JWT"],
      liveLink: "https://sufiyanJobby.ccbp.tech",
      category: "Job Portal",
      year: "2024",
    },
    {
      title: "Todos Application",
      description: "Developed a responsive web app with full CRUD functionality and data persistence using HTML, CSS, Bootstrap, and JavaScript.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      liveLink: "https://sufiyanTodo.ccbp.tech",
      category: "Productivity",
      year: "2024",
    },
    {
      title: "Restaurant App",
      description: "Developed the frontend of a restaurant app similar to Zomato using React within a week. Focused on enabling users to explore menu categories, select dishes, and add them to the shopping cart.",
      tech: ["React JS", "JavaScript", "CSS"],
      liveLink: "https://sufiresturant.ccbp.tech/",
      category: "Food & Dining",
      year: "2024",
    },
    {
      title: "IPL Dashboard",
      description: "Built an IPL Dashboard in one day using React that allows users to view the status of matches played by different teams.",
      tech: ["React JS", "JavaScript"],
      liveLink: "https://sufiyanipl.ccbp.tech/",
      category: "Sports",
      year: "2024",
    },
    {
      title: "Movie Database",
      description: "Developed a Movie Database application with React enabling users to browse popular, top-rated, and upcoming movies, and search for specific titles.",
      tech: ["React JS", "JavaScript", "MySQL"],
      category: "Entertainment",
      year: "2024",
    },
    {
      title: "Blockchain Voting System",
      description: "Developed a secure and decentralized voting system using blockchain technology.",
      tech: ["Blockchain", "Smart Contracts"],
      category: "Security",
      year: "2023",
    },
    {
      title: "Wikipedia Search Application",
      description: "Designed and developed a dynamic search interface that interacts with the Wikipedia API to fetch and display real-time search results. The application features a clean UI, responsive layout, and intuitive user experience using modern web technologies.",
      tech: ["HTML", "CSS", "JavaScript", "REST API", "Bootstrap"],
      category: "UI Component",
      year: "2024",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            A showcase of my web development projects demonstrating proficiency in modern technologies and problem-solving skills.
          </p>
        </div>

        <Carousel ref={carouselRef} opts={{ loop: true, startIndex: 1 }} className="w-full max-w-5xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3">
                <Card
                  className="group shadow-card hover:shadow-hover transition-smooth transform hover:-translate-y-2 overflow-hidden animate-fade-in bg-card relative h-full"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Project Header */}
                  <div className="p-6 pb-0">
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="px-6 pb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-muted text-foreground text-xs rounded hover:bg-primary hover:text-primary-foreground transition-smooth"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons - Fixed at bottom */}
                  {project.title !== "Blockchain Voting System" && project.title !== "Wikipedia Search Application" && project.title !== "Movie Database" && (
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <Button
                        variant="default"
                        size="sm"
                        className="w-full"
                        asChild
                      >
                        <a href={project.liveLink || "https://github.com/ANSARI-12"} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          View Live
                        </a>
                      </Button>
                    </div>
                  )}

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none"></div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* GitHub CTA */}
        <div className="mt-16 text-center animate-fade-in">
          <p className="text-muted-foreground mb-6">
            More projects available on my GitHub profile
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/ANSARI-12" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
              Visit GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
