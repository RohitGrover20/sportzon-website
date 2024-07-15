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
          Privacy Policy 
          </h3>
        <p className="ms-4 text-dark">
          At Sportzon, we take your privacy very seriously. This document
          outlines the types of personal information we receive and collect when
          you use our services, as well as some of the steps we take to
          safeguard information. We hope this will help you make an informed
          decision about sharing personal information with us.
        </p>
        <p className="ms-4 text-dark">
          By using our Services, you are agreeing to the collection, usage and
          sharing of your information as described in this Privacy Policy. If
          you do not agree with our policies and practices, we advise that you
          refrain from using our services.
        </p>

        <h5 className="pt-2 ms-4 theme-color">How we allow you to use our data?</h5>
        <p className="ms-4 text-dark">
          We are very strict about our data policies. Your data is safe with us.
          We will not provide your data to any third party for promotion
          purposes. It will only be used to provide you information.
        </p>
        <h5 className="pt-2 ms-4 theme-color">What data do we collect?</h5>
        <ol className="ms-4 text-dark">
          <li>
            We collect data mentioned on the registration form. We may also
            collect you email from comments posted. Although we don't share your
            email id with anyone.
          </li>
          <li>
            We collect information to provide better service to our users.
          </li>
          <li>
            We use Google Analytics to analyse the traffic on our website.
            Google Analytics may collect the following information when you
            visit our website, read an article, or leave a comment:
          </li>
          <li>
            Device information: Google Analytics collects information about the
            device you use to access our Services, including the class of the
            device (smartphone, laptop, tablet, etc), operating system, and your
            city-level geographical location.
          </li>
          <li>
            Behavioural Information: Google Analytics collects information about
            the pages visited by visitors on our website, including the time
            spent on a page, as well as navigational behaviour through the
            website. However, this information is aggregated, and can’t be used
            to identify you, individually.
          </li>
        </ol>

        <h5 className="pt-2 theme-color ms-4">How is the data used?</h5>
        <p className="ms-4 text-dark">
          We will just combine personal information collected from you at
          different times to provide the services you’ve requested & to provide
          a better user experience, including customizing content for you.
        </p>
        <h5 className="pt-2 theme-color ms-4">Do we disclose any information to outside parties?</h5>
        <p  className="ms-4 text-dark">
          We do not sell, trade, or otherwise transfer to outside parties your
          personally identifiable information. We may also release your
          information when we believe release is appropriate to comply with the
          law, enforce our site policies, or protect ours or others rights,
          property, or safety.
        </p>
        <h5 className="pt-2 theme-color ms-4">Third-party links</h5>
        <p  className="ms-4 text-dark">
          Occasionally, at our discretion, we may include or offer third-party
          products or services on our website. These third-party sites have
          separate and independent privacy policies. Therefore we have no
          responsibility or liability for the content and activities of these
          linked sites. Nonetheless, we seek to protect the integrity of our
          site and welcome any feedback about these sites.
        </p>
      </div>
    </section>
  );
}

export default page;
