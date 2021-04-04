import React, { useState } from "react";
import { Switch, Route } from "react-router";
import FormInput from "./pages/FormInput/FormInput.jsx";
import BillSummary from "./pages/BillSummary/BillSummary.jsx";
import "./App.css";

const App = () => {
  const [form, setForm] = useState({
    miles: 10000,
    rate: "A",
    time: "night",
  });

  // Handling Form input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className='App'>
      <Switch>
        <Route
          exact
          path='/'
          component={() => (
            <FormInput handleChange={handleChange} form={form} />
          )}
        />
        <Route exact path='/summary' component={BillSummary} />
      </Switch>
    </div>
  );
};

export default App;
