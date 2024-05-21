import { useEffect } from "react";
import Aos from "aos";

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app-router";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>

      <ToastContainer />
    </>
  );
}

export default App;
