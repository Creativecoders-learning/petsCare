import AdoptionButton from '../../UI/AdoptionButton';
const BannerLeft = () => {
  return (
    <div className="h-full flex flex-col p-4 items-start justify-center ">
      <div className="mt-5 w-full text-center lg:text-left ">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white font-nunito ">Give a New Life to</h2>
        <div className="font-nunito mt-5">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
             Pet care
          </h2>
        </div>
      </div>
      <p className="w-full text-center lg:text-left lg:mx-0 lg:w-3/5 text-xl mt-5  text-gray-300">
        Pet adoption and rehoming are both vital aspects of animal welfare,
        offering hope and a fresh start to pets in need.
      </p>
      <div className="flex justify-center lg:justify-start items-center mt-8 w-full gap-6">
        <AdoptionButton text={'View more'} btnStyle={'w-48 '}/>
        
      </div>
    </div>
  );
};
export default BannerLeft;
