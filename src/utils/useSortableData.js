import React, { useState, useEffect, useMemo } from "react";
const SORT_ASC = "ascending";
const SORT_DESC = "descending";

const useSortableData = (employees, order = null) => {
  const [sortOrder, setSortOrder] = useState(order);

  const sortedEmployees = useMemo(() => {
    let sortableEmps = [...employees];

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
  }, [employees, sortOrder]);

  const requestSort = (key) => {
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

  return {employees: sortedEmployees, requestSort, sortOrder};
};

export default useSortableData;
