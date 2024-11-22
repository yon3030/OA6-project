import { useEffect, useState } from 'react';

const useIntersectionObserver = (ref: React.RefObject<HTMLElement>, thresholds = [0, 0.5, 1]) => {
  const [intersectionRatio, setIntersectionRatio] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIntersectionRatio(entry.intersectionRatio);
        });
      },
      {
        root: null, // Use the viewport as the root
        threshold: thresholds, // Define thresholds to capture finer intersection ratios
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, thresholds]);

  return { intersectionRatio };
};

export default useIntersectionObserver;
