import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "remixicon/fonts/remixicon.css";
import "aos/dist/aos.css";
import { ConfigProvider } from "antd";
import UserStore from "./components/Store/user-store";


const userStore = new UserStore();
export const UserContext = createContext({ userStore });
ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            contentBg: "rgba(97, 216, 129)",
            headerBg: "rgba(97, 216, 129)",
            margin: '10px 0'
          },
        },
        token: { colorPrimary: "green" },
      }}
    >
      <UserContext.Provider value={{ userStore }}>
        <App />
      </UserContext.Provider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
