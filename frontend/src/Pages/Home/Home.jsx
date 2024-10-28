import AdoptionSteps from '../../Components/Home/AdoptionSteps/AdoptionSteps';
import Banner from '../../Components/Home/Banner/Banner';
import DetailCard from '../../Components/Home/DetailCard.jsx/DetailCard';
import Faq from '../../Components/Home/Faq/Faq';
import PetNews from '../../Components/Home/PetNews/PetNews';
import RelationWithPets from '../../Components/Home/RelationWithPets/RelationWithPets';
import Stats from '../../Components/Home/Stats/Stats';
import Testimonial from '../../Components/Home/Testimonial/Testimonial';
import Container from '../../Components/UI/Container';

const Home = () => {
  return (
    <Container className="font-inter">
      <Banner />
      <DetailCard />
      <Stats />
      <AdoptionSteps />
      <PetNews />
      <RelationWithPets />
      <Testimonial />
      <Faq />
    </Container>
  );
};
export default Home;
