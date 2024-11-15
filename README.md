# Employee Management System

This is an Employee Management System built with Next.js, allowing users to manage employee data such as adding, displaying, updating, blocking/unblocking, and deleting employees. Axios is used for API requests, and the system handles loading states and supports basic employee CRUD operations.

## Live Demo
Visit the live site [here](https://employee-management-task-bice.vercel.app/).

## Project Setup

This project uses:
- **Next.js 15.0.3**
- **React 19.0.0 (release candidate)**
- **Axios 1.7.7**

### Components

- **Home**: Main page displaying employee list, adding and removing employees, and loading states.
- **AddEmploye**: Form component to add a new employee.
- **EmployeeDetails**: Shows detailed information about the selected employee and allows updating employee details.
- **ShowEmploye**: Lists all employees and provides options for blocking/unblocking, showing, or removing employees.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd employee-management
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application in development mode:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Usage

### Adding an Employee
Fill out the form in the `AddEmploye` component to add a new employee. On submission, an API request sends the employee data to the server and updates the displayed list of employees.

### Viewing Employee Details
Select an employee to view more details in the `EmployeeDetails` component. If the employee is blocked, a message will be shown, and the user must unblock them to view details.

### Blocking/Unblocking an Employee
Use the `blockAndUnblock` function to toggle an employee's block status. A blocked employee cannot have their details viewed until they are unblocked.

### Updating Employee Details
In the `EmployeeDetails` component, modify and save employee information to update their details in the database.

### Deleting an Employee
Click the delete button to remove an employee from the list and database.

### Loading States
Loading indicators are shown during data fetches and actions, such as adding, updating, and deleting employees, to improve user experience.

---

## API Endpoints

This project uses the following endpoints via `axiosInstance` to manage employee data:

- **GET /users/**: Fetches all employees.
- **POST /users/**: Adds a new employee.
- **GET /users/{id}**: Fetches details of a single employee.
- **PUT /users/{id}**: Updates details of a specific employee.
- **PUT /users/{id}**: Update block/unblock status.
- **DELETE /users/{id}**: Removes a specific employee.

---

## Dependencies

- **axios**: 1.7.7
- **next**: 15.0.3
- **react**: 19.0.0 (release candidate)
- **react-dom**: 19.0.0 (release candidate)
