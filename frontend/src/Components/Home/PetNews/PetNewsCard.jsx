import PropTypes from "prop-types";
import Button from "../../UI/Button";

const PetNewsCard = ({ pet }) => {
  const { image, title, description } = pet;

  const truncatedDescription =
    description.split(" ").slice(0, 25).join(" ") + "...";
  return (
    <>
      <div className="flex flex-col justify-between gap-0 max-w-sm min-h-96 max-h-[520px] rounded overflow-hidden shadow-lg bg-white">
        <div className="h-full w-full">
        <img width={500} height={500} className="size-96 h-48 object-cover" src={image} alt={title} />
        </div>
        
        <div className=" flex flex-col items-start justify-between gap-y-3 p-5">
            <div className="">
              <h2 className="font-bold text-xl mb-2">{title}</h2>
              <p className="text-gray-700 text-base mb-4 flex flex-grow">
                {truncatedDescription}
              </p>
            </div>
            <Button secondary btnStyle="border-none focus-visible:outline-none ">
              Read More
            </Button>
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
