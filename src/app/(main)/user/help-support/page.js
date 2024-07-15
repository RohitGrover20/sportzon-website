import React from "react";
import ContactForm from "../../contact-us/ContactForm";

function HelpSupport() {
  return (
    <>
      <div className="dash-wrapsw card border-0 rounded-4 mb-4">
        <div className="card-header">
          <h3 className="theme-color">Help & Support</h3>
        </div>
        <div className="card-body">
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default HelpSupport;
