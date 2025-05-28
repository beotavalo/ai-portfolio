import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from "lucide-react";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Navigation */}
      <header className="container mx-auto py-6 px-4 md:px-6 flex justify-between items-center">
        <div className="text-xl font-bold">John Doe</div>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-primary transition-colors">
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
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center space-y-8 text-xl">
          <button onClick={toggleMenu} className="absolute top-6 right-6">
            <X size={24} />
          </button>
          <a
            href="#about"
            onClick={toggleMenu}
            className="hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={toggleMenu}
            className="hover:text-primary transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={toggleMenu}
            className="hover:text-primary transition-colors"
          >
            Skills
          </a>
          <a
            href="#experience"
            onClick={toggleMenu}
            className="hover:text-primary transition-colors"
          >
            Experience
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="hover:text-primary transition-colors"
          >
            Contact
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="about"
        className="container mx-auto py-20 px-4 md:px-6 flex flex-col md:flex-row items-center"
      >
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Machine Learning Engineer
          </h1>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground">
            Building intelligent systems that solve real-world problems through
            data-driven approaches and deep learning techniques.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="mailto:contact@example.com">
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80"
              alt="John Doe"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-muted py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="h-48 bg-muted-foreground/10 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&q=80"
                  alt="Neural Network Visualization"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Image Classification System
                </h3>
                <p className="text-muted-foreground mb-4">
                  Deep learning model for real-time image classification with
                  98% accuracy on benchmark datasets.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                    PyTorch
                  </span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                    CNN
                  </span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                    Transfer Learning
                  </span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  View Project <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="h-48 bg-muted-foreground/10 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80"
                  alt="Data Visualization"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Predictive Analytics Platform
                </h3>
                <p className="text-muted-foreground mb-4">
                  End-to-end solution for time series forecasting with
                  interactive visualizations and anomaly detection.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                    TensorFlow
                  </span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                    LSTM
                  </span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                    React
                  </span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  View Project <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="h-48 bg-muted-foreground/10 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80"
                  alt="NLP Project"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  NLP Recommendation Engine
                </h3>
                <p className="text-muted-foreground mb-4">
                  Content-based recommendation system using advanced NLP
                  techniques and transformer models.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                    BERT
                  </span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                    Hugging Face
                  </span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                    FastAPI
                  </span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  View Project <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Machine Learning */}
            <div>
              <h3 className="text-xl font-bold mb-6">Machine Learning</h3>
              <div className="space-y-4">
                <SkillBar skill="Deep Learning" proficiency={95} />
                <SkillBar skill="Computer Vision" proficiency={90} />
                <SkillBar
                  skill="Natural Language Processing"
                  proficiency={85}
                />
                <SkillBar skill="Reinforcement Learning" proficiency={75} />
              </div>
            </div>

            {/* Programming */}
            <div>
              <h3 className="text-xl font-bold mb-6">Programming</h3>
              <div className="space-y-4">
                <SkillBar skill="Python" proficiency={98} />
                <SkillBar skill="TensorFlow/PyTorch" proficiency={92} />
                <SkillBar skill="SQL" proficiency={85} />
                <SkillBar skill="JavaScript/React" proficiency={80} />
              </div>
            </div>

            {/* Data Science */}
            <div>
              <h3 className="text-xl font-bold mb-6">Data Science</h3>
              <div className="space-y-4">
                <SkillBar skill="Data Analysis" proficiency={95} />
                <SkillBar skill="Feature Engineering" proficiency={90} />
                <SkillBar skill="Statistical Modeling" proficiency={85} />
                <SkillBar skill="A/B Testing" proficiency={80} />
              </div>
            </div>

            {/* Tools & Platforms */}
            <div>
              <h3 className="text-xl font-bold mb-6">Tools & Platforms</h3>
              <div className="space-y-4">
                <SkillBar skill="Docker/Kubernetes" proficiency={85} />
                <SkillBar skill="AWS/GCP" proficiency={80} />
                <SkillBar skill="MLOps" proficiency={75} />
                <SkillBar skill="Git/CI/CD" proficiency={90} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-muted py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Professional Experience
          </h2>

          <div className="relative border-l-2 border-primary/30 ml-6 md:ml-0 md:mx-auto max-w-3xl pl-8 space-y-16">
            {/* Experience 1 */}
            <div className="relative">
              <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-primary bg-background"></div>
              <h3 className="text-xl font-bold">
                Senior Machine Learning Engineer
              </h3>
              <p className="text-primary font-medium">
                TechCorp AI | 2021 - Present
              </p>
              <p className="mt-3 text-muted-foreground">
                Led a team of 5 engineers in developing computer vision
                solutions for autonomous systems. Improved model accuracy by 35%
                and reduced inference time by 60% through architecture
                optimization.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                  PyTorch
                </span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                  CUDA
                </span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                  MLOps
                </span>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="relative">
              <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-primary bg-background"></div>
              <h3 className="text-xl font-bold">Machine Learning Engineer</h3>
              <p className="text-primary font-medium">
                DataInnovate | 2018 - 2021
              </p>
              <p className="mt-3 text-muted-foreground">
                Designed and implemented NLP models for sentiment analysis and
                text classification. Created an end-to-end pipeline for data
                processing, model training, and deployment.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                  BERT
                </span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                  TensorFlow
                </span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                  Docker
                </span>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="relative">
              <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-primary bg-background"></div>
              <h3 className="text-xl font-bold">Data Scientist</h3>
              <p className="text-primary font-medium">
                AnalyticsPro | 2016 - 2018
              </p>
              <p className="mt-3 text-muted-foreground">
                Developed predictive models for customer churn and lifetime
                value. Created interactive dashboards for business stakeholders
                to visualize key metrics and insights.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                  Scikit-learn
                </span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                  Pandas
                </span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                  Tableau
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <a
                    href="mailto:contact@example.com"
                    className="hover:text-primary transition-colors"
                  >
                    contact@example.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="h-5 w-5 mr-3 text-primary" />
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    github.com/johndoe
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 mr-3 text-primary" />
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    linkedin.com/in/johndoe
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold mb-2">Available for:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Full-time positions</li>
                  <li>Consulting projects</li>
                  <li>Speaking engagements</li>
                  <li>Technical workshops</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Your Name" className="w-full" />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="w-full"
                  />
                </div>
                <div>
                  <Input placeholder="Subject" className="w-full" />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="w-full min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a href="mailto:contact@example.com">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Skill Bar Component
function SkillBar({
  skill,
  proficiency,
}: {
  skill: string;
  proficiency: number;
}) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill}</span>
        <span className="text-sm text-muted-foreground">{proficiency}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full"
          style={{ width: `${proficiency}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Home;
