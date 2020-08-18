import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Button } from '@material-ui/core/';
import EmployeeTable from './components/EmployeeTable';
import AppBar from './components/AppBar';
import Axios from 'axios';

export default function App() {
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
    <div className="App">
      <CssBaseline />
      <AppBar />
      <br />
      <Container>
        <EmployeeTable employees={employees} />
      </Container>
      <Button
        onClick={() => {
          setEmployees([...employees, testEmployee]);
        }}
      >
        Add {testEmployee.name}
      </Button>
    </div>
  );
}

const testEmployee = {
  id: 11,
  name: 'Clementine Bauch',
  username: 'Samantha',
  email: 'Nathan@yesenia.net',
  address: {
    street: 'Douglas Extension',
    suite: 'Suite 847',
    city: 'McKenziehaven',
    zipcode: '59590-4157',
    geo: {
      lat: '-68.6102',
      lng: '-47.0653',
    },
  },
  phone: '1-463-123-4447',
  website: 'ramiro.info',
  company: {
    name: 'Romaguera-Jacobson',
    catchPhrase: 'Face to face bifurcated interface',
    bs: 'e-enable strategic applications',
  },
};
