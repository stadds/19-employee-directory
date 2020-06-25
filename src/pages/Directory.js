import React, { Component, useEffect, useState, useRef } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import empHeaders from "../empHeaders.json";
import empArr from "../empDirectory.json";
import Table from "../components/Table";
import TableHead from "../components/TableHead";
import TableBody from "../components/TableBody";
import Jumbotron from "../components/Jumbotron";
import FilterForm from "../components/FilterForm";
import useSortandFilter from "../utils/useSortandFilter";

function Directory() {

  const selectRef = useRef();
  const inputRef = useRef();
  
  // const [filterHeader, setFilterHeader] = useState("None");
  // const [filterData, setFilterData] = useState("");
  // const [filteredEmployees, setFilteredEmployees] = useState(empArr);
  const { employees, requestSort, sortOrder, setFilters } = useSortandFilter(empArr);
 


  const getClass = (name) => {
    if (!sortOrder) {
      return;
    }
    return sortOrder.key === name ? sortOrder.direction : undefined;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // if (selectRef.current.value === "None" || inputRef.current.value === "") {
    //   return;
    // }
    const colFilter = document.getElementById("colFilter").value;
    const searchData = document.getElementById("searchFilter").value;
    // const searchData = select.options[select.selectedIndex].text
    console.log(`submit clicked: ${colFilter} , ${searchData}`);
    setFilters(colFilter,searchData);
    // setFilterData(event.target.value);
    // const newFilterArr = filteredEmployees.filter(emp => emp[selectRef] === inputRef.current.value);  
    // console.log(selectRef.current.value);
    // console.log(inputRef.current.value);
    // setFilteredEmployees(newFilterArr);
  };

  // const handleFilterChange = ({target: {value}}) => {
  //   // const toFilter = document.getElementById("headFilter").value;
  //   setFilterHeader(value);
  // };

  // const hanldeInputChange = (event) => {
  //   if (filterHeader === "None") {
  //     return;
  //   }
  //   setFilterData(event.target.value);
  // };

  const handleClearFilter = (event) => {
    // setFilterHeader("None");
    // document.getElementById("searchFilter").text = "";
    // setFilteredEmployees(empArr);
    // inputRef.current.value = "";
    // selectRef.current.value = "Choose Column to Filter...";
    document.getElementById("colFilter").value = "None";
    document.getElementById("searchFilter").value = "";
    console.log("clearbtn clicked");
    setFilters("None","");
  };



  return (
    <div style={{fontFamily: "'Mukta', sans-serif",backgroundColor: "##e8e4e6", marginLeft: "1em", marginRight: "1em"}}>
      <Container>
        <Jumbotron
          addClass="text-center"
          title="Employee Directory"
          desciption="Welcome to the show"
          directions="To Filter the table, please fill out the below form:"
        >
          <FilterForm
            selectRef={selectRef}
            inputRef={inputRef}
            headers={empHeaders}
            handleFormSubmit={handleFormSubmit}
            // hanldeInputChange={hanldeInputChange}
            // handleFilterChange={handleFilterChange}
            handleClearFilter={handleClearFilter}
          ></FilterForm>
        </Jumbotron>
      </Container>

      <hr></hr>
      <Container fluid={true}>
        <Row>
        <Table>
          <TableHead
            headers={empHeaders}
            btnHandle={requestSort}
            classFtn={getClass}
          ></TableHead>
          <TableBody
            employees={employees}
            // filterHead={filterHeader}
            // searchData={filterData}
          ></TableBody>
        </Table>
        </Row>
      </Container>
    </div>
  );
}

export default Directory;
