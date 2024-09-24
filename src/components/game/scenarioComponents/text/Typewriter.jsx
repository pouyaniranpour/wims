
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
    
    const defaultStyle = 'typedOutput font-bebas-neue w-full h-full flex flex-col';
    
    
    

    const renderText = () => {
        if (currentScenario.isEnding) {
            return (
                <ReactTyped
                    className={`${defaultStyle} text-[100px] text-center`}
                    showCursor={false}
                    strings={[`<p>Your outcome</p>`]}
                    typeSpeed={30}
                    startDelay={500}
                    onComplete={handleAnimationCompleted}
                    loop={false}
                    contentType='html'
                />
            )
        } else {
            const additionalStyle = currentScenario.typewriter.style;
            const text = currentScenario.typewriter.text;

            if (isSkipped) {
                        return (
                            <div
                                className={`${defaultStyle} ${additionalStyle}`}
                            >
                                {parse(text)}
                            </div>
                        )
                    } else {
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
        
    }
    
    const renderSuspenseScreen = () => {
            return (<ReactTyped
          className={`relative bottom-16 font-bebas-neue w-full h-full flex justify-center items-center text-[100px]`}
          showCursor={false}
          strings={[`...`]}
                typeSpeed={800}
                loop={false}
          startDelay={0}
                onComplete={() => handleSuspenseCompletion()}
                contentType="html"
            />)
        }
    
    
    
    
    return (
        <>
            {isSuspenseScreen ? 
                <div className="w-3/4 h-full">{renderSuspenseScreen()}</div>
                
            :

            <div className={`absolute top-0 mt-16 w-2/3 h-3/4`}>
                {renderText()}
                    
            </div>
            }

        </>
        
    
  )
}
export default Typewriter