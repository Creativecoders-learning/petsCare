import PropTypes from "prop-types";

export default function Inputs({ type, name, placeholder }) {
  return (
    <div className="border border-[#ebebeb] rounded-md focus:outline-primary focus:border-primary">
      <input type={`${type}`} name={name}  className="focus:outline-none focus:border-transparent px-4 py-2 text-sm" placeholder={placeholder}/>
    </div>
  );
}

Inputs.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};
