import React from "react";
import "./style.css"

function TableBody(props) {
  const { employees } = props;
  
  return (
    <tbody className="text-center">
      {employees.map((employee) => (
        <tr key={employee.id}>
          <td>{employee.empID}</td>
          <td>{employee.first_name}</td>
          <td>{employee.last_name}</td>
          <td>{employee.email}</td>
          <td>{employee.phone}</td>
          <td>{employee.job_title}</td>
          <td>{employee.department}</td>
          <td>{employee.manager}</td>
          <td>{employee.start_date}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
