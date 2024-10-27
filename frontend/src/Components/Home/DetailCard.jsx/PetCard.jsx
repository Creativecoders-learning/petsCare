import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Button from '../../UI/Button';
import { IoLocationOutline } from 'react-icons/io5';

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
    <div className="p-4 flex flex-col h-full">
      <img className="w-full rounded h-48 object-fill" src={image} alt={name} />
      <div className="flex justify-between items-center mt-4">
        <h2 className="text-xl font-semibold text-secondary">{name}</h2>
        <div className="text-2xl">
          {listed ? (
            <FaHeart
              onClick={() => setListed(false)}
              className="text-primary cursor-pointer"
            />
          ) : (
            <FaRegHeart
              onClick={() => setListed(true)}
              className="text-secondary cursor-pointer"
            />
          )}
        </div>
      </div>
      <div className="flex mt-2">
        <IoLocationOutline className="text-secondary mr-2 text-lg" />
        <p className="text-sm text-secondary font-semibold">{location}</p>
      </div>
      <div className="flex justify-between text-sm text-gray-700 mt-2">
        <p>
          <span className="font-medium">Breed:</span>{' '}
          <span className="bg-violet-200 rounded-md p-1"> {breed} </span>
        </p>
        <p>
          <span className="font-medium">Gender:</span>{' '}
          <span className="bg-violet-200 rounded-md p-1"> {gender} </span>
        </p>
      </div>
      <div className="flex justify-between text-sm text-gray-700 mt-2">
        <p>
          <span className="font-medium">Age:</span>{' '}
          <span className="bg-violet-200 rounded-md p-1"> {age} </span>
        </p>
        <p>
          <span className="font-medium">Size:</span>{' '}
          <span className="bg-violet-200 rounded-md p-1"> {size} </span>
        </p>
      </div>
      <div className="flex-grow mt-3">
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
      <Button primary>More Info</Button>
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
