import '../App.css'
import styles from './Story.module.css'

import { youth } from './scenarios/youthScenarios';
import { woman } from './scenarios/womanScenarios';
import { man } from './scenarios/manScenarios';

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
        <div className={styles.outerContainer}>
            <div className={styles.scenarioTextContainer}>
                {/* <ul>{currentScenario.text.map((textItem, index) => (
                    <li className={styles.textItem} key={index}>{textItem}</li>
                ))}</ul> */}
                <p className={styles.text}>{currentScenario.text}</p>
                <ul className='scenarioButtons'>
                    {currentScenario.choices.map((choice, index) => (
                        <li key={index} >
                            <button onClick={() => handleChoice(choice)}>
                            {choice.text}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
 
export default Story;