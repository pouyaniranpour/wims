
import rightArrow from "../../../assets/buttons/arrowRight.svg";


import { useState } from "react";
function CarouselComponent({
  informationObject
}) {

  const [currentIndex, setCurrentIndex] = useState(0);
  let infoText = informationObject[currentIndex].text;

  const dotArray = Array.from(
    { length: informationObject.length },
    (v, i) => i
  );

  const handlePrev = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="relative flex flex-col justify-center items-center w-full h-full">
      {informationObject.length > 0 &&
        <div className="flex justify-evenly w-1/2 h-1/3 mt-40">
          {informationObject.map((item, index) => {
            return (
              <div key={index} className="flex justify-center items-center">
                <div className="w-16 flex justify-center items-center">
                  {index === currentIndex && currentIndex > 0 ? (
                    <img
                      onClick={() => handlePrev()}
                      className="cursor-pointer rotate-180 z-20"
                      src={rightArrow}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex h-1/2 flex-col justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      className={`${index !== currentIndex ? "grayscale opacity-60 " : ""
                        } pb-12`}
                      src={item.image}
                    />
                    <span
                      className={`font-viga text-2xl border-b-4 whitespace-nowrap ${currentIndex === index
                          ? "border-zinc-900 text-zinc-900 textShadow"
                          : "border-transparent text-zinc-400 textShadow "
                        }`}
                    >
                      {item.subtitle}
                    </span>
                  </div>
                </div>
                <div className="w-16 flex justify-center items-center">
                  {index === currentIndex &&
                    currentIndex < informationObject.length - 1 ? (
                    <img
                      onClick={() => handleNext()}
                      className="cursor-pointer z-20"
                      src={rightArrow}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}{" "}
        </div>
      }
      <div className="flex justify-evenly items-center w-20 h-10 py-8">
        {dotArray.map((dot, index) => {
          return (
            <div
              key={index}
              className={`text-center round w-3 h-3 ${
                index === currentIndex ? "bg-zinc-500" : "bg-zinc-300"
              }`}
            >
              {" "}
            </div>
          );
        })}
      </div>

      <div className=" text-2xl font-viga w-3/4 h-[150px] flex justify-center">
        {infoText.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
}
export default CarouselComponent;
