import '../App.css'
import { useState } from "react";
import Story from "./Story";
import Lottie from "lottie-react";
import coinToss from '../assets/coinToss.json';
import CharacterSelection from './CharacterSelection';
import Footer from './Footer';

const Game = () => {
  const [scenario, setScenario] = useState();
  const [gameResult, setGameResult] = useState(null);
  const [character, setCharacter] = useState();
  const [isCoinFlipping, setIsCoinFlipping] = useState(false);
  //const [isHidden, setIsHidden] = useState(false);

  //===================
  // const characters = [
  //       {
  //         id: "youth",
  //         imgSrc: "youthImageSrc",
  //       },
  //       {
  //         id: "woman",
  //         imgSrc: "womanImageSrc",
  //       },
  //       {
  //         id: "man",
  //         imgSrc: "manImageSrc",
  //       },
  //     ]
  // const [characterView, setCharacterView] = useState(characters[1]);
    

  //=============

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
      setGameResult(null);
      setCharacter(null);
  };

  const handleGameResult = (result) => {
    setGameResult(result);
  };

  const handleRandom = (choice) => {
    setIsCoinFlipping(true); 
    setTimeout(() => {
      setIsCoinFlipping(false);
      setScenario(choice.nextScenario);
        }, 1500);
}

  const handleCharacter = (characterInput) => {
    setScenario('start');
    setCharacter(characterInput);
  };


  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
      {!character &&
        
        <div className='flex flex-col items-center justify-center h-full w-full'>
          <CharacterSelection handleCharacter={handleCharacter} />
          
        </div>
      }
      {character &&
        <Story
          scenario={scenario}
          onChoice={handleChoice}
          onGameResult={handleGameResult}
          character={character}
        />
      }
      {isCoinFlipping &&
        <Lottie animationData={coinToss} loop={true} style={{height: '400px', position: 'relative', top: '100px'}} />
      }
      {gameResult &&
        <div className='z-10 border border-black rounded-lg'>
          <button onClick={restartGame}>Restart Game</button>
        </div>
                    
      }
      
      {/* <Footer /> */}
    </div>
  );
};

export default Game;
