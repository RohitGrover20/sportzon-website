"use client";
import React from "react";
import { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

function Newsletter() {
  const url =
    "https://citiskape.us9.list-manage.com/subscribe/post?u=cc271862d8898b333e8af345a&amp;id=2bbcc6b9dd&amp;f_id=003a3be1f0";

  const CustomForm = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState();
    const submit = () =>
      email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
    return (
      <div className="call-action-form">
        <form>
          {status === "sending" && (
            <div className="alert alert-dark">Sending...</div>
          )}
          {status === "error" && (
            <div
              className="alert alert-danger"
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          {status === "success" && (
            <div
              className="alert alert-success text-white"
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          <div className="newsltr-form rounded-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <button type="button" className="btn btn-dark" onClick={submit}>
              Subscribe
            </button>
          </div>
        </form>
      </div>
    );
  };
  return (
    <section className="bg-cover call-action-container bg-orange position-relative">
      <div className="position-absolute top-0 end-0 z-0">
        <img src="assets/img/alert-bg.png" alt="SVG" width={300} />
      </div>
      <div className="position-absolute bottom-0 start-0 me-10 z-0">
        <img src="assets/img/circle.png" alt="SVG" width={150} />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-10 col-md-12 col-sm-12">
            <div className="call-action-wrap">
              <div className="call-action-caption">
                <h2 className="text-light">
                  Want to stay updated for upcoming events and offers?
                </h2>
                {/* <p className="text-light fs-5 fw-light">
                  Deleniti corrupti quos dolores et quas molestias
                </p> */}
              </div>
              <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                  <CustomForm
                    status={status}
                    message={message}
                    onValidated={(formData) => subscribe(formData)}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
