import spinner from "../spinner/spinner.gif";

const loader = () => {
  // Import spinner gif
  return (
    <div className="loader">
      <img src={spinner} alt="loading" />
    </div>
  );
};

export default loader;
