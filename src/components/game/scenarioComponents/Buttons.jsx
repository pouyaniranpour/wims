import Decisions from "../../decisions/Decisions";

function Buttons({ choiceArray, animationCompleted, handleSkip, handleNextScenario }) {
  
  const buttonStyle = "absolute bottom-10 right-10 right-30 w-[96px] h-[52px] shadow-custom-darker bg-zinc-50 flex flex-col items-center justify-center font-viga text-[24px] border-2 text-zinc-900 border-zinc-900 rounded-full";
  const renderButtons = () => {
    if (choiceArray.length === 1) {
      if (!animationCompleted) {
        return (
          <button className={`${buttonStyle}`} onClick={handleSkip}>Skip</button>
        )
      }
      else {
        return (
          <button onClick={() => handleNextScenario(choiceArray[0])} className={`${buttonStyle}`}>{choiceArray[0].text}</button>
        )
      }
    
    }
  }
 
  

  return (
    <div className="relative w-full h-full">
      {renderButtons()}</div>
  )
}
export default Buttons