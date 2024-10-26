// This is a reusable Container it will occupy the main body section and free up the spaces both side
import PropTypes from 'prop-types';

const Container = ({ children, className = '' }) => {
  const combinedClassName = `container mx-auto ${className}`;

  return <div className={combinedClassName}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Container;
