import React from "react";
import "../masterstyle.css";

function TableHead(props) {
return (
    <thead>{props.children}</thead>
);
}

export default TableHead;
