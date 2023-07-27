import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  minHeight: 40,
  color: theme.palette.text.secondary,
}));

const TempConvertor = () => {
  const init_values = [0, 273.15, 32];
  const [Temps, setTemps] = useState([0, 273.15, 32]);

  function Convert(e, Temp, Type) {
    // e.preventDefault();
    switch (Type) {
      case "C": {
        console.log("Case C");
        setTemps([Temp, Temp + 263.15, (Temp * 9) / 5 + 32]);
      }
      case "F": {
        console.log("Case F");
        setTemps([Temp, Temp + 263.15, (Temp * 9) / 5 + 32]);
      }
      case "K": {
        console.log("Case K");
        setTemps([Temp, Temp + 263.15, (Temp * 9) / 5 + 32]);
      }
    }
  }
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          {/* <Paper> */}
          <Grid xs={4}>
            <Item>
              <Typography>C</Typography>
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item>
              <TextField
                type="number"
                value={init_values[0]}
                // onChange={(e) => {
                //   console.log(e);
                //   var C = parseFloat(e.target.value);
                //   setTemps([C, C + 263.15, (C * 9) / 5 + 32]);
                // }}
              ></TextField>
            </Item>
          </Grid>
          <Grid>
            <Button
              variant="filledTonal"
              // onClick={(e) => {
              //   console.log(e);
              //   var C = parseFloat(e.target.value);
              //   setTemps([C, C + 263.15, (C * 9) / 5 + 32]);
              // }}
              onClick={(e) => Convert(e.target.value, "C")}
            >
              Calculate
            </Button>
          </Grid>
          {/* </Paper> */}
          {/* <Paper> */}
          <Grid xs={4}>
            <Item>
              <Typography>F</Typography>
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item>
              <TextField
                type="number"
                value={init_values[1]}
                // onChange={(e) => {
                //   e.preventDefault();
                //   console.log(e);
                //   var F = parseFloat(e.target.value);
                //   setTemps([((F - 32) * 5) / 9, ((F + 459.67) * 5) / 9, F]);
                // }}
              ></TextField>
            </Item>
          </Grid>
          <Grid>
            <Button
              variant="outlined"
              onClick={(e) => {
                e.preventDefault();
                console.log(e);
                var F = parseFloat(e.target.value);
                setTemps([((F - 32) * 5) / 9, ((F + 459.67) * 5) / 9, F]);
              }}
            >
              Calculate
            </Button>
          </Grid>
          {/* </Paper> */}
          {/* <Paper> */}
          <Grid xs={4}>
            <Item>
              <Typography>K</Typography>
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item>
              <TextField
                type="number"
                value={init_values[2]}
                // onChange={(e) => {
                //   console.log(e);
                //   e.preventDefault();
                //   var K = parseFloat(e.target.value);
                //   setTemps([K - 263.15, K, (K * 9) / 5 - 459.67]);
                // }}
              ></TextField>
            </Item>
          </Grid>
          <Grid>
            <Button
              variant="outlined"
              onClick={(e) => {
                console.log(e);
                e.preventDefault();
                var K = parseFloat(e.target.value);
                setTemps([K - 263.15, K, (K * 9) / 5 - 459.67]);
              }}
            >
              Calculate
            </Button>
          </Grid>
          {/* </Paper> */}
        </Grid>
      </Box>
    </div>
  );
};

export default TempConvertor;
