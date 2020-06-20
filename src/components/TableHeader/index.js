import React from "react";
import "../masterstyle.css";

function TableHeader({scope,data}) {
 return <th scope={scope ? scope : ""}>{data}</th>;
}

export default TableHeader;
