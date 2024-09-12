import './App.css'

import { Routes, Route, Router } from 'react-router-dom';

import { useState } from 'react';
import Game from './components/game/Game';
import OpeningScreen from './components/OpeningScreen';
import StartingPage from './components/game/StartingPage';
import EndingScreen from './components/EndingScreen';
import Footer from './components/Footer';

 
function App() {
    // const [isOpeningScreenShowing, setIsOpeningScreenShowing] = useState(false); //FIXME remove when finished with character selection
    // const [isStartingPageShowing, setStartingPageShowing] = useState(false); 
    // const [inGameComponent, setInGameComponent] = useState(true); //FIXME

    // const handleBeginButton = () => {
    //     setIsOpeningScreenShowing(false);
    //     setStartingPageShowing(true);
    // }

    // const handlePlayGame = () => {
    //     setStartingPageShowing(false);
    //     setIsGameVisible(true);
    // }
    return (
            <div className="relative h-screen">
            {/* <OpeningScreen isShowing={isOpeningScreenShowing} handleBeginButton={handleBeginButton} />
            <Game inGameComponent={inGameComponent} />
            <StartingPage startingPageShowing={isStartingPageShowing} handlePlayGame={handlePlayGame}  />
            {!isOpeningScreenShowing && <Footer startingPageShowing={isStartingPageShowing} />} */}
                <Routes>
                <Route path='/' element={ <OpeningScreen /> } />
                {/* <Route path='/startingPage' element={ <StartingPage /> } /> */}
                <Route path='/startingPage' element={<StartingPage />} />
                <Route path='/game' element={<Game />} />
                <Route path='/ending' element={<EndingScreen isGameOver={true} />} />
                
                </Routes>
            
        </div>
        
    );
}
 
export default App;