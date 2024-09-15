import "../App.css";
import { Link, useLocation } from "react-router-dom";

import acmLogo from '../../src/assets/acmLogo.svg'
import cityscape from '../../src/assets/openingScreen/cityscape.svg'





function OpeningScreen() {
  const location = useLocation().pathname;
  
  return (
      // <div className={`${isShowing? 'opacity-100 z-10': 'opacity-0 -z-10'} transition-opacity duration-1000 ease-in-out bg-gradient-to-t from-[#E5F7FB] to-white absolute inset-0 flex flex-col items-center justify-center size-full`}>
      <div className={`${location === '/'? 'opacity-100 z-10': 'opacity-0 -z-10'} transition-opacity duration-1000 ease-in-out bg-gradient-to-t from-[#E5F7FB] to-white absolute inset-0 flex flex-col items-center justify-center size-full`}>
          
          <div className="relative flex justify-center items-center w-full h-full">
        <img className="absolute top-50 left-50 fadeInAndMove h-[200px]" src={acmLogo} alt="acm logo" />
        <img className="w-3/4 absolute bottom-0 fadeInCityscape" src={cityscape} alt="acm cityscape" />
              <div className="z-10 absolute top-40 left-50 font-ibm-plex-sans leading-[72px] text-5xl text-[#007596] font-bold fadeInText">A <a className="text-[#FF9B32] cursor-pointer" href="https://www.housingfirst.co.nz/data-and-evidence/aucklands-homeless-count/" target="_blank">study</a> in 2018 found that 18,417 Aucklanders <br /> met the definition of homeless, <br />and that number grows every year</div>
                     
              {/* <div onClick={handleBeginButton} className="-z-20 hover:cursor-pointer absolute bottom-50 right-96 bg-white shadow-custom-darker flex justify-center items-center rounded-full border border-black w-64 h-12 text-xl font-ibm-plex-sans fadeInButton">Let's begin</div> */}
              <Link to='/startingPage'><div className="-z-20 hover:cursor-pointer absolute bottom-50 right-96 bg-white shadow-custom-darker flex justify-center items-center rounded-full border border-black w-64 h-12 text-xl font-ibm-plex-sans fadeInButton">Let's begin</div></Link>
              
        
      </div>
      

    </div>
  );
}
export default OpeningScreen;
