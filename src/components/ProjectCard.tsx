import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";

interface Technology {
  name: string;
  color?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  demoUrl?: string;
  repoUrl?: string;
  details?: string;
}

const ProjectCard = ({
  title = "Machine Learning Project",
  description = "A brief description of the machine learning project and its impact.",
  image = "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
  technologies = [
    { name: "Python" },
    { name: "TensorFlow" },
    { name: "PyTorch" },
    { name: "Scikit-learn" },
  ],
  demoUrl = "#",
  repoUrl = "#",
  details = "This project involved developing a machine learning model to solve a specific problem. The approach included data preprocessing, feature engineering, model selection, training, and evaluation. The final model achieved significant performance improvements over baseline methods.",
}: ProjectCardProps) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card className="w-full max-w-md overflow-hidden transition-all duration-300 hover:shadow-lg bg-white">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech.name}
            </Badge>
          ))}
        </div>

        {expanded && (
          <div className="mt-4 text-sm text-gray-700">
            <p>{details}</p>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-between pt-2">
        <div className="flex space-x-2">
          {demoUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" /> Demo
              </a>
            </Button>
          )}
          {repoUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1 h-4 w-4" /> Code
              </a>
            </Button>
          )}
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setExpanded(!expanded)}
          className="text-gray-500"
        >
          {expanded ? (
            <>
              <ChevronUp className="mr-1 h-4 w-4" /> Less
            </>
          ) : (
            <>
              <ChevronDown className="mr-1 h-4 w-4" /> More
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
