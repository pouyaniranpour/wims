import '../../App.css'

import { youth } from './scenarioComponents/scenarios/youthScenarios';
import { woman } from './scenarioComponents/scenarios/womanScenarios';
import { man } from './scenarioComponents/scenarios/manScenarios';
import Scenario from './Scenario';

const Story = ({ scenario, onChoice, isGameOver, character }) => {

    const allScenarios = {
        youth: youth,
        woman: woman,
        man: man,
      };

    const scenarios = allScenarios[character];
    
    const currentScenario = scenarios.find(s => s.id === scenario);
 
    const handleChoice = (choice) => {
        const nextScenario = choice.nextScenario;
        onChoice(choice);
        let regex = /(endingScreenTrigger)/i; 
        if (regex.test(nextScenario)) {
            isGameOver(true);
        }
    };
 
    return (
        <div className='absolute flex flex-col justify-center items-center h-full w-full'>
            <Scenario handleChoice={handleChoice} currentScenario={currentScenario} />
            
        </div>
    );
};
 
export default Story;