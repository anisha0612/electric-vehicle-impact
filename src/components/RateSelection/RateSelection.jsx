import React from "react";
import { Form } from "react-bootstrap";

// Component to collect customer Electric Rate Selection

const RateSelection = ({ rate, handleRateChange }) => {
  return (
    <div>
      <Form.Group controlId='electricRate' className='select-container'>
        <Form.Label className='select-label'>
          What is your current electric rate?
        </Form.Label>
        <Form.Control
          as='select'
          name='rate'
          className='select-control'
          value={rate}
          size='lg'
          onChange={handleRateChange}
          htmlSize={2}
          custom>
          <option value='A' className='select-option'>
            A - FLAT Rate (Default)
          </option>
          <option value='B' className='select-option'>
            B - TOU Rate
          </option>
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default RateSelection;
