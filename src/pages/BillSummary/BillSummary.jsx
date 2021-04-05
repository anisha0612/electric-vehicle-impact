import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

// Component to display the EV impact on Electric Bill

const BillSummary = ({ data }) => {
  // Check if the data received is not empty, then render the bill summary
  if (Object.keys(data).length !== 0) {
    return (
      <div className='my-5 p-5'>
        <h2 className='m-4' style={{ color: "#ffbb00" }}>
          EV Bill Impact
        </h2>
        {/* Check if the electric rate is Flat rate and display the data Bill amount for Flat Rate  */}{" "}
        {data.rate === "A" ? (
          <div className='py-4'>
            <h3>
              Total Bill on Flat Rate :
              <span style={{ color: "#ffbb00" }}> $ {data.flatBillTotal}</span>{" "}
            </h3>
            <h3>
              Bill Impact :{" "}
              <span style={{ color: "#ffbb00" }}>
                {" "}
                $ {data.flatBillTotal - data.b1Flat}
              </span>{" "}
            </h3>

            {/* Conditional to check the best Rate for the consumer */}
            {data.flatBillTotal > data.touBillTotal ? (
              <>
                {" "}
                <h3 className='my-4 py-3'>
                  You will save{" "}
                  <span style={{ color: "#ffbb00" }}>
                    {" "}
                    ~ $ {data.flatBillTotal - data.touBillTotal}{" "}
                  </span>
                  if you switch your rate to{" "}
                  <span style={{ color: "#ffbb00" }}>TOU rate (B)</span>
                </h3>{" "}
              </>
            ) : (
              <>
                <h3 className='my-4 py-3'>
                  Your Current Electric Rate{" "}
                  <span style={{ color: "#ffbb00" }}> {data.rate}</span> is is{" "}
                  <span style={{ color: "#ffbb00" }}> Good</span>!
                </h3>
              </>
            )}
          </div>
        ) : (
          // Check if the electric rate is Time Of Use rate and display the data Bill amount for TOU Rate
          <div className='py-4'>
            <h2>
              Total Bill on TOU Rate :{" "}
              <span style={{ color: "#ffbb00" }}>$ {data.touBillTotal}</span>{" "}
            </h2>
            <h3>
              Bill Impact :{" "}
              <span style={{ color: "#ffbb00" }}>
                $ {data.touBillTotal - data.b1Tou}
              </span>{" "}
            </h3>
            {/* Conditional to check the best Rate for the consumer */}
            {data.touBillTotal > data.flatBillTotal ? (
              <>
                {" "}
                <h3 className='my-4 py-3'>
                  You will save{" "}
                  <span style={{ color: "#ffbb00" }}>
                    {" "}
                    ~ $ {data.touBillTotal - data.flatBillTotal}{" "}
                  </span>
                  if you switch your rate to{" "}
                  <span style={{ color: "#ffbb00" }}>Flat rate (A)</span>
                </h3>{" "}
              </>
            ) : (
              <>
                <h3 className='my-4 py-3'>
                  Your Current Electric Rate{" "}
                  <span style={{ color: "#ffbb00" }}> {data.rate}</span> is{" "}
                  <span style={{ color: "#ffbb00" }}> Good</span> !
                </h3>
              </>
            )}
          </div>
        )}
      </div>
    );
  }
  //  if the data received is empty, then render go back home
  else {
    return (
      <div className='my-5 p-5'>
        <h3 className='m-4 p-4' style={{ color: "#ffbb00" }}>
          You must first Input data to calculate!
        </h3>
        <Button variant='warning'>
          <Link to='/' style={{ color: "rgba(15, 15, 15, 0.7)" }}>
            Go Back
          </Link>
        </Button>
      </div>
    );
  }
};

export default BillSummary;
