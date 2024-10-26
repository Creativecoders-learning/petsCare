import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Button from '../../UI/Button';

const PetCard = ({
  name,
  location,
  gender,
  breed,
  age,
  size,
  description,
  image,
}) => {
  const [listed, setListed] = useState(false);

  return (
    <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
      <img className="w-full h-48 object-fill" src={image} alt={name} />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <div className="text-2xl">
            {listed ? (
              <FaHeart
                onClick={() => setListed(false)}
                className="text-red-500  cursor-pointer"
              />
            ) : (
              <FaRegHeart
                onClick={() => setListed(true)}
                className="text-gray-500 cursor-pointer"
              />
            )}
          </div>
        </div>
        <p className="text-sm text-gray-600">{location}</p>
        <div className="flex justify-between text-sm text-gray-700 mt-2">
          <p>
            <span className="font-medium">Breed:</span> {breed}
          </p>
          <p>
            <span className="font-medium">Gender:</span> {gender}
          </p>
        </div>
        <div className="flex justify-between text-sm text-gray-700">
          <p>
            <span className="font-medium">Age:</span> {age}
          </p>
          <p>
            <span className="font-medium">Size:</span> {size}
          </p>
        </div>
        <p className="mt-3 text-gray-700 text-sm">{description}</p>
        <Button btnName={name} primary />
      </div>
    </div>
  );
};

PetCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  gender: PropTypes.oneOf(['Male', 'Female']).isRequired,
  breed: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['Small', 'Medium', 'Large']).isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default PetCard;
