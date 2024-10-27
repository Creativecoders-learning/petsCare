import 'react-tabs/style/react-tabs.css';

import { useState } from 'react';
import CategoriesItems from '../CategoriesItems/CategoriesItems';
import AdoptionCategoryBtn from '../../UI/AdoptionCategoryBtn';
import useAdoptionData from '../../../Hooks/useAdoptionData';

const Categories = () => {
  const { adoptions } = useAdoptionData();
  const [selectedCategory, SetSelectedCategory] = useState('Dog');
  const unickCategories = new Set();

  // unick category filtering
  const withoutDublicateCategories = adoptions.filter((item) => {
    const isDublicate = unickCategories.has(item?.category);

    if (!isDublicate) {
      unickCategories.add(item?.category);
      return true;
    }

    return false;
  });

  // handleSelected category
  const handleCategory = (category) => {
    SetSelectedCategory(category);
  };

  return (
    <div className="text-center p-10">
      <h1 className="text-3xl">Pets Available For Adoption Nearby</h1>
      {/* added filter by tabs */}
      <div className="max-w-screen-lg mx-auto mt-10">
        {/* category Option or button */}
        <div>
          <AdoptionCategoryBtn
            items={withoutDublicateCategories}
            selectedCategory={selectedCategory}
            handleCategory={handleCategory}
          />
        </div>

        {/* Category Card items */}
        <div>
          <CategoriesItems
            selectedCategory={selectedCategory}
          ></CategoriesItems>
        </div>
      </div>
    </div>
  );
};

export default Categories;
