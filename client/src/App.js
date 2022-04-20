import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import ForgotPassword from "./containers/ForgotPassword/ForgotPassword";
import Dashboard from "./containers/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Router>
        {/* A <Switch> looks through its children <Routes> and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
