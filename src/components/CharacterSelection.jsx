import { useState } from "react";

function CharacterSelection( {handleCharacter}) {
    const characters = [
        {
            character: "youth",
            teReo: "Rangatahi",
            style: "filter blur-xl round bg-gradient-radial from-[#97CEDE] to-white w-1/3 h-2/3 absolute top-50 left-50",
            imgSrc: "/characterSelectionImages/rangatahi.svg",
        },
        {
            character: "woman",
            teReo: "Wāhine",
            style: "filter blur-xl round bg-gradient-radial from-[#7AA43F] to-white w-1/3 h-2/3 absolute top-50 left-50",
            imgSrc: "/characterSelectionImages/wahine.svg",
        },
        {
            character: "man",
            teReo: "Tāne",
            style: "filter blur-xl round bg-gradient-radial from-[#F2C91E] to-white w-1/3 h-2/3 absolute top-50 left-50",
            imgSrc: "/characterSelectionImages/tane.svg",
        },
    ];
    
    const [index, setIndex] = useState(1);
    const [characterShowing, setCharacterShowing] = useState(characters[index]);
    
    
    function handleClick(direction) {
        if (direction === 'prev' && index > 0){
            setIndex(index - 1);
        setCharacterShowing(characters[index - 1]);
    }
        else if(direction === 'next' && index < characters.length) {
            setIndex(index + 1);
        setCharacterShowing(characters[index + 1]);
        }
    }

    return (
        <div className="relative flex flex-col justify-center items-center h-full w-full">
            <span className="font-ibm-plex-mono text-4xl text font-bold">{characterShowing.teReo}</span>
            <div className="flex justify-center items-center w-full h-3/4">
                <div className= {`${characterShowing.style}`}>
                </div>    
                <div className="w-16 mx-2 flex justify-center "><span onClick={() => handleClick("prev")} className={index > 0 ? "shadow-custom-darker text-3xl cursor-pointer flex justify-center items-center w-12 h-12 border border-black rounded-full" : "invisible"}><span className="relative bottom-0.5">&lt;</span></span></div>             
                <div className="w-1/3 flex justify-center items-center"><img onClick={() => {
                        handleCharacter(characterShowing.character );
                }} className="cursor-pointer flex items-center justify-center z-10" src={characterShowing.imgSrc} alt="avatar of character" /></div>
                    
                
            
                <div className="w-16 mx-2 flex justify-center">
                    <span onClick={() => handleClick("next")} className={index < characters.length - 1 ? "shadow-custom-darker text-3xl cursor-pointer flex justify-center items-center w-12 h-12 border border-black rounded-full" : "invisible"}><span className="relative bottom-0.5">&gt;</span></span>
                </div>
                
            </div>
            <span className="font-pangolin">Use the LEFT and RIGHT buttons to select a scenario</span>
        </div>);
}
export default CharacterSelection;
