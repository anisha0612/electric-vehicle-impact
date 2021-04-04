import React from "react";
import { Form } from "react-bootstrap";

const TimeSlot = ({ time, handleTimeSelect }) => {
  return (
    <div>
      <Form.Group controlId='timeSlot' className='select-container'>
        <Form.Label className='select-label'>
          What is your current electric rate?
        </Form.Label>
        <Form.Control
          as='select'
          name='time'
          className='select-control'
          value={time}
          size='lg'
          onChange={handleTimeSelect}
          htmlSize={3}
          custom>
          <option value='morning' className='select-option'>
            9 am - 12 noon{" "}
          </option>
          <option value='afternoon' className='select-option'>
            12 noon - 6 pm
          </option>
          <option value='night' className='select-option'>
            6pm - 9 am (Recommended)
          </option>
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default TimeSlot;
