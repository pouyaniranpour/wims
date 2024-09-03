import '../../App.css'
import { useState } from "react";
import Story from "./Story";
import CharacterSelection from '../characterSelection/CharacterSelection';
import Footer from '../Footer';
import EndingScreen from '../EndingScreen';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';



function Game({ isOpeningScreenShowing }) {
  const [scenario, setScenario] = useState();
  const [isGameOver, setIsGameOver] = useState(false);
  const [character, setCharacter] = useState();

  const handleChoice = (choice) => {
    setScenario(choice.nextScenario);
  };


  const restartGame = () => {
    setScenario(null);
    setIsGameOver(false);
    setCharacter(null);
  };

  const handleGameOver = (booleanValue) => {
    setIsGameOver(booleanValue);
    console.log(booleanValue);
  };


  const handleCharacter = (characterInput) => {
    setScenario('start');
    //setScenario('policeTakeStepdadEnding');
    setCharacter(characterInput);
  };


  return (
    <div className={`${isOpeningScreenShowing? 'opacity-0 -z-10': 'opacity-100 z-10'} transition-opacity duration-1000 ease-in-out flex flex-col justify-center items-center h-full w-full`
} >
      {!character &&
        
        <div className='flex flex-col items-center justify-center h-full w-full'>
          <CharacterSelection handleCharacter={handleCharacter} />
          
        </div>
      }
      {character && !isGameOver ?
        <Story
          scenario={scenario}
          onChoice={handleChoice}
          isGameOver={handleGameOver}
          character={character}
        />      
       : '' 
      }
      
      <EndingScreen restartGame={restartGame} isGameOver={isGameOver} />
      <Footer />
    </div>
  );
};

export default Game;
