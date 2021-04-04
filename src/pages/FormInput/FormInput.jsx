import React, { useState } from "react";
import MilesRange from "../../components/MilesRange/MilesRange.jsx";
import RateSelection from "../../components/RateSelection/RateSelection.jsx";
import TimeSlot from "../../components/TimeSlot/TimeSlot.jsx";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const FormInput = ({ form, handleChange }) => {
  console.log(form);
  return (
    <div>
      <Form>
        {/* Component for collecting customer miles input */}
        <div>
          <h4 style={{ textTransform: "uppercase" }}>
            How many miles per year do you drive?
          </h4>
          <MilesRange miles={form.miles} handleMilesChange={handleChange} />
        </div>
        {/* Component to collect customer Electric Rate Selection  */}
        <div>
          <RateSelection form={form.rate} handleRateChange={handleChange} />
        </div>
        {/* Component to collect customer charging duration */}
        <div>
          <TimeSlot form={form.time} handleTimeSelect={handleChange} />
        </div>
        <Link to='/summary'>
          <Button variant='warning' style={{ fontWeight: "700" }}>
            Calculate
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default FormInput;
