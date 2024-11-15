"use client";
import AddEmploye from "@/components/AddEmploye";
import EmployeeDetails from "@/components/DetailsEmploye";
import ShowEmploye from "@/components/ShowEmploye";
import axiosInstance from "@/lib/axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingAction, setLoadingAction] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  console.log(employees);

  // add employee
  const addEmployee = async (employee) => {
    try {
      setLoadingAction(true);
      const response = await axiosInstance.post("users/", {
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
      setLoadingAction(false);
    }
  };

  // fetch employees
  const fetchEmployees = async () => {
    try {
      const response = await axiosInstance.get("users/");
      console.log(response.data);
      const employe = {
        id: 1,
        firstName: "Asad",
        lastName: "Mahmood",
        email: "asad@mahmood.com",
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
      const isBlocked = employees.find((employee) => employee.id === id).block;
      if (isBlocked) {
        return alert("This employee is blocked, if you want to see it please unblock it");
      }
      setLoadingAction(true);
      // in real life this shuld be valid id but now i use random id
      const response = await axiosInstance.get(`users/${5}`);
      console.log(response.data);
      setSelectedEmployee(employees.find((employee) => employee.id === id));
    } catch (error) {
      console.error("Error fetching employees:", error);
    } finally {
      setLoadingAction(false);
    }
  };

  // remove employee
  const removeEmployee = async (id) => {
    try {
      setLoadingAction(true);
      await axiosInstance.delete(`users/${1}`);
      setEmployees(employees.filter((employee) => employee.id !== id));
    } catch (error) {
      console.error("Error deleting employee:", error);
    } finally {
      setLoadingAction(false);
    }
  };

  // block and unblock
  const blockAndUnblock = async (id) => {
    try {
      setLoadingAction(true);
      await axiosInstance.put(`users/${3}`, {
        block: !employees.find((employee) => employee.id === id).block,
      });
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
      setLoadingAction(false);
    }
  };

  // update employee
  const updateEmployee = async (employee) => {
    try {
      setLoadingAction(true);
      await axiosInstance.put(`users/${8}`, {
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
      setLoadingAction(false);
    }
  };
  
  useEffect(() => {
    fetchEmployees();
  }, []);
  return (
    <div className="main">
      {selectedEmployee && selectedEmployee?.id ? (
        <EmployeeDetails
          employee={selectedEmployee}
          setSelectedEmployee={setSelectedEmployee}
          updateEmployee={updateEmployee}
        />
      ) : (
        <div className="home">
          <AddEmploye addEmployee={addEmployee} />
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
              loadingAction={loadingAction}
            />
          )}
        </div>
      )}
    </div>
  );
}
