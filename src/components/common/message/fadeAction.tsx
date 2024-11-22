import { useRef } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const FadeAction = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { intersectionRatio } = useIntersectionObserver(ref, [0, 0.25, 0.5, 0.75, 1]);

  // Adjust the opacity based on the intersection ratio
  const opacity = intersectionRatio;

  return (
    <div
      ref={ref}
      className="transition-opacity duration-500 ease-in-out"
      style={{ opacity }}
    >
      {children}
    </div>
  );
};

export default FadeAction;
