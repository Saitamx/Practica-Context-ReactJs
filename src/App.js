import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import FormularioIngreso from "./components/FormularioIngreso";
import AuthState from "./context/auth/authState";

function App() {
  // TODO ESTO ES JS

  return (
    <AuthState>
      <Switch>
        <Route exact path="/" component={FormularioIngreso} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </AuthState>
  );
}

export default App;
