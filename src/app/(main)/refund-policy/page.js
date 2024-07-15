import React from "react";

function page() {
  return (
    <section style={{ background: "#e9e9e9" }} className="p-5 policy-section">
      <div
        className="fluid-container card m-0 policy-section"
        style={{
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          transition: "0.3s",
          padding: "60px",
          borderRadius: "10px",
        }}
      >
        <h3
          className="text-orange ms-4 policy-section"
          style={{
            fontFamily:
              '"Playfair Display", "Open Sans", Calibri, Tahoma, serif',
          }}
        >
          Refund Policy
        </h3>
        <ol className="ms-4 text-dark">
          <li>
            For coaching sessions & tournament,there will be no refund once the
            payment is made.
          </li>
          <li>
            For "Pay n Play" , refunds will be made only 24 hours prior to booking
            time.
          </li>
          <li>
            For "Events" , there will be 100% refund only 7 days prior to event
            date,50% refund 15 days prior to event date and 100% refund 30 days
            prior to event date.
          </li>
        </ol>
        <p className="text-dark ms-4">
          Processing time of refund is 5-7 days. The refunded amount will be
          refunded to source after the mentioned time.
        </p>
        <small className="text-dark ms-4">
          All the disputes are subject to Delhi jurisdiction only.
        </small>
      </div>
    </section>
  );
}

export default page;
