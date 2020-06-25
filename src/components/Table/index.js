import React from "react";
import "./style.css";

function Table(props) {
  return (
    <div className="table-striped table-responsive">
      <table className="table table-hover">{props.children}</table>
    </div>
  );
}

export default Table;
