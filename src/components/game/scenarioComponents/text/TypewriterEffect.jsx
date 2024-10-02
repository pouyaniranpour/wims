import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const TypewriterEffect = ({staggerDelay, mainStyle, paragraphs, onComplete }) => {
  const paragraphRefs = useRef([]); // Store refs for all paragraphs
  useEffect(() => {
    const tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 30,
      complete: () => {
        onComplete()
      }
    });

    paragraphs.forEach((paragraph, index) => {
      const spans = paragraphRefs.current[index].querySelectorAll('span');

      // Add the animation to the timeline
      tl.add({
        targets: spans,
        opacity: [0, 1], // Ensure opacity goes from 0 to 1
        delay: anime.stagger(staggerDelay), // Stagger each character
        offset: `+=500`, // Wait 500ms before starting the next paragraph
      });
    });
  }, [paragraphs]);

  const createSpans = (text) => {
    return text.split('').map((char, index) => (
      <span 
        key={index} 
        style={{ opacity: 0 }} // Set initial opacity directly as inline style
      >
        {char}
      </span>
    ));
  };

  return (
    <div className={mainStyle}>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={paragraph.style}
          ref={(el) => (paragraphRefs.current[index] = el)}
        >
          {createSpans(paragraph.text)}
        </p>
      ))}
    </div>
  );
};

export default (TypewriterEffect);
