import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/UI/Home";
import Exercises from "./components/ExercisesPage/ExercisesPages/Home";
import QR from './components/QRCodePage/QR'
import Exercise from './components/ExercisesPage/ExercisesPages/ExerciseDetail'


export default function AppRouter() {
  return (
    <Routes>
      <Route key={"/"} path="/" element={<Home />}></Route>
      <Route
        key={"/exercises"}
        path="/exercises"
        element={<Exercises />}
      ></Route>
      <Route
        key={"/exercise"}
        path="/exercise/:id"
        element={<Exercise />}
      ></Route>
      <Route
        key={"/qr"}
        path="/qr"
        element={<QR />}
      ></Route>
      
    </Routes>
  );
}
