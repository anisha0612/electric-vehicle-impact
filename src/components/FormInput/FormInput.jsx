import React, { useState } from "react";
import MilesRange from "../MilesRange/MilesRange.jsx";
import RateSelection from "../RateSelection/RateSelection.jsx";
import { Form } from "react-bootstrap";

const FormInput = () => {
  const [form, setForm] = useState({
    miles: 10000,
    rate: "A",
    time: "night",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log(form);
  return (
    <div>
      <Form>
        <div>
          <h4 style={{ textTransform: "uppercase" }}>
            How many miles per year do you drive?
          </h4>
          <MilesRange miles={form.miles} handleMilesChange={handleChange} />
        </div>
        <div>
          <RateSelection form={form.rate} handleRateChange={handleChange} />
        </div>
      </Form>
    </div>
  );
};

export default FormInput;
