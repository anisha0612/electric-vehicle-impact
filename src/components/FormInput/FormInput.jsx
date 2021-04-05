import React from "react";
import MilesRange from "../MilesRange/MilesRange.jsx";
import RateSelection from "../RateSelection/RateSelection.jsx";
import TimeSlot from "../TimeSlot/TimeSlot.jsx";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

// Component which handles the form input from Consumer

const FormInput = ({ form, handleChange, handleSubmit }) => {
  // console.log(form);
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

        <Button variant='warning' onClick={handleSubmit} className='btn'>
          <Link to='/summary' style={{ color: "rgba(15, 15, 15, 0.7)" }}>
            Calculate
          </Link>
        </Button>
      </Form>
    </div>
  );
};

export default FormInput;
