import React from "react";
import "../masterstyle.css";

function FilterForm(props) {
  return (
    <form>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <select class="custom-select" id="inputGroupSelect01">
            <option selected value="None">
              Choose Column to Filter...
            </option>
            {props.headers.map((header) => (
              <option value={header}>{header}</option>
            ))}
            ;
          </select>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Text to filter on."
        ></input>
      </div>
    </form>
  );
}

export default FilterForm;
