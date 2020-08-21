import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, createMuiTheme, ThemeProvider } from '@material-ui/core/';
import EmployeeTable from './components/EmployeeTable';
import AppBar from './components/AppBar';
import axios from 'axios';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export default function App() {
  const [employees, setEmployees] = useState([]); // The full list of employees for resetting searches
  const [filteredEmployees, setFilteredEmployees] = useState([]); // The list to be displayed
  const [lastSort, setLastSort] = useState({
    column: null,
    direction: '',
  }); // Tracking sorting

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    // Calling placeholder api
    const fetchEmployees = async () => {
      try {
        const { data } = await axios(
          'https://jsonplaceholder.typicode.com/users',
          {
            cancelToken: source.token,
          }
        );
        setEmployees(data);
        setFilteredEmployees(data);
      } catch (err) {
        console.error(`${err} - EmployeeList.js - fetchEmployees.js`);
      }
    };
    fetchEmployees();

    return () => {
      source.cancel();
    };
  }, []);

  // const currentList = employee ? [employee] : employees;
  const searchEmployee = (employee) =>
    setFilteredEmployees(employee ? [employee] : employees);

  const sortEmployees = (column) => {
    const currentList = [...employees].sort((a, b) => {
      // Checking if we've sorted this col before
      // If so and it was ascending then flip it
      if (lastSort.column === column && lastSort.direction === 'asc') {
        setLastSort({ column, direction: 'desc' });
        return a[column] < b[column] ? 1 : -1;
      }
      // Otherwise sort ascending
      setLastSort({ column, direction: 'asc' });
      return a[column] > b[column] ? 1 : -1;
    });
    setFilteredEmployees(currentList);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <CssBaseline />
        <AppBar employees={employees} searchEmployee={searchEmployee} />
        <br />
        <Container>
          <br />
          <EmployeeTable
            employees={filteredEmployees}
            sortEmployees={sortEmployees}
            lastSort={lastSort}
          />
        </Container>
      </div>
    </ThemeProvider>
  );
}
