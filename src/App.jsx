import './App.css'

import { Routes, Route, Router } from 'react-router-dom';

import { useState } from 'react';
import Game from './components/game/Game';
import OpeningScreen from './components/OpeningScreen';
import StartingPage from './components/game/StartingPage';
import EndingScreen from './components/EndingScreen';
import Footer from './components/Footer';
import GettingStarted from './components/GettingStarted';


 
function App() {
    return (
            <div className="relative h-screen">
                <Routes>
                <Route path='/' element={ <OpeningScreen /> } />
                <Route path='/startingPage' element={ <StartingPage /> } />
                <Route path='/gettingStarted' element={<GettingStarted />} />
                <Route path='/game' element={<Game />} />
                
                </Routes>
            
        </div>
        
    );
}
 
export default App;