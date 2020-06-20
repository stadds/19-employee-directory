import React from "react";
import "../masterstyle.css";

function Table(props) {
  return (
    <div className="table-responsive">
      <table className="table table-hover">{props.children}</table>
    </div>
  );
}

export default Table;
