import LanguageIcon from '../../assets/sidebars/leftSidebar/language.png';
import VolumeIcon from '../../assets/sidebars/leftSidebar/volume.png';
import LightMode from '../../assets/sidebars/leftSidebar/lightMode.png';
import CloseIcon from '../../assets/sidebars/leftSidebar/closeIcon.png';

import Sad from '../../assets/sidebars/leftSidebar/moods/sad.svg'

import { useEffect, useState } from 'react';


function SidebarLeft({ moodString }) {
  const [mood, setMood] = useState()

  useEffect(() => {

  }, []);


  const images = [LanguageIcon, VolumeIcon, LightMode, CloseIcon];
  return (
    <div className={`absolute bg-[#F4F5F5] left-0 top-0 w-[162px] h-full flex flex-col items-center`} >
      <div className="font-ibm-plex-sans pt-2 text-sm w-full text-center font-medium flex flex-col">
        <p>MOOD TRACKER</p>
        <img className="h-20" src={Sad} alt="picture of sad face" />
      </div>
      <div className="relative flex flex-col h-full justify-end mb-36">
        {
          images.map((image, index) => {
            return (
              <img className="cursor-pointer h-[80px] mt-2 mb-2" key={index} src={image} alt="image of sidebar button" />
            )
          })
        }
      </div>

    </div>
  )
}
export default SidebarLeft