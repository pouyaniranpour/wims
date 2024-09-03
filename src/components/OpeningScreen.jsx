import "../App.css";
import { useState} from "react";

function OpeningScreen({ handleBeginButton, isShowing }) {
 
  
  return (
      <div className={`${isShowing? 'opacity-100 z-10': 'opacity-0 -z-10'} transition-opacity duration-1000 ease-in-out bg-gradient-to-t from-[#E5F7FB] to-white absolute inset-0 flex flex-col items-center justify-center size-full`}>
          
          <div className="relative border border-black flex justify-center items-center w-full h-full">
              <img className="w-96 h-48 absolute top-50 left-50 fadeAndMove" src="/landingPage/acmLogo.svg" alt="acm logo" />
              <div className="z-10 absolute top-40 left-50 font-ibm-plex-sans leading-[72px] text-5xl text-[#007596] font-bold frame3">A <a className="text-[#FF9B32] cursor-pointer" href="https://www.housingfirst.co.nz/data-and-evidence/aucklands-homeless-count/">study</a> in 2018 found that 18,417 Aucklanders <br /> met the definition of homeless, <br />and that number grows every year</div>
              <div className="absolute top-40 left-50 font-ibm-plex-sans leading-[72px] text-5xl text-[#007596] font-bold frame4">We believe the best way to tackle this issue,<br /> is through our youth - the future of New Zealand</div>
             
              <div className="absolute top-40 left-50 font-ibm-plex-sans leading-[72px] text-5xl text-[#007596] font-bold frame5">Are you ready to enter our world and see for<br />  yourself the true challenges those who<br /> experience homelessness face?</div>
            <div></div>
              <div onClick={handleBeginButton} className="z-10 hover:cursor-pointer absolute bottom-50 right-96 bg-white shadow-custom-darker flex justify-center items-center rounded-full border border-black w-64 h-12 text-xl font-ibm-plex-sans frame6">Let's begin</div>
              <img className="w-3/4 absolute bottom-0 frames frame2" src="/landingPage/acm-cityscape.svg" alt="acm cityscape" />
        
      </div>
      

    </div>
  );
}
export default OpeningScreen;
