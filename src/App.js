import React from "react";
import { Switch, Route } from "react-router";
import FormInput from "./components/FormInput/FormInput.jsx";
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={FormInput} />
      </Switch>
    </div>
  );
};

export default App;
