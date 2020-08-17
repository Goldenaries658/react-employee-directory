import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell } from '@material-ui/core';

function Employee(props) {
  const { name, username, email, phone, website } = props.employee;
  return (
    <React.Fragment>
      <TableRow>
        <TableCell component="th" scope="row">
          {name}
        </TableCell>
        <TableCell align="right">{username}</TableCell>
        <TableCell align="right">{email}</TableCell>
        <TableCell align="right">{phone}</TableCell>
        <TableCell align="right">{website}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Employee.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
};

export default Employee;
