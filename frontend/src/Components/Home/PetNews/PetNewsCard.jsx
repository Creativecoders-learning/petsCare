import PropTypes from "prop-types";
import Button from "../../UI/Button";

const PetNewsCard = ({ pet }) => {
  const { image, title, description } = pet;

  const truncatedDescription =
    description.split(" ").slice(0, 25).join(" ") + "...";
  return (
    <>
      <div className="max-w-sm min-h-96 max-h-[500px] rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="m-5">
          <div className=" flex flex-col justify-between ">
            <div>
              <h2 className="font-bold text-xl mb-2">{title}</h2>
              <p className="text-gray-700 text-base mb-4 flex flex-grow">
                {truncatedDescription}
              </p>
            </div>
            <Button secondary btnStyle="border-none focus-visible:outline-none  ">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
// Prop Validation
PetNewsCard.propTypes = {
  pet: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default PetNewsCard;
