import Main from "./switch/Main";
import React from "react";
import { Router, BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import history from "./history";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/Navbar";
import NavbarResponsive from "./components/NavbarResponsive";
import Footer from "./components/Footer";
import ReactNotification from "react-notifications-component";
import "animate.css-react";
import "animate.css";
import "react-notifications-component/dist/theme.css";
import App from "./App.js";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ReactNotification />
      <Router history={history}>
        <Navbar />
        <NavbarResponsive />
        <Main />
        {/* <Footer /> */}
      </Router>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
