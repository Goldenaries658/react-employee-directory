import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core/';
import EmployeeTable from './components/EmployeeTable';
import AppBar from './components/AppBar';

export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <AppBar />
      <br />
      <Container>
        <EmployeeTable />
      </Container>
    </div>
  );
}
