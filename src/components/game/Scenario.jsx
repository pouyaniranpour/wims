import YoutubePlayer from "./YouTubePlayer";
import "../../App.css";
import { useState } from "react";


import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";
import CoinFlip from "./CoinFlip";
import ScenarioText from "./ScenarioText";
import Buttons from "./scenarioComponents/Buttons";

import Decisions from "../decisions/Decisions";

import Footer from "../Footer";
import CarouselComponent from "./CarouselComponent";





function Scenario({ handleChoice, currentScenario, handleGameOver, character }) {
  
  const [isSkipped, setIsSkipped] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  const [isSuspenseScreen, setIsSuspenseScreen] = useState(false);

  const [isIntroTransition, setIsIntroTransition] = useState(true);

  

  const characterColors = 
      {
      'youth': 'bg-[#007596]',
      'man': 'bg-[#F2C91E]',
      'woman': 'bg-[#7AA43F]'
      }

  const renderIntroTransition = () => {
    if (isIntroTransition) {
      setTimeout(() => {
        setIsIntroTransition(false);
      }, 2000);
    };
    const transitionColor = characterColors[character];
    console.log(transitionColor);
    return (
      <div className={`${isIntroTransition? 'opacity-100': 'opacity-0'} ${transitionColor} transition-opacity duration-500 ease-in-out w-full h-full absolute`} >
      </div>
    )
  }

  const handleNextScenario = (choice) => {
    if (currentScenario.isRandom) {
      setIsCoinFlipping(!isCoinFlipping);
    } else {
      setAnimationCompleted(false);
      setIsSkipped(false);
      handleChoice(choice);
    }
  };

  const handleSuspenseScreen = () => {
    setIsSuspenseScreen(true);
  }

  const handleRandom = () => {
      handleChoice(currentScenario.choices[0]);
    setIsSuspenseScreen(false);
  };

  const handleSkip = () => {
    setIsSkipped(true);
    setAnimationCompleted(true);
  };

  const handleAnimationCompleted = () => {
    // if (currentScenario.isPreRandom) {
    //   setTimeout(() => {
    //     handleChoice(currentScenario.choices[0]);
    //   }, 1000);
    // } else {
      setAnimationCompleted(true);
    //}
  }

  const renderButtons = () => {
    if (currentScenario && !currentScenario.isRandom && currentScenario.choices.length === 1) {
      return (
        <Buttons
          currentScenario={currentScenario}
          animationCompleted={animationCompleted}
            handleSkip={handleSkip}
          handleNextScenario={handleNextScenario}
          handleGameOver={handleGameOver}
        />
      )
    } else if (currentScenario && currentScenario.choices.length > 1){
      return (
        <Decisions choiceArray={currentScenario.choices} handleNextScenario={handleNextScenario}/>
      )
    }
  }

  



  return (
  <>
    {renderIntroTransition()}

    <div className={`${!isIntroTransition ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out mb-20 flex flex-col mt-24 items-center w-full h-2/3`} >      
      {!isIntroTransition &&
       <ScenarioText
        isSkipped={isSkipped}
        currentScenario={currentScenario}
        handleAnimationCompleted={handleAnimationCompleted}
        handleChoice={handleChoice}
        isSuspenseScreen={isSuspenseScreen}
        handleRandom={handleRandom}
        />
       }   
      
            
     
      
      { currentScenario.isRandom && !isSuspenseScreen ?
        <div className="h-full flex flex-col justify-end">
          <CoinFlip handleSuspenseScreen={handleSuspenseScreen}/>
        </div>
         : <></>}
      
  
      {
        currentScenario.image && 
        <div className="flex justify-center mt-56 h-full"><img className="" src={currentScenario.image} alt="" />
          </div>
      }

      {
        currentScenario.isEnding && 
        <div className="h-full w-full flex justify-center items-center">
            <CarouselComponent informationObject={currentScenario.information}/>
        </div>
      }

      
      
      
{/* The Youtube player is for ending scenario screens that have a video e.g. "Richard's Story" */}
      {currentScenario.video && animationCompleted ? (
        <div>
          <YoutubePlayer video={currentScenario.video} />
        </div>
      ) : (
        <></>
      )}

      
        {renderButtons() }
      
      
      
      <SidebarLeft  scenario={currentScenario}/>
      <SidebarRight />
      <Footer />
    </div>
      
  </>
  );
}
export default Scenario;
