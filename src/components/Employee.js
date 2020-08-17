import React from 'react';
import PropTypes from 'prop-types';

function Employee(props) {
  return (
    <li>
      <p>{JSON.stringify(props)}</p>
    </li>
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
