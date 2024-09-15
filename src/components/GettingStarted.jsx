
import Footer from "./Footer"
import { Link, useLocation } from "react-router-dom";

import play from '../assets/gettingStarted/play.svg';
import learn from '../assets/gettingStarted/learn.svg';
import reflect from '../assets/gettingStarted/reflect.svg';
import orangeArrow from '../assets/orangeArrow.svg'

function GettingStarted() {
  const location = useLocation().pathname;
  console.log(location)
  return (
    <div className={`${location === '/gettingStarted'? 'opacity-100 z-10': 'opacity-0 -z-10'} transition-opacity duration-500 ease-in-out h-full w-full grid grid-rows-[1.5fr,3fr,1fr]`}>
      <div className="w-full h-full flex items-center justify-center text-[100px] font-bebas-neue">Getting Started</div>
      <div className="w-full h-full flex items-start justify-center">
        <div className="flex flex-col mx-20"><img src={play} alt="image representing gameplay" />
          <span className="font-viga text-[32px] text-zinc-900 text-center my-14">Play</span>
          <p className="text-center font-ibm-plex-sans">Lorem ipsum dolor sit amet</p>
          <p className="text-center font-ibm-plex-sans font-semibold">consectetur adipiscing elit.</p>
        </div>
        <div className="flex flex-col mx-20"><img src={learn} alt="image representing gameplay" />
          <span className="font-viga text-[32px] text-zinc-900 text-center my-14">Learn</span>
          <p className="text-center font-ibm-plex-sans">Lorem ipsum dolor sit amet</p>
          <p className="text-center font-ibm-plex-sans font-semibold">consectetur adipiscing elit.</p>
        </div>
        <div className="flex flex-col mx-20"><img src={reflect} alt="image representing gameplay" />
          <span className="font-viga text-[32px] text-zinc-900 text-center my-14">Reflect</span>
          <p className="text-center font-ibm-plex-sans">Lorem ipsum dolor sit amet</p>
          <p className="text-center font-ibm-plex-sans font-semibold">consectetur adipiscing elit.</p>
        </div>
        
        
        
      </div>
      <div className="w-full h-full flex justify-end items-center">
        <Link className="flex" to={'/game'}><span className="font-bebas-neue text-large text-dark-orange">Start</span><img className="ml-4 mr-16" src={orangeArrow} alt="" /></Link>
        
      </div>
    <Footer />
    </div>
  )
}
export default GettingStarted