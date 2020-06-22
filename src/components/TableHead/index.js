import React from "react";
import "../masterstyle.css";

function TableHead(props) {
  const { headers } = props;
  return (
    <thead>
      <tr>
        {headers.map((header) => (
          <th scope="col">{header}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
