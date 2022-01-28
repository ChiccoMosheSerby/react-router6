import React from "react";

const Rainbow = (WrappedComponent) => {
  const rendomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (props) => {
    const newProps = { ...props, test: "test 2" };
    return (
      <div style={{ background: "#" + rendomColor }}>
        <WrappedComponent {...newProps} />
      </div>
    );
  };
};

export default Rainbow;
