import '../../App.css'
import { useState } from "react";
import Story from "./Story";
import Lottie from "lottie-react";
import coinToss from '../../assets/coinToss.json';
import CharacterSelection from '../characterSelection/CharacterSelection';
import Footer from '../Footer';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';
import EndingScreen from '../EndingScreen';

function Game({ isOpeningScreenShowing }) {
  const [scenario, setScenario] = useState();
  const [isGameOver, setIsGameOver] = useState(false);
  const [character, setCharacter] = useState();
  const [isCoinFlipping, setIsCoinFlipping] = useState(false);

  const handleChoice = (choice) => {


    const regex = /(random)/i; //to find scenarios that have 'random' in their id
    if (regex.test(choice.nextScenario)) {
      setIsCoinFlipping(!isCoinFlipping)
      handleRandom(choice);
    } else {
      setScenario(choice.nextScenario);
    }
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

  const handleRandom = (choice) => {
    setIsCoinFlipping(true);
    setTimeout(() => {
      setIsCoinFlipping(false);
      setScenario(choice.nextScenario);
    }, 1500);
  }

  const handleCharacter = (characterInput) => {
    // setScenario('start');
    setScenario('start')
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
      {isCoinFlipping &&
        <Lottie animationData={coinToss} loop={true} style={{height: '400px', position: 'relative', top: '100px'}} />
      }
      
      <EndingScreen restartGame={restartGame} isGameOver={isGameOver} />
      
      
      {/* <SidebarLeft />
      <SidebarRight /> */}
      
      {/* <Footer /> */}
    </div>
  );
};

export default Game;
