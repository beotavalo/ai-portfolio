import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ChevronDown,
  ChevronUp,
  Building,
  Calendar,
  Award,
} from "lucide-react";

interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

interface ExperienceTimelineProps {
  experiences?: Experience[];
}

const ExperienceTimeline = ({
  experiences = defaultExperiences,
}: ExperienceTimelineProps) => {
  const [expandedId, setExpandedId] = React.useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-background p-6 rounded-lg">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Professional Experience
      </h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20 rounded-full"></div>

        {/* Experience items */}
        {experiences.map((experience, index) => {
          const isExpanded = expandedId === experience.id;
          const isEven = index % 2 === 0;

          return (
            <div key={experience.id} className="mb-12 relative">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -mt-1 w-5 h-5 rounded-full bg-primary border-4 border-background z-10"></div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`md:w-1/2 ${isEven ? "md:pr-12 md:ml-auto" : "md:pl-12"}`}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div
                      className="p-5 cursor-pointer flex justify-between items-start"
                      onClick={() => toggleExpand(experience.id)}
                    >
                      <div>
                        <h3 className="text-xl font-semibold">
                          {experience.position}
                        </h3>
                        <div className="flex items-center mt-1 text-muted-foreground">
                          <Building className="h-4 w-4 mr-1" />
                          <span>{experience.company}</span>
                        </div>
                        <div className="flex items-center mt-1 text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{experience.duration}</span>
                          <span className="mx-2">•</span>
                          <span>{experience.location}</span>
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>

                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Separator />
                        <div className="p-5">
                          <p className="mb-4">{experience.description}</p>

                          {experience.achievements.length > 0 && (
                            <div className="mb-4">
                              <h4 className="font-semibold flex items-center mb-2">
                                <Award className="h-4 w-4 mr-1" />
                                Key Achievements
                              </h4>
                              <ul className="list-disc pl-5 space-y-1">
                                {experience.achievements.map(
                                  (achievement, i) => (
                                    <li key={i}>{achievement}</li>
                                  ),
                                )}
                              </ul>
                            </div>
                          )}

                          {experience.skills.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {experience.skills.map((skill, i) => (
                                <Badge key={i} variant="secondary">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const defaultExperiences: Experience[] = [
  {
    id: "1",
    company: "TechAI Solutions",
    position: "Senior Machine Learning Engineer",
    duration: "Jan 2021 - Present",
    location: "San Francisco, CA",
    description:
      "Leading the development of advanced machine learning models for computer vision applications. Responsible for the full ML lifecycle from research to production deployment.",
    achievements: [
      "Developed a real-time object detection system that improved accuracy by 35% while reducing inference time by 50%",
      "Led a team of 5 ML engineers to successfully deliver 3 major product features ahead of schedule",
      "Implemented MLOps practices that reduced model deployment time from weeks to days",
    ],
    skills: [
      "PyTorch",
      "TensorFlow",
      "Computer Vision",
      "MLOps",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    id: "2",
    company: "DataMind Inc.",
    position: "Machine Learning Engineer",
    duration: "Mar 2018 - Dec 2020",
    location: "Boston, MA",
    description:
      "Designed and implemented machine learning solutions for natural language processing tasks. Collaborated with cross-functional teams to integrate ML capabilities into existing products.",
    achievements: [
      "Built a sentiment analysis model with 92% accuracy for customer feedback analysis",
      "Reduced model training time by 40% through optimization of data pipelines",
      "Published research paper on efficient transformer architectures at NLP Conference 2020",
    ],
    skills: ["NLP", "BERT", "Python", "AWS", "Spark", "Scikit-learn"],
  },
  {
    id: "3",
    company: "InnoTech Research",
    position: "ML Research Intern",
    duration: "May 2017 - Feb 2018",
    location: "Seattle, WA",
    description:
      "Conducted research on reinforcement learning algorithms for robotic control systems. Implemented and evaluated various approaches to improve sample efficiency.",
    achievements: [
      "Developed a novel reinforcement learning algorithm that improved training efficiency by 25%",
      "Created visualization tools for analyzing agent behavior that were adopted by the entire research team",
    ],
    skills: [
      "Reinforcement Learning",
      "Python",
      "PyTorch",
      "Robotics",
      "Simulation",
    ],
  },
];

export default ExperienceTimeline;
