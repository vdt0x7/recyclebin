import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Dashboard from "./pages/Dashboard/dashboard";
import Login from "./pages/Login/login";
import Notfound from "./pages/NotFound/notfound";
import Users from "./pages/User/users";
import Newapp from "./pages/NewApp/newapp";
/*

*/

//configure redux store
// [routes security](https://stackoverflow.com/questions/47747754/how-to-rewrite-the-protected-private-route-using-typescript-and-react-router-4)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/dashboard/users" exact element={<Users />}></Route>
          <Route
            path="/dashboard/application"
            exact
            element={<Dashboard />}
          ></Route>
          <Route
            path="/dashboard/new-application"
            exact
            element={<Newapp />}
          ></Route>

          <Route path="/login" exact element={<Login />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
