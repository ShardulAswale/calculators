import React from "react";
import { Routes, Route } from "react-router-dom";

import TicTacToe from "../TicTacToe/TicTacToe";
import Page404 from "../404page/Page404";
import Home from "../src/Home/home";
import URLLinks from "./links";
import TimeZone from "../TimeZone/TimeZone";
import TempConvertor from "../TempConvertor/TempConvertor";
import TempConvertorV2 from "../TempConvertor/TempConvertorV2";
import { HomeMax } from "@mui/icons-material";

const NavRouter = () => {
  // var name = <Home />;
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/tic-tac-toe" element={<TicTacToe />} />
      <Route path="/time-zone-convertor" element={<TimeZone />} />
      <Route path="/temp-convertor" element={<TempConvertorV2 />} />
      <Route path="*" element={<Page404 />} />
      {/* {URLLinks.map((URI) => {
        <Route path={URI.link} element={URI.element} />
      })} */}
    </Routes>
  );
};

export default NavRouter;
