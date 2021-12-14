import ReactDOM from "react-dom";
import Router from "./router/Router";
import App from "./App";
import "./styles/globals.css";

ReactDOM.render(
  <App>
    <Router />
  </App>,
  document.getElementById("root")
);
