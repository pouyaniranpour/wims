
import parse from "html-react-parser";
import { ReactTyped } from "react-typed";

function Typewriter(
    {
        isSkipped,
        isSuspenseScreen,
        currentScenario,
        handleAnimationCompleted,
        handleSuspenseCompletion
    }) {
    
    const defaultStyle = 'typedOutput font-bebas-neue w-full h-full flex';
    const additionalStyle = currentScenario.typewriter.style;
    const text = currentScenario.typewriter.text;

    const renderText = () => {
        if (isSkipped) {
            return (
                <div
                    className={`${defaultStyle} ${additionalStyle}`}
                >
                    {parse(text)}
                </div>
            )
        } else if (isSuspenseScreen) {
            return (<ReactTyped
          className={`font-bebas-neue w-full h-full flex justify-center items-center text-[100px]`}
          showCursor={false}
          strings={[`...`]}
          typeSpeed={800}
          startDelay={50}
             onComplete={() => handleSuspenseCompletion()}
            />)
        }
        else {
            return (
                <ReactTyped
                    className={`${defaultStyle} ${additionalStyle}`}
                    showCursor={false}
                    strings={[`${text}`]}
                    typeSpeed={30}
                    startDelay={500}
                    onComplete={handleAnimationCompleted}
                    loop={false}
                    contentType='html'
                />
            )
        }
    } 
    
    
    
    return (
        <div className={`absolute top-50 left-50 w-2/3 h-3/4 flex'}`}>
            {renderText()}
            
        </div>
      
    
  )
}
export default Typewriter