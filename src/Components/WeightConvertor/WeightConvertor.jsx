import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Formulae from "./Formulae.json";

const WeightConverter = () => {
  const [formData, setFormData] = useState({
    fromUnit: 'kg',
    toUnit: 'lb',
    inputValue: '',
    result: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'inputValue') {
      setFormData({ ...formData, [name]: value, result: convert(value, formData.fromUnit, formData.toUnit) });
    } else {
      setFormData({ ...formData, [name]: value, inputValue: convert(value, formData.toUnit, formData.fromUnit) });
    }
  };

  const convert = (value, from, to) => {
    const conversion = Formulae.conversions.find((c) => c.from === from && c.to === to);
    if (conversion) {
      return eval(conversion.formula);
    }
    return '';
  };

  return (
    <div>
      <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="from-unit">From</InputLabel>
        <Select
          label="From"
          value={formData.fromUnit}
          onChange={handleChange}
          inputProps={{
            name: 'fromUnit',
            id: 'from-unit',
          }}
        >
          <MenuItem value="kg">Kilograms (kg)</MenuItem>
          <MenuItem value="lb">Pounds (lb)</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="to-unit">To</InputLabel>
        <Select
          label="To"
          value={formData.toUnit}
          onChange={handleChange}
          inputProps={{
            name: 'toUnit',
            id: 'to-unit',
          }}
        >
          <MenuItem value="kg">Kilograms (kg)</MenuItem>
          <MenuItem value="lb">Pounds (lb)</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Value"
        variant="outlined"
        type="number"
        name="inputValue"
        value={formData.inputValue}
        onChange={handleChange}
        sx={{ m: 1, minWidth: 120 }}
      />

      <TextField
        label="Result"
        variant="outlined"
        type="number"
        name="result"
        value={formData.result}
        onChange={handleChange}
        sx={{ m: 1, minWidth: 120 }}
      />
    </div>
  );
};

export default WeightConverter;
