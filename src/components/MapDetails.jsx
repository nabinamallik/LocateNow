import PropTypes from "prop-types";

export default function MapDetails({ main, text }) {
  return (
    <div className="text-center">
      <p className="font-semibold">{main}</p>
      <p className="font-extralight">{text}</p>
    </div>
  );
}

MapDetails.propTypes = {
  main: PropTypes.string,
  text: PropTypes.string,
};
