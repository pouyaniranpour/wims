import { useState } from "react";

import basicFrame from '../../assets/decisions/basicFrame.svg';
import confirmButton from '../../assets/decisions/confirmButton.png';
import denyButton from '../../assets/decisions/denyButton.png';

function Decisions({ choiceArray, handleNextScenario }) {
    const [selectedIndex, setselectedIndex] = useState(-1);
    const [confirmedIndex, setconfirmedIndex] = useState(-1);
    const [isConfirming, setIsConfirming] = useState(false);
    const handleSelect = (index) => {
        setIsConfirming(true);
        setselectedIndex(index);
    }
    
    const handleConfirmation = (confirmed) => {
    
    
        if (confirmed) {
          setconfirmedIndex(selectedIndex);
          setTimeout(() => {
            handleNextScenario(choiceArray[selectedIndex]);
          }, 1000);
    
    
        } else {
          setselectedIndex(-1);
          setconfirmedIndex(-1);
        }
        setIsConfirming(false);
    }
    

    return <div className="flex items-center justify-center w-full h-full space-x-28">
        {
            choiceArray.map((choice, index) => { 
                return (
                    <div className="relative flex justify-center items-center" key={index}>
              <div className={`relative flex flex-col justify-center items-center`}>
                            <img src={`${choice.image}`} className={`${confirmedIndex !== -1 && index !== confirmedIndex? 'grayscale opacity-60': ''}`} alt="avatar of decision" />
                            <img onClick={() => handleSelect(index)} className={` ${isConfirming || confirmedIndex !== -1 ? '-z-10' :'z-10'} scale-110 absolute ${index === selectedIndex? 'opacity-100':'opacity-0'} cursor-pointer hover:opacity-100`} src={basicFrame} alt="" />

                {isConfirming && selectedIndex === index ?
               <div className="absolute top-80 flex justify-center items-center">   
        <div className="flex w-[200px] justify-between">
            <img onClick={() => handleConfirmation(true)} className="hover:brightness-[0.95] cursor-pointer h-[64px]" src={confirmButton} alt="confirm button" />
            <img onClick={() => handleConfirmation(false)} className="hover:brightness-[0.95] cursor-pointer h-[64px]" src={denyButton} alt="deny button" />
                  </div>
                  </div>
                  : ''}
              </div>
              
                
                
      
              
            </div>
                )
            })
        }
    </div>;
}
export default Decisions;
