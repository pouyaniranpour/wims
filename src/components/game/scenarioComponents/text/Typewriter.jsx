
import TypewriterEffect from "./TypewriterEffect";
import React, {useMemo} from "react";
function Typewriter(
    {
        isSkipped,
        isSuspenseScreen,
        currentScenario,
        handleAnimationCompleted,
        handleSuspenseCompletion
    }) {
    
    console.log("render")

    const endingText = useMemo(() => [
        { text: `Your outcome`, style: `text-center` }
    ], [])

    const renderText = () => {
        if (currentScenario.isEnding) {
            return (
                <TypewriterEffect
                    staggerDelay={50}
                    mainStyle={`text-[100px] font-bebas-neue w-full h-full flex flex-col`}
                    paragraphs={endingText}
                    onComplete={handleAnimationCompleted} />
                            
            )
        } else {
            const defaultStyle = `${currentScenario.typewriter.additionalStyle} typewriter font-bebas-neue w-full h-full flex flex-col`;
            const paragraphs = currentScenario.typewriter.paragraphs;

            if (isSkipped) {
                        return (
                            <div className={defaultStyle}>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={paragraph.style}
        >
          {paragraph.text}
        </p>
      ))}
    </div>
                        )
                    } else {
                        return (
                                <TypewriterEffect staggerDelay={50} mainStyle={defaultStyle} paragraphs={paragraphs} onComplete={handleAnimationCompleted} />
                            
                        )
                    }
        }
        
    }
    
    const renderSuspenseScreen = () => {
        return (
        <TypewriterEffect staggerDelay={800}
            mainStyle={`text-[100px] font-bebas-neue w-full h-full flex flex-col justify-center text-center`}
            paragraphs={
                [{
                    text: `...`,
                    style: ``,
                }]
            }
                onComplete={handleSuspenseCompletion}
            />
        )
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