import PropTypes from 'prop-types';

const CarsoulsItem = ({ icon, count, label, subtitle }) => {
  return (
    <li className="flex flex-col items-center">
      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
        <img src={icon} alt={label} className="w-12 h-12" />
      </div>
      <div className="text-center mt-4">
        <p className="text-2xl font-semibold text-blue-600">{count}</p>
        <p className="text-lg font-medium">{label}</p>
        <p className="text-sm text-gray-500">{subtitle}</p>
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
