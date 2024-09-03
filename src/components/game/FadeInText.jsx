import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import parse from 'html-react-parser'

function FadeInText({items, animationCompleted, isDialogue}) {
    const itemsRef = useRef([]);
    //const [animationCompleted, setAnimationCompleted] = useState(false);

    useEffect(() => {
        anime({
            targets: itemsRef.current,
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 1000,
            delay: anime.stagger(2000),
            complete: () => {
                animationCompleted(true); // Update state when animation completes
            }
        });
    }, []);
  
    
  
    return (
        <div className="flex flex-col justify-between">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`${isDialogue? 'font-bebas-neue text-[80px] mt-10 mb-10': 'mt-6 mb-6'}`}
                    ref={el => (itemsRef.current[index] = el)}
                >
                    {parse(item)}
                </div>
            ))}
            
        </div>
    );
  
}

export default FadeInText