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
        <ul>
          <li className="pt-4">
            <h5>Acceptance of Terms:</h5>
            <span>
              By accessing or using Sportzon, you agree to be bound by these
              Terms and Conditions ("Terms"). If you disagree with any part of
              the Terms, you may not access or use Sportzon.
            </span>
          </li>
          <li className="pt-4">
            <h5>Eligibility:</h5>
            <span>
              Sportzon is only available to users who are at least 14 years old
              and have the legal capacity to enter into binding contracts.
            </span>
          </li>
          <li className="pt-4">
            <h5>Account Creation:</h5>
            <span>
              To access certain features of Sportzon, you may need to create an
              account. You are responsible for maintaining the confidentiality
              of your account information, including your username and password.
              You are also responsible for all activities that occur under your
              account.
            </span>
          </li>
          <li className="pt-4">
            <h5>User Content:</h5>
            <span>
              You may be able to submit content to Sportzon, such as comments,
              reviews, or photos. You retain all ownership rights to your User
              Content, but you grant Sportzon a non-exclusive, worldwide,
              royalty-free license to use, modify, publish, and distribute your
              User Content in connection with Sportzon. You are solely
              responsible for your User Content and represent that you have the
              necessary rights to submit such content.
            </span>
          </li>
          <li className="pt-4">
            <h5>Prohibited Conduct:</h5>
            <span>
              You agree not to use Sportzon for any purpose that is unlawful,
              harmful, or prohibited by these Terms. This includes, but is not
              limited to: <br />
              Uploading or transmitting content that is infringing, obscene,
              hateful, or threatening.
              <br /> Harassing, bullying, or intimidating other users.
              <br />
              Impersonating any person or entity. Interfering with or disrupting
              the Sportzon platform.
            </span>
          </li>
          <li className="pt-4">
            <h5>Disclaimer:</h5>
            <span>
              Sportzon is provided on an "as is" and "as available" basis. We
              make no warranties, express or implied, regarding the operation or
              performance of Sportzon. We do not guarantee that Sportzon will be
              available at all times or that it will be free of errors or
              interruptions.
            </span>
          </li>
          <li className="pt-4">
            <h5>Limitation of Liability:</h5>
            <span>
              To the extent permitted by law, we shall not be liable for any
              damages arising out of or related to your use of Sportzon,
              including but not limited to, direct, indirect, incidental,
              consequential, or punitive damages.
            </span>
          </li>
          <li className="pt-4">
            <h5>Termination:</h5>
            <span>
              We may terminate your access to Sportzon at any time, for any
              reason, with or without notice.
            </span>
          </li>
          <li className="pt-4">
            <h5>Governing Law:</h5>
            <span>
              These Terms shall be governed by and construed in accordance with
              the laws of Delhi Jurisdiction, without regard to its conflict of
              law provisions.
            </span>
          </li>
          <li className="pt-4">
            <h5>Entire Agreement:</h5>
            <span>
              These Terms constitute the entire agreement between you and
              Sportzon regarding your use of the platform.
            </span>
          </li>
          <li className="pt-4">
            <h5>Updates to Terms:</h5>
            <span>
              We may update these Terms at any time. We will notify you of any
              changes by posting the revised Terms on Sportzon. Your continued
              use of Sportzon following the posting of revised Terms means that
              you accept and agree to the changes.
            </span>
          </li>
          <li className="pt-4">
            <h5>Contact Us:</h5>
            <span>
              If you have any questions about these Terms, please contact us at{" "}
              <a href={`mailto:info@sportzon.in`}>info@sportzon.in</a> .
            </span>
          </li>
        </ul>
        {/* <ol>
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
            please do so at least 1 days in advance. Cancellations made less
            than 1 days in advance will be subject to a cancellation fee.
          </li>
          <li>
            <strong>Liability:</strong> Sportzon is not liable for any injuries
            or losses that occur while using our facilities or services.
          </li>
        </ol> */}
      </div>
    </section>
  );
}

export default page;
