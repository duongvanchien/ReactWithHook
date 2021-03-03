import React from "react";
import PropTypes from "prop-types";

ReactMemo.propTypes = {
  name: PropTypes.string,
};

ReactMemo.defaultProps = {
  name: "",
};

function ReactMemo(props) {
  const { name } = props;
  console.log(name);
  return <div>{name}</div>;
}

export default React.memo(ReactMemo);
