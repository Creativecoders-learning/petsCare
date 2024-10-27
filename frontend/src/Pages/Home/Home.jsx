import AdoptionSteps from '../../Components/Home/AdoptionSteps/AdoptionSteps';
import Banner from '../../Components/Home/Banner/Banner';
import DetailCard from '../../Components/Home/DetailCard.jsx/DetailCard';
import PetNews from '../../Components/Home/PetNews/PetNews';
import Container from '../../Components/UI/Container';

const Home = () => {
  return (
    <Container className="font-inter">
      <Banner />
      <DetailCard />
      <AdoptionSteps />
      <PetNews />
      {/* pet news */}
      {/* Relation with pets */}
      {/* testimonial cards*/}
      {/* Faq section */}
    </Container>
  );
};
export default Home;
