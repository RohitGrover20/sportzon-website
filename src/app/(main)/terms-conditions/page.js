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
          Terms & Conditions
        </h3>

        <p className="ms-4 text-dark">
          At Sportzon, we are committed to providing our customers with a safe
          and enjoyable experience. By using our facilities and services, you
          agree to the following terms and conditions:
        </p>
        <ul>
          <li className="pt-4">
            <h5 className="theme-color">Acceptance of Terms:</h5>
            <span className="text-dark">
              By accessing or using Sportzon, you agree to be bound by these
              Terms and Conditions ("Terms"). If you disagree with any part of
              the Terms, you may not access or use Sportzon.
            </span>
          </li>
          <li className="pt-4">
            <h5 className="theme-color">Eligibility:</h5>
            <span className="text-dark">
              Sportzon is only available to users who are at least 14 years old
              and have the legal capacity to enter into binding contracts.
            </span>
          </li>
          <li className="pt-4">
            <h5 className="theme-color">Account Creation:</h5>
            <span className="text-dark">
              To access certain features of Sportzon, you may need to create an
              account. You are responsible for maintaining the confidentiality
              of your account information, including your username and password.
              You are also responsible for all activities that occur under your
              account.
            </span>
          </li>
          <li className="pt-4">
            <h5 className="theme-color">User Content:</h5>
            <span className="text-dark">
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
            <h5 className="theme-color">Prohibited Conduct:</h5>
            <span className="text-dark">
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
            <h5 className="theme-color">Disclaimer:</h5>
            <span className="text-dark">
              Sportzon is provided on an "as is" and "as available" basis. We
              make no warranties, express or implied, regarding the operation or
              performance of Sportzon. We do not guarantee that Sportzon will be
              available at all times or that it will be free of errors or
              interruptions.
            </span>
          </li>
          <li className="pt-4">
            <h5 className="theme-color">Limitation of Liability:</h5>
            <span className="text-dark">
              To the extent permitted by law, we shall not be liable for any
              damages arising out of or related to your use of Sportzon,
              including but not limited to, direct, indirect, incidental,
              consequential, or punitive damages.
            </span>
          </li>
          <li className="pt-4">
            <h5 className="theme-color">Termination:</h5>
            <span className="text-dark">
              We may terminate your access to Sportzon at any time, for any
              reason, with or without notice.
            </span>
          </li>
          <li className="pt-4">
            <h5 className="theme-color">Governing Law:</h5>
            <span className="text-dark">
              These Terms shall be governed by and construed in accordance with
              the laws of Delhi Jurisdiction, without regard to its conflict of
              law provisions.
            </span>
          </li>
          <li className="pt-4">
            <h5 className="theme-color">Entire Agreement:</h5>
            <span className="text-dark">
              These Terms constitute the entire agreement between you and
              Sportzon regarding your use of the platform.
            </span>
          </li>
          <li className="pt-4">
            <h5 className="theme-color">Updates to Terms:</h5>
            <span className="text-dark">
              We may update these Terms at any time. We will notify you of any
              changes by posting the revised Terms on Sportzon. Your continued
              use of Sportzon following the posting of revised Terms means that
              you accept and agree to the changes.
            </span>
          </li>
          <li className="pt-4">
            <h5 className="theme-color">Contact Us:</h5>
            <span className="text-dark">
              If you have any questions about these Terms, please contact us at{" "}
              <a href={`mailto:info@sportzon.in`}>info@sportzon.in</a> .
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default page;
