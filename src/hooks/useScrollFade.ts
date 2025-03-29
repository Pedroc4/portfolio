import { useEffect, useRef } from 'react';

export const useScrollFade = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sectionRefs.current.forEach((section) => {
        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
          section.classList.add('fade-in');
          section.classList.remove('fade-out');
        } else if (scrollPosition > sectionTop + sectionHeight) {
          section.classList.add('fade-out');
          section.classList.remove('fade-in');
        } else {
          section.classList.remove('fade-in', 'fade-out');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar una vez al montar el componente

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return sectionRefs;
}; 