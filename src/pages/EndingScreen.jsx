

import feedback from '../assets/endingScreen/linkIcons/feedback.svg';
import summary from '../assets/endingScreen/linkIcons/journeySummary.svg';
import resources from '../assets/endingScreen/linkIcons/resources.svg';
import startAgain from '../assets/endingScreen/linkIcons/startAgain.svg';
import takeAction from '../assets/endingScreen/linkIcons/takeAction.svg';
import banner from '../assets/endingScreen/banner.svg'
import logo from '../assets/main/acmWhite.svg'

function EndingScreen({ restartGame, isGameOver }) {
  const location = '/endingScreen'; //this is so the footer doesn't display the ACM logo on the bottom-left

  return (
      <div className={`${isGameOver?'relative opacity-100 z-10': 'opacity-0 -z-10'} grid grid-rows-2 transition-opacity duration-[500ms] ease-in-out w-full h-full`}>    
      <div className="relative bg-zinc-800 w-full h-full flex flex-col">
        <img className="w-26 mt-14 ml-14 absolute" src={logo} />
        <div className="h-full flex items-center justify-center">
          <div className="font-bebas-neue text-[64px] text-zinc-300">The future is hopeful and it starts with <span className="text-dark-orange">you</span></div>
        </div>
        <div className="flex items-center justify-center h-full">
          <img className="" src={banner} alt="walk my life banner" />
        </div>
      </div>
      <div className=" w-full h-full flex justify-center items-center">
        {/* {
          itemsArray.map((item, index) => {
            return(<div className="items-center" key={index}>
              <img onClick={item.text === 'Start Again'? function : ''} className={`cursor-pointer ml-11 mr-11`} src={item.imgSrc} alt={`avatar of ${item.text}`} />
            </div>)
          })
        } */}
        <div className='flex items-center'>
        <img onClick={()=> restartGame()} className={`cursor-pointer ml-11 mr-11`} src={startAgain} alt={``} />
        <img className={`cursor-pointer ml-11 mr-11`} src={takeAction} alt={``} />
        <img className={`cursor-pointer ml-11 mr-11`} src={summary} alt={``} />
        <img className={`cursor-pointer ml-11 mr-11`} src={resources} alt={``} />
        <img className={`cursor-pointer ml-11 mr-11`} src={feedback} alt={``} />


        </div>
      </div>
    </div>
  )
}
export default EndingScreen