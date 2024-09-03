import { useState } from "react";
import "../../App.css";

function CharacterSelection({ handleCharacter }) {

  const [selectedIndex, setselectedIndex] = useState(-1);
  const [confirmedIndex, setconfirmedIndex] = useState(-1);
  const [isConfirming, setIsConfirming] = useState(false);

  const characters = [
    {
      character: "youth",
      teReo: "Rangatahi",
      english: "Youth",
      style: "text-[#97CEDE]",
      frame: "/characterSelection/rangatahiFrame.svg",
      imgSrc: "/characterSelection/rangatahi.svg",
    },
    {
      character: "man",
      teReo: "Tāne",
      english: "Man",
      style: "text-[#F2C91E]",
      frame: "/characterSelection/taneFrame.svg",
      imgSrc: "/characterSelection/tane.svg",
    },
    {
      character: "woman",
      teReo: "Wāhine",
      english: "Woman",
      style: "text-[#7AA43F]",
      frame: "/characterSelection/wahineFrame.svg",
      imgSrc: "/characterSelection/wahine.svg",
    }
    
  ];

  const handleSelect = (index) => {
    setIsConfirming(true);
    setselectedIndex(index);
  }

  const handleConfirmation = (confirmed) => {
    
    if (confirmed) {
      setconfirmedIndex(selectedIndex);
      setTimeout(() => {
        handleCharacter(characters[selectedIndex].character);
      }, 1000);
    } else {
      setselectedIndex(-1);
      setconfirmedIndex(-1);
    }
    setIsConfirming(false);
  }

  const getFrameSrc = (index) => {
    if (confirmedIndex === index) {
      return characters[index].frame;
    } else {
      return '/characterSelection/frameBasic.svg';
    }
  }

  
  return (
    <div className={`grid grid-rows-3 h-full w-full transition-opacity duration-1000 ease-in-out ${confirmedIndex !== -1 ? 'opacity-0': 'opacity-100'}`}>
      <div className="h-full flex justify-center items-center"><p className="relative font-bebas-neue self-center text-5xl">Choose your story</p></div>
      
      <div className="flex items-center justify-center w-full h-full space-x-32">
      {
        characters.map((currentCharacter, index) => {
          return (
            <div key={index}>
              <div className={`relative flex flex-col items-center justify-center`}>
                <img className={`relative ${confirmedIndex !== -1 && index !== confirmedIndex? 'grayscale opacity-60': ''} h-[258px]`} src={currentCharacter.imgSrc} alt="avatar of character" />
                <img onClick={() => handleSelect(index)} className={` ${isConfirming || confirmedIndex !== -1 ? '-z-10' :'z-10'} scale-110 absolute bottom-16 ${index === selectedIndex? 'opacity-100':'opacity-0'} cursor-pointer hover:opacity-100`} src={getFrameSrc(index)} alt="" />
              <ul className="text-center relative top-8 font-ibm-plex-sans">
                <li className={`${currentCharacter.style} text-[32px]`} >{currentCharacter.teReo}</li>
                <li>{currentCharacter.english}</li>
                </ul>
                

                {isConfirming && selectedIndex === index ?
               <div className="absolute top-96 flex justify-center items-center">   
        <div className="flex w-[200px] justify-between">
            <img onClick={() => handleConfirmation(true)} className="hover:brightness-[0.95] cursor-pointer h-[64px]" src="/characterSelection/confirmButton.png" alt="confirm button" />
            <img onClick={() => handleConfirmation(false)} className="hover:brightness-[0.95] contrast(.5) cursor-pointer h-[64px]" src="/characterSelection/denyButton.png" alt="deny button" />
                  </div>
                  </div>
                  : ''}
              </div>
              
                
                
      
              
            </div>)
        })
        }
        
      </div>
      
    </div>
  );
}
export default CharacterSelection;
