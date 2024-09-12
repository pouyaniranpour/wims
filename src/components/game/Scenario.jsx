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





function Scenario({ handleChoice, currentScenario }) {

  console.log(currentScenario);
  const [isSkipped, setIsSkipped] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  const [isSuspenseScreen, setIsSuspenseScreen] = useState(false); //Suspense screen is for the "..." screen that appears after a coin flip

  //const regex = /(random)/i; //to find scenarios that have 'random' in their id

  const handleNextScenario = (choice) => {
    if (currentScenario.isRandom) {
      setIsCoinFlipping(!isCoinFlipping);
      console.log(isCoinFlipping)
    } else {
      setAnimationCompleted(false);
      setIsSkipped(false);
      console.log(choice);
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
    if (currentScenario.isPreRandom) {
      setTimeout(() => {
        handleChoice(currentScenario.choices[0]);
      }, 1000);
    } else {
      setAnimationCompleted(true);
    }
  }

  const renderButtons = () => {
    if (currentScenario && !currentScenario.isPreRandom && !currentScenario.isRandom && currentScenario.choices.length === 1) {
      return (
        <Buttons
          choiceArray={currentScenario.choices}
          animationCompleted={animationCompleted}
            handleSkip={handleSkip}
            handleNextScenario={handleNextScenario}
        />
      )
    } else if (currentScenario && currentScenario.choices.length > 1){
      return (
        <Decisions choiceArray={currentScenario.choices} handleNextScenario={handleNextScenario}/>
      )
    }
  }

  



  return (
    
    <div className="mb-20 flex flex-col mt-24 items-center w-2/3 h-full">
      <ScenarioText
        isSkipped={isSkipped}
        currentScenario={currentScenario}
        handleAnimationCompleted={handleAnimationCompleted}
        handleChoice={handleChoice}
        isSuspenseScreen={isSuspenseScreen}
        handleRandom={handleRandom}
        />
            
        
      {/* This section is so that the coin is displayed for the coin flip scenarios */}
      
      { currentScenario.isRandom && !isSuspenseScreen ?
        <div className="h-full flex flex-col justify-end">
          <CoinFlip handleSuspenseScreen={handleSuspenseScreen}/>
        </div>
         : <></>}
      
    


    {/* ========================================================================== */}
      

      
      
      
{/* The Youtube player is for ending scenario screens that have a video e.g. "Richard's Story" */}
      {currentScenario.video && animationCompleted ? (
        <div>
          <YoutubePlayer video={currentScenario.video} />
        </div>
      ) : (
        <></>
      )}

      {/* {
        !currentScenario.isPreRandom && !currentScenario.isRandom ? 
        <div className="relative w-full h-full z-20">
        {animationCompleted ? (
        // <ul className="flex mt-24 w-full justify-center items-center">
        //   {currentScenario.choices.map((choice, index) => (
        //     <li key={index}>
        //       <button
        //         className="absolute bottom-10 right-56 mx-4 px-4 flex flex-col border-2 border-black rounded-lg"
        //         onClick={() => handleNextScenario(choice)}
        //       >
        //         {choice.text}
        //       </button>
        //     </li>
        //   ))}
              // </ul>

        <button className="absolute bottom-10 right-56 mx-4 px-4 flex flex-col border-2 border-black rounded-lg">{currentScenario.choices[0].text}</button>
      ) : (
        <button className="absolute bottom-10 right-56 right-30 mx-4 px-4 flex flex-col border-2 border-black rounded-lg" onClick={handleSkip}>Skip</button>
            )}
          
      </div>
        :
        ''
      } */}
      {renderButtons() }
      
      <SidebarLeft  />
      <SidebarRight />
      <Footer />
    </div>

    
  );
}
export default Scenario;
