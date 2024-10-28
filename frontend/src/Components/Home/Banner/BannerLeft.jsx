import Button from '../../UI/Button';
const BannerLeft = () => {
  return (
    <div className="h-full flex flex-col p-4 items-start justify-center">
      <div className="text-5xl md:text-7xl mt-5  font-inter text-center ">
        <h2 className=" text-secondary ">Give a New Life to</h2>
        <div className="font-acme mt-5">
          <h2 className=" text-primaryLight">
            Furry <span className="text-primaryBold">Friends</span>
          </h2>
        </div>
      </div>
      <p className="text-xl mt-5 text-justify">
        Pet adoption and rehoming are both vital aspects of animal welfare,
        offering hope and a fresh start to pets in need.
      </p>
      <div className="flex justify-between items-center mt-8 w-full gap-6">
        <Button primary btnStyle="w-3/4">
          Adopt me
        </Button>
        <Button secondary btnStyle="w-3/4">
          Rehome Now
        </Button>
      </div>
    </div>
  );
};
export default BannerLeft;
