import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Employee from './Employee';

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

  return (
    <ul>
      {employees.map(({ id, name, username, email, phone, website }) => (
        <Employee
          key={id}
          name={name}
          username={username}
          email={email}
          phone={phone}
          website={website}
        />
      ))}
    </ul>
  );
}
