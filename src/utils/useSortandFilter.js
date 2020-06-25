import React, { useState, useEffect, useMemo } from "react";
const SORT_ASC = "ascending";
const SORT_DESC = "descending";

const useSortableData = (employees, order = null) => {
  const [empArr, setEmployees] = useState(employees);
  const [sortOrder, setSortOrder] = useState(order);
  const [filterCol, setFilterCol] = useState("None");
  const [filterData, setFilterData] = useState("");
  
  console.log(`order: ${order}`)

  const sortedEmployees = useMemo(() => {
    let sortableEmps = [...empArr];

    if(filterCol !== "None" && filterData !== ""){
      // sortableEmps = sortableEmps.filter(emp => emp[filterCol].toUpperCase() === filterData.toUpperCase());
      sortableEmps = sortableEmps.filter(emp => emp[filterCol].toUpperCase().includes(filterData.toUpperCase()));
    }

    if (sortOrder !== null) {
      sortableEmps.sort((a, b) => {
        if (a[sortOrder.key] < b[sortOrder.key]) {
          return sortOrder.direction === SORT_ASC ? -1 : 1;
        }
        if (a[sortOrder.key] > b[sortOrder.key]) {
          return sortOrder.direction === SORT_ASC ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableEmps;
  }, [empArr, sortOrder,filterCol,filterData]);

  const requestSort = (key) => {
    console.log(key);
    let direction = SORT_ASC;
    if (
      sortOrder &&
      sortOrder.key === key &&
      sortOrder.direction === SORT_ASC
    ) {
      direction = SORT_DESC;
    }

    setSortOrder({ key, direction });
  };

  const setFilters = (col,data) => {
    setFilterCol(col);
    setFilterData(data);
  }

  return {employees: sortedEmployees, requestSort, sortOrder,setFilters};
};

export default useSortableData;
