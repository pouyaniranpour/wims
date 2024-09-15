/* ================================ Images for info carousel =============================== */
// import house from '../../assets/scenarioImages/rangatahi/outcomeScreen/house.svg';
// import humanFigure from '../../assets/scenarioImages/rangatahi/outcomeScreen/humanFigure.svg';
// import presentation from '../../assets/scenarioImages/rangatahi/outcomeScreen/presentation.svg';


import rightArrow from '../../assets/buttons/arrowForward.svg'

/* ==================================================================================================== */


 import { useState } from "react"
 function CarouselComponent({ informationObject}) {
//     const informationObject = [
//         {
//           image: house,
//           subtitle: 'A safe place',
//           text: [<p>You have safety and a place to stay for now. Your friend's parents are empathetic and want to organise counselling,
//             so they contact the school for help.</p>]
//         },
//         {
//           image: presentation,
//           subtitle: 'Social Worker',
//           text: [<p>The school's Worker tells you about the Youth Payment available from MSD to cover
//             cheap board and may mean your friend's parents find it easier to have you while you work things out.</p>]
//         },
//         {
//           image: humanFigure,
//           subtitle: 'Find Your Way',
//           text: [<p>It's a bit rocky, but you find your way and a few years later you are thriving.</p>]
//         },
//     ]
    
    /* ======================================= Dummy Data end ======================================= */

    const [currentIndex, setCurrentIndex] = useState(0);
    let infoText = informationObject[currentIndex].text;

    const dotArray = Array.from({ length: informationObject.length }, (v, i) => i);

    const handlePrev = () => {
        setCurrentIndex(currentIndex - 1);
    }

    const handleNext = () => {
        setCurrentIndex(currentIndex + 1);
    }

    
  return (
      <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="flex justify-evenly w-1/2 h-1/2 mt-52">
          {
              
              informationObject.map((item, index) => { 
                  return (
                      <div key={index} className="flex h-full flex-col justify-center items-center">
                          <img className={`${index !== currentIndex? 'grayscale opacity-60': ''}`} src={item.image} />
                          <span className={`font-viga text-2xl border-b-4  ${currentIndex === index? 'border-zinc-900 text-zinc-900 textShadow':'border-transparent text-zinc-400 textShadow'}`}>{item.subtitle }</span>
                      </div>
                          
                 ) 
              }
              ) 
              
              }      </div>
          <div className='flex items-center justify-center m-2'>
              <div className='font-bold text-2xl  w-6 m-4 flex'>{currentIndex > 0 && <img onClick={() => handlePrev()} className={`rotate-180 cursor-pointer z-20`} src={rightArrow} />}</div>
          <div className='flex justify-evenly items-center w-20 h-10'>
              
              {
                  dotArray.map((dot, index) => {
                      return (
                          <div key={index} className={`text-center round w-3 h-3 ${index === currentIndex? 'bg-zinc-500': 'bg-zinc-300'}`}> </div>
                      )
                  })
              }
              
              </div>
              <div className='font-bold text-2xl flex justify-center w-6 m-4'>{currentIndex < informationObject.length - 1 && <img onClick={() => handleNext()} className={`cursor-pointer z-20`} src={rightArrow} />}</div>
          </div>

          
          <div className=" text-2xl font-viga w-3/4 h-[150px] flex justify-center">
              {
                  infoText.map((item, index) => <span key={index}>{ item }</span>)
              }
          </div>
    </div>
  )
}
export default CarouselComponent