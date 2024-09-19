import './App.css'

import { Routes, Route } from 'react-router-dom';

import Game from './components/game/Game';
import StartingPage from './components/game/StartingPage';

import './fonts.css';
 
function App() {
    return (
            <div className="relative h-screen w-screen">
                <Routes>
                <Route path='/' element={ <StartingPage /> } />
                <Route path='/game' element={<Game />} />
                
                </Routes>
            
        </div>
        
    );
}
 
export default App;