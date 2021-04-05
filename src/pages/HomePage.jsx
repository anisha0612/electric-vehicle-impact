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

  // state to hold bill impact
  //   const [billImpact, setBillImpact] = useState({});

  // Handling Form input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // On Calculate Click
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let miles, time;
    miles = form.miles;
    time = form.time;
    let totalBill = EVBill(miles, time);
    let b1Flat = FlatRateBill();
    let b1Tou = TimeOfUseBill();
    params.setData({ ...totalBill, b1Flat, b1Tou });
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
