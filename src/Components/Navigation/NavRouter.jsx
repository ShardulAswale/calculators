import React from "react";
import { Routes, Route } from "react-router-dom";

import URLLinks from "./links";
import Page404 from "../404page/Page404";
import Home from "../Home/Home";
import TicTacToe from "../TicTacToe/TicTacToe";
import TimeZone from "../TimeZone/TimeZone";
import TempConvertor from "../TempConvertor/TempConvertor";
import TempConvertorV2 from "../TempConvertor/TempConvertorV2";
import TodoList from "../Todo/TodoList";
import WeightConverter from "../WeightConvertor/WeightConvertor";

const NavRouter = () => {
  // var name = <Home />;
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/tic-tac-toe" element={<TicTacToe />} />
      <Route path="/time-zone-convertor" element={<TimeZone />} />
      <Route path="/temp-convertor" element={<TempConvertor />} />
      <Route path="/weight-convertor" element={<WeightConverter />} />
      <Route path="/todo-list" element={<TodoList />} />
      <Route path="*" element={<Page404 />} />
      
      {/* {URLLinks.map((URI) => {
        <Route path={URI.link} element={URI.element} />
      })} */}
    </Routes>
  );
};

export default NavRouter;
