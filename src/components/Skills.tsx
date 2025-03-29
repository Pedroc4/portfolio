import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaJava, 
  FaLeaf, 
  FaDatabase, 
  FaDocker, 
  FaGitAlt, 
  FaAws, 
  FaUsers, 
  FaLightbulb, 
  FaChartLine, 
  FaHandshake,
  FaCode,
  FaServer,
  FaCloud,
  FaShieldAlt,
  FaCheckCircle,
  FaCogs,
  FaRocket,
  FaMicrochip,
  FaNetworkWired,
  FaCodeBranch,
  FaTerminal,
  FaLaptopCode,
  FaGlobe,
  FaTools,
  FaUserTie,
  FaProjectDiagram,
  FaClock,
  FaChartBar,
  FaBug,
  FaFileCode,
  FaTasks,
  FaUserFriends
} from 'react-icons/fa';

const SkillsSection = styled.section`
  padding: 2rem 0;
  width: 100%;
  background-color: var(--color-background);
`;

const SkillsContainer = styled.div`
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  padding: 2rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled.div`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: var(--color-primary);
  }
`;

const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SoftSkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const TechItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(42, 51, 68, 0.3);
  border: 1px solid rgba(45, 55, 72, 0.3);
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(5px);

  &:hover {
    transform: translateY(-3px);
    border-color: var(--color-accent);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    background: rgba(42, 51, 68, 0.4);
  }

  svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-accent);
  }

  span {
    font-size: 0.8rem;
    color: var(--color-text-secondary);
    text-align: center;
  }
`;

const SoftSkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.2rem;
  background: rgba(42, 51, 68, 0.3);
  border: 1px solid rgba(45, 55, 72, 0.3);
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(5px);

  &:hover {
    transform: translateY(-3px);
    border-color: var(--color-accent);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    background: rgba(42, 51, 68, 0.4);
  }

  svg {
    width: 2rem;
    height: 2rem;
  }

  span {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    text-align: center;
  }
`;

const SkillList = styled(motion.ul)`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  color: var(--color-text-secondary);

  &::before {
    content: '•';
    color: var(--color-primary);
    position: absolute;
    left: 0;
  }
`;

const SkillCard = styled.div`
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  margin-bottom: 1.5rem;
`;

const Skills = () => {
  const technologies = [
    { name: 'Java', icon: <FaJava style={{ color: '#E76F00' }} /> },
    { name: 'Spring Boot', icon: <FaLeaf style={{ color: '#6DB33F' }} /> },
    { name: 'JPA', icon: <FaDatabase style={{ color: '#336791' }} /> },
    { name: 'Docker', icon: <FaDocker style={{ color: '#2496ED' }} /> },
    { name: 'Kafka', icon: <FaServer style={{ color: '#231F20' }} /> },
    { name: 'Spring Cloud', icon: <FaCloud style={{ color: '#6DB33F' }} /> },
    { name: 'Node.js', icon: <FaCode style={{ color: '#339933' }} /> },
    { name: 'Spring Batch', icon: <FaCogs style={{ color: '#6DB33F' }} /> },
    { name: 'Spring Reactive', icon: <FaRocket style={{ color: '#6DB33F' }} /> },
    { name: 'Mockito', icon: <FaBug style={{ color: '#FF6B6B' }} /> },
    { name: 'JUnit', icon: <FaCheckCircle style={{ color: '#25A162' }} /> },
    { name: 'SonarQube', icon: <FaFileCode style={{ color: '#1E1E1E' }} /> },
    { name: 'Spring Security', icon: <FaShieldAlt style={{ color: '#6DB33F' }} /> },
    { name: 'Azure', icon: <FaCloud style={{ color: '#0089D6' }} /> },
    { name: 'Oracle', icon: <FaDatabase style={{ color: '#F80000' }} /> },
    { name: 'WebLogic', icon: <FaServer style={{ color: '#FF6B6B' }} /> },
    { name: 'RabbitMQ', icon: <FaNetworkWired style={{ color: '#FF6600' }} /> },
    { name: 'Kibana', icon: <FaChartBar style={{ color: '#005571' }} /> },
    { name: 'PostgreSQL', icon: <FaDatabase style={{ color: '#336791' }} /> },
    { name: 'Angular', icon: <FaCode style={{ color: '#DD0031' }} /> },
    { name: 'TypeScript', icon: <FaCode style={{ color: '#3178C6' }} /> },
    { name: 'JavaScript', icon: <FaCode style={{ color: '#F7DF1E' }} /> },
    { name: 'Hibernate', icon: <FaDatabase style={{ color: '#59666C' }} /> },
    { name: 'OpenShift', icon: <FaCloud style={{ color: '#EE0000' }} /> },
    { name: 'Jenkins', icon: <FaTools style={{ color: '#D24939' }} /> },
    { name: 'Git', icon: <FaGitAlt style={{ color: '#F34F29' }} /> }
  ];

  const softSkills = [
    { name: 'Metodologías ágiles', icon: <FaTasks style={{ color: '#FF6B6B' }} /> },
    { name: 'Microservicios', icon: <FaNetworkWired style={{ color: '#4A90E2' }} /> },
    { name: 'Liderazgo', icon: <FaUserTie style={{ color: '#2ECC71' }} /> },
    { name: 'Gestión de datos maestros', icon: <FaDatabase style={{ color: '#E67E22' }} /> },
    { name: 'Trabajo en equipo', icon: <FaUserFriends style={{ color: '#FFEEAD' }} /> },
    { name: 'CI/CD', icon: <FaRocket style={{ color: '#D4A5A5' }} /> },
    { name: 'Dirección de equipos', icon: <FaUsers style={{ color: '#9B59B6' }} /> },
    { name: 'Gestión de flujos', icon: <FaChartLine style={{ color: '#3498DB' }} /> },
    { name: 'Coding Standards', icon: <FaCode style={{ color: '#E74C3C' }} /> },
    { name: 'Arquitectura', icon: <FaProjectDiagram style={{ color: '#1ABC9C' }} /> },
    { name: 'Capacidad de análisis', icon: <FaChartBar style={{ color: '#F1C40F' }} /> },
    { name: 'Mantenimiento informático', icon: <FaTools style={{ color: '#95A5A6' }} /> },
    { name: 'Desarrollo de software', icon: <FaLaptopCode style={{ color: '#34495E' }} /> },
    { name: 'Inglés', icon: <FaGlobe style={{ color: '#2980B9' }} /> },
    { name: 'Servicios web', icon: <FaServer style={{ color: '#E74C3C' }} /> },
    { name: 'Informatica MDM', icon: <FaDatabase style={{ color: '#8E44AD' }} /> },
    { name: 'Desarrollo Full Stack', icon: <FaCodeBranch style={{ color: '#27AE60' }} /> },
    { name: 'Resolución de problemas', icon: <FaBug style={{ color: '#C0392B' }} /> }
  ];

  return (
    <SkillsSection>
      <SkillsContainer>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Habilidades
        </motion.h2>
        <SkillsGrid>
          <SkillCategory>
            <h2>Programación</h2>
            <TechGrid>
              {technologies.map((tech, index) => (
                <TechItem
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </TechItem>
              ))}
            </TechGrid>
          </SkillCategory>
          <SkillCategory>
            <h2>Habilidades Personales</h2>
            <SoftSkillsGrid>
              {softSkills.map((skill, index) => (
                <SoftSkillCard
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </SoftSkillCard>
              ))}
            </SoftSkillsGrid>
          </SkillCategory>
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills; 