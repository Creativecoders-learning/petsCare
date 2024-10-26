// This is a reusable button where you'll use it as a component and pass the props and you can customize it by passing your desired style
//do not change the default classes your tailwind style props override the default styles.
//else you can
// just make your button primary or secondary like this   <Button btnName="Adopt Now" primary /> do dont forget to import

import PropTypes from 'prop-types';

const Button = ({
  btnName,
  primary = false,
  secondary = false,
  btnStyle = '',
  onClick,
}) => {
  const primaryClasses =
    'bg-primary text-white  hover:bg-white hover:text-primary  hover:outline';
  const secondaryClasses =
    'bg-[#fff] text-primary border-primary hover:bg-primary hover:text-white  hover:outline outline-primaryLight';

  const defaultClasses = `inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide border border-2 transition duration-300 rounded-md whitespace-nowrap  focus:text-white focus:bg-primaryBold focus-visible:outline-none disabled:cursor-not-allowed disabled:border-primaryLight disabled:bg-primaryLight disabled:shadow-none`;

  const appliedClasses = `${defaultClasses} ${
    primary ? primaryClasses : secondary ? secondaryClasses : ''
  } ${btnStyle}`;
  return (
    <button onClick={onClick} type="button" className={`${appliedClasses}`}>
      {btnName}
    </button>
  );
};

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  btnStyle: PropTypes.string,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default Button;
