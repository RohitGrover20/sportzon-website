import React from "react";

function page() {
  return (
    <section>
      <div className="container">
        <h1>Terms & Conditions</h1>
        <p>
          At Sportzon, we are committed to providing our customers with a safe
          and enjoyable experience. By using our facilities and services, you
          agree to the following terms and conditions:
        </p>

        <ol>
          <li>
            <strong>Use of facilities and equipment: </strong> You agree to use
            our facilities and equipment in a safe and responsible manner. You
            also agree to follow all instructions given by our staff.
          </li>
          <li>
            <strong> Conduct: </strong>You agree to conduct yourself in a
            respectful and orderly manner. You also agree to refrain from any
            activity that could be disruptive or harmful to others.
          </li>
          <li>
            <strong>Payment:</strong> You agree to pay for all services and
            bookings in advance.
          </li>
          <li>
            <strong> Cancellation:</strong> If you need to cancel your booking,
            please do so at least [number] days in advance. Cancellations made
            less than [number] days in advance will be subject to a cancellation
            fee.
          </li>
          <li>
            <strong>Liability:</strong> [Sports Complex Name] is not liable for
            any injuries or losses that occur while using our facilities or
            services.
          </li>
        </ol>
      </div>
    </section>
  );
}

export default page;
