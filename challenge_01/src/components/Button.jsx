import PropTypes from "prop-types";

const Button = ({ title }) => {
  return (
    <button className="bg-[#333333] rounded-md text-white py-2 px-20 text-sm">
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
