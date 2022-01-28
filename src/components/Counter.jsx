import React from "react";
import CounterHOC from "../HOCs/CounterHOC";

const Counter = (props) => {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        maxWidth: "200px",
        border: "solid 1px ",
      }}
    >
      <div
        onClick={props.dec}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "solid 1px ",
          padding: "5px",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        -
      </div>
      {props.count}
      <div
        onClick={props.inc}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "5px",
          border: "solid 1px ",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        +
      </div>
    </div>
  );
};

export default CounterHOC(Counter);
