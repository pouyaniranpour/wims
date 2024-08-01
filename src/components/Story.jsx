import styles from './Story.module.css'

const Story = ({ scenario, onChoice, onGameResult}) => {
    const scenarios = [
        {
            id: 0,
            text: ['Choose your character'],
            choices: [
                
                { text: "Youth | Rangatahi", nextScenario: 1 },
                { text: "Wahine | woman with daughter", nextScenario: 'woman' },
                { text: "Family man", nextScenario: 'familyMan' }
            ]
        },
        {
            id: 1,
            text: [
                "You are 17 years old, ", 
                "After years of struggle, you come out as transgender to your family. ",
                "Even though your mother is kind, your stepfather demands you leave the house immediately and don't come back.",
                        "You quickly gather up a bag of clothes and your mum gives you some money for food.",
                        "Your brother and sister are crying and your stepdad keeps shouting, so you are stunned and not able to think clearly.",
                        "You need somewhere to go. Where next?"
            ],
            choices: [
                { text: 'Church', nextScenario: 'church' },
                { text: 'Close Friend', nextScenario: 'Friend' },
                { text: 'Google', nextScenario: 'google' },
            ]
        },
        {
            id: 2,
            text: `It's a Sunday night so the church is locked up and there's no-one around. \n` +
                " You did grab a warm sleeping bag so you find a spot out of the wind & rain and bunk there overnight." +
                "It's cold, you're on hard concrete and you are still shaking about what happened. " +
                "You go over and over it in your head. You were so sure your family would accept the news. You don't get any sleep." +
                " Your sleeping bag gets wet. The next morning the church secretary arrives to find you. " +
                "She makes you a cup of tea, gives you breakfast and chats about your situation. " +
                "She starts phoning around trying to see who can help. " +
                "When she asks what you do want and where you could go to live, you stare at her. " +
                "You don't know. You were planning to study at university while living at home to save money. " +
                "She asks if there is another family member you can call.  You think your aunty might help.",
            choices: [
                { text: 'Call aunty', nextScenario: 'aunty' },
            ]
        },
        {
            id: 3,
            text: "Your aunty arrives in a flurry of hugs which is nice. " +
                "But she says they can maybe put you up for 6 months - not forever. " +
                "She says they can't afford it but also you should be old enough to stand on your own two feet." +
                `She makes it plain you are not to have any "relationships" while living there and also to please tone down any "flamboyant dress". ` +
                `The family "will love you but won't call you that" (your new name). ` +
                `You are not to talk with your cousins about being trans.Do you accept?`,
            choices: [
                { text: 'Not sure', nextScenario: 'auntyNotSure' },
                { text: 'No', nextScenario: 'auntyNo' },
            ]
        },
        {
            id: 4,
            text: `  You are too emotional to be understanding about everyone else's issues. ` +
                `Why are they making you work harder? You pretend to go to the toilet but grab your stuff and run off. ` +
                `You decide to hide on the school's premises. You know where there are showers you can sneak into during the day. ` +
                `It's a big school. There is a dairy nearby.`,
            choices: [
                { text: 'Continue', nextScenario: 'trainIntoCity' }
            ]
        },
        {
            id: 5,
            text: `You pretend to go to the toilet to get some space. ` +
                `When you return the church administrator has asked the Social Worker to step in. ` +
                `He lays out a few options if you don't want to stay with your aunty but says it will take a few days to sort out. ` +
                `He doesn't know of a place you can go for tonight. ` +
                `Why don't you go with your aunty for a couple of days and I'll look into some options and meet again in a couple of days to go through them? ` +
                `Go with your aunt?`,
            choices: [
                { text: 'Yes', nextScenario: 'goWithAunt' },
                { text: 'No', nextScenario: 'auntyNo' }
            ]
        },
    
    ];
    
 
    const currentScenario = scenarios.find(s => s.id === scenario);
 
    const handleChoice = (choice) => {
        const nextScenario = choice.nextScenario;
        onChoice(choice);
 
        if (nextScenario === 7) {
            onGameResult('win');
        } else if (nextScenario === 2 || nextScenario === 6) {
            onGameResult('lose');
        }
    };
 
    return (
        <div>
            <div>
                <ul>{currentScenario.text.map((textItem, index) => (
                    <li className={styles.textItem} key={index}>{textItem}</li>
                ))}</ul>
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