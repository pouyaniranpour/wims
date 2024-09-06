import './App.css'
import { useState } from 'react';
import Game from './components/game/Game';
import LandingPage from './components/LandingPage';
import StartingPage from './components/game/StartingPage';
import Footer from './components/Footer';

 
function App() {
    const [isLandingPageShowing, setIsLandingPageShowing] = useState(true); //FIXME remove when finished with character selection
    const [isStartingPageShowing, setStartingPageShowing] = useState(false); 
    const [hasGameStarted, setHasGameStarted] = useState(false);

    const handleBeginButton = () => {
        setIsLandingPageShowing(false);
        setStartingPageShowing(true);
    }

    const handlePlayGame = () => {
        setStartingPageShowing(false);
        setHasGameStarted(true);
    }
    return (
        <div className="relative h-screen">
            <LandingPage isShowing={isLandingPageShowing} handleBeginButton={handleBeginButton} />
            <Game hasGameStarted={hasGameStarted} />
            <StartingPage startingPageShowing={isStartingPageShowing} handlePlayGame={handlePlayGame}  />
            
            {!isLandingPageShowing && <Footer startingPageShowing={isStartingPageShowing} />}
        </div>
    );
}
 
export default App;