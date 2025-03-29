import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  padding: 6rem 0;
  background-color: var(--color-background);
  width: 100%;
`;

const ProjectsContainer = styled.div`
  width: 80%;
  max-width: 1800px;
  margin: 0 auto;
  padding: 0;
`;

const ProjectsGrid = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  overflow-x: auto;
  padding: 1rem 0;
  scrollbar-width: thin;
  scrollbar-color: var(--color-primary) var(--color-background);

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-background);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-primary);
    border-radius: 4px;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: var(--color-surface);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  min-width: 300px;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;

  h3 {
    color: var(--color-primary);
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: var(--color-text-secondary);
    margin-bottom: 1rem;
    line-height: 1.6;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: var(--color-primary);
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-accent);
    }
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Descripción del proyecto 1",
      image: "/proyecto1.jpg",
      github: "https://github.com/tu-usuario/proyecto1",
      demo: "https://proyecto1.com"
    },
    {
      title: "Proyecto 2",
      description: "Descripción del proyecto 2",
      image: "/proyecto2.jpg",
      github: "https://github.com/tu-usuario/proyecto2",
      demo: "https://proyecto2.com"
    },
    // Añade más proyectos aquí
  ];

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Mis Proyectos
        </motion.h2>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ProjectLinks>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects; 