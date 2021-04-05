import React, { useState } from "react";
import FormInput from "../components/FormInput/FormInput.jsx";

import {
  EVBill,
  FlatRateBill,
  TimeOfUseBill,
} from "../components/Calculations/EVimpact.js";

const HomePage = (params) => {
  // state to hold form input
  const [form, setForm] = useState({
    miles: 10000,
    rate: "A",
    time: "night",
  });

  // Handling Form input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // On Calculate the Electric bill on button click
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let miles, time, rate;
    rate = form.rate;
    miles = form.miles;
    time = form.time;
    let totalBill = EVBill(miles, time);
    let b1Flat = FlatRateBill();
    let b1Tou = TimeOfUseBill();
    params.setData({ ...totalBill, b1Flat, b1Tou, rate });
  };

  return (
    <div>
      <FormInput
        handleChange={handleChange}
        form={form}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default HomePage;
