/* eslint-disable react/prop-types */

import useAdoptionData from '../../../Hooks/useAdoptionData';
import MeetPets from '../../UI/MeetPets';

const CategoriesItems = ({ selectedCategory }) => {
  const { adoptions } = useAdoptionData();

  const categories = adoptions.filter(
    (item) => item.category === selectedCategory,
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
      {categories.map((item) => (
        
        <MeetPets key={item.id} item={item}></MeetPets>
      ))}
    </div>
  );
};

export default CategoriesItems;
