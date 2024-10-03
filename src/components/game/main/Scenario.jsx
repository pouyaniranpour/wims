import "../../../App.css";
import { useState, useRef, useCallback, useEffect } from "react";


import SidebarLeft from "../scenarioComponents/sidebars/SidebarLeft";
import SidebarRight from "../scenarioComponents/sidebars/SidebarRight";
import CoinFlip from "../scenarioComponents/CoinFlip";
import ScenarioText from "../scenarioComponents/ScenarioText";
import Buttons from "../scenarioComponents/Buttons";

import Decisions from "../../game/scenarioComponents/decisions/Decisions";

import Footer from "../../game/main/Footer";
import CarouselComponent from "../../game/scenarioComponents/CarouselComponent";





function Scenario({ handleChoice, currentScenario, handleGameOver, character }) {
  
  const [isSkipped, setIsSkipped] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  const [isSuspenseScreen, setIsSuspenseScreen] = useState(false);

  const [isIntroTransition, setIsIntroTransition] = useState(true);

  const animationCompletedRef = useRef(false); // Use ref to track completion without re-render
  

  const characterColors = 
      {
      'youth': 'bg-[#007596]',
      'man': 'bg-[#F2C91E]',
      'woman': 'bg-[#7AA43F]'
      }

  useEffect(() => {
    setAnimationCompleted(false);
    setIsSkipped(false);
  }, [currentScenario])
  

  const renderIntroTransition = () => {
    if (isIntroTransition) {
      setTimeout(() => {
        setIsIntroTransition(false);
      }, 1000);
    };
    const transitionColor = characterColors[character];
    return (
      <div className={`${isIntroTransition? 'opacity-100': 'opacity-0'} ${transitionColor} transition-opacity duration-500 ease-in-out w-full h-full absolute`} >
      </div>
    )
  }

  const handleNextScenario = (choice) => {
    if (currentScenario.isRandom) {
      setIsCoinFlipping(!isCoinFlipping);
    } else {
      // setAnimationCompleted(false);
      // setIsSkipped(false);
      handleChoice(choice);
    }
  };

  const handleSuspenseScreen = () => {
    setIsSuspenseScreen(true);
  }

  const handleRandom = () => {
    let randomIndex = Math.floor(Math.random() * currentScenario.choices.length);
      handleChoice(currentScenario.choices[randomIndex]);
    setIsSuspenseScreen(false);
  };

  const handleSkip = () => {
    setIsSkipped(true);
    setAnimationCompleted(true);
  };

  const handleAnimationCompleted = useCallback(() => {
    setAnimationCompleted(true);
    animationCompletedRef.current = true; // Update ref without causing re-render
  }, [])

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
    } else if (currentScenario && currentScenario.choices.length > 1 && !currentScenario.isRandom){
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
        <div className="flex justify-center h-full"><img className="" src={currentScenario.image} alt="" />
          </div>
      }

      {
        currentScenario.isEnding && 
        <div className="h-full w-full flex justify-center items-center">
            <CarouselComponent informationObject={currentScenario.information}/>
        </div>
      }
      
        {renderButtons() }
      
      
      
      <SidebarLeft  scenario={currentScenario}/>
      <SidebarRight scenario={currentScenario}/>
      <Footer />
    </div>
      
  </>
  );
}
export default Scenario;
