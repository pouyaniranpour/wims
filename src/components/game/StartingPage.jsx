// import "../App.css";

import Footer from "../Footer";
import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/acmWhite.svg'
import orangeArrow from '../../assets/orangeArrow.svg'
import leftArrow from '../../assets/startingPage/arrowLeft.png'

function StartingPage() {
  const location = useLocation().pathname;

  return (
       <div className={`${location === '/startingPage'? 'opacity-100 z-10': 'opacity-0 -z-10'} transition-opacity duration-500 ease-in-out grid grid-cols-2 h-full w-full`}>
        <div className="h-full w-full bg-[#27272A] flex flex-col justify-center items-center text-zinc-300 font-bebas-neue">
              <div className="relative top-5 left-5 h-3/4 w-2/3"><p className="text-large">A STUDY IN 2018 FOUND THAT <span className="text-darker-orange">18,157</span> AUCKLANDERS MET THE DEFINITION OF HOMELESS</p>
          <p className="text-zinc-300 text-[44px] mt-10"> AND THAT NUMBER GROWS EVERY YEAR...</p>
          <a className="mt-28 w-fit flex items-center hover:text-zinc-50" href="https://www.housingfirst.co.nz/data-and-evidence/aucklands-homeless-count/" target="_blank">
            <img src={leftArrow} /><p className="font-viga text-2xl text-zinc-50">Check studies</p></a>
        </div>
            <img className="w-24 absolute top-11 left-11" src={logo} alt="acm logo"/>
            
      </div>
          
        <div className="h-full w-full bg-footsteps bg-cover flex justify-center items-end">
        <div className="flex flex-col relative left-16"><p className="font-viga text-2xl text-zinc-800">Walk My Life</p>
          <Link to={"/gettingStarted"}>
            <div className="cursor-pointer flex justify-center items-center relative bottom-4"><span className="text-large font-bebas-neue text-dark-orange">PLAY GAME</span>
              <img className="ml-2 border border-black" src={orangeArrow} /></div>
          </Link>
          
        </div>      
      </div>
      <Footer />
    </div>
   
  )
}
export default StartingPage