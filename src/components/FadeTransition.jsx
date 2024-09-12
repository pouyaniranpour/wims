import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const FadeTransition = ({ children, in: inProp }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (inProp) {
      // Fade in
      anime({
        targets: el,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutQuad'
      });
    } else {
      // Fade out
      anime({
        targets: el,
        opacity: [1, 0],
        duration: 500,
        easing: 'easeInOutQuad',
        complete: () => {
          // Optionally, you can perform cleanup here
        }
      });
    }
  }, [inProp]);

  return (
    <div ref={containerRef} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};

export default FadeTransition;