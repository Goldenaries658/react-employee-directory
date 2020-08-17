import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core/';
import EmployeeList from './components/EmployeeList';

export default function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <Container>
          <EmployeeList />
        </Container>
      </React.Fragment>
    </div>
  );
}
