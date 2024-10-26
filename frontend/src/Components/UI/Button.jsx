// This is a reusable button where you'll use it as a component and pass the props and you can customize it by passing your desired style
//do not change the default classes your tailwind style props override the default styles.

import PropTypes from 'prop-types';

const Button = ({ btnName, btnStyle = '', onClick }) => {
  const defaultClasses =
    'inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-primary border border-primary border-2 transition duration-300 rounded-md whitespace-nowrap bg-white hover:text-white hover:bg-primary focus:text-white focus:bg-primaryBold focus-visible:outline-none disabled:cursor-not-allowed disabled:border-primaryLight disabled:bg-primaryLight disabled:shadow-none';

  return (
    <button
      onClick={onClick}
      type="button"
      className={`${defaultClasses} ${btnStyle}`}
    >
      {btnName}
    </button>
  );
};

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  btnStyle: PropTypes.string,
  onClick: PropTypes.object,
};

export default Button;
