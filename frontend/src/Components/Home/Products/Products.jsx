import ProductCard from './ProductCard';
import { FaCat, FaDog, FaFish } from 'react-icons/fa';
import { GiEgyptianBird,GiRabbit,GiChameleonGlyph } from "react-icons/gi";
import Container from '../../UI/Container';



const Products = () => {

  const iconMap = {
    FaCat: FaCat,
    FaDog: FaDog,
    FaFish: FaFish,
    GiRabbit: GiRabbit,
    GiEgyptianBird: GiEgyptianBird,
    GiChameleonGlyph: GiChameleonGlyph,
  };

 // Define your categories data
const categories = [
  { icon: 'FaCat', title: 'Cat Shop', count: 115, link: '/category/cat' },
  { icon: 'FaDog', title: 'Dog Shop', count: 70, link: '/category/dog' },
  { icon: 'FaFish', title: 'Fish Shop', count: 98, link: '/category/fish' },
  { icon: 'GiRabbit', title: 'Rabbit Shop', count: 84, link: '/category/rabbit' },
  { icon: 'GiEgyptianBird', title: 'Bird Shop', count: 107, link: '/category/bird' },
  { icon: 'GiChameleonGlyph', title: 'Chameleon', count: 125, link: '/category/chameleon' },
];



  return (
   <Container>

<div className="my-20">
      <h2 className="text-3xl font-semibold text-center text-secondary">
        Shop By Category
      </h2>
      <div className="my-10">
        <section>
          <div className="container px-6 m-auto">
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              {categories.map((category, index) =>{
                 const IconComponent = iconMap[category.icon];
                return (
                  <ProductCard
                  key={index}
                  icon={IconComponent}
                  title={category.title}
                  count={category.count}
                  link={category.link}
                />
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
   </Container>
  );
};

export default Products;
