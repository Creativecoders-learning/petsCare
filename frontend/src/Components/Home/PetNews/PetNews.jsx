import useGetPetData from '../../../Hooks/useGetPetData';
import SectionContent from '../../UI/SectionContent';
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
      <SectionContent alignStayle={'text-center'} tag={'Our Blog'} first={'Available Pets Blog '}/>

      <div className="mt-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {petData.slice(0,3).map((pet) => (
            <PetNewsCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    </>
  );
};
export default PetNews;
