import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox(props) {
  const { employees,  searchEmployee } = props;
  return (
    <Autocomplete
      id="combo-box-demo"
      options={employees}
      getOptionLabel={(option) => option.name}
      style={{ width: 300, padding: '5px 0px' }}
      onChange={(event, value) => searchEmployee(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Employees"
          variant="outlined"
          value="textValue"
        />
      )}
    />
  );
}
