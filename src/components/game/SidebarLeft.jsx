
import VolumeIcon from '../../assets/sidebars/leftSidebar/volume.png';
import LightMode from '../../assets/sidebars/leftSidebar/lightMode.png';
import CloseIcon from '../../assets/sidebars/leftSidebar/closeIcon.png';


import sad from '../../assets/sidebars/leftSidebar/moods/sad.svg';

import { useEffect, useState } from 'react';


function SidebarLeft({ scenario }) {
  const [moodImage, setMoodImage] = useState(sad)
  const [speechBubble, setSpeechBubble] = useState();
  const [isSpeechBubbleVisible, setIsSpeechBubbleVisible] = useState(false);

  useEffect(() => {
    if (!scenario.mood)return;
      if (scenario.mood.delay) {
        setTimeout(() => {
        setMoodImage(scenario.mood.image);
      }, scenario.mood.delay);
      } else {
        setMoodImage(scenario.mood.image);
    }
    
    if (scenario.mood.speechBubble) {
      setSpeechBubble(scenario.mood.speechBubble);
      setIsSpeechBubbleVisible(true);
      setTimeout(() => {
        setIsSpeechBubbleVisible(false)
      }, 2500);
    } else {
      setSpeechBubble(undefined);
    }
  }, [scenario]);

  const images = [VolumeIcon, LightMode, CloseIcon];
  return (
    <div className={`absolute bg-[#F4F5F5] left-0 top-0 w-[162px] h-full flex flex-col items-center`} >
      <div className="font-ibm-plex-sans pt-2 text-sm w-full text-center font-medium flex flex-col justify-around">
        <p>MOOD TRACKER</p>
        {moodImage ? <img className="h-20 mt-2" src={moodImage} alt="avatar of current mood" /> :
        <img className="h-20 mt-2" src={sad} alt="avatar of current mood" />}
        <img className={`${isSpeechBubbleVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-in-out relative left-44 bottom-14`} src={speechBubble} />
        
        
      </div>
      <div className="relative flex flex-col justify-end mb-36 h-full justify-self-end">
        {
          images.map((image, index) => {
            return (
              <img className="cursor-pointer h-[80px] mt-2 mb-2" key={index} src={image} alt="image of sidebar button" />
            )
          })
        }
      </div>
      {/* <img className='relative bottom-8 w-[74px] h-[54px]' src={logo} alt='acm logo' /> */}

    </div>
  )
}
export default SidebarLeft