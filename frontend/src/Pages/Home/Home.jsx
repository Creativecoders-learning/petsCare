import Puppies from '../../Components/Adoption/Puppies/Puppies';
import About from '../../Components/Home/About/About';
import AdoptionSteps from '../../Components/Home/AdoptionSteps/AdoptionSteps';
import Banner from '../../Components/Home/Banner/Banner';
import NewsLetter from '../../Components/Home/NewsLetter/NewsLetter';
import PetNews from '../../Components/Home/PetNews/PetNews';
import Products from '../../Components/Home/Products/Products';
import Stats from '../../Components/Home/Stats/Stats';
import Testimonials from '../../Components/Home/Testimonials/Testimonials';
import Container from '../../Components/UI/Container';

const Home = () => {
  return (
    <div>
      <Banner />
      <Container className="font-inter">
      <About></About>
      <Puppies></Puppies>
      <Stats />
      <AdoptionSteps />
      <Products />
      <PetNews />
      <Testimonials></Testimonials>
      <NewsLetter/>
    </Container>
    </div>
  );
};
export default Home;
