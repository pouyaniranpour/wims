import "../../App.css";
import { useState } from "react";
import Story from "./Story";
import CharacterSelection from "../decisions/CharacterSelection";
import Footer from "../Footer";
import EndingScreen from "../EndingScreen";

import { Link, useLocation } from "react-router-dom";

function Game() {
  const location = useLocation().pathname;
  const [scenario, setScenario] = useState();
  // const [isGameOver, setIsGameOver] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [character, setCharacter] = useState();

  const handleChoice = (choice) => {
    console.log(choice);
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
    setScenario("start");
    // setScenario('closeFriend');
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
          onChoice={handleChoice}
          isGameOver={handleGameOver}
          character={character}
        />
      ) : (
        ""
      )}

      <EndingScreen restartGame={restartGame} isGameOver={isGameOver} />
    </div>
  );
}

export default Game;
