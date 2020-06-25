import React from "react";
import "../masterstyle.css";

function Dropdown(props) {
  const { dropdownTitle, dropdownItems } = props;

  return (
    <div className="dropdown">
      <button
        className="btn btn-info dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {dropdownTitle}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {dropdownItems.map((item) => (
          <a className="dropdown-item" href="#" data-menu={item}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
