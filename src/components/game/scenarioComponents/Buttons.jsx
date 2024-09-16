
function Buttons({ currentScenario, animationCompleted, handleSkip, handleNextScenario, handleGameOver}) {
  
  //const defaultStyle = "absolute bottom-10 right-10 w-[96px] h-[52px] shadow-custom-darker bg-zinc-50 flex flex-col items-center justify-center font-viga text-[24px] border-2 text-zinc-900 border-zinc-900 rounded-full";
  const renderButtons = () => {
    if (currentScenario.choices.length === 1) {
      if (!animationCompleted) {
        return (
          <button className={`px-4 py-1 shadow-custom-darker bg-zinc-50 flex flex-col items-center justify-center font-viga text-[24px] border-2 text-zinc-900 border-zinc-900 rounded-full`} onClick={handleSkip}>Skip</button>
        )
      } else if (currentScenario.isEnding) {
        return (
          <button onClick={() => handleGameOver(true)} className={`px-4 py-1 shadow-custom-darker bg-zinc-50 flex items-center justify-center font-viga text-[24px] border-2 text-zinc-900 border-zinc-900 rounded-full`}>{currentScenario.choices[0].text}</button>
        )
      }
      else {
        return (
          <button onClick={() => handleNextScenario(currentScenario.choices[0])} className={`px-4 py-1 shadow-custom-darker bg-zinc-50 flex items-center justify-center font-viga text-[24px] border-2 text-zinc-900 border-zinc-900 rounded-full`}>{currentScenario.choices[0].text}</button>
        )
      }
    
    }
  }
 
  

  return (
    <div className={`absolute z-30  flex ${currentScenario.postRandom? 'bottom-40 left-50': 'right-60 bottom-20'}`}>
      {renderButtons()}</div>
  )
}
export default Buttons