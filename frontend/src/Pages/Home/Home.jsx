import Puppies from '../../Components/Adoption/Puppies/Puppies';
import About from '../../Components/Home/About/About';
import AdoptionSteps from '../../Components/Home/AdoptionSteps/AdoptionSteps';
import Banner from '../../Components/Home/Banner/Banner';
import MeetVets from '../../Components/Home/MeetVets/MeetVets';
import NewsLetter from '../../Components/Home/NewsLetter/NewsLetter';
import PetNews from '../../Components/Home/PetNews/PetNews';
import Products from '../../Components/Home/Products/Products';
import Stats from '../../Components/Home/Stats/Stats';
import Testimonials from '../../Components/Home/Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Banner />
      <About></About>
      <Products />
      <Puppies></Puppies>
      <MeetVets/>
      {/* <Stats /> */}
      {/* <AdoptionSteps /> */}
      {/* <PetNews /> */}
      <Testimonials></Testimonials>
      <NewsLetter/>
    </div>
  );
};
export default Home;
