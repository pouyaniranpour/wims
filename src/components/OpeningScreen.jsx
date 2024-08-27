import "../App.css";
function OpeningScreen() {
  return (
      <div className="bg-gradient-to-t from-[#E5F7FB] to-white absolute inset-0 flex flex-col items-center justify-center size-full">
          
          <div className="relative border border-black flex justify-center items-center w-full h-full">
              <img className="w-20 absolute left-5 top-5  frame2" src="/landingPage/acmLogo.svg" alt="acm logo" />
              <img className="w-48 absolute top-50 left-50 frame1" src="/landingPage/acmLogo.svg" alt="acm logo" />
              <div className="absolute top-40 left-50 font-ibm-plex-sans leading-[72px] text-5xl text-[#007596] font-bold frame3">A study in 2018 found that 18,417 Aucklanders <br /> met the definition of homeless, <br />and that number grows every year</div>
              <div className="absolute top-40 left-50 font-ibm-plex-sans leading-[72px] text-5xl text-[#007596] font-bold frame4">We believe the best way to tackle this issue,<br /> is through our youth - the future of New Zealand</div>
              <div className="absolute top-40 left-50 font-ibm-plex-sans leading-[72px] text-5xl text-[#007596] font-bold frame5">Are you ready to enter our world and see for<br />  yourself the true challenges those who<br /> experience homelessness face?</div>
            <div className="absolute bottom-50 right-96 bg-white shadow-custom-darker flex justify-center items-center border border-black rounded-full w-64 h-12 text-xl font-pangolin frame6">Let's begin</div>
              <img className="absolute bottom-0 frames frame2" src="/landingPage/acm-cityscape.svg" alt="acm cityscape" />
        
      </div>
    </div>
  );
}
export default OpeningScreen;
