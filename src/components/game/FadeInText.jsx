import { useEffect, useRef} from "react";
import anime from "animejs";
//import parse from 'html-react-parser'

function FadeInText({ items, handleAnimationCompleted}) {
    const itemsRef = useRef([]);

    useEffect(() => {
        anime({
            targets: itemsRef.current,
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 1000,
            delay: anime.stagger(2000),
            complete: () => {
                handleAnimationCompleted(); // Update state when animation completes
                console.log("completed");
            }
        });
    }, [items]);

  
    
  
    return (
        <div className="relative bottom-24 flex flex-col justify-center text-3xl w-2/3 h-full font-viga">
            
            {items.map((item, index) => (
                <div
                    key={index}
                    className={'mt-10 mb-10'}
                    ref={el => (itemsRef.current[index] = el)}
                >
                    {item}
                </div>
            ))}
            
        </div>
    );
  
}

export default FadeInText