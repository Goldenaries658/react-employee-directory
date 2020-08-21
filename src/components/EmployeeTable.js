import React from 'react';
import Employee from './Employee';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TableSortLabel } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function EmployeeList(props) {
  const { employees, sortEmployees, lastSort } = props;

  const classes = useStyles();

  const headCells = [
    {
      id: 0,
      name: 'Name',
      align: 'left',
    },
    {
      id: 1,
      name: 'Username',
      align: 'right',
    },
    {
      id: 2,
      name: 'Email',
      align: 'right',
    },
    {
      id: 3,
      name: 'Phone',
      align: 'right',
    },
    {
      id: 4,
      name: 'Website',
      align: 'right',
    },
  ];
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="employee table">
        <TableHead>
          <TableRow>
            {headCells.map(({ id, name, align }) => (
              <TableCell key={id} align={align}>
                <TableSortLabel
                  active={isActive(name)}
                  direction={isActive(name) ? lastSort.direction : 'asc'}
                  onClick={(e) => sortEmployees(name.toLowerCase())}
                />
                {name}
              </TableCell>
            ))}
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

  function isActive(name) {
    return lastSort.column === name.toLowerCase();
  }
}
