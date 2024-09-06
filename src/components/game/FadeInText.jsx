import { useEffect, useRef, useState } from "react";
import anime from "animejs";
//import parse from 'html-react-parser'

function FadeInText({ items, animationCompleted}) {
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
                console.log("completed");
            }
        });
    }, [items]);
  
    
  
    return (
        <div className="flex flex-col justify-between">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={'mt-6 mb-6'}
                    ref={el => (itemsRef.current[index] = el)}
                >
                    {item}
                </div>
            ))}
            
        </div>
    );
  
}

export default FadeInText