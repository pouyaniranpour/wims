// import './App.css'
import { useState } from 'react';
import Game from './components/game/Game';
import OpeningScreen from './components/OpeningScreen';

 
function App() {
    const [isOpeningScreenShowing, setIsOpeningScreenShowing] = useState(false); //FIXME remove when finished with character selection

    const handleBeginButton = () => {
        setIsOpeningScreenShowing(!isOpeningScreenShowing);
    }
    return (
        <div className="relative h-screen ">
            <OpeningScreen isShowing={isOpeningScreenShowing} handleBeginButton={handleBeginButton} />
            
            <Game isOpeningScreenShowing={isOpeningScreenShowing}/>
        </div>
    );
}
 
export default App;