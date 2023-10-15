"use client";
import config from "@/config";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
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
    email: Yup.string().email("Invalid Email").required("Email is required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
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
          send.data && send.data && send.data.code == "duplicate"
            ? toast.warning
            : toast.success;
        myToast(send && send.data && send.data.message, {
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
    <>
      <ToastContainer />
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ dirty, isValid }) => {
          return (
            <Form className="row g-4" id="contact-form">
              <div className="col-sm-6">
                <label className="form-label">Name</label>
                <Field
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required=""
                />
                <ErrorMessage
                  name="name"
                  render={(msg) => <small className="text-danger">{msg}</small>}
                ></ErrorMessage>
              </div>

              <div className="col-sm-6">
                <label className="form-label">Email</label>
                <Field
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required=""
                />
                <ErrorMessage
                  name="email"
                  render={(msg) => <small className="text-danger">{msg}</small>}
                ></ErrorMessage>
              </div>

              <div className="col-sm-6">
                <label className="form-label">Phone</label>
                <Field
                  className="form-control"
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  required=""
                />
                <ErrorMessage
                  name="phone"
                  render={(msg) => <small className="text-danger">{msg}</small>}
                ></ErrorMessage>
              </div>

              <div className="col-sm-6">
                <label className="form-label">Subject</label>
                <Field
                  className="form-control"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required=""
                />
                <ErrorMessage
                  name="subject"
                  render={(msg) => <small className="text-danger">{msg}</small>}
                ></ErrorMessage>
              </div>

              <div className="col-12">
                <label className="form-label">Message</label>
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
                  render={(msg) => <small className="text-danger">{msg}</small>}
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
                      className="nav-link d-inline fs-normal text-decoration-underline p-0"
                      href="/"
                    >
                      Terms &amp; Conditions
                    </a>
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button
                  className="btn btn-primary px-lg-4"
                  disabled={!(dirty && isValid)}
                >
                  Send your Message
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default ContactForm;
