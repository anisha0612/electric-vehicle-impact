import React from "react";
import { Form } from "react-bootstrap";
import "./MilesRange.css";

// Component for collecting customer miles input

const MilesRange = ({ miles, handleMilesChange }) => {
  return (
    <div className='miles-range-container'>
      <Form.Group controlId='milesRange' className='miles-range'>
        <Form.Label className='miles-range-label'>
          Miles Driven Per Year
        </Form.Label>
        <Form.Control
          className='miles-range-control'
          type='range'
          max='100000'
          min='1000'
          step='1000'
          name='miles'
          value={miles}
          onChange={handleMilesChange}
          custom></Form.Control>
        <p style={{ color: "#ffbb00" }}>{miles} Miles</p>
      </Form.Group>
    </div>
  );
};

export default MilesRange;
