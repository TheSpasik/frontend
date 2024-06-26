import { useEffect } from "react";
import Aos from "aos";

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app-router";
import { ToastContainer } from "react-toastify";
import RegistrationModal from "./components/Modal/Registration-Modal"
import MembershipsModal from "./components/Modal/MembershipsModal";
import ChangeModal from "./components/Modal/ChangeModal";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>

      <RegistrationModal />
      <ChangeModal />
      <MembershipsModal />
      <ToastContainer />
    </>
  );
}

export default App;
