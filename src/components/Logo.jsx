import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Logo = (props) => {
  return (
    <span>
      <Link to="/Jithendra-Portfolio/">
        <span className="text-xl font-bold tracking-wide">{props.text}</span>
      </Link>
    </span>
  );
};
Logo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Logo;

