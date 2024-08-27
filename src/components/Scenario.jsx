import YoutubePlayer from './YouTubePlayer';
import '../App.css'
import parse from 'html-react-parser';
import { useState } from 'react';
import { ReactTyped } from "react-typed";
import { WindupChildren} from 'windups';


function Scenario({ handleChoice, currentScenario }) {
    //const text = parse(currentScenario.text);
  //FIXME remove either Windups or ReactTyped depending on which one is used 
    return (
      <div className='flex flex-col justify-center items-center w-2/3 h-2/3'>
          <ReactTyped className='text-3xl w-2/3 h-2/3 font-ibm-plex-mono'
              showCursor= {false}
              startWhenVisible
              strings={[
                 currentScenario.text
      ]}
    typeSpeed={40}
          />
            
                {currentScenario.video &&
                    <div>
                        <YoutubePlayer video={currentScenario.video}/>
                    </div>
                }
            <ul className=' border flex w-full justify-center items-center'>
                    {currentScenario.choices.map((choice, index) => (
                        <li key={index} >
                            <button className='mx-4 px-4 flex flex-col  rounded-lg' onClick={() => handleChoice(choice)}>
                            {choice.text}</button>
                        </li>

                    ))}
                </ul>
        </div>
  )
}
export default Scenario