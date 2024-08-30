import { useState, useEffect, useRef } from "react";
import anime from "animejs";
import "../App.css";

function CharacterSelection({ handleCharacter }) {
  const characters = [
    {
      character: "youth",
      teReo: "Rangatahi",
      style: "filter blur-xl round bg-gradient-radial from-[#97CEDE] to-white w-1/3 h-1/2 absolute top-50 left-50",
      imgSrc: "/characterSelectionImages/rangatahi.svg",
    },
    {
      character: "woman",
      teReo: "Wāhine",
      style: "filter blur-xl round bg-gradient-radial from-[#7AA43F] to-white w-1/3 h-1/2 absolute top-50 left-50",
      imgSrc: "/characterSelectionImages/wahine.svg",
    },
    {
      character: "man",
      teReo: "Tāne",
      style: "filter blur-xl round bg-gradient-radial from-[#F2C91E] to-white h-1/2 w-[700px] absolute top-50 left-50",
      imgSrc: "/characterSelectionImages/tane.svg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);  

  const handlePrev = () => {
    setCurrentIndex(currentIndex - 1);
    setCharacterShowing(characters[currentIndex - 1]);
  };
  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
    setCharacterShowing(characters[currentIndex + 1]);
  };

  return (
    <div className="absolute flex flex-col justify-center items-center h-full w-full ">

          <div className="flex border border-red-500 justify-center items-center w-full h-full">
              <div className="flex flex-col">
                  
              </div>
              {/* This div is a container for the left button to provide offset */}
          <div className="w-16 h-3/4 mx-2 flex justify-center items-center "> 
            <span
              onClick={() => handlePrev()}
              className={
                currentIndex > 0
                  ? "shadow-custom-darker text-3xl cursor-pointer hover:bg-slate-300 flex justify-center items-center w-12 h-12 border border-black rounded-full"
                  : "invisible"
              }
            >
              <span className="relative bottom-0.5">&lt;</span>
            </span>
            </div>
          
        <div className="flex justify-center items-center w-[700px] h-3/4">
                  {
                      characters.map((currentCharacter, index) => {
                          return (<div key={index} className="flex flex-col justify-center items-center">
                              <span className={`${index === currentIndex ? 'opacity-100 z-20' : 'opacity-0 z-0'} absolute top-36 left-50 font-ibm-plex-mono text-4xl text font-bold transition-opacity duration-1000 ease-in-out`}>{currentCharacter.teReo}</span>
                              <div className={`${currentCharacter.style} ${index === currentIndex ? 'opacity-100 z-20' : 'opacity-0 z-0'} transition-opacity duration-500 ease-in-out`}></div>
                              
                            <img onClick={() => {
                      handleCharacter(currentCharacter.character );
                              }} className={`${index === currentIndex ? 'opacity-100 z-20' : 'opacity-0 z-0'} absolute top-50 left-50 cursor-pointer [transition:transform_300ms,opacity_1200ms] duration-300 ease-in hover:scale-110`} src={currentCharacter.imgSrc} alt="avatar of character" />
                              
                          </div>)
                      })
          }
              </div>
              {/* This div is a container for the right button to provide offset */}
        <div className="w-16 h-3/4 mx-2 flex items-center justify-center">
          <span
            onClick={() => handleNext()}
            className={
              currentIndex < characters.length - 1
                ? "shadow-custom-darker text-3xl cursor-pointer hover:bg-slate-300 flex justify-center items-center w-12 h-12 border border-black rounded-full"
                : "invisible"
            }
          >
            <span className="relative bottom-0.5">&gt;</span>
          </span>
        </div>

        <span className="absolute text-xl bottom-32 font-pangolin">
        Use the LEFT and RIGHT buttons to select a scenario
        </span>  
              
      </div>
       
    </div>
  );
}
export default CharacterSelection;
