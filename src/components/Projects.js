import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Main container for the projects section
const ProjectsContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 20px;
`;

const ProjectCard = styled.div`
  background: #FAFFFB; /* Background color of the project card */
  border: 1px solid #E0E0E0;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 32px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Title of the project
const ProjectTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #377047;
  margin-bottom: 8px;
`;

// Description of the project
const ProjectDescription = styled.p`
  font-size: 16px;
  color: #6A6A6A;
  margin-bottom: 16px;
`;

// Container for tags used in the project
const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

// Individual tag
const Tag = styled.span`
  background: #E8F5E9; /* Light green background */
  color: #377047;
  padding: 8px 12px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
`;

// Link to project or GitHub
const ProjectLink = styled.a`
  font-size: 14px;
  color: #377047;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

// Container for date range and other small details
const ProjectDetails = styled.div`
  font-size: 14px;
  color: #9E9E9E;
  margin-top: 16px;
`;

// Project number
const ProjectNumber = styled.div`
  font-size: 14px;
  color: #9E9E9E;
  font-weight: 700;
  margin-bottom: 16px;
`;

const projects = [
  {
    number: '001',
    title: 'Caitlyn Raytracing Renderer',
    description: 'A Reverse MCRT (Monte Carlo Raytracing Renderer) written from scratch in C++ designed for the pixellax art style.',
    tags: ['C++', 'Computer Graphics', 'Git', 'CMake', 'Docker', 'Jira'],
    link: 'https://github.com/cypraeno/caitlyn',
    dateRange: 'April 2023 (Ongoing)',
  },
  {
    number: '002',
    title: 'Solomonoff Inference Engine',
    description: "A local inference engine for Llama and Cohere models.",
    tags: ['Computer Graphics', 'Research'],
    link: 'https://github.com/example',
    dateRange: 'September 2024 (Ongoing)',
  }
];

const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const Projects = () => {
  return (
    <ProjectsContainer
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {projects.map((project) => (
        <ProjectCard key={project.number}>
          <ProjectNumber>{project.number}</ProjectNumber>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <TagContainer>
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagContainer>
          {project.link && (
            <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
              View project via Github
            </ProjectLink>
          )}
          <ProjectDetails>{project.dateRange}</ProjectDetails>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;