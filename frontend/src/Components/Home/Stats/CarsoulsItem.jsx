import PropTypes from 'prop-types';

const CarsoulsItem = ({ icon, count, label, subtitle }) => {
  return (
    <li className="flex flex-col bg-red-200 py-5 rounded-md items-center">
      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
        <img src={icon} alt={label} className="w-12 h-12" />
      </div>
      <div className="text-center px-5 mt-4 space-y-2">
        <p className="text-2xl font-semibold text-black">{count}</p>
        <p className="text-lg text-primaryBold font-bold hover:text-primary duration-200">{label}</p>
        <p className="text-sm text-black">{subtitle}</p>
      </div>
    </li>
  );
};
CarsoulsItem.propTypes = {
  icon: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default CarsoulsItem;
