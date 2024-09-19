
import FadeInText from "./FadeInText";
import Typewriter from "./Typewriter";

import QuoteMark from "../../assets/quoteMark.svg"

function ScenarioText({
  isSkipped,
  currentScenario,
  handleAnimationCompleted,
  isSuspenseScreen,
  handleRandom
}) {

  const handleSuspenseCompletion = () => {
    setTimeout(() => {
      handleRandom();
    }, 300);
  }


  const renderMainText = () => {
    if (currentScenario.typewriter || currentScenario.isEnding) {
      return (
        <Typewriter
            handleAnimationCompleted={handleAnimationCompleted}
            currentScenario={currentScenario}
            isSkipped={isSkipped}
            isSuspenseScreen={isSuspenseScreen}
            handleSuspenseCompletion={handleSuspenseCompletion}
          />
      );
    } else if (currentScenario.text && !isSkipped) {
      return (
        <FadeInText
          handleAnimationCompleted={handleAnimationCompleted}
          items={currentScenario.text}
        />
      );
    }
    else if (currentScenario.text && isSkipped) {
      return (
        <div className="relative bottom-24 flex flex-col justify-center text-3xl w-2/3 h-full font-viga">
          {currentScenario.text.map((item, index) => (
            <div key={index} className={"mt-10 mb-10"}>
              {item}
            </div>
          ))}
        </div>
      )
    }
  };

  const renderQuoteMarks = () => {
    return (
      <div className="absolute top-[80px] left-50 z-30 h-3/4 w-3/4 flex flex-col justify-between">
        <img
          className="self-start"
          src={QuoteMark}
          alt="quote mark"
        />
        <img
          className="self-end justify-end"
          src={QuoteMark}
          alt="quote mark"
        />
      </div>
    );
  };

  return (
    <>
      {currentScenario.isDialogue && renderQuoteMarks()}

      {renderMainText()}


      
    </>
  );
}
export default ScenarioText;
