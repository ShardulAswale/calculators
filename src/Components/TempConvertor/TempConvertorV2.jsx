import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const TempConvertorV2 = () => {
  var types = ["°F", "°C", "K"];
  const [Temp, setTemp] = useState(0);
  const [Type, setType] = useState("°C");
  function CtoFnK() {
    // var °C = parseFloat(temp)
    return (
      <>
        For Fahrenheit <br />
        T(°F) = T(°C) × 9/5 + 32 <br />
        T(°F) = {Temp}°C × 9/5 + 32 <br />
        T(°F) = {Temp * 9}/5 + 32 <br />
        T(°F) = {(Temp * 9) / 5} + 32 <br />
        T(°F) = {(Temp * 9) / 5 + 32} °F <br />
        For Kelvin <br />
        T(K) = T(°C) + 273.15 <br />
        T(K) = {Temp}°C + 273.15 <br />
        T(K) = {parseFloat(Temp) + 273.15} K <br />
      </>
    );
  }
  function FtoCnK() {
    // var °C = parseFloat(temp)
    return (
      <>
        For Celcius <br />
        T(°C) = (T(°F) - 32) × 5/9 <br />
        T(°C) = {Temp}°F - 32) × 5/9 <br />
        T(°C) = ({Temp - 32}) × 5/9 <br />
        T(°C) = {(Temp - 32) * 5}/9 <br />
        T(°C) = {((Temp - 32) * 5) / 9} °C
        <br />
        For Farenheit <br />
        T(K) = (T(°F) + 459.67)× 5/9
        <br />
        T(K) = ({Temp}°F + 459.67)× 5/9
        <br />
        T(K) = ({parseFloat(Temp) + 459.67}× 5)/9
        <br />
        T(K) = {(parseFloat(Temp) + 459.67) * 5}/9
        <br />
        T(K) = {((parseFloat(Temp) + 459.67) * 5) / 9} K<br />
      </>
    );
  }
  function KtoCnF() {
    // var °C = parseFloat(temp)
    return (
      <>
        For Fahrenheit <br />
        T(°F) = T(K) × 9/5 - 459.67 <br />
        T(°F) = {Temp}K × 9/5 - 459.67 <br />
        T(°F) = {Temp * 9}/5 - 459.67 <br />
        T(°F) = {(Temp * 9) / 5} - 459.67 <br />
        T(°F) = {(Temp * 9) / 5 - 459.67} °F <br />
        For Celcius <br />
        T(C) = T(°K) - 273.15 <br />
        T(C) = {Temp}K - 273.15 <br />
        T(C) = {Temp - 273.15} °C
        <br />
      </>
    );
  }

  function SwitchTemp() {
    console.log("in switch");
    switch (Type) {
      case "°C":
        return CtoFnK();
        break;

      case "°F":
        return FtoCnK();
        break;

      case "K":
        return KtoCnF();
        break;

      default:
        break;
    }
  }

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Unit</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Type}
            label="Unit"
            onChange={handleChange}
          >
            {/* {console.log(types, Type, typeof Type)} */}
            {/* {types.map((type, index) => {
              {
                console.log({ type }, index);
              }
              <MenuItem key={index} value={index}>
                {type.toString()}
              </MenuItem>;
            })} */}
            <MenuItem value="°C">°C</MenuItem>
            <MenuItem value="°F">°F</MenuItem>
            <MenuItem value="K">K</MenuItem>
          </Select>
        </FormControl>
        <TextField
          type="number"
          value={Temp}
          onChange={(e) => setTemp(e.target.value)}
        />
        <br />
        {SwitchTemp(Type)}
      </Box>
    </div>
  );
};

export default TempConvertorV2;
