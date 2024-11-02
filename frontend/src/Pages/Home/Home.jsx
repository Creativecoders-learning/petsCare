import Puppies from '../../Components/Adoption/Puppies/Puppies';
import About from '../../Components/Home/About/About';
import AdoptionSteps from '../../Components/Home/AdoptionSteps/AdoptionSteps';
import Banner from '../../Components/Home/Banner/Banner';
import PetNews from '../../Components/Home/PetNews/PetNews';
import Products from '../../Components/Home/Products/Products';
import Stats from '../../Components/Home/Stats/Stats';
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
    </Container>
    </div>
  );
};
export default Home;
