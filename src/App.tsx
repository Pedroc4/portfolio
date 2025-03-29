import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useScrollFade } from './hooks/useScrollFade';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #121212;
  color: #ffffff;
`;

const MainContent = styled.main`
  width: 80%;
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeroAboutSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  padding: 4rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: var(--color-primary);
  }

  p {
    font-size: 1.2rem;
    color: var(--color-text-secondary);
    margin-bottom: 2rem;
  }
`;

const AboutContent = styled.div`
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
    margin-bottom: 1rem;
  }
`;

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const sectionRefs = useScrollFade();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppContainer>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <MainContent>
        <section id="hero" ref={(el) => (sectionRefs.current[0] = el)}>
          <HeroAboutSection>
            <HeroContent>
              <h1>Hola, soy <span style={{ color: 'var(--color-accent)' }}>X</span></h1>
              <p>Desarrollador Full Stack apasionado por crear experiencias web únicas y funcionales.</p>
            </HeroContent>
            <AboutContent>
              <p>
                Soy un desarrollador con experiencia en tecnologías modernas y mejores prácticas de desarrollo.
                Me especializo en crear aplicaciones web robustas y escalables, utilizando las últimas
                tecnologías y frameworks.
              </p>
              <p>
                Mi enfoque se centra en escribir código limpio y mantenible, siguiendo los principios SOLID
                y las mejores prácticas de la industria. Me encanta aprender nuevas tecnologías y compartir
                mi conocimiento con otros desarrolladores.
              </p>
            </AboutContent>
          </HeroAboutSection>
        </section>
        <section id="projects" ref={(el) => (sectionRefs.current[1] = el)}>
          <Projects />
        </section>
        <section id="skills" ref={(el) => (sectionRefs.current[2] = el)}>
          <Skills />
        </section>
        <section id="contact" ref={(el) => (sectionRefs.current[3] = el)}>
          <Contact />
        </section>
      </MainContent>
    </AppContainer>
  );
}

export default App;
