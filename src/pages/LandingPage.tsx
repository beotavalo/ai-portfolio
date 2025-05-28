import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  ExternalLink,
} from "lucide-react";

import ProjectCard from "../components/ProjectCard";
import SkillsDisplay from "../components/SkillsDisplay";
import ExperienceTimeline from "../components/ExperienceTimeline";
import ContactSection from "../components/ContactSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border px-4 md:px-8 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">John Doe</div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a href="#skills" className="hover:text-primary transition-colors">
              Skills
            </a>
            <a
              href="#experience"
              className="hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          <div className="flex md:hidden">
            {/* Mobile menu button would go here */}
            <button className="p-2">Menu</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="about"
        className="min-h-[90vh] flex items-center justify-center bg-background py-20"
      >
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80"
                alt="John Doe - ML Engineer"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">John Doe</h1>
            <h2 className="text-2xl md:text-3xl text-primary mb-6">
              Machine Learning Engineer
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Transforming complex data into actionable insights through
              innovative machine learning solutions. Specialized in computer
              vision, natural language processing, and predictive analytics.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:john.doe@example.com"
                className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#projects" aria-label="Scroll to projects section">
            <ChevronDown size={32} />
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore some of my recent machine learning projects that
              demonstrate my expertise and problem-solving abilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Image Classification System"
              description="A deep learning model for classifying images with 98% accuracy using convolutional neural networks."
              image="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&q=80"
              technologies={["TensorFlow", "Python", "CNN", "Keras"]}
              demoLink="https://example.com/demo"
              repoLink="https://github.com/example/repo"
            />
            <ProjectCard
              title="Natural Language Processing Tool"
              description="Sentiment analysis and text classification tool for customer feedback processing."
              image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&q=80"
              technologies={["PyTorch", "NLTK", "Transformers", "Python"]}
              demoLink="https://example.com/demo"
              repoLink="https://github.com/example/repo"
            />
            <ProjectCard
              title="Predictive Analytics Dashboard"
              description="Interactive dashboard for sales forecasting using time series analysis and machine learning."
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80"
              technologies={["Scikit-learn", "Pandas", "React", "Flask"]}
              demoLink="https://example.com/demo"
              repoLink="https://github.com/example/repo"
            />
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              View more projects on GitHub <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My expertise spans across various machine learning technologies,
              programming languages, and frameworks.
            </p>
          </motion.div>

          <SkillsDisplay />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My journey in the field of machine learning and data science,
              showcasing my growth and achievements.
            </p>
          </motion.div>

          <ExperienceTimeline />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interested in collaborating or have questions about my work? Feel
              free to reach out!
            </p>
          </motion.div>

          <ContactSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:john.doe@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
