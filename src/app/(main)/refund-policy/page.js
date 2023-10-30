import React from "react";

function page() {
  return (
    <section>
      <div className="container">
        <h1>Refund Policy</h1>
        {/* <p>
          At Sportzon, we understand that things happen and sometimes you may
          need to cancel your booking. We are here to help you through the
          cancellation process and will do our best to accommodate your needs.
        </p>
        <strong>Cancellations</strong>
        <p>
          To cancel your booking, please contact us at least [number] days in
          advance. Cancellations made less than 1 days in advance will be
          subject to a cancellation fee. The cancellation fee will be equal to
          [percentage] of the total booking amount.
        </p>
        <strong>Refunds</strong>
        <p>
          If you cancel your booking at least [number] days in advance, you will
          be eligible for a full refund. If you cancel your booking less than
          [number] days in advance, you will be eligible for a partial refund,
          equal to [percentage] of the total booking amount.
        </p>
        <strong>Exceptions</strong>
        <p>
          There are a few exceptions to our refund policy. For example, we do
          not offer refunds for cancellations due to weather conditions or other
          unforeseen circumstances. We also do not offer refunds for
          cancellations made within [number] days of the booking date.
        </p>
        <strong>To request a refund</strong>
        <p>
          To request a refund, please contact us at [email protected] Please
          include your booking information and the reason for your cancellation.
          We will process your refund request within [number] business days.
        </p>

        <strong>Questions?</strong>
        <p>
          If you have any questions about our refund policy, please do not
          hesitate to contact us.
        </p> */}
        <ol>
          <li>
            For coaching sessions & tournament,there will be no refund once the
            payment is made.
          </li>
          <li>
            For "Pay n Play",refunds will be made only 24 hours prior to booking
            time.
          </li>
          <li>
            For "Events", there will be 100% refund only 7 days prior to event
            date,50% refund 15 days prior to event date and 100% refund 30 days
            prior to event date.
          </li>
        </ol>
        <p>
          Processing time of refund is 5-7 days. The refunded amount will be
          refunded to source after the mentioned time.
        </p>
        <small>All the disputes are subject to Delhi jurisdiction only.</small>
      </div>
    </section>
  );
}

export default page;
