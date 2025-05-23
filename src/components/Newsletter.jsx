"use client";
import React from "react";
import { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Image from "next/image";
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
        className="call-action-container position-relative p-3"
        style={{ backgroundImage: 'url("assets/img/bg-subscribe.png")' }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-lg-6 position-relative subscribe-main-img">
              <div className="ps-5">
                <Image
                  src="/assets/img/subscribe-img.jpg"
                  alt="Subscribe Now"
                  width={500}
                  height={400}
                  style={{ borderRadius: "30px" }}
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
                  <p className="fs-5 text-center fw-bold subscribe-subtitle">
                    <span className="text-orange">Subscribe</span> &{" "}
                    <span className="text-orange">Follow</span> For Updates &
                    Exclusive Offers !
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
