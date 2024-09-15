import '../../App.css'

import { youth } from './scenarioComponents/scenarios/youthScenarios';
import { woman } from './scenarioComponents/scenarios/womanScenarios';
import { man } from './scenarioComponents/scenarios/manScenarios';
import Scenario from './Scenario';

import { useState } from 'react';


const Story = ({ scenario, isGameOver, handleGameOver, character, setScenario }) => {
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
    
    const currentScenario = scenarios.find(s => s.id === scenario);
 
    const handleChoice = (choice) => {
        if (currentScenario.isEndingIntroNext) {
            setFinalScenario(choice.nextScenario);
            setScenario('endingIntro');
        } else if (currentScenario.isEndingNext) {
            setScenario(finalScenario);
        }
        else {
            setScenario(choice.nextScenario);
          }
    };
 
    return (
        <div className='absolute flex flex-col justify-center items-center h-full w-full'>
            <Scenario handleChoice={handleChoice} currentScenario={currentScenario} handleGameOver={handleGameOver} />
            
        </div>
    );
};
 
export default Story;