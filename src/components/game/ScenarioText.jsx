import { ReactTyped } from "react-typed";
import FadeInText from "./FadeInText";
import Typewriter from "./Typewriter";

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
    if (currentScenario.typewriter) {
      return (
        <Typewriter
            handleAnimationCompleted={handleAnimationCompleted}
            currentScenario={currentScenario}
            isSkipped={isSkipped}
            isSuspenseScreen={isSuspenseScreen}
            handleSuspenseCompletion={handleSuspenseCompletion}
          />
      );
    } else if (!currentScenario.typewriter && !isSkipped) {
      return (
        <FadeInText
          handleAnimationCompleted={handleAnimationCompleted}
          items={currentScenario.text}
        />
      );
    }
    else if (!currentScenario.typewriter && isSkipped) {
      return (
        <div className="flex flex-col justify-between text-3xl w-2/3 h-2/3 font-viga">
          {currentScenario.text.map((item, index) => (
            <div key={index} className={"mt-6 mb-6"}>
              {item}
            </div>
          ))}
        </div>
      )
    }
  };

  const renderQuoteMarks = () => {
    return (
      <div className="absolute top-[75px] left-50 z-30 h-2/3 w-3/4 flex flex-col justify-between">
        <img
          className="self-start"
          src="/scenario/quoteMark.svg"
          alt="quote mark"
        />
        <img
          className="self-end justify-end"
          src="/scenario/quoteMark.svg"
          alt="quote mark"
        />
      </div>
    );
  };

  return (
    <>
      {currentScenario.dialogue && renderQuoteMarks()}

      {renderMainText()}
    </>
  );
}
export default ScenarioText;
