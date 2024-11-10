
import useAdoptionData from '../../../Hooks/useAdoptionData';
import AdoptionCard from '../../UI/AdoptionCard';

const CategoriesItems = ({ selectedCategory }) => {
  const { adoptions } = useAdoptionData();

  const categories = adoptions.filter(
    (item) => item.category === selectedCategory,
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
      {categories?.map((item) => (
        <AdoptionCard key={item.id} item={item}></AdoptionCard>
      ))}
    </div>
  );
};

export default CategoriesItems;
