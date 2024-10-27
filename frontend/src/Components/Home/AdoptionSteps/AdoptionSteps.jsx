import Container from '../../UI/Container';
import group from './images/group_add.svg';
import homework from './images/home_work.svg';
import clipboard from './images/content_paste_search.svg';
import left from './images/Left.svg';
import right from './images/Right.svg';

const AdoptionSteps = () => {
  return (
    <Container className="mt-20 text-center mb-10 px-4">
      <h2 className="text-3xl font-semibold">Adopt or Rehome a pet in just</h2>
      <p className="text-secondary font-medium text-xl mb-16">3 Easy Steps</p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10">
        {/* Step 1 */}
        <div className="flex-1 max-w-[350px] min-w-[280px] mx-auto">
          <div className="h-full p-8 bg-white shadow-md rounded-lg flex flex-col items-center relative border ">
            <div className="bg-[#EAE8F7] w-12 h-12 rounded-full flex items-center justify-center absolute top-[-24px] left-1/2 -translate-x-1/2">
              <span className="text-xl font-bold text-primaryBold">1</span>
            </div>
            <div className="bg-purple-100 p-6 rounded-full mb-6 mt-4">
              <img src={group} alt="Step 1" className="w-16 h-16" />
            </div>
            <p className="text-center text-gray-700 font-medium">
              Set up your profile (including photos) in minutes
            </p>
          </div>
        </div>

        {/* Left Arrow */}
        <div className="hidden lg:block ">
          <img
            src={left}
            alt="left connection"
            className="w-full h-24 object-contain"
          />
        </div>

        {/* Step 2 */}
        <div className="flex-1 max-w-[350px] min-w-[280px] mx-auto">
          <div className="h-full p-8 bg-white shadow-lg rounded-lg flex flex-col items-center relative border">
            <div className="bg-[#EAE8F7] w-12 h-12 rounded-full flex items-center justify-center absolute top-[-24px] left-1/2 -translate-x-1/2">
              <span className="text-xl font-bold text-primaryBold">2</span>
            </div>
            <div className="bg-purple-100 p-6 rounded-full mb-6 mt-4">
              <img src={homework} alt="Step 2" className="w-16 h-16" />
            </div>
            <p className="text-center text-gray-700 font-medium">
              Describe your home and routine so rehomers can see if its right
              for their pet
            </p>
          </div>
        </div>

        {/* Right Arrow */}
        <div className="hidden lg:block ">
          <img
            src={right}
            alt="right connection"
            className="w-full h-24 object-contain"
          />
        </div>

        {/* Step 3 */}
        <div className="flex-1 max-w-[350px] min-w-[280px] mx-auto">
          <div className="h-full p-8 bg-white shadow-lg rounded-lg flex flex-col items-center relative border">
            <div className="bg-[#EAE8F7] w-12 h-12 rounded-full flex items-center justify-center absolute top-[-24px] left-1/2 -translate-x-1/2">
              <span className="text-xl font-bold text-primaryBold">3</span>
            </div>
            <div className="bg-purple-100 p-6 rounded-full mb-6 mt-4">
              <img src={clipboard} alt="Step 3" className="w-16 h-16" />
            </div>
            <p className="text-center text-gray-700 font-medium">
              Start your search! Set up your profile (including photos)
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AdoptionSteps;
