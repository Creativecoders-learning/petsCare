import BannerLeft from './BannerLeft';
import bg from '../../../assets/banner/banner.jpg'

const Banner = () => {
  return (
    <section style={{backgroundImage:`url(${bg})`}} className=" p-5 lg:p-10">
      <div className="w-full lg:max-w-2xl h-full lg:h-[80vh] ">
        <BannerLeft />
      </div>
    </section>
  );
};

export default Banner;
