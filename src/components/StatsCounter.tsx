import React, { useState, useEffect, useRef } from 'react';

interface StatsCounterProps {
  value: number;
  label: string;
  delay?: number;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ value, label, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [delay]);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const duration = 2000; // 2 seconds duration
    const step = Math.floor(duration / value);
    
    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      
      if (start >= value) {
        clearInterval(counter);
        setCount(value);
      }
    }, step);
    
    return () => clearInterval(counter);
  }, [isVisible, value]);
  
  return (
    <div ref={ref} className="text-center">
      <h3 className="text-5xl font-bold text-blue-600 mb-2">{count}+</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default StatsCounter;