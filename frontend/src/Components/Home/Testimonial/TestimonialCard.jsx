import { FaQuoteLeft, FaQuoteRight, FaRegStar, FaStar } from 'react-icons/fa';

const TestimonialCard = () => {
  return (
    <div className="w-full border border-primary shadow-2xl rounded-lg flex flex-col lg:flex-row items-center justify-between gap-6 px-6 py-16">
      <img
        src="https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
        alt="demo/image"
        className="w-[180px] h-[180px] object-cover rounded-full"
      />

      <div className="w-full lg:w-[65%] relative">
        <div className="flex items-center justify-between relative">
          <FaQuoteRight className=" absolute top-[-550%] lg:top-[-150%] left-[0%] text-[2rem] text-primary" />
          <div className="flex flex-col lg:flex-row items-center gap-2">
            <h2 className="text-[1rem] font-[500]">Jhone Dehon -</h2>
            <p className="text-[0.9rem] text-[#9c9c9c]">CEO of Miracle</p>
          </div>
          <div className="flex items-center gap-1">
            <FaStar className="text-[1.1rem] text-[#ffba24]" />
            <FaStar className="text-[1.1rem] text-[#ffba24]" />
            <FaStar className="text-[1.1rem] text-[#ffba24]" />
            <FaStar className="text-[1.1rem] text-[#ffba24]" />
            <FaRegStar className="text-[#ffba24] text-[1.1rem]" />
          </div>
        </div>
        <h2 className="text-[1.5rem] font-[500] capitalize mt-1">
          amazing customer service
        </h2>
        <p className=" text-justify text-[0.9rem] my-3 text-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          nesciunt saepe quam doloremque nulla cumque vero sequi, repellendus
          vel reiciendis? Eos totam quidem ducimus amet, in fuga quia minus ab!
        </p>
        <FaQuoteLeft className=" absolute bottom-[-10%] right-[0%] text-[2rem] text-primary" />
      </div>
    </div>
  );
};
export default TestimonialCard;
