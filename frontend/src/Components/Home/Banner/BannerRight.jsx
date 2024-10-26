import bgImg from './images/Ellipse23.png';
import dogimg from './images/image167.png';

const BannerRight = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className=" bg-contain bg-center md:h-[60vh] bg-no-repeat "
    >
      <img
        className="md:h-[60vh] md:ml-52 md:mt-20"
        src={dogimg}
        alt="Dogimg"
      />
    </div>
  );
};

export default BannerRight;
