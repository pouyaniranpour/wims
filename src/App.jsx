// import './App.css'
import { useState } from 'react';
import Game from './components/Game';

 
function App() {
    const [isModalShowing, setIsModalShowing] = useState(true);
    return (
        <div className="relative h-screen ">
            {isModalShowing ?
                <div className='absolute inset-0 flex flex-col items-center justify-center size-full bg-black text-white 600' onClick={() => setIsModalShowing(!isModalShowing)}>
                    <p>How does someone end up living on the street or in their car? Play Crossroads and face the challenges of someone experiencing homelessness.</p>

                    <p>Click anywhere to begin</p>
                </div>
                :
                <Game/>
            }
        </div>
    );
}
 
export default App;