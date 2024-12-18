import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ProductCard = ({ icon: Icon, title, count, link }) => {
  return (
    <Link
      to={link}
      className="col-span-4 lg:col-span-2 flex flex-col items-center"
    >
      <div className="p-10 w-[190px] h-[200px]  flex flex-col justify-between mx-auto bg-white border shadow-xl rounded-lg">
        <div className='flex items-center justify-center mb-3'>
        <Icon className=" p-2 text-white bg-primaryBold size-20 rounded-full  transition duration-500 hover:scale-125" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-center">{title}</h3>
          <p className=" text-sm text-black text-center">{count} Products</p>
        </div>
      </div>

    </Link>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.number,
  link: PropTypes.string,
};

export default ProductCard;
