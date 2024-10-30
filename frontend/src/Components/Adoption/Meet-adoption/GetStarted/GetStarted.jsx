import { FaArrowRight } from "react-icons/fa";
import img from "../../../../assets/adoptionsImg/faq_tv.png";
import faqImg from '../../../../assets/adoptionsImg/faq_img.png'
import Container from "../../../UI/Container";
import Breadcrumb from "../../../Shared/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
const GetStarted = () => {
  return (
   <div>
      <Breadcrumb title={'Get Started For Adoption'}></Breadcrumb>
      <Container>
      <div className="flex flex-col lg:flex-row items-center lg:gap-x-20 p-5 lg:py-20 lg:px-10">
        <div className="w-full  relative lg:w-1/2">
          <img src={img} className="relative w-full" alt="" />
          <Link className="absolute top-48 size-20 rounded-3xl right-8" to={'https://youtu.be/XdFfCPK5ycw?si=cE5HfmR_7dR1QIIA'}></Link>
          <img src={faqImg} className=" absolute top-44 left-10 rounded-3xl" alt="" />

        </div>

          {/* container */}
        <div className="w-full lg:w-1/2">
          <div className="space-y-5">
            <h1 className="text-xl font-nunito text-red-500 font-bold">
              Meet Adoption
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
        </div>
      </div>
    </Container>
   </div>
  );
};

export default GetStarted;
