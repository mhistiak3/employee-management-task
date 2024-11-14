import { useState } from "react";

const EmployeeDetails = ({ employee, setSelectedEmployee, updateEmployee }) => {
    const [fromData, setFormData] = useState(employee);
  const handleSubmit = (event) => {
    event.preventDefault();
    updateEmployee(fromData);
    setSelectedEmployee(null);

  };
   if (!employee) {
     return <div>No employee selected</div>
   }
  return (
    <div className="employee-details-card">
      <div className="back-button-container">
        {" "}
        <button
          className="backButton"
          onClick={() => setSelectedEmployee(null)}
        >
          Back to List
        </button>
      </div>
      <h2 className="employee-name">
        {fromData.firstName} {fromData.lastName}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="employee-info">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={fromData.firstName}
            onChange={(e) =>
              setFormData({ ...fromData, firstName: e.target.value })
            }
          />
        </div>
        <div className="employee-info">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={fromData.lastName}
            onChange={(e) =>
              setFormData({ ...fromData, lastName: e.target.value })
            }
          />
        </div>
        <div className="employee-info">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={employee.email}
            readOnly
            disabled
          />
        </div>
        <div className="employee-info">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={fromData.phone}
            onChange={(e) =>
              setFormData({ ...fromData, phone: e.target.value })
            }
          />
        </div>
        <button type="submit" className="submitButton">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EmployeeDetails;
