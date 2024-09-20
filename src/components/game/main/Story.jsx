import "../../../App.css";

import { youth } from "../scenarioComponents/scenarios/youthScenarios";
import { woman } from "../scenarioComponents/scenarios/womanScenarios";
import { man } from "../scenarioComponents/scenarios/manScenarios";
import Scenario from "../../game/main/Scenario";

import { useState } from "react";

const Story = ({
  scenarioId,
  isGameOver,
  handleGameOver,
  character,
  setScenarioId,
}) => {
  const [finalScenario, setFinalScenario] = useState();
  if (isGameOver) {
    setFinalScenario(undefined);
  }

  const allScenarios = {
    youth: youth,
    woman: woman,
    man: man,
  };

  const scenarios = allScenarios[character];

  const currentScenario = scenarios.find(
    (scenarioObject) => scenarioObject.id === scenarioId
  ); //Finds the 'scenario object' matching the 'scenario' variable, which is the id of the scenario object

  const handleChoice = (choice) => {
    if (currentScenario.isEndingIntroNext) {
      setFinalScenario(choice.nextScenario);
      setScenarioId("endingIntro");
    } else if (currentScenario.isEndingNext) {
      setScenarioId(finalScenario);
    } else {
      setScenarioId(choice.nextScenario);
    }
  };

  return (
    <div className="absolute flex flex-col justify-center items-center h-full w-full">
      <Scenario
        handleChoice={handleChoice}
        currentScenario={currentScenario}
        handleGameOver={handleGameOver}
        character={character}
      />
    </div>
  );
};

export default Story;
