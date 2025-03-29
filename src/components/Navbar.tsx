import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  background-color: rgba(18, 18, 18, 0.95);
  position: fixed;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled.a<{ isActive: boolean }>`
  color: ${props => props.isActive ? '#C0C0C0' : '#ffffff'};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #C0C0C0;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #C0C0C0;
    transform: scaleX(${props => props.isActive ? 1 : 0});
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <Nav>
      <NavContainer>
        <NavList>
          <NavItem>
            <NavLink
              isActive={activeSection === 'home'}
              onClick={() => scrollToSection('home')}
            >
              Inicio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              isActive={activeSection === 'about'}
              onClick={() => scrollToSection('about')}
            >
              Sobre Mí
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              isActive={activeSection === 'projects'}
              onClick={() => scrollToSection('projects')}
            >
              Proyectos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              isActive={activeSection === 'skills'}
              onClick={() => scrollToSection('skills')}
            >
              Habilidades
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              isActive={activeSection === 'contact'}
              onClick={() => scrollToSection('contact')}
            >
              Contacto
            </NavLink>
          </NavItem>
        </NavList>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 