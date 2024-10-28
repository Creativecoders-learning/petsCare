import BannerLeft from './BannerLeft';
import BannerRight from './BannerRight';

const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="flex-1 md:basis-2/5 order-2 md:order-1">
        <BannerLeft />
      </div>
      <div className="flex-1 md:basis-3/5 order-1 md:order-2">
        <BannerRight />
      </div>
    </section>
  );
};

export default Banner;
