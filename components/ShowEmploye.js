"use client";
import { useState } from "react";

const ShowEmploye = () => {
  const [employees, setEmployees] = useState([
    { firstName: "John",lastName: "Doe", email: "gY7n8@example.com", phone: "123-456-7890" },
  ]);
  return (
    <div className="tableSection">
      <h2>Employee List</h2>
      {employees.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>
                  <button className="options-btn">Details</button>
                  <button className="options-btn">Block</button>
                  <button className="options-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="noEmployees">No employees found.</p>
      )}
    </div>
  );
};
export default ShowEmploye;
