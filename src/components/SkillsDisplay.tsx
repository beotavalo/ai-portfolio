import React from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Skill {
  name: string;
  proficiency: number;
  description: string;
  years: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface SkillsDisplayProps {
  categories?: SkillCategory[];
}

const SkillsDisplay: React.FC<SkillsDisplayProps> = ({
  categories = defaultCategories,
}) => {
  return (
    <div className="w-full bg-background p-6 rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Technical Skills</h2>

      <Tabs defaultValue={categories[0].name.toLowerCase()} className="w-full">
        <TabsList className="w-full flex justify-center mb-6">
          {categories.map((category) => (
            <TabsTrigger
              key={category.name}
              value={category.name.toLowerCase()}
              className="px-4 py-2"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent
            key={category.name}
            value={category.name.toLowerCase()}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">{skill.name}</h3>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="outline">
                  {skill.years} {skill.years === 1 ? "year" : "years"}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>Years of experience</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Proficiency</span>
            <span>{skill.proficiency}%</span>
          </div>
          <Progress value={skill.proficiency} className="h-2" />
        </div>

        <p className="text-sm text-muted-foreground">{skill.description}</p>
      </CardContent>
    </Card>
  );
};

// Default data for the component
const defaultCategories: SkillCategory[] = [
  {
    name: "ML/AI",
    skills: [
      {
        name: "Deep Learning",
        proficiency: 90,
        description:
          "Expertise in neural networks, CNN, RNN, transformers, and implementing state-of-the-art architectures.",
        years: 5,
      },
      {
        name: "Natural Language Processing",
        proficiency: 85,
        description:
          "Experience with text classification, sentiment analysis, named entity recognition, and language models.",
        years: 4,
      },
      {
        name: "Computer Vision",
        proficiency: 80,
        description:
          "Proficient in image classification, object detection, segmentation, and feature extraction techniques.",
        years: 3,
      },
      {
        name: "MLOps",
        proficiency: 75,
        description:
          "Knowledge of ML pipelines, model deployment, monitoring, and maintenance in production environments.",
        years: 2,
      },
    ],
  },
  {
    name: "Programming",
    skills: [
      {
        name: "Python",
        proficiency: 95,
        description:
          "Advanced Python programming with expertise in scientific computing libraries and software design patterns.",
        years: 7,
      },
      {
        name: "SQL",
        proficiency: 85,
        description:
          "Proficient in database design, complex queries, and data manipulation for analytics and ML pipelines.",
        years: 5,
      },
      {
        name: "JavaScript/TypeScript",
        proficiency: 70,
        description:
          "Experience building interactive data visualizations and web applications for ML model interfaces.",
        years: 3,
      },
      {
        name: "C++",
        proficiency: 60,
        description:
          "Working knowledge for performance-critical applications and integrating with ML frameworks.",
        years: 2,
      },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      {
        name: "PyTorch",
        proficiency: 90,
        description:
          "Expert in building and training custom neural network architectures and deploying models.",
        years: 4,
      },
      {
        name: "TensorFlow",
        proficiency: 85,
        description:
          "Extensive experience with model development, training at scale, and deployment using TF Serving.",
        years: 5,
      },
      {
        name: "Scikit-learn",
        proficiency: 95,
        description:
          "Mastery of classical ML algorithms, feature engineering, and evaluation methodologies.",
        years: 6,
      },
      {
        name: "Hugging Face",
        proficiency: 80,
        description:
          "Proficient with transformer models, fine-tuning pre-trained models, and NLP pipelines.",
        years: 3,
      },
    ],
  },
  {
    name: "Cloud & Tools",
    skills: [
      {
        name: "AWS SageMaker",
        proficiency: 85,
        description:
          "Experience with end-to-end ML workflows, distributed training, and model deployment on AWS.",
        years: 3,
      },
      {
        name: "Docker & Kubernetes",
        proficiency: 80,
        description:
          "Containerization of ML applications and orchestration for scalable deployments.",
        years: 4,
      },
      {
        name: "Git & CI/CD",
        proficiency: 90,
        description:
          "Version control best practices and automated testing/deployment pipelines for ML projects.",
        years: 5,
      },
      {
        name: "Spark & Big Data",
        proficiency: 75,
        description:
          "Processing large-scale datasets and implementing distributed ML algorithms.",
        years: 3,
      },
    ],
  },
];

export default SkillsDisplay;
