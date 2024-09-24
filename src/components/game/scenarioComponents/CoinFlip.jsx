import Lottie from "react-lottie-player";
import animationData from "../../../assets/scenarioImages/newCoin.json";

import '../../../App.css';
import { useRef, useState } from "react";

function RandomComponent({ handleSuspenseScreen }) {
  const [isCoinFlipping, setIsCoinFlipping] = useState(false);
  const lottieRef = useRef(null);

  const handleClick = () => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
    setIsCoinFlipping(true);
    setTimeout(() => {
      setIsCoinFlipping(false);
          handleSuspenseScreen(true);
        }, 3500);
  }

    
  return (
    <div className="flex flex-col items-center justify-end">
    <div className="-z-10 flex flex-col mb-10 w-[200px] h-[600px] justify-end items-center">
        <Lottie          
        loop={false}
        animationData={animationData}
        ref={lottieRef}
              style={{ width: 150, height: 500}}
          />
          
       
          
    
      </div>
      
        <button className={`${isCoinFlipping? 'cursor-default': 'cursor-pointer'} z-30 border border-black rounded-full px-4 py-1 bg-zinc-50 font-viga text-2xl shadow-custom-darker text-zinc-900`}  onClick={() => handleClick()}>Flip</button>
      
    </div>
    
  )
}
export default RandomComponent