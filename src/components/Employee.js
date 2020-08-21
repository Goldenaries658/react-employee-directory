import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell } from '@material-ui/core';

function Employee(props) {
  const { name, username, email, phone, website } = props.employee;
  return (
    <TableRow data-testid="employee">
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{username}</TableCell>
      <TableCell align="right">{email}</TableCell>
      <TableCell align="right">{phone}</TableCell>
      <TableCell align="right">{website}</TableCell>
    </TableRow>
  );
}

Employee.propTypes = {
  employee: PropTypes.object.isRequired,
};

export default Employee;
