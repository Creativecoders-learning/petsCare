import { Link } from "react-router-dom";
import { IMAGES } from "../../Image-data";
import Button from "../UI/Button";

const categories = [
  {
    title: "Cats",
    image: IMAGES.CATEGORYImages.cats,
    description: "Food, Litters, Feeders and Toys",
  },
  {
    title: "Dogs",
    image: IMAGES.CATEGORYImages.dogs,
    description: "Food, Bowl and Toys",
  },
  {
    title: "Birds",
    image: IMAGES.CATEGORYImages.birds,
    description: "Food, Feeders, Cage and Tags",
  },
  {
    title: "Rabbits",
    image: IMAGES.CATEGORYImages.rabbits,
    description: "Food, Grass, Feeders and Tags",
  },
  {
    title: "Fishes",
    image: IMAGES.CATEGORYImages.fishes,
    description: "Food, Bowls & Aquarium, and Accessories",
  },
];
export default function ShopCategories() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-16">
      {categories?.map((item, index) => (
        <div
          className="group relative cursor-pointer rounded-lg overflow-hidden"
          key={index}
        >
          <img
            className="w-full rounded-lg transition-all duration-300 group-hover:scale-[1.2]"
            src={item.image}
            alt={item.title}
          />
          <div className="absolute w-full h-full inset-0 bg-black/50 bg-opacity-50 transition-opacity duration-300 opacity-30 group-hover:opacity-80 rounded-lg"></div>
          <div className="absolute top-0 w-full h-full flex gap-6 flex-col justify-center items-start p-6 text-white">
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl">{item.title}</h3>
              <p className="text-xl">{item.description}</p>
            </div>
            <Link to={`/all-products?category=${item.title}&subCategory=Foods`}>
              <Button primary={true}>Shop Now</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
