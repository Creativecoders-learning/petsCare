import AdoptionSteps from '../../Components/Home/AdoptionSteps/AdoptionSteps';
import Banner from '../../Components/Home/Banner/Banner';
import DetailCard from '../../Components/Home/DetailCard.jsx/DetailCard';
import PetNews from '../../Components/Home/PetNews/PetNews';
import RelationWithPets from '../../Components/Home/RelationWithPets/RelationWithPets';
import Testimonial from '../../Components/Home/Testimonial/Testimonial';
import Container from '../../Components/UI/Container';

const Home = () => {
  return (
    <Container className="font-inter">
      <Banner />
      <DetailCard />
      <AdoptionSteps />
      <PetNews />
      <RelationWithPets />
      <Testimonial />
      {/* testimonial cards*/}
      {/* Faq section */}
    </Container>
  );
};
export default Home;
