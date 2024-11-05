import useGetPetData from '../../../Hooks/useGetPetData';
import Button from '../../UI/Button';
import PetNewsCard from './PetNewsCard';

const PetNews = () => {
  const url = '/blogs.json';

  const item = 4;
  const { petData, error } = useGetPetData(item, url);

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <h2 className="text-4xl text-center font-semibold my-20 ">
        <span className="text-secondary"> Pet News</span>
      </h2>

      <div className="mt-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {petData.map((pet) => (
            <PetNewsCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-5">
        <Button secondary> Cat News</Button>
        <Button secondary> Dog News</Button>
      </div>
    </>
  );
};
export default PetNews;
