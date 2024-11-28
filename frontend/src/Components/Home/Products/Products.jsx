
import { useState } from 'react';
import usePetsProducts from '../../../Hooks/api/usePetsProducts';
import Container from '../../UI/Container';
import SectionContent from '../../UI/SectionContent';
import ShopCard from '../../UI/ShopCard';
import VetsCategoryBtn from '../../UI/VetsCategoryBtn';

const productCategories = [{category:'All'},{category:'Foods'}, {category:'Accessories'}, {category:'Medicines'}]

const Products = () => {
  const {petsProducts} = usePetsProducts()
  const [selectedCategory,setSelectedCategory]=useState("All")
  console.log('this pets product',petsProducts)

  const handleCategory = (category)=>{
    setSelectedCategory(category)
  }

  const categories = petsProducts.filter(item=>item.subCategory === selectedCategory)
  console.log("categories", categories)
  return (
    <Container>

      <div className="my-20">
          <SectionContent alignStayle={'text-center mb-10'} tag={"Our Store"} first={"Our Best Selling Products"} />


          <VetsCategoryBtn items={productCategories} selectedCategory={selectedCategory} handleCategory={handleCategory}/>
           <div className='mt-10 grid grid-cols-4 items-center justify-items-center gap-5'> 
            {categories.length ? (
               categories?.slice(0,4).map(product=>(
                <ShopCard key={product.id} item={product} />
           ))
            ) : 
            
            petsProducts?.slice(0,8).map(product=>(
              <ShopCard key={product.id} item={product} />
         ))
            }
           </div>
      </div>
    </Container>
  );
};

export default Products;
