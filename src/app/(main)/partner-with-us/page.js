"use client";
import React from "react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import config from "@/config";
import axios from "axios";
import TermsCondModal from "../terms-conditions/Terms&CondModal";

function PartnerWithUs() {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const initialValue = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    accept: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .max(12, "Phone number must be at most 12 characters")
      .required("Required"),
    subject: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
    accept: Yup.boolean().oneOf([true], "Please check this box"),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const send = await axios.post(
        `${config.API_URL}/landing/contact`,
        values
      );
      if (send) {
        const myToast =
          send?.data && send?.data && send?.data?.code == "duplicate"
            ? toast.warning
            : toast.success;
        myToast(send && send?.data && send?.data?.message, {
          position: "top-right",
          autoClose: 2000,
          onClose: () => {
            setSubmitting(false);
            resetForm(true);
          },
        });
      }
    } catch (err) {
      toast.error("Couldn't proceed. Try again later", {
        position: "top-right",
        autoClose: 2000,
        onClose: () => {
          setSubmitting(false);
          resetForm(true);
        },
      });
    }
  };
  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <div className="theme-bg text-white text-center py-5 position-relative overflow-hidden">
        <div className="container fadeInUp animated">
          <h1 className="display-4 fw-bold text-uppercase mb-3 text-white">
            Partner With Us
          </h1>
          <p className="lead mb-4">
            Collaborate with us to create impactful solutions and achieve mutual
            success.
          </p>
          <button
            className="btn btn-light btn-md px-5 rounded-pill shadow-sm"
            onClick={() => {
              const formSection = document.getElementById("contactForm");
              if (formSection) {
                formSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Why Partner Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-12 mb-4 mb-md-0">
            <Image
              src="/assets/img/partner-img.jpg"
              alt="Partner with Sportzon"
              width={400}
              height={300}
              className="img-fluid rounded w-100"
            />
          </div>
          {/* Content Section */}
          <div className="col-lg-6 col-md-6 col-12">
            <h2 className="mb-4 text-uppercase fw-bold theme-color text-center text-md-start">
              Why Partner with Sportzon?
            </h2>
            <p className="fs-6 text-center text-md-start">
              Join forces with Sportzon to amplify your impact in the sports
              world. Together, we can create extraordinary experiences and grow
              stronger.
            </p>
            <ul className="list-unstyled mt-4">
              <li className="d-flex align-items-start mb-4">
                <i
                  className="fa fa-futbol text-warning me-3"
                  style={{ fontSize: "1.5rem" }}
                ></i>
                <span className="fs-6">
                  Expand your brand visibility across the vibrant sports
                  community.
                </span>
              </li>
              <li className="d-flex align-items-start mb-4">
                <i
                  className="fa fa-users text-info me-3"
                  style={{ fontSize: "1.5rem" }}
                ></i>
                <span className="fs-6">
                  Collaborate with a team passionate about sports and
                  innovation.
                </span>
              </li>
              <li className="d-flex align-items-start mb-4">
                <i
                  className="fa fa-trophy text-primary me-3"
                  style={{ fontSize: "1.5rem" }}
                ></i>
                <span className="fs-6">
                  Leverage customized strategies to achieve championship-level
                  success.
                </span>
              </li>
              <li className="d-flex align-items-start mb-4">
                <i
                  className="fa fa-handshake text-success me-3"
                  style={{ fontSize: "1.5rem" }}
                ></i>
                <span className="fs-6">
                  Build meaningful, long-term partnerships in the sports
                  ecosystem.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Partnership Benefits Section */}
      <div className="bg-light py-5">
        <div className="container fadeInUp animated">
          <h2 className="text-center mb-4 theme-color">
            Our Partnership Benefits
          </h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm bg-white">
                <i className="bi bi-graph-up text-primary display-4 mb-3"></i>
                <h5 className="text-black">Increased Growth</h5>
                <p>
                  Achieve exponential growth with our collaborative approach.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm bg-white">
                <i className="bi bi-handshake text-primary display-4 mb-3"></i>
                <h5 className="text-black">Strong Collaboration</h5>
                <p>
                  Work closely with our team to create value-driven projects.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm bg-white">
                <i className="bi bi-people-fill text-primary display-4 mb-3"></i>
                <h5 className="text-black">Broader Audience</h5>
                <p>Gain access to a wider audience and new opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      {/* <div className="container py-5" id="contactForm">
        <h2 className="text-center mb-4 theme-color">Let’s Talk <i className="fas fa-question-circle text-orange"></i></h2>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card shadow-lg border-0">
              <div className="card-body">
                <form>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="organization" className="form-label">
                        Organization
                      </label>
                      <input
                        type="text"
                        id="organization"
                        className="form-control"
                        placeholder="Enter your organization name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="phone"
                        className="form-control"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Tell us about your partnership idea"
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-orange btn-md">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <ToastContainer />
      <div className="container p-2" id="contactForm">
        <h2 className="text-center mb-4 theme-color">
          Let’s Talk <i className="fas fa-question-circle text-orange"></i>
        </h2>
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ dirty, isValid }) => {
            return (
              <Form className="row g-4" id="contact-form">
                <div className="col-sm-6 pt-2">
                  <label className="form-label"> Name </label>
                  <span className="text-danger">*</span>
                  <Field
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    required=""
                  />
                  <ErrorMessage
                    name="name"
                    render={(msg) => (
                      <small className="text-danger fw-bold">{msg}</small>
                    )}
                  ></ErrorMessage>
                </div>

                <div className="col-sm-6 pt-2">
                  <label className="form-label"> Email </label>
                  <span className="text-danger">*</span>
                  <Field
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required=""
                  />
                  <ErrorMessage
                    name="email"
                    render={(msg) => (
                      <small className="text-danger fw-bold">{msg}</small>
                    )}
                  ></ErrorMessage>
                </div>

                <div className="col-sm-6">
                  <label className="form-label"> Phone </label>
                  <span className="text-danger">*</span>
                  <Field
                    className="form-control"
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                    required=""
                  />
                  <ErrorMessage
                    name="phone"
                    render={(msg) => (
                      <small className="text-danger fw-bold">{msg}</small>
                    )}
                  ></ErrorMessage>
                </div>

                <div className="col-sm-6">
                  <label className="form-label"> Subject </label>
                  <span className="text-danger">*</span>
                  <Field
                    className="form-control"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required=""
                  />
                  <ErrorMessage
                    name="subject"
                    render={(msg) => (
                      <small className="text-danger fw-bold">{msg}</small>
                    )}
                  ></ErrorMessage>
                </div>

                <div className="col-12">
                  <label className="form-label"> Message </label>
                  <span className="text-danger">*</span>
                  <Field
                    as="textarea"
                    className="form-control"
                    rows={4}
                    name="message"
                    placeholder="Type your comment here..."
                    required=""
                  />
                  <ErrorMessage
                    name="message"
                    render={(msg) => (
                      <small className="text-danger fw-bold">{msg}</small>
                    )}
                  ></ErrorMessage>
                </div>
                <div className="col-12">
                  <div className="form-check mb-2">
                    <Field
                      className="form-check-input"
                      name="accept"
                      defaultValue="Agree Terms & Conditions"
                      type="checkbox"
                    />
                    <label className="form-check-label">
                      I agree to the{" "}
                      <a
                        href=""
                        data-bs-toggle="modal"
                        data-bs-target="#termsAndConditionsModal"
                        className="nav-link d-inline fs-normal text-decoration-underline p-0 text-orange"
                      >
                        Terms &amp; Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-orange btn-md px-lg-4 border border-4-white"
                    disabled={!(dirty && isValid)}
                  >
                    Send Your Message
                  </button>
                </div>
                <TermsCondModal />
              </Form>
            );
          }}
        </Formik>
      </div>

      {/* Call to Action */}
      <div className="theme-bg text-white text-center py-5">
        <h3 className="fw-bold text-white">Join Us Today!</h3>
        <p>
          Ready to take the next step? Let’s partner and achieve extraordinary
          success together.
        </p>
        <button className="btn btn-light btn-md"   onClick={() => {
              const formSection = document.getElementById("contactForm");
              if (formSection) {
                formSection.scrollIntoView({ behavior: "smooth" });
              }
            }}>Start Now</button>
      </div>
    </div>
  );
}

export default PartnerWithUs;
