import { useState } from "react";

const AddEmploye = ({ addEmplyoee }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const employee = {
      id: Date.now(),
      firstName: fname,
      lastName: lname,
      email: email,
      phone: phone,
      block: false,
    }
    addEmplyoee(employee);
    setFname("");
    setLname("");
    setEmail("");
    setPhone("");
  };
  return (
    <div className="formSection">
      <h2>Add Employee</h2>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            value={fname}
            placeholder="Enter First name"
            required
            onChange={(e) => setFname(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            placeholder="Enter Last name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
            required
          />
        </div>

        <button type="submit" className="submitButton">
          Add Employee
        </button>
      </form>
    </div>
  );
};
export default AddEmploye;
