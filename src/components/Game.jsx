import '../App.css'
import { useState } from "react";
import Story from "./Story";
import Lottie from "lottie-react";
import coinToss from '../assets/coinToss.json'

const Game = () => {
  const [scenario, setScenario] = useState();
  const [gameResult, setGameResult] = useState(null);
  const [character, setCharacter] = useState();
  const [isCoinFlipping, setIsCoinFlipping] = useState(false);
  //const [isHidden, setIsHidden] = useState(false);


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
    <div className='game'>
      {!character &&
        <div className='scenarioChoiceContainer'>
          <span>Choose a scenario:</span>
          <div className='scenarioButtons'>
          <button
            onClick={() => {
              handleCharacter("youth");
            }}
          >
            Youth
          </button>
          <button
            onClick={() => {
              handleCharacter("woman");
            }}
          >
            Woman
          </button>
          <button
            onClick={() => {
              handleCharacter("man");
            }}
          >
            Man
          </button>
          </div>
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
        <Lottie animationData={coinToss} loop={true} style={{height: '400px'}} />
      }
      {gameResult &&
        <div className='scenarioButtons'>
          <button onClick={restartGame}>Restart Game</button>
        </div>
                    
      }
    </div>
  );
};

export default Game;
