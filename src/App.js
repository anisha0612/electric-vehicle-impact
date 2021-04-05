import React, { useState } from "react";
import { Switch, Route } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import BillSummary from "./pages/BillSummary/BillSummary.jsx";

import "./App.css";

const App = () => {
  const [data, setData] = useState({});

  console.log(data);

  return (
    <div className='App'>
      <Switch>
        <Route
          exact
          path='/'
          component={() => <HomePage setData={setData} />}
        />
        <Route
          exact
          path='/summary'
          component={() => <BillSummary data={data} />}
        />
      </Switch>
    </div>
  );
};

export default App;
