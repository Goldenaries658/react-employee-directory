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
  const [lastSort, setLastSort] = useState({
    column: null,
    direction: null,
  }); // Tracking sorting

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

  const sortEmployees = (column) => {
    const currentList = [...employees].sort((a, b) => {
      // Checking if we've sorted this col before
      if (lastSort.column === column) {
        // If so and it was ascending then flip it
        if (lastSort.direction === 'asc') {
          setLastSort({ column, direction: 'desc' });
          return a[column] < b[column] ? 1 : -1;
        }
      }
      // Otherwise sort ascending
      setLastSort({ column, direction: 'asc' });
      return a[column] > b[column] ? 1 : -1;
    });
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
        <EmployeeTable
          employees={filteredEmployees}
          sortEmployees={sortEmployees}
        />
      </Container>
    </div>
  );
}
