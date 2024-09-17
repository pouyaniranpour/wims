import './App.css'

import { Routes, Route } from 'react-router-dom';

import Game from './components/game/Game';
import StartingPage from './components/game/StartingPage';
import GettingStarted from './components/GettingStarted';

import './fonts.css';
 
function App() {
    return (
            <div className="relative h-screen">
                <Routes>
                <Route path='/' element={ <StartingPage /> } />
                <Route path='/gettingStarted' element={<GettingStarted />} />
                <Route path='/game' element={<Game />} />
                
                </Routes>
            
        </div>
        
    );
}
 
export default App;