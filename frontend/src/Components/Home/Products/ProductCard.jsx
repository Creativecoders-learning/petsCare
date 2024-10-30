import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ image, title, count, link }) => {
  return (
    <Link
      to={link}
      className="col-span-4 lg:col-span-2 flex flex-col items-center"
    >
      <div className="p-4 bg-gray-100 rounded-lg">
        <img
          src={image}
          alt={title}
          className="p-4 transition duration-500 hover:scale-125"
        />
      </div>
      <h3 className="mt-4 text-lg font-medium text-center">{title}</h3>
      <p className="text-green-500 text-center">{count} Products</p>
    </Link>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProductCard;
