import React from "react";
import "../masterstyle.css";

function Jumbotron({addClass,title,desciption,directions,btntext}) {
  return (
    <div className={`jumbotron ${addClass ? addClass : ""}`}>
      <h1 className="display-4">{title}</h1>
      <p className="lead">
       {desciption}
      </p>
      <hr className="my-4"></hr>
      <p>
       {directions}
      </p>
      <a className="btn btn-primary btn-lg" href="#" role="button">
       {btntext}
      </a>
    </div>
  );
}

export default Jumbotron;
