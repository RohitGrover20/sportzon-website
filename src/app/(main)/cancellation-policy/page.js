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
          className="text-orange ms-4"
          style={{
            fontFamily:
              '"Playfair Display", "Open Sans", Calibri, Tahoma, serif',
          }}
        >
          Cancellation Policy
        </h3>

        <p className="text-dark ms-4">
          Sportzon India has a fixed cancellation policy. Please go through our
          cancellation policy before using any of our services.
        </p>
        <h5 className="theme-color ms-4">Cancellations:</h5>
        <ol className="text-dark ms-4">
          <li>For any tournament booking, No cancellation is allowed.</li>
          <li>
            For "Pay n Play", cancellation is allowed only 24 hours prior. No
            cancellation on date of play.
          </li>
          <li>
            For "Events", cancellation can only be done 30 days prior to the
            start of event.
          </li>
          <li>
            For individual coaching sessions , No cancellation is allowed.
          </li>
        </ol>
      </div>
    </section>
  );
}

export default page;
