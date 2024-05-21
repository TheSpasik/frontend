import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/UI/Home";
import Exercises from "./components/ExercisesPage/ExercisesPages/Home";
import QrCodeMain from "./components/QRCodePage/QrCodeMain";
import Exercise from "./components/ExercisesPage/ExercisesPages/ExerciseDetail";
import Memberships from "./components/MembershipsPage/Memberships";
import { AdminHome } from "./components/AdminPage/AdminHome";

export default function AppRouter() {
  return (
    <>
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
        <Route key={"/qr"} path="/qr" element={<QrCodeMain />}></Route>
        <Route
          key={"/memberships"}
          path="/memberships"
          element={<Memberships />}
        ></Route>
        <Route key={"/admin"} path="/admin" element={<AdminHome />}></Route>
      </Routes>
    </>
  );
}
