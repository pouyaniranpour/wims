import "../../App.css";
import { useState } from "react";
import Story from "./Story";
import CharacterSelection from "../decisions/CharacterSelection";
import EndingScreen from "../EndingScreen";

import { useLocation } from "react-router-dom";

function Game() {
  const location = useLocation().pathname;
  const [scenarioId, setScenarioId] = useState();
  //const [isGameOver, setIsGameOver] = useState(true); //used for testing ending screen
  const [isGameOver, setIsGameOver] = useState(false);
  const [character, setCharacter] = useState();

  const restartGame = () => {
    setScenarioId(null);
    setIsGameOver(false);
    setCharacter(null);
  };

  const handleGameOver = (booleanValue) => {
    setIsGameOver(booleanValue);
    console.log(booleanValue);
  };

  const handleCharacter = (characterInput) => {
    setScenarioId("start");
    setCharacter(characterInput);
  };

  const renderGame = () => {
    if (isGameOver) {
      return;
    } else {
      if (character) {
        return (
          <Story
            scenarioId={scenarioId}
            isGameOver={isGameOver}
            handleGameOver={handleGameOver}
            character={character}
            setScenarioId={setScenarioId}
          />
        );
      } else {
        return (
          <div className="absolute flex flex-col items-center justify-center h-full w-full">
            <CharacterSelection handleCharacter={handleCharacter} />
          </div>
        );
      }
    }
  };

  return (
    <div
      className={`${
        !location === "/game" ? " opacity-0 -z-10" : "opacity-100 z-10"
      } relative transition-opacity duration-1000 ease-in-out flex flex-col justify-center items-center h-full w-full`}
    >
      {renderGame()}

      <EndingScreen restartGame={restartGame} isGameOver={isGameOver} />
    </div>
  );
}

export default Game;
