const AddEmploye = () => {
  return (
    <div className="formSection">
      <h2>Add Employee</h2>
      <form className="form">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" placeholder="Enter full name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter email" required />

        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          placeholder="Enter phone number"
          required
        />

        <button type="submit" className="submitButton">
          Add Employee
        </button>
      </form>
    </div>
  );
};
export default AddEmploye;
