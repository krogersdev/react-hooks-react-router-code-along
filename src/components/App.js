import React from "react";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import Messages from "./Messages";
import Signup from "./Signup";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/messages">
          <Messages />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;