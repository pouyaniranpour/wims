// import "../App.css";

import Footer from "../components/game/main/Footer";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/main/acmWhite.svg'
import orangeArrow from '.././assets/startingPage/orangeArrow.svg'

function StartingPage() {
  const location = useLocation().pathname;

  return (
       <div className={`${location === '/'? 'opacity-100 z-10': 'opacity-0 -z-10'} relative transition-opacity duration-500 ease-in-out grid grid-cols-2 h-full w-full border-border-black`}>
        <div className="h-full w-full bg-[#27272A] flex flex-col justify-center items-center text-zinc-300 font-bebas-neue">
              <div className="relative top-5 left-5 h-3/4 w-2/3"><p className="text-large">A STUDY IN 2018 FOUND THAT <span className="text-darker-orange">18,157</span> AUCKLANDERS MET THE DEFINITION OF HOMELESS</p>
          <p className="text-zinc-300 text-[44px] mt-10"> AND THAT NUMBER GROWS EVERY YEAR...</p>
          
        </div>
            <img className="w-24 absolute top-11 left-11" src={logo} alt="acm logo"/>
            
      </div>
          
        <div className="h-full w-full bg-footsteps bg-cover flex justify-center items-end">
          <Link to={"/game"}>
            <div className="cursor-pointer flex justify-center items-center relative bottom-4 left-52"><span className="text-large font-bebas-neue text-dark-orange">WALK MY LIFE</span>
              <img className="ml-2 relative bottom-1" src={orangeArrow} /></div>
          </Link>
      </div>
      <Footer />
    </div>
   
  )
}
export default StartingPage