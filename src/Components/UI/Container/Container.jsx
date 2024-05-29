import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="lg:w-[1235px] md:w-[80%] w-[90%] mx-auto ">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;