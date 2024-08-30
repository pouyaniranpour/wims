// import './App.css'
import { useState } from 'react';
import Game from './components/Game';
import OpeningScreen from './components/OpeningScreen';

 
function App() {
    const [isModalShowing, setIsModalShowing] = useState(false); //TODO change back to true after fixing character selection screen

    const handleBeginButton = () => {
        setIsModalShowing(!isModalShowing);
    }
    return (
        <div className="relative h-screen ">
            {isModalShowing ?
                <OpeningScreen handleBeginButton={handleBeginButton} />
                :
                <Game/>
            }
        </div>
    );
}
 
export default App;