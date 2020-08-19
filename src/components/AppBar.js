import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import SearchBar from './SearchBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function SearchAppBar({ employees, searchEmployee }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar style={{ flexWrap: 'wrap' }}>
          <Typography style={{padding: '5px 0px'}} className={classes.title} variant="h5" noWrap>
            Employee Directory
          </Typography>
          <SearchBar
            employees={employees}
            searchEmployee={searchEmployee}
          />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}
