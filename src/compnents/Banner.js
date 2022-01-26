import "../styles/Banner.css";
import logo from "../assets/logo.png";
import PropTypes from "prop-types";

function Banner({ title }) {

  return (
    <h1 className="lmj-banner">
      <img src={logo} className="lmj-logo" alt="La maison jungle" />
        {title.toUpperCase()}
    </h1>
  );
}

Banner.propTypes = {
  title: PropTypes.string,
};

export default Banner;
