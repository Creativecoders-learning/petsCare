import phnMockup from './3089582-cover-removebg-preview.png';
const AppCard = () => {
  return (
    <div className="w-full bg-violet-100 primaryLight h-full p-8 rounded-md my-10">
      {/* Main */}
      <header className="flex lg:flex-row flex-col gap-[50px] lg:gap-0 items-center lg:mt-3">
        <div>
          <h1 className="text-[40px] lg:text-[60px] leading-[45px] lg:leading-[65px] lg:text-start text-center">
            Connecting hearts, one paw at a time!
          </h1>
          <p className="text-[16px] mt-2 lg:text-start text-center">
            Download our app to easily adopt pets and access essential pet
            services anytime, anywhere!
          </p>

          <div className="flex items-center flex-wrap lg:justify-start justify-center gap-[20px] mt-6">
            <button className="px-6 min-w-fit py-[1px] bg-black rounded-md flex items-center gap-[12px]">
              <img
                src="https://i.ibb.co/Tgmf5Nr/images-3.png"
                alt="apple logo"
                className="w-[28px]"
              />
              <div>
                <span className="text-[0.6rem] font-[500] text-white">
                  Download on the
                </span>
                <h3 className="text-[1.2rem] font-[500] leading-[20px] mb-2 text-white">
                  AppStore
                </h3>
              </div>
            </button>

            <button className="px-4 min-w-fit py-1.5 bg-black rounded-md flex items-center gap-[15px]">
              <img
                src="https://i.ibb.co/s9dSrDs/download-2-removebg-preview-1.png"
                alt="playstore logo"
                className="w-[25px]"
              />
              <div className="flex items-start flex-col">
                <span className="text-[0.6rem] font-[500] text-white">
                  Get it on
                </span>
                <h3 className="text-[1.2rem] font-[500] leading-[20px] mb-2 text-white">
                  Google Play
                </h3>
              </div>
            </button>
          </div>
        </div>

        {/* image */}
        <img
          src={phnMockup}
          alt="image"
          className="w-full h-[70vh] lg:w-[55%]"
        />
      </header>
    </div>
  );
};
export default AppCard;
