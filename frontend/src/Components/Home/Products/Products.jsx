import ProductCard from './ProductCard';
import catag2 from './image/img-5-4_768x768_crop_center.webp';
import catag3 from './image/img-5-5_580x580_crop_center.png';
import catag4 from './image/img-5-7_580x580_crop_center.png';
import catag5 from './image/img-5-6_580x580_crop_center.png';
import catag6 from './image/img-5-8_580x580_crop_center.png';
import catag7 from './image/img-5-9_768x768_crop_center.png';

const Products = () => {
  const categories = [
    { image: catag2, title: 'Cat Shop', count: 115, link: '/category/cat' },
    { image: catag3, title: 'Dog Shop', count: 70, link: '/category/dog' },
    { image: catag4, title: 'Fish Shop', count: 98, link: '/category/fish' },
    {
      image: catag5,
      title: 'Rabbit Shop',
      count: 84,
      link: '/category/rabbit',
    },
    { image: catag6, title: 'Bird Shop', count: 107, link: '/category/bird' },
    {
      image: catag7,
      title: 'Chameleon Shop',
      count: 125,
      link: '/category/chameleon',
    },
  ];

  return (
    <div className="my-20">
      <h2 className="text-3xl font-semibold text-center text-secondary">
        Shop By Category
      </h2>
      <div className="my-20">
        <section>
          <div className="container px-6 m-auto">
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              {categories.map((category, index) => (
                <ProductCard
                  key={index}
                  image={category.image}
                  title={category.title}
                  count={category.count}
                  link={category.link}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
