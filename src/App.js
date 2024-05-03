import { useEffect } from "react";
import Aos from "aos";

import "./App.css";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./app-router";


function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
