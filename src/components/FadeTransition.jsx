import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const FadeTransition = ({ children, in: inProp }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (inProp) {
      anime({
        targets: el,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutQuad'
      });
    } else {
      anime({
        targets: el,
        opacity: [1, 0],
        duration: 500,
        easing: 'easeInOutQuad',
        // complete: () => {
        // }
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