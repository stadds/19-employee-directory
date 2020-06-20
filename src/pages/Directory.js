import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import headers from "../empHeaders.json";
import employees from "../empDirectory.json";
import Table from "../components/Table";
import TableHead from "../components/TableHead";
import TableBody from "../components/TableBody";
import TableRow from "../components/TableRow";
import TableHeader from "../components/TableHeader";
import TableData from "..//components/TableData";

const headerRow = headers.map((header) => (
  <Row>
    <p>{header}</p>
  </Row>
));

class Directory extends Component {
  state = {
    search: "",
    filter: "",
    headers,
    employees,
  };

  render() {
    return (
      <div>
        <Container>
         
        </Container>
        <hr></hr>
        <Container fluid={true}>
          <Table>
            <TableHead>
              <TableRow>
                {this.state.headers.map((header) => (
                  <TableHeader scope="col" data={header}></TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
                {this.state.employees.map(employee => (
                    <TableRow>
                      <TableData data={employee.empID}></TableData>
                      <TableData data={employee.first_name}></TableData>
                      <TableData data={employee.last_name}></TableData>
                      <TableData data={employee.email}></TableData>
                      <TableData data={employee.phone}></TableData>
                      <TableData data={employee.job_title}></TableData>
                      <TableData data={employee.department}></TableData>
                      <TableData data={employee.manager}></TableData>
                      <TableData data={employee.start_date}></TableData>
                    </TableRow>
                ))}
            </TableBody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default Directory;
