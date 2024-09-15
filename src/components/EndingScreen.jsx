

import Feedback from '../assets/endingScreen/linkIcons/feedback.svg';
import Summary from '../assets/endingScreen/linkIcons/journeySummary.svg';
import Resources from '../assets/endingScreen/linkIcons/resources.svg';
import StartAgain from '../assets/endingScreen/linkIcons/startAgain.svg';
import TakeAction from '../assets/endingScreen/linkIcons/takeAction.svg';
import Banner from '../assets/endingScreen/banner.svg'
import Logo from '../assets/acmWhite.svg'

function EndingScreen({ restartGame, isGameOver }) {
  const location = '/endingScreen'; //this is so the footer doesn't display the ACM logo on the bottom-left

  const itemsArray = [
    {
      imgSrc: StartAgain,
      text: "Start Again"
    },
    {
      imgSrc: TakeAction,
      text: "Take Action"
    },
    {
      imgSrc: Summary,
      text: "Journey Summary"
    },
    {
      imgSrc: Resources,
      text: "Resources"
    },
    {
      imgSrc: Feedback,
      text: "Feedback"
    },

  ]
  return (
      <div className={`${isGameOver?'relative opacity-100 z-10': 'opacity-0 -z-10'} grid grid-rows-2 transition-opacity duration-[2000ms] ease-in-out w-full h-full`}>    
      <div className="relative bg-zinc-800 w-full h-full flex flex-col">
        <img className="w-26 mt-14 ml-14 absolute" src={Logo} />
        <div className="h-full flex items-center justify-center">
          <div className="font-bebas-neue text-[64px] text-zinc-300">The future is hopeful and it starts with <span className="text-dark-orange">you</span></div>
        </div>
        <div className="flex items-center justify-center h-full">
          <img className="" src={Banner} alt="walk my life banner" />
        </div>
      </div>
      <div className=" w-full h-full flex justify-center items-center">
        {
          itemsArray.map((item, index) => {
            return(<div className="items-center" key={index}>
              <img className="ml-11 mr-11" src={item.imgSrc} alt={`avatar of ${item.text}`} />
            </div>)
          })
        }
      </div>
    </div>
  )
}
export default EndingScreen