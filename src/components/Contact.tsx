import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, Send, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_mrw8z2d', // Your EmailJS service ID
        'template_6o6c55x', // Your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'gtr6xRE1uxOxgo78w' // Your EmailJS public key
      );
      console.log('EmailJS Success:', result);

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: `Failed to send message: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again later.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "7223918402",
      href: "tel:7223918402",
      color: "green",
    },
    {
      icon: Mail,
      label: "Email",
      value: "ansarishufiyan@gmail.com",
      href: "mailto:ansarishufiyan@gmail.com",
      color: "secondary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ansari-sufiyan",
      href: "https://www.linkedin.com/in/ansari-sufiyan/",
      color: "accent",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ANSARI-12",
      href: "https://github.com/ANSARI-12",
      color: "primary",
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Contact Me</h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            <Card className="p-8 shadow-card bg-card">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm currently looking for new opportunities and exciting projects. Whether you have a question 
                or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                    if (info.href.startsWith("tel:") && isMobile()) {
                      e.preventDefault();
                      window.location.href = info.href;
                    }
                  };
                  return (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith("http") && !info.href.startsWith("tel:") && !info.href.startsWith("mailto:") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") && !info.href.startsWith("tel:") && !info.href.startsWith("mailto:") ? "noopener noreferrer" : undefined}
                      onClick={handleClick}
                      className="flex items-center gap-4 p-4 bg-muted rounded-xl hover:shadow-card transition-smooth group"
                    >
                      <div className={`w-12 h-12 ${info.label === 'Phone' ? 'bg-green-500' : info.label === 'Email' ? 'bg-blue-500' : info.label === 'LinkedIn' ? 'bg-blue-600' : 'bg-gray-900'} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth`}>
                        <Icon className="text-white" size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-muted-foreground font-medium">{info.label}</p>
                        <p className="text-foreground font-semibold truncate">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10">
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground text-sm">Rewa, Madhya Pradesh, India</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in delay-200">
            <Card className="p-8 shadow-card bg-card">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[150px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
