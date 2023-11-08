import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const TempConvertor = () => {
  const temperatureUnits = ["°C", "°F", "K"];
  const [temp, setTemp] = useState(0);
  const [sourceUnit, setSourceUnit] = useState("°C");
  const [showFormulas, setShowFormulas] = useState(false);

  const formulas = {
    "°C": [
      "For Celsius to Fahrenheit: T(°F) = (T(°C) * 9/5) + 32",
      "For Celsius to Kelvin: T(K) = T(°C) + 273.15",
    ],
    "°F": [
      "For Fahrenheit to Celsius: T(°C) = (T(°F) - 32) * 5/9",
      "For Fahrenheit to Kelvin: T(K) = (T(°F) + 459.67) * 5/9",
    ],
    K: [
      "For Kelvin to Celsius: T(°C) = T(K) - 273.15",
      "For Kelvin to Fahrenheit: T(°F) = (T(K) * 9/5) - 459.67",
    ],
  };

  const selectedFormulas = formulas[sourceUnit];

  function convertToCelsius() {
    if (sourceUnit === "°F") {
      const celsius = ((temp - 32) * 5) / 9;
      return `${temp}°F = ${celsius.toFixed(2)}°C`;
    } else if (sourceUnit === "K") {
      const kelvin = temp >= 0 ? temp : 0;
      const celsius = kelvin - 273.15;
      return `${temp}K = ${celsius.toFixed(2)}°C`;
    }
    return ""; // No conversion needed for °C
  }

  function convertToFahrenheit() {
    if (sourceUnit === "°C") {
      const fahrenheit = (temp * 9) / 5 + 32;
      return `${temp}°C = ${fahrenheit.toFixed(2)}°F`;
    } else if (sourceUnit === "K") {
      const kelvin = temp >= 0 ? temp : 0;
      const fahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;
      return `${temp}K = ${fahrenheit.toFixed(2)}°F`;
    }
    return ""; // No conversion needed for °F
  }

  function convertToKelvin() {
    if (sourceUnit === "°C") {
      const kelvin = temp + 273.15;
      return `${temp}°C = ${kelvin.toFixed(2)}K`;
    } else if (sourceUnit === "°F") {
      const kelvin = ((temp - 32) * 5) / 9 + 273.15;
      return `${temp}°F = ${kelvin.toFixed(2)}K`;
    }
    return ""; // No conversion needed for K
  }

  const handleSourceUnitChange = (event) => {
    setSourceUnit(event.target.value);
  };

  const toggleFormulas = () => {
    setShowFormulas(!showFormulas);
  };

  const formulaStyle = {
    display: showFormulas ? "block" : "none",
    marginTop: "10px",
  };

  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="source-unit-label">Source Unit</InputLabel>
          <Select
            labelId="source-unit-label"
            id="source-unit"
            value={sourceUnit}
            onChange={handleSourceUnitChange}
          >
            {temperatureUnits.map((unit) => (
              <MenuItem key={unit} value={unit}>
                {unit}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          type="number"
          value={temp}
          onChange={(e) => setTemp(parseFloat(e.target.value))}
        />

        <br />
        <div>
          <strong>Conversions:</strong>
          <ul>
            <li>{convertToCelsius()}</li>
            <li>{convertToFahrenheit()}</li>
            <li>{convertToKelvin()}</li>
          </ul>
        </div>

        <Typography variant="h6" onClick={toggleFormulas} style={{ cursor: "pointer" }}>
          Toggle Formulas
        </Typography>

        <div style={formulaStyle}>
          <Typography variant="subtitle1">Formulas:</Typography>
          <ul>
            {selectedFormulas &&
              selectedFormulas.map((formula, index) => (
                <li key={index}>{formula}</li>
              ))}
          </ul>
        </div>
      </Box>
    </div>
  );
};

export default TempConvertor;
