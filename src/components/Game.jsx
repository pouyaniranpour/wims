import { useState } from "react";
import Story from "./Story";

const Game = () => {
  const [scenario, setScenario] = useState();
  const [gameResult, setGameResult] = useState(null);
  const [character, setCharacter] = useState();

  const handleChoice = (choice) => {
    if (choice.nextScenario !== undefined) {
      setScenario(choice.nextScenario);
    } else {
      console.error("Invalid choice!");
    }
  };

  const restartGame = () => {
    setScenario("start");
      setGameResult(null);
      setCharacter(null);
  };

  const handleGameResult = (result) => {
    setGameResult(result);
  };

    const handleCharacter = (characterInput) => {
        if (characterInput === 'man') {
            setScenario(`start${(Math.floor(Math.random() * 2 ) + 1)}`) //To randomise the starting scenario between two possible starting scenarios
        } else {
            setScenario('start');
      }
    setCharacter(characterInput);
  };

  return (
    <div>
      
      {!character ? (
        <div>
          Choose a scenario:
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
      ) : (
        <Story
          scenario={scenario}
          onChoice={handleChoice}
          onGameResult={handleGameResult}
          character={character}
        />
      )}
      {gameResult &&
                    <button onClick={restartGame}>Restart Game</button>
            }
    </div>
  );
};

export default Game;
