import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TicTacToe from "../TicTacToe/TicTacToe";
import Page404 from "../404page/Page404";
import Home from "../Home/home";
import URLLinks from "./links";
import TimeZone from "../TimeZone/TimeZone";
import TempConvertor from "../TempConvertor/TempConvertor";
import TempConvertorV2 from "../TempConvertor/TempConvertorV2";

const NavRouter = () => {
  // var name = <Home />;
  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/calculators/'}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/timezone" element={<TimeZone />} />
        <Route path="/temp-convertor" element={<TempConvertorV2 />} />
        <Route path="*" element={<Page404 />} />
        {/* {URLLinks.map((URI) => {
          <Route path={URI.link} element={URI.element} />
        })} */}
      </Routes>
    </BrowserRouter>
  );
};

export default NavRouter;
