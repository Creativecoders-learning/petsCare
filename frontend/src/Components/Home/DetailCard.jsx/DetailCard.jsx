import usePetData from '../../../hooks/usePetData';
import PetCard from './PetCard';
const DetailCard = () => {
  const petData = usePetData(4);

  return (
    <>
      <h2 className="text-4xl text-center font-semibold pt-10">
        Take a Look at Some of <span className="text-secondary"> Our Pets</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 pt-10">
        {petData.map((dog) => (
          <PetCard
            key={dog?.id}
            name={dog?.name}
            location={dog?.location}
            gender={dog?.gender}
            breed={dog?.breed}
            age={dog?.age}
            size={dog?.size}
            description={dog?.description}
            image={dog?.image}
          />
        ))}
      </div>
    </>
  );
};
export default DetailCard;
