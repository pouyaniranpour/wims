import '../App.css'
import styles from './Story.module.css'

import { youth } from './scenarios/youthScenarios';
import { woman } from './scenarios/womanScenarios';
import { man } from './scenarios/manScenarios';
import YoutubePlayer from './YouTubePlayer';
import Scenario from './Scenario';

const Story = ({ scenario, onChoice, onGameResult, character }) => {

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
        let regex = /(ending)/i; 
        if (regex.test(nextScenario)) {
            onGameResult('end');
        }
    };
 
    return (
        // <div className='outerContainer'>
        <div className='absolute flex flex-col justify-center items-center h-full w-full'>
            <Scenario handleChoice={handleChoice} currentScenario={ currentScenario } />
        </div>
    );
};
 
export default Story;