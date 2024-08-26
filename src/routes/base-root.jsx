import React from "react";
import { BrowserRouter as Router, Route, Redirect, Routes } from "react-router-dom";
import "../App.scss";
import HomePage from "../pages/home/home";

function BaseRoot(props) {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path={'*'} element={<HomePage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default BaseRoot;
