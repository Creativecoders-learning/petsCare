import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import useAdoptionData from "../../../Hooks/useAdoptionData";

const Beginning = () => {
  const { adoptions } = useAdoptionData();
  const [currentSlider, setCurrentSlider] = useState(0);
  const arrayInx = [1,2,3,4,5];

  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider(
          currentSlider === adoptions?.length - 1 ? 0 : currentSlider + 1
        ),
      5000
    );
    return () => clearInterval(intervalId);
  }, [currentSlider, adoptions?.length]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-y-10 lg:gap-x-40 p-10 lg:px-20 lg:py-20">
      {/* text container */}
      <div className="lg:w-1/2 pr-10 space-y-5">
        <h1 className="text-xl font-nunito text-red-500 font-bold">
          A New Beginning
        </h1>
        <h1 className="text-[#0A453A] text-3xl md:text-4xl lg:text-5xl font-nunito font-extrabold">
          Work For <span className="text-red-500">Adoption</span> Happy Time
        </h1>
        <p className="text-lg text-gray-500 font-nunito">
          The best overall dog DNA test is Embark Breed & Health Kit view at
          Chewy which pres domesti dog is a sticated descendant.
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-x-2">
            <FaArrowRight></FaArrowRight>
            <p className="text-[#0A453A] text-base font-nunito font-bold">
              Embark Breed & Health
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <FaArrowRight></FaArrowRight>
            <p className="text-[#0A453A] text-base font-nunito font-bold">
              The domestic dog is a domesticated
            </p>
          </div>
        </div>
      </div>

      {/* image container */}
      <div className="lg:w-1/2 relative max-h-[24rem] flex no-gap rounded-s-md">
        <div className="border bg-green-300">
          <img
            src={adoptions[currentSlider]?.image[0]}
            className={`h-full w-full bg-cover before:absolute before:bg-black/50 before:inset-0 transform duration-4000 ease-linear transition-transform ${currentSlider ? "scale-110" : "scale-100"
              }`}
            alt=""
          />
          {/* slider container */}
          <div className="absolute top-32 right-2 flex flex-col justify-center items-center gap-3 p-2">
            {adoptions.map((slide, inx) => {
              // Determine if the current dot is active based on the actual index
              const isActive = currentSlider === inx;

              // Render only 5 dots around the current slider
              const showDot =
                inx >= Math.max(currentSlider - 2, 0) &&
                inx <= Math.min(currentSlider + 2, adoptions.length - 1);

              return (
                showDot && (
                  <div
                    onClick={() => setCurrentSlider(inx)}
                    key={inx}
                    className={`border rounded-full duration-300 w-3 h-3 ${isActive ? "bg-red-500" : "bg-white"
                      }`}
                  ></div>
                )
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Beginning;
