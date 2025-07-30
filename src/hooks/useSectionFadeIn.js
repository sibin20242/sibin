import { useRef, useEffect } from 'react';

const useSectionFadeIn = () => {
  const ref = useRef();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const handleScroll = () => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        node.classList.add('fade-in-visible');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    // Fallback: always show after 1.5s
    const fallback = setTimeout(() => {
      node.classList.add('fade-in-visible');
    }, 1500);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(fallback);
    };
  }, []);

  return ref;
};

export default useSectionFadeIn; 