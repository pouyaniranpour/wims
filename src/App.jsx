import React from 'react';
import Game from './components/Game';
 
function App() {
    return (
        <div className="container">
            <div>
                <div>
                    <h1>Walk in My Shoes</h1>
                </div>
                <div>
                    <Game />
                </div>
            </div>
        </div>
    );
}
 
export default App;