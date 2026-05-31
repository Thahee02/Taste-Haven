import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal Component
 * Animates children as they scroll into viewport.
 * Props:
 *  - children: Elements to animate
 *  - animation: 'fade-in', 'slide-up', 'slide-down', 'slide-left', 'slide-right', 'zoom-in', 'zoom-out'
 *  - delay: milliseconds delay before animation starts
 *  - duration: animation duration in milliseconds
 *  - className: additional wrapper classes
 */
export default function ScrollReveal({
  children,
  animation = 'slide-up',
  delay = 0,
  duration = 800,
  className = '',
}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.05, // trigger when 5% of the element is visible
        rootMargin: '0px 0px -20px 0px',
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
  }, []);

  const getAnimationStyles = () => {
    const isAnimated = isIntersecting;

    const styles = {
      transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      opacity: isAnimated ? 1 : 0,
    };

    if (isAnimated) {
      styles.transform = 'translate(0) scale(1)';
      return styles;
    }

    switch (animation) {
      case 'slide-up':
        styles.transform = 'translateY(30px)';
        break;
      case 'slide-down':
        styles.transform = 'translateY(-30px)';
        break;
      case 'slide-left':
        styles.transform = 'translateX(30px)';
        break;
      case 'slide-right':
        styles.transform = 'translateX(-30px)';
        break;
      case 'zoom-in':
        styles.transform = 'scale(0.95)';
        break;
      case 'zoom-out':
        styles.transform = 'scale(1.05)';
        break;
      case 'fade-in':
      default:
        styles.transform = 'none';
        break;
    }

    return styles;
  };

  return (
    <div
      ref={ref}
      style={getAnimationStyles()}
      className={className}
    >
      {children}
    </div>
  );
}
