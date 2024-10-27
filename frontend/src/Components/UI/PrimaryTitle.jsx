import PropTypes from "prop-types";

export default function PrimaryTitle({ children, titleStyle = "" }) {
  return (
    <div
      className={`flex items-center font-inter justify-start text-3xl font-medium text-primary py-4 ${titleStyle}`}
    >
      <h2>{children}</h2>
    </div>
  );
}

PrimaryTitle.propTypes = {
  children: PropTypes.string.isRequired,
  titleStyle: PropTypes.string,
};
