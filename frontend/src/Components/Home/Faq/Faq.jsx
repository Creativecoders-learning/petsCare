import faqImg from './image/question_answer.png';

const Faq = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-20">
      <h2 className="text-3xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 text-gray-800 mt-20">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 lg:gap-12">
        <div className="overflow-hidden rounded border pt-10 bg-white text-slate-500 shadow-md shadow-slate-200 transition-transform transform hover:scale-105">
          <div className="flex justify-center mt-4">
            <img
              src={faqImg}
              alt="FAQ for Pet Adopters"
              className="h-24 w-24 object-contain"
            />
          </div>
          <div className="p-12 text-center">
            <h3 className="mb-4 text-xl font-medium text-primary">
              FAQ&apos;s for Pet Adopters
            </h3>
            <p>
              If you are thinking about adopting a pet, we know you&apos;ll have
              lots of things to consider. Click here to see some of the most
              frequently asked questions.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded border pt-10 bg-white text-slate-500 shadow-md shadow-slate-200 transition-transform transform hover:scale-105">
          <div className="flex justify-center mt-4">
            <img
              src={faqImg}
              alt="FAQ for Pet Adopters"
              className="h-24 w-24 object-contain"
            />
          </div>
          <div className="p-12 text-center">
            <h3 className="mb-4 text-xl font-medium text-primary">
              FAQ&apos;s for Pet Rehomers
            </h3>
            <p>
              Finding a new home for your pet doesn&apos;t need to be a daunting
              task.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
