import { useState } from "react";
import "../../App.css";

import Footer from "../Footer";

import Tane from '../../assets/decisions/characterSelection/tane.svg'
import Wahine from '../../assets/decisions/characterSelection/wahine.svg'
import Rangatahi from '../../assets/decisions/characterSelection/rangatahi.svg'

import TaneFrame from '../../assets/decisions/characterSelection/taneFrame.svg'
import WahineFrame from '../../assets/decisions/characterSelection/wahineFrame.svg'
import RangatahiFrame from '../../assets/decisions/characterSelection/rangatahiFrame.svg'
import BasicFrame from '../../assets/decisions/basicFrame.svg'

import ConfirmButton from '../../assets/decisions/confirmButton.png'
import DenyButton from '../../assets/decisions/denyButton.png'

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
      frame: RangatahiFrame,
      imgSrc:  Rangatahi
    },
    {
      character: "man",
      teReo: "Tāne",
      english: "Man",
      style: "text-[#F2C91E]",
      frame: TaneFrame,
      imgSrc: Tane
    },
    {
      character: "woman",
      teReo: "Wāhine",
      english: "Woman",
      style: "text-[#7AA43F]",
      frame: WahineFrame,
      imgSrc: Wahine
    }
    
  ];

  const handleSelect = (index) => {
    setIsConfirming(true);
    setselectedIndex(index);
  }

  
// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
//     const handleTransitionScreen = async () => {
//       await delay(1000);
//       renderTransitionScreen(confirmedIndex);
//       await delay(1000);
//       handleCharacter(characters[confirmedIndex].character);
//     }


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
      return BasicFrame;
    }
  }

  
  return (
    <div className={`relative w-full h-full grid grid-rows-3  transition-opacity duration-1000 ease-in-out ${confirmedIndex !== -1 ? 'opacity-0' : 'opacity-100'}`}>
      
      
      <div className="h-full flex justify-center items-center"><p className="relative font-bebas-neue self-center text-5xl">Choose a path</p></div>
      <div className="flex items-center justify-center w-full h-full space-x-32">
      {
        characters.map((currentCharacter, index) => {
          return (
            <div key={index}>
              <div className={`relative flex flex-col items-center justify-center`}>
                <img className={`relative ${confirmedIndex !== -1 && index !== confirmedIndex? 'grayscale opacity-60': ''} h-[258px]`} src={currentCharacter.imgSrc} alt="avatar of character" />
                <img onClick={() => handleSelect(index)} className={` ${isConfirming || confirmedIndex !== -1 ? '-z-10' :'z-10'} scale-110 absolute bottom-16 ${index === selectedIndex? 'opacity-100':'opacity-0'} cursor-pointer hover:opacity-100`} src={getFrameSrc(index)} alt="" />
              <ul className="text-center relative top-8 font-ibm-plex-sans">
              <li className={`${confirmedIndex !== -1 && confirmedIndex === index || confirmedIndex === -1 ? currentCharacter.style : 'text-zinc-400'} text-[32px]`} >{currentCharacter.teReo}</li>
              <li className="text-zinc-400">{currentCharacter.english}</li>
                </ul>
                

                {isConfirming && selectedIndex === index ?
               <div className="absolute top-96 flex justify-center items-center">   
        <div className="flex w-[200px] justify-between">
            <img onClick={() => handleConfirmation(true)} className="hover:brightness-[0.95] cursor-pointer h-[64px]" src={ConfirmButton} alt="confirm button" />
            <img onClick={() => handleConfirmation(false)} className="hover:brightness-[0.95] contrast(.5) cursor-pointer h-[64px]" src={DenyButton} alt="deny button" />
                  </div>
                  </div>
                  : ''}
              </div>
              
                
                
      
              
            </div>)
        })
        }
        
      </div>
      <Footer />
    </div>
  );
}
export default CharacterSelection;
