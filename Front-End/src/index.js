import ReactDOM from "react-dom";
import Router from "./router/Router";
import App from "./App";
import "./styles/globals.css";
import UserState from "./context/User/UserState";
ReactDOM.render(
  <App>
    <UserState>
      <Router />
    </UserState>
  </App>,
  document.getElementById("root")
);
