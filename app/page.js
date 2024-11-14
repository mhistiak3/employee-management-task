"use client";
import AddEmploye from "@/components/AddEmploye";
import EmployeeDetails from "@/components/DetailsEmploye";
import ShowEmploye from "@/components/ShowEmploye";
import axiosInstance from "@/lib/axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  console.log(employees);

  // add employee
  const addEmployee  = async (employee) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post("/", {
        name: employee.firstName,
        email: employee.email,
        phone: employee.phone,
        id: employee.id,
      });
      console.log(response.data);

      setEmployees([...employees, employee]);
    } catch (error) {
      console.error("Error adding employee:", error);
    } finally {
      setLoading(false);
    }
  };

  // fetch employees
  const fetchEmployees = async () => {
    try {
      const response = await axiosInstance.get("/");
      console.log(response.data);
      const employe = {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "gY7n8@example.com",
        phone: "123-456-7890",
        block: false,
      };
      setEmployees([...employees, employe]);
    } catch (error) {
      console.error("Error fetching employees:", error);
    } finally {
      setLoading(false);
    }
  };

  // show employee
  const showEmployeDetails = async (id) => {
    try {
      setLoading(true);
      // in real life this shuld be valid id but now i use random id
      const response = await axiosInstance.get(`/${5}`);
      console.log(response.data);
      setSelectedEmployee(employees.find((employee) => employee.id === id));
    } catch (error) {
      console.error("Error fetching employees:", error);
    } finally {
      setLoading(false);
    }
  };

  // remove employee
  const removeEmployee = async (id) => {
    try {
      setLoading(true);
      await axiosInstance.delete(`/${1}`);
      setEmployees(employees.filter((employee) => employee.id !== id));
    } catch (error) {
      console.error("Error deleting employee:", error);
    } finally {
      setLoading(false);
    }
  };

  // block and unblock
  const blockAndUnblock = async (id) => {
    try {
      setLoading(true);
      await axiosInstance.patch(`/${3}`);
      setEmployees(
        employees.map((employee) =>
          employee.id === id
            ? { ...employee, block: !employee.block }
            : employee
        )
      );
    } catch (error) {
      console.error("Error deleting employee:", error);
    } finally {
      setLoading(false);
    }
  };

  // update employee
  const updateEmployee = async (employee) => {
    try {
      setLoading(true);
      await axiosInstance.put(`/${8}`, {
        name: employee.firstName,
        email: employee.email,
        phone: employee.phone,
      });
      setEmployees(
        employees.map((emp) => (emp.id === employee.id ? employee : emp))
      );
    } catch (error) {
      console.error("Error updating employee:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchEmployees();
  }, []);
  return (
    <div className="main">
      {selectedEmployee?.id ? (
        <EmployeeDetails
          employee={selectedEmployee}
          setSelectedEmployee={setSelectedEmployee}
          updateEmployee={updateEmployee}
        />
      ) : (
        <div className="home">
          <AddEmploye addEmployee ={addEmployee } />
          {loading ? (
            <div className="loader">
              <h2>Loading...</h2>
            </div>
          ) : (
            <ShowEmploye
              employees={employees}
              removeEmployee={removeEmployee}
              showEmployeDetails={showEmployeDetails}
              blockAndUnblock={blockAndUnblock}
            />
          )}
        </div>
      )}
    </div>
  );
}
