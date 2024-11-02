import { FaArrowRight } from "react-icons/fa";
import img1 from "../../../assets/dog3.jpg";
import img2 from "../../../assets/ShopCategories/breed_services_bg.jpg";
import bg from "../../../assets/ShopCategories/background.jpg";
import Container from "../../UI/Container";
import AdoptionFacts from "../Interesting-Facts/AdoptionFacts";
import SectionContent from "../../UI/SectionContent";

const MeetAdoption = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="px-10 py-28 bg-contain bg-repeat-round "
    >
      <Container>
        <div  className="flex flex-col lg:flex-row items-center justify-center gap-x-5 gap-y-10 ">
          <div className="lg:w-2/5 ">
            <SectionContent alignStayle={'text-left'} tag={' Meet Adoption'} first={'Work For'} span={'Adoption'} second={'Happy Time'} text={'The best overall dog DNA test is Embark Breed & Health Kit view at Chewy which pres domesti dog is a sticated descendant.'}/>

            <div className="space-y-2 mt-5">
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
          <div className="lg:w-3/5 min-h-[24rem] flex no-gap rounded-s-md ">
            <div className="lg:w-1/2 bg-green-300">
              <img src={img1} className="h-full bg-cover" alt="" />
            </div>
            <div
              style={{ backgroundImage: `url(${img2})` }}
              className="lg:w-1/2 bg-black flex items-center justify-center"
            >
              <div className="div text-white space-y-4 p-5">
                <h5 className="text-xl font-nunito font-bold border-l-4 border-white pl-5">
                  Dog Adoption
                </h5>
                <h2 className="text-xl md:text-4xl font-extrabold font-nunito">
                  Available for Adoption
                </h2>
                <p className="text-lg font-nunito ">
                  The best overall dog DNA test is Embark Breed & Health Kit
                  (view at Chewy), which provid dogs
                </p>
                <button className="py-3 px-6 rounded-md bg-white text-red-500 text-xl font-bold">
                  More Pets
                </button>
              </div>
            </div>
          </div>

        </div>


        {/* interesting facts for adopton */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-6 lg:mt-20">
            <AdoptionFacts title={'dogs are first bred'} percentage={'75%'} />
            <AdoptionFacts title={'Most dogs are first'} percentage={'259%'} />
            <AdoptionFacts title={'Dog Breeding'} percentage={'39%'} />
            <AdoptionFacts title={'Years Of History'} percentage={'45%'} />
          </div>
      </Container>
    </div>
  );
};

export default MeetAdoption;
