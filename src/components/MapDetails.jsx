import PropTypes from "prop-types";

export default function MapDetails({ main, text }) {
  return (
    <div>
      <p>{main}</p>
      <p>{text}</p>
    </div>
  );
}

MapDetails.propTypes = {
  main: PropTypes.string,
  text: PropTypes.string,
};
