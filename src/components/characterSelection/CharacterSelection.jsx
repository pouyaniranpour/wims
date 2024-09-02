import { useState } from "react";
//import anime from "animejs";
import "../../App.css";

function CharacterSelection({ handleCharacter }) {

  const [selected, setSelected] = useState(-1);
  const [confirmed, setConfirmed] = useState(-1);

  const characters = [
    {
      character: "youth",
      teReo: "Rangatahi",
      english: "Youth",
      style: "#97CEDE",
      frame: "/characterSelection/rangatahiFrame.svg",
      imgSrc: "/characterSelection/rangatahi.svg",
    },
    {
      character: "man",
      teReo: "Tāne",
      english: "Man",
      style: "#F2C91E",
      frame: "/characterSelection/taneFrame.svg",
      imgSrc: "/characterSelection/tane.svg",
    },
    {
      character: "woman",
      teReo: "Wāhine",
      english: "Woman",
      style: "#7AA43F",
      frame: "/characterSelection/wahineFrame.svg",
      imgSrc: "/characterSelection/wahine.svg",
    }
    
  ];

  const handleClick = (index) => {
    console.log(selected);
    if (index === selected) {
      setConfirmed(index);
      setTimeout(() => {
        handleCharacter(characters[index].character);
      }, 1000);
    } else if (index !== selected) {
      setSelected(index);
      setConfirmed(-1);
      
    }

  }

  // const getImageSrc = (index) => {
  //   if (confirmed === -1) {
  //     return characters[index].imgSrc;
  //   } else if (confirmed !== index) {
  //     return '/characterSelection/unselected.svg';
  //   } else return characters[index].imgSrc;
  // }

  
//FIXME ask UX designers to change font as viga doesn't have macron for maori words
  return (
    <div className={`grid grid-rows-3 h-full w-full transition-opacity duration-1000 ease-in-out ${confirmed !== -1 ? 'opacity-0': 'opacity-100'}`}>
      <div className="h-full flex justify-center items-center"><p className="relative font-bebas-neue self-center text-5xl">Choose your story</p></div>
      
      <div className="flex items-center justify-center w-full h-full space-x-32">
      {
        characters.map((currentCharacter, index) => {
          return (
            <div key={index}>
              <div className="relative flex flex-col items-center justify-center">
                <img className={`relative ${confirmed !== -1 && index !== confirmed? '-z-10 grayscale opacity-60': ''} scale-110 top-8`} src={currentCharacter.imgSrc} alt="avatar of character" />
                <img onClick={() => handleClick(index)} className={`${confirmed !== -1 && index !== confirmed? '-z-10 ': ''} scale-125 absolute ${index === selected? 'opacity-100':'opacity-0'} cursor-pointer hover:opacity-100`} src={selected === index && confirmed === index ? (confirmed === index ? currentCharacter.frame: `/characterSelection/frameBasic.svg`) : `/characterSelection/frameBasic.svg`} alt="" />
              <ul className="text-center relative top-24">
                <li className=" text-[32px]">{currentCharacter.teReo}</li>
                <li>{currentCharacter.english}</li>
              </ul>
              </div>
              
              
            </div>)
        })
        }
        
          
      </div>
      <div className="flex flex-col justify-center items-center">
        { selected !== -1 && confirmed === -1 ? <p>Are you sure? Click once more to confirm selection</p>: ''}
      </div>
      
    </div>
  );
}
export default CharacterSelection;
