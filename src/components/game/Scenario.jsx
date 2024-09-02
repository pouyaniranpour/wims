import YoutubePlayer from './YouTubePlayer';
import '../../App.css'
import parse from 'html-react-parser';
import { useState } from 'react';
import { ReactTyped } from "react-typed";


function Scenario({ handleChoice, currentScenario }) {
    const [isFullTextShowing, setIsFullTextShowing] = useState(false);
    const [isSkipped, setIsSkipped] = useState(false);

    const handleSkip = () => {
        setIsSkipped(true);
        setIsFullTextShowing(true);
    }
    const text = parse(currentScenario.text);
  //FIXME remove either Windups or ReactTyped depending on which one is used 
    return (
        <div className='flex flex-col justify-center items-center w-2/3 h-2/3'>
            {isSkipped ? 
            <div className='text-3xl w-2/3 h-2/3 font-ibm-plex-mono'>{text}</div>
        :
        <ReactTyped className='text-3xl w-2/3 h-2/3 font-ibm-plex-mono'
                showCursor={false}
                
              strings={[currentScenario.text]}
  typeSpeed={30}
  startDelay={300}
  onComplete={() => setIsFullTextShowing(true)}
  loop={false}
          />
        }
          
            
                {currentScenario.video && isFullTextShowing ?
                    <div>
                        <YoutubePlayer video={currentScenario.video}/>
                </div>
                : ''
                }
            {isFullTextShowing ? <ul className=' border flex w-full justify-center items-center'>
                    {currentScenario.choices.map((choice, index) => (
                        <li key={index} >
                            <button className='mx-4 px-4 flex flex-col  rounded-lg' onClick={() => { handleChoice(choice); setIsFullTextShowing(false); }}>
                            {choice.text}</button>
                        </li>

                    ))}
            </ul> : <button onClick={handleSkip }>Skip</button>}
        </div>
  )
}
export default Scenario