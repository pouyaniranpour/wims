import YoutubePlayer from "./YouTubePlayer";
import "../../App.css";
import parse from "html-react-parser";
import { useState } from "react";
import { ReactTyped } from "react-typed";

//import Lottie from "lottie-react";
//import coinToss from "../../assets/coinToss.json"; //FIXME
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";
import FadeInText from "./FadeInText";



function Scenario({ handleChoice, currentScenario }) {
  const [isFullTextShowing, setIsFullTextShowing] = useState(false);
  const [isSkipped, setIsSkipped] = useState(false);
  const [isCoinFlipping, setIsCoinFlipping] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  const regex = /(random)/i; //to find scenarios that have 'random' in their id

  const handleNextScenario = (choice) => {
    if (regex.test(choice.nextScenario)) {
      setIsCoinFlipping(!isCoinFlipping);
      handleRandom(choice);
    } else {
      setAnimationCompleted(false);
      setIsSkipped(false);
      handleChoice(choice);
    }
  };

  const handleRandom = (choice) => {
    setIsCoinFlipping(true);

    setTimeout(() => {
      setIsCoinFlipping(false);
      console.log(choice.nextScenario);
      handleChoice(choice);
      setAnimationCompleted(false);
      setIsSkipped(false);
    }, 1500);
  };

  const handleSkip = () => {
    setIsSkipped(true);
    // setIsFullTextShowing(true);
    setAnimationCompleted(true);
  };



  // const text = parse(currentScenario.text);
  const textArray = currentScenario.text;
  return (
    <div className="flex flex-col mt-24 items-center w-2/3 h-3/4">
    
      {/* {isSkipped ? (
        <div className="text-3xl w-2/3 h-2/3 font-ibm-plex-mono">{text}</div>
      ) : (
        <ReactTyped
          className="text-3xl w-2/3 h-2/3 font-ibm-plex-mono"
          showCursor={false}
          strings={[currentScenario.text]}
          typeSpeed={30}
          startDelay={500}
          onComplete={() => setIsFullTextShowing(true)}
          loop={false}
        />
      )} */}
      {currentScenario.dialogue &&
        <div className="absolute top-[75px] left-50 z-30 h-3/4 w-2/3 flex flex-col justify-between">
          <img className="self-start" src="/scenario/quoteMark.svg" alt="quote mark"/>
          <img className="self-end justify-end" src="/scenario/quoteMark.svg" alt="quote mark"/>
        </div>}

      {isSkipped ? (
        <div className='text-3xl w-2/3 h-2/3 font-viga'>
        {
          textArray.map((textItem, index) => {
              return (<div className="mt-5" key={index}>{textItem}</div>)
              
            })
          }
        </div>
      ) : 
        
      
        ( 
          <div className="absolute top-50 left-50 w-2/3 h-1/2">
            {currentScenario.dialogue ? 
            <ReactTyped
            className=" text-[72px] mx-0 w-2/3 h-2/3 font-bebas-neue"
            showCursor={false}
            strings={currentScenario.dialogue}
            typeSpeed={30}
            startDelay={500}
            onComplete={() => setAnimationCompleted(true)}
            loop={false}
          />
            :
      <div className='text-3xl w-2/3 h-2/3 font-viga'>
            
            <FadeInText items={textArray} animationCompleted={setAnimationCompleted} isDialogue={currentScenario.dialogue} />
           
            </div>
          }
          
        </div>
          
      )
      } 
      

{/* {isSkipped ? (
        <div className="text-3xl w-2/3 h-2/3 font-ibm-plex-mono">
          {
            textArray.map((textItem, index) => {
              <div>{textItem}</div>
            })
          }
        </div>
      ) : (
        <ReactTyped
          className="text-3xl w-2/3 h-2/3 font-ibm-plex-mono"
          showCursor={false}
          strings={[currentScenario.text]}
          typeSpeed={30}
          startDelay={500}
          onComplete={() => setIsFullTextShowing(true)}
          loop={false}
        />
      )}
 */}




      {/* {isCoinFlipping && (
        <Lottie
          className="absolute top-50 left-50 h-[400px]"
          animationData={coinToss}
          loop={false}
        />
      )} */}

      {currentScenario.video && animationCompleted ? (
        <div>
          <YoutubePlayer video={currentScenario.video} />
        </div>
      ) : (
        ""
      )}
      <div className="relative w-full h-full z-20">
        {isFullTextShowing || animationCompleted ? (
        <ul className="flex mt-24 w-full justify-center items-center">
          {currentScenario.choices.map((choice, index) => (
            <li key={index}>
              <button
                className="absolute bottom-10 right-56 mx-4 px-4 flex flex-col border-2 border-black rounded-lg"
                onClick={() => handleNextScenario(choice)}
              >
                {choice.text}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <button className="absolute bottom-10 right-56 right-30 mx-4 px-4 flex flex-col border-2 border-black rounded-lg" onClick={handleSkip}>Skip</button>
      )}
      </div>
      

      
      <SidebarLeft />
      <SidebarRight />
    </div>

    
  );
}
export default Scenario;
