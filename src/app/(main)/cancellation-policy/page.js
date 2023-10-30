import React from "react";

function page() {
  return (
    <section>
      <div className="container">
        <h1>Cancellation Policy</h1>
        <p>
          Sportzon India has a fixed cancellation policy. Please go through our
          cancellation policy before using anu of our services.
        </p>
        <strong>Cancellations</strong>
        {/* <p>
          To cancel your booking, please contact us at least [number] days in
          advance. Cancellations made less than [number] days in advance will be
          subject to a cancellation fee. The cancellation fee will be equal to
          [percentage] of the total booking amount.
        </p>
        <strong>Exceptions</strong>
        <p>
          There are a few exceptions to our cancellation policy. For example, we
          may offer full refunds for cancellations due to weather conditions or
          other unforeseen circumstances. We may also offer full refunds for
          cancellations made within [number] days of the booking date, if there
          is a valid reason for the cancellation.
        </p>
        <strong>To request a refund</strong>
        <p>
          To request a refund, please contact us at [email protected] Please
          include your booking information and the reason for your cancellation.
          We will process your refund request within [number] business days.
        </p>

        <strong>Questions?</strong>
        <p>
          If you have any questions about our cancellation policy, please do not
          hesitate to contact us.
        </p> */}
        <ol>
          <li>For any tournament booking, No cancellation is allowed.</li>\
          <li>
            For "Pay n Play", cancellation is allowed only 24 hours prior. No
            cancellation on date of play.
          </li>
          <li>
            For "Events", cancellation can only be done 30 days prior to the
            start of event.
          </li>
          <li>For individual coaching sessions,No cancellation is allowed.</li>
        </ol>
      </div>
    </section>
  );
}

export default page;
