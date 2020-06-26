import React from "react";
import "../masterstyle.css";

function FilterForm(props) {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          {/* <label for="colFilter">Choose Column to Filter:</label> */}
          <select
            // ref={props.selectRef}
            className="custom-select"
            id="colFilter"
            onChange={props.handleFilterChange}
          >
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
          required
          type="text"
          className="form-control"
          aria-label="Text to filter on."
          id="searchFilter"
          name="searchFilter"
        ></input>
      </div>
      <button
        type="submit"
        className="btn btn-primary mr-2"
      >
        Filter Table
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={props.handleClearFilter}
      >
        Clear Filter
      </button>
    </form>
  );
}

export default FilterForm;
