import YoutubePlayer from "./YouTubePlayer";
import "../../App.css";
import parse from "html-react-parser";
import { useState } from "react";
import { ReactTyped } from "react-typed";

import Lottie from "lottie-react";
import coinToss from "../../assets/coinToss.json";
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
      handleChoice(choice);
      setAnimationCompleted(false);
      setIsSkipped(false);
    }
  };

  const handleRandom = (choice) => {
    setIsCoinFlipping(true);

    setTimeout(() => {
      setIsCoinFlipping(false);
      console.log(choice.nextScenario);
      handleChoice(choice);
      setIsFullTextShowing(false);
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
  console.log(textArray);
  return (
    <div className="flex flex-col justify-center items-center w-2/3 h-3/4">


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
      {/* {currentScenario.dialogue &&
        <div className=" h-full w-full flex flex-col border border-black justify-between">
          <img className="self-start" src="/scenario/quoteMark.svg" alt="quote mark"/>
          <img className="self-end justify-end" src="/scenario/quoteMark.svg" alt="quote mark"/>
        </div>} */}

      {isSkipped ? (
        <div className="text-3xl w-2/3 h-2/3 font-ibm-plex-sans">
        {
          textArray.map((textItem, index) => {
              return (<div className="mt-5" key={index}>{textItem}</div>)
              
            })
          }
        </div>
      ) :
        (
          <div className={`text-3xl w-2/3 h-2/3 ${currentScenario.dialogue ? 'font-bebas-neue text-[80px]' :'font-ibm-plex-sans'}`}>
            <FadeInText items={textArray} animationCompleted={setAnimationCompleted} isDialogue={currentScenario.dialogue}/>
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




      {isCoinFlipping && (
        <Lottie
          className="absolute top-50 left-50 h-[400px]"
          animationData={coinToss}
          loop={false}
        />
      )}

      {currentScenario.video && isFullTextShowing ? (
        <div>
          <YoutubePlayer video={currentScenario.video} />
        </div>
      ) : (
        ""
      )}
      {isFullTextShowing || animationCompleted ? (
        <ul className=" border flex w-full justify-center items-center">
          {currentScenario.choices.map((choice, index) => (
            <li key={index}>
              <button
                className="mx-4 px-4 flex flex-col  rounded-lg"
                onClick={() => handleNextScenario(choice)}
              >
                {choice.text}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <button onClick={handleSkip}>Skip</button>
      )}

      
      <SidebarLeft />
      <SidebarRight />
    </div>

    
  );
}
export default Scenario;
