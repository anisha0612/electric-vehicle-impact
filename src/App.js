import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import BillSummary from "./pages/BillSummary/BillSummary.jsx";

import "./App.css";

const App = () => {
  const [data, setData] = useState({});

  // Object.keys(data).length !== 0 ? <BillSummary data={data} /> : <HomePage />;

  console.log(data);
  console.log(Object.keys(data).length);
  if (Object.keys(data).length > 0) {
    <BillSummary data={data} />;
  }
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
