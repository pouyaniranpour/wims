function StartingPage({ startingPageShowing, handlePlayGame }) {
  return (
    <div className={`${startingPageShowing? 'opacity-100 z-10': 'opacity-0 -z-10'} absolute top-0 left-0 transition-opacity duration-500 ease-in-out set-0 grid grid-cols-2 h-full w-full`}>
        <div className="relative  h-full w-full bg-[#27272A] flex flex-col justify-center items-center text-zinc-300 font-bebas-neue">
              <div className="relative top-5 left-5 h-3/4 w-2/3"><p className="text-large">A STUDY IN 2018 FOUND THAT <span className="text-darker-orange">18,157</span> AUCKLANDERS MET THE DEFINITION OF HOMELESS</p>
          <p className="text-zinc-300 text-[44px] mt-10"> AND THAT NUMBER GROWS EVERY YEAR...</p>
          <a className="mt-28 w-fit flex items-center hover:text-zinc-50" href="https://www.housingfirst.co.nz/data-and-evidence/aucklands-homeless-count/" target="_blank"><img src="/startingPage/arrowLeft.png" alt="arrow pointing left"/><p className="font-viga text-2xl text-zinc-50">Check studies</p></a>
        </div>
            <img className="w-[120px] brightness-200 absolute top-11 left-11" src="/startingPage/acmLogoLight.svg" alt="acm logo"/>
            
      </div>
          
        <div className="h-full w-full bg-footsteps bg-cover flex justify-center items-end">
            <div className="flex flex-col relative left-16"><p className="font-viga text-2xl text-zinc-800">Walk My Life</p><div onClick={handlePlayGame}  className="cursor-pointer flex justify-center items-center relative bottom-4"><p className="text-large font-bebas-neue text-dark-orange">PLAY GAME</p><img className="ml-2" src="/startingPage/orangeArrow.png"/></div></div>      
        </div>
    </div>
  )
}
export default StartingPage