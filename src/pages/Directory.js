import React, { Component, useEffect, useState } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import empHeaders from "../empHeaders.json";
import empArr from "../empDirectory.json";
import Table from "../components/Table";
import TableHead from "../components/TableHead";
import TableBody from "../components/TableBody";
import Jumbotron from "../components/Jumbotron";
import FilterForm from "../components/FilterForm"
import useSortableData from "../utils/useSortableData";

function Directory() {
  const { employees, requestSort, sortOrder } = useSortableData(empArr);
  const [filterHeader, setFilterHeader] = useState("");
  const [filterData, setFilterData] = useState("");

  const getClass = (name) => {
    if (!sortOrder) {
      return;
    }
    return sortOrder.key === name ? sortOrder.direction : undefined;
  };

  return (
    <div>
      <Container>
        <Jumbotron
          addClass="text-center"
          title="Employee Directory"
          desciption="Welcome to the show"
          directions="To Filter the table, please fill out the below form:"
        >
          <FilterForm headers={empHeaders}></FilterForm>
        </Jumbotron>
      </Container>

      <hr></hr>
      <Container fluid={true}>
        <Table>
          <TableHead
            headers={empHeaders}
            btnHandle={requestSort}
            classFtn={getClass}
          ></TableHead>
          <TableBody employees={employees}></TableBody>
        </Table>
      </Container>
    </div>
  );
}

export default Directory;
