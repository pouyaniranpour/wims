import { useEffect, useRef} from "react";
import anime from "animejs";

function FadeInText({ items, handleAnimationCompleted}) {
    const itemsRef = useRef([]);

    useEffect(() => {
        anime({
            targets: itemsRef.current,
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 1000,
            delay: anime.stagger(1200),
            complete: () => {
                handleAnimationCompleted(); // Update state when animation completes
            }
        });
    }, [items]);

  
    
  
    return (
        <div className="relative bottom-24 flex flex-col justify-evenly text-3xl w-2/3 h-full font-viga">
            
            {items.map((item, index) => (
                <div
                    key={index}
                    ref={el => (itemsRef.current[index] = el)}
                >
                    {item}
                </div>
            ))}
            
        </div>
    );
  
}

export default FadeInText