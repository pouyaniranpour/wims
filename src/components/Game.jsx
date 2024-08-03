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
            setScenario(Math.floor(Math.random() * 2) + 1 === 1 ? 'start1' : 'start2')
        } else {
            setScenario('start');
      }
    setCharacter(characterInput);
  };

  return (
    <div>
      {/* {gameResult === 'win' && <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240222121721/win.jpg" alt="You win" />}
            {gameResult === 'lose' && <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240222122023/lose.jpg" alt="You lose" />} */}
      {/* {gameResult ? (
                <center>
                    <button onClick={restartGame}>Restart Game</button>
                </center>
            ) : (
                    
                <Story scenario={scenario} onChoice={handleChoice} onGameResult={handleGameResult} />
            )} */}
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
    </div>
  );
};

export default Game;
