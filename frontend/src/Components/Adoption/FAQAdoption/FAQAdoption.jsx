import img from '../../../assets/dog1.jpg'
import bg from "../../../assets/adoptionsImg/faq_bg.jpg"
import { useState } from 'react';
const FAQAdoption = () => {
    const [isOpen, setIsOpen] = useState(null);
    const dataArr = [{title: "Working for dog adoption?", description: 'The best overall dog DNA test is embark breed & health Kit (view atths Chewy), which provides you with a breed brwn and ition on provides ancestors most dogs.',}, {title: "Competition & Award?", description:"The best overall dog DNA test is embark breed & health Kit (view atths Chewy), which provides you with a breed brwn and ition on provides ancestors most dogs.",}, {title: "Can I change my shipping address?", description:"Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.",}, {title: "The puppies are 3 months old", description: "The best overall dog DNA test is embark breed & health Kit (view atths Chewy), which provides you with a breed brwn and ition on provides ancestors most dogs",},];
    const toggle = (idx) => {
      setIsOpen((prevIdx) => (prevIdx === idx ? null : idx))
    };


  return (
    <div className="flex flex-col lg:flex-row">
      {/* image container */}
      <div className="lg:w-1/2 lg:min-h-[24rem] bg-green-200 flex no-gap rounded-s-md ">
        <img src={img} className='size-full' alt="" />
      </div>

      {/* text container */}
      <div style={{backgroundImage:`url(${bg})`}} className="lg:w-1/2 space-y-5 px-10 py-10">
        <h1 className="text-2xl font-nunito text-white  font-bold">
          FAQ Question
        </h1>
        <h1 className="text-white text-3xl xl:text-[46px] font-nunito font-extrabold pb-4">
           History & Family Adoption
        </h1>

        {/* faq  */}
        <div className=" mx-auto w-full rounded-lg">
            {dataArr.map((PerAccordion, idx) => (
                <div key={idx} className="my-2 rounded-lg border bg-white p-5 py-5 *:mix-blend-difference dark:border-zinc-600 dark:bg-zinc-800">
                    <button onClick={() => toggle(idx)} className="flex h-full w-full items-center justify-between font-medium text-white outline-none">
                        <span>{PerAccordion.title}</span>
                        <span className="rounded-full">
                            <svg className="ml-8 size-3 fill-white" xmlns="http://www.w3.org/2000/svg">
                                <rect y="5" width="12" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                                <rect y="5" width="12" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                            </svg>
                        </span>
                    </button>
                    <div className={`grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden pr-4 text-sm">{PerAccordion.description}</div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAdoption;
