import { Margin } from "@mui/icons-material";
import { Box, Slider } from "@mui/material";
import React, { useState } from "react";

const TimeZone = () => {
  const generated = marksGenerator();
  const [Times, setTimes] = useState(generated);
  const marks = [
    {
      value: 0,
      label: "0°C",
    },
    {
      value: 25,
      label: "50°C",
    },
    {
      value: 50,
      label: "100°C",
    },
    {
      value: 100,
      label: "200°C",
    },
  ];
  function marksGenerator() {
    var x = 5; //minutes interval
    var times = []; // time array
    var tt = 0; // start time
    var ap = ["AM", "PM"]; // AM-PM

    //loop to increment the time and push results in array
    for (var i = 0; tt < 24 * 60; i++) {
      var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
      var mm = tt % 60; // getting minutes of the hour in 0-55 format
      var time =
        ("0" + (hh % 12)).slice(-2) +
        ":" +
        ("0" + mm).slice(-2) +
        ap[Math.floor(hh / 12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
      times.push({ value: (i / 288) * 100, label: time });
      tt = tt + x;
    }

    console.log("times : ", times);

    return times;
  }
  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <div >
      TimeZone
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Custom marks"
          defaultValue={20}
          getAriaValueText={valuetext}
          // max={marks.length-1}
          valueLabelDisplay="auto"
          marks={marks}
        />

        {/* {Times} */}
        {console.log("Times : ", Times)}
      </Box>
      <Box sx={{ width: 1300 ,Margin: 0 }}>
        <Slider
          aria-label="Custom marks"
          defaultValue={20}
          getAriaValueText={valuetext}
          // max={marks.length-1}
          valueLabelDisplay="auto"
          marks={Times}
        />
      </Box>
    </div>
  );
};

export default TimeZone;
