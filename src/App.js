import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core/';
import EmployeeTable from './components/EmployeeTable';
import AppBar from './components/AppBar';
import SearchBar from './components/SearchBar';
import Axios from 'axios';

export default function App() {
  const [employees, setEmployees] = useState([]); // The full list of employees for resetting searches
  const [filteredEmployees, setFilteredEmployees] = useState([]); // The list to be displayed

  useEffect(() => {
    // Calling placeholder api
    const fetchEmployees = async () => {
      try {
        const { data } = await Axios(
          'https://jsonplaceholder.typicode.com/users'
        );
        setEmployees(data);
        setFilteredEmployees(data);
      } catch (err) {
        console.error(`${err} - EmployeeList.js - fetchEmployees.js`);
      }
    };
    fetchEmployees();
  }, []);

  const searchEmployee = (employee) => {
    const currentList = employee ? [employee] : employees;
    setFilteredEmployees(currentList);
  };

  return (
    <div className="App">
      <CssBaseline />
      <AppBar />
      <br />
      <Container>
        <SearchBar employees={employees} searchEmployee={searchEmployee} />
        <br />
        <EmployeeTable employees={filteredEmployees} />
      </Container>
    </div>
  );
}
