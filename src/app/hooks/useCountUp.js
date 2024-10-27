// hooks/useCountUp.js
import { useState, useEffect } from 'react';

export default function useCountUp (target, duration) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const increment = Math.ceil(end / (duration / 100)); // Calculate the increment per interval
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end); // Ensure it doesn't exceed the target
        clearInterval(timer); // Clear the interval when target is reached
      } else {
        setCount(start); // Update count
      }
    }, 100); // Update every 100 ms

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [target, duration]);

  return count;
};


