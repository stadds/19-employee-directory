import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import headers from "../empHeaders.json";
import employees from "../empDirectory.json";
import Table from "../components/Table";
import TableHead from "../components/TableHead";
import TableBody from "../components/TableBody";
import Jumbotron from "../components/Jumbotron";

class Directory extends Component {
  state = {
    filter: "",
    headers,
    employees,
  };

  render() {
    return (
      <div>
        <Container>
        <Jumbotron
          addClass="text-center"
          title="Employee Directory"
          desciption="Welcome to the show"
          directions="Search for an employee"
          btntext="Search"
        ></Jumbotron>
        </Container>
       
        <hr></hr>
        <Container fluid={true}>
          <Table>
            <TableHead headers={this.state.headers}></TableHead>
            <TableBody employees={this.state.employees}></TableBody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default Directory;
