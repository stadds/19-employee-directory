import React from "react";
import "../masterstyle.css";

function TableHead(props) {
  const { headers, btnHandle, classFtn } = props;
  return (
    <thead>
      <tr>
        {headers.map((header) => (
          <th scope="col">
            <button
              data-header={header}
              onClick={() => btnHandle(header)}
              className={classFtn(header)}
            >
              {header}
            </button>
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
