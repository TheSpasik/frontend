import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/UI/Home";
import Exercises from "./components/ExercisesPage/Header/exercisesHeader";

export default function AppRouter() {
  return (
    <Routes>
      <Route key={"/"} path="/" element={<Home />}></Route>
      <Route
        key={"/exercises"}
        path="/exercises"
        element={<Exercises />}
      ></Route>
    </Routes>
  );
}
