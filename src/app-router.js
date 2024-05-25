import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/UI/Home";
import Exercises from "./components/ExercisesPage/ExercisesPages/Home";
import QrCodeMain from "./components/QRCodePage/QrCodeMain";
import Exercise from "./components/ExercisesPage/ExercisesPages/ExerciseDetail";
import Memberships from "./components/MembershipsPage/Memberships";
import { AdminHome } from "./components/AdminPage/AdminHome";
import { observer } from "mobx-react-lite";
import { UserContext } from ".";

const AppRouter = () => {
  const { userStore } = useContext(UserContext);

  useEffect(() => {
    if (userStore) {
      if (localStorage.getItem('currentUserId')) {
        userStore.refreshData(localStorage.getItem('currentUserId'))
      }
    }
  }, [userStore])

  return (
    <>
      <Routes>
        <Route key={"/"} path="/" element={<Home />}></Route>
        {userStore.isAuth && (
          <Route
            key={"/exercises"}
            path="/exercises"
            element={<Exercises />}
          ></Route>
        )}
        {userStore.isAuth && (
          <Route
            key={"/exercise"}
            path="/exercise/:id"
            element={<Exercise />}
          ></Route>
        )}
        {userStore.isAuth && (
          <Route key={"/qr"} path="/qr" element={<QrCodeMain />}></Route>
        )}
        <Route
          key={"/memberships"}
          path="/memberships"
          element={<Memberships />}
        ></Route>
        {userStore?.user?.role === "admin" && (
          <Route key={"/admin"} path="/admin" element={<AdminHome />}></Route>
        )}
        <Route key={"*"} path="*" element={<Home />}></Route>
      </Routes>
    </>
  );
};

export default observer(AppRouter);
