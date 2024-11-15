const ShowEmploye = ({
  employees,
  removeEmployee,
  showEmployeDetails,
  blockAndUnblock,
  loadingAction,
}) => {
  return (
    <div className="tableSection">
      <h2>Employee List</h2>
      {loadingAction ? (
        <div className="loader">
          <h2>Loading...</h2>
        </div>
      ) : employees.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Options</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>
                  {employee.firstName} {employee.lastName}
                </td>

                <td>
                  <button
                    className="options-btn"
                    onClick={() => showEmployeDetails(employee.id)}
                  >
                    Details
                  </button>

                  <button
                    className="options-btn block-btn"
                    onClick={() => blockAndUnblock(employee.id)}
                  >
                    {employee.block ? "Unblock" : "Block"}
                  </button>

                  <button
                    className="options-btn remove-btn"
                    onClick={() => removeEmployee(employee.id)}
                  >
                    Delete
                  </button>
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
