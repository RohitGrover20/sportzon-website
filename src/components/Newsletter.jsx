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
              className="alert alert-success text-orange"
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          <div className="newsltr-form rounded-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              style={{ border: "2px solid #0a5993" }}
            />
          </div>
          <div className="text-center mt-2">
            <button type="button" className="btn btn-orange" onClick={submit}>
              Subscribe
            </button>
          </div>
        </form>
      </div>
    );
  };
  return (
    <>
      <section
        className="call-action-container  position-relative"
        style={{ backgroundImage: 'url("assets/img/bg-subscribe.png")' }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-lg-6 position-relative subscribe-main-img">
              <div className="ms-5 ps-5 ">
                <img
                  src="/assets/img/Subscribe-Img.png"
                  alt="Left Image"
                  className="img-fluid"
                />
              </div>
            </div>
            {/* Content */}
            <div className="col-lg-6 position-relative">
              <div
                className="card start-20 subscribe-section"
                style={{ marginLeft: "-140px", borderRadius: "34px" }}
              >
                <div className="card-body m-2">
                  <p className="text-orange display-5 fw-bold subscribe-title text-center">
                    Stay in game with Sportzon
                  </p>
                  <p className="fs-5 text-center fw-bold subscribe-subtitle">
                    <span className="text-orange">Subscribe</span> &{" "}
                    <span className="text-orange">Follow</span> For Updates &
                    Exclusive Offers !
                  </p>
                  <p className="text-center">
                    {" "}
                    Don't miss out the action!{" "}
                    <span className="text-orange fw-bold">
                      Subscribe to Sportzon
                    </span>{" "}
                    for latest news , upcoming events , and exclusive offers .
                    Follow us on social media to stay connected and join the
                    Sportzon community!
                  </p>
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
        </div>
      </section>
    </>
  );
}

export default Newsletter;
