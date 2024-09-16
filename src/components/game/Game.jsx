import "../../App.css";
import { useState } from "react";
import Story from "./Story";
import CharacterSelection from "../decisions/CharacterSelection";
import EndingScreen from "../EndingScreen";

import { useLocation } from "react-router-dom";

function Game() {
  const location = useLocation().pathname;
  const [scenario, setScenario] = useState();
   //const [isGameOver, setIsGameOver] = useState(true); //used for testing ending screen
  const [isGameOver, setIsGameOver] = useState(false);
  const [character, setCharacter] = useState();

  //const [finalScenario, setFinalScenario] = useState(); //this is used to temporarily store the final scenario

  // const handleChoice = (choice) => {
  //   if (choice === 'preEndingScreen') {
  //     console.log("Hello World.")
  //     setScenario(choice);
  //   } else if (choice === 'finalScenario') {
  //     setScenario(finalScenario)
  //   } else {
  //     setScenario(choice.nextScenario);
  //   }
  // };

  const restartGame = () => {
    setScenario(null);
    setIsGameOver(false);
    setCharacter(null);
    //setFinalScenario(null);
  };

  const handleGameOver = (booleanValue) => {
    setIsGameOver(booleanValue);
    console.log(booleanValue);
  };

  const handleCharacter = (characterInput) => {
    setScenario('start');
    setCharacter(characterInput);
  };

  return (
    <div
      className={`${
        !location === "/game" ? " opacity-0 -z-10" : "opacity-100 z-10"
      } relative transition-opacity duration-1000 ease-in-out flex flex-col justify-center items-center h-full w-full`}
    >
      {!character && !isGameOver ? (
        <div className="absolute flex flex-col items-center justify-center h-full w-full">
          <CharacterSelection handleCharacter={handleCharacter} />
        </div>
      ) : (
        ""
      )}
      {character && !isGameOver ? (
        <Story
          scenario={scenario}
          isGameOver={isGameOver}
          handleGameOver={handleGameOver}
          character={character}
          setScenario={setScenario}
        />
      ) : (
        ""
      )}

      <EndingScreen restartGame={restartGame} isGameOver={isGameOver} />
    </div>
  );
}

export default Game;
