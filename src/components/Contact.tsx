import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 4rem 0;
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--color-primary);
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  margin-bottom: 3rem;
`;

const ContactLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ContactLink = styled(motion.a)`
  color: var(--color-primary);
  text-decoration: none;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-accent);
  }

  svg {
    font-size: 1.5rem;
  }
`;

const Contact = () => {
  return (
    <ContactSection>
      <ContactContainer>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contacto
        </Title>
        <Description
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          ¿Tienes alguna pregunta o propuesta? No dudes en contactarme.
        </Description>
        <ContactLinks
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ContactLink
            href="mailto:pedro.corpas@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope style={{ color: '#EA4335' }} /> Email
          </ContactLink>
          <ContactLink
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub style={{ color: '#333' }} /> GitHub
          </ContactLink>
          <ContactLink
            href="https://www.linkedin.com/in/pedro-corpas/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin style={{ color: '#0077B5' }} /> LinkedIn
          </ContactLink>
        </ContactLinks>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 