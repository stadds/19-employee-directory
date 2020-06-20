import React from "react";
import "../masterstyle.css";

function Container(props) {
  return (
    <div className={`container${props.fluid ? "-fluid" : ""}`}>
      {props.children}
    </div>
  );
}

export default Container;
