import BannerLeft from './BannerLeft';
import BannerRight from './BannerRight';

const Banner = () => {
  return (
    <section className="grid grid-cols-6">
      <div className="col-span-2">
        <BannerLeft />
      </div>
      <div className="col-span-4">
        <BannerRight />
      </div>
    </section>
  );
};
export default Banner;
