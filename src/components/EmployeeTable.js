import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Employee from './Employee';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Calling placeholder api
    const fetchEmployees = async () => {
      try {
        const { data } = await Axios(
          'https://jsonplaceholder.typicode.com/users'
        );
        setEmployees(data);
      } catch (err) {
        console.error(`${err} - EmployeeList.js - fetchEmployees.js`);
      }
    };
    fetchEmployees();
  }, []);

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <Employee key={employee.id} employee={employee} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
