import useGetPetData from '../../../Hooks/useGetPetData';
import Button from '../../UI/Button';
import PetCard from './PetCard';
const DetailCard = () => {
  const url = '/pets.json';
  // const petData = usePetData(4, url);
  const limit = 4;
  const { petData, error } = useGetPetData(limit, url);
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <h2 className="text-4xl text-center font-semibold pt-10">
        Take a Look at Some of <span className="text-secondary"> Our Pets</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 pt-10">
        {petData.map((pet) => (
          <PetCard
            key={pet?.id}
            name={pet?.name}
            location={pet?.location}
            gender={pet?.gender}
            breed={pet?.breed}
            age={pet?.age}
            size={pet?.size}
            description={pet?.description}
            image={pet?.image}
          />
        ))}
      </div>
      <div className="my-5  text-center">
        <Button secondary>See More</Button>
      </div>
    </>
  );
};
export default DetailCard;
