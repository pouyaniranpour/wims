import styles from './Story.module.css'

import { allScenarios} from './characterScenarios';

const Story = ({ scenario, onChoice, onGameResult, character }) => {

    let scenarios = allScenarios[character];
    
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
        <div>
            <div>
                {/* <ul>{currentScenario.text.map((textItem, index) => (
                    <li className={styles.textItem} key={index}>{textItem}</li>
                ))}</ul> */}
                <p className={styles.text}>{currentScenario.text}</p>
                <ul>
                    {currentScenario.choices.map((choice, index) => (
                        <li key={index}>
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