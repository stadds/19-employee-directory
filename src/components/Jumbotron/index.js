import React from "react";
import "../masterstyle.css";

function Jumbotron(props) {
  return (
    <div className={`jumbotron ${props.addClass ? props.addClass : ""}`}>
      <h1 className="display-4">{props.title}</h1>
      <p className="lead">
       {props.desciption}
      </p>
      <hr className="my-4"></hr>
      <p>
       {props.directions}
      </p>
      {props.children}
    </div>
  );
}

export default Jumbotron;
