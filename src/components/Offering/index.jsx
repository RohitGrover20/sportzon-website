"use client";
import config from "@/config";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";

function Offering() {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const initialValue = {
    name: "",
    email: "",
    phone: "",
    org: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Required")
      .max(12, "Phone number must be at most 12 characters"),
    org: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const send = await axios.post(
        `${config.API_URL}/landing/contact/offering`,
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
            <Form className="mx-auto px-xl-5 px-lg-5 px-md-4 z-2 position-relative">
              <div className="text-center">
                <div className="rounded-5 px-3 py-1 font--medium text-light bg-warning d-inline-flex justify-content-center m-auto">
                  Contact us
                </div>
              </div>
              <h3 className="h4 card-title text-center pb-4 text-light">
                Fill out the form today and learn more about how Sportzon can
                help you create a thriving sports culture at your School/
                Office!{" "}
              </h3>
              <div className="row g-4">
                <div className="col-sm-6">
                  <label className="form-label text-light opacity-75">
                    Name <span className="text-danger">*</span>
                  </label>
                  <Field
                    className="form-control lg light"
                    type="text"
                    name="name"
                    placeholder="Your name"
                  />
                  <ErrorMessage
                    name="name"
                    render={(msg) => (
                      <small className="text-danger">{msg}</small>
                    )}
                  ></ErrorMessage>
                </div>
                <div className="col-sm-6">
                  <label className="form-label text-light opacity-75">
                    Email
                  </label>
                  <span className="text-danger">*</span>
                  <Field
                    className="form-control lg light"
                    type="email"
                    name="email"
                    placeholder="Email address"
                  />
                  <ErrorMessage
                    name="email"
                    render={(msg) => (
                      <small className="text-danger">{msg}</small>
                    )}
                  ></ErrorMessage>
                </div>
                <div className="col-sm-6">
                  <label className="form-label text-light opacity-75">
                    Phone
                  </label>
                  <span className="text-danger">*</span>
                  <Field
                    className="form-control lg light"
                    type="text"
                    name="phone"
                    placeholder="Phone number"
                  />
                  <ErrorMessage
                    name="phone"
                    render={(msg) => (
                      <small className="text-danger">{msg}</small>
                    )}
                  ></ErrorMessage>
                </div>
                <div className="col-sm-6">
                  <label className="form-label text-light opacity-75">
                    Organization / Institution
                  </label>
                  <span className="text-danger">*</span>
                  <Field
                    className="form-control lg light"
                    type="text"
                    name="org"
                    placeholder="Your organization/ Institution name"
                  />
                  <ErrorMessage
                    name="org"
                    render={(msg) => (
                      <small className="text-danger">{msg}</small>
                    )}
                  ></ErrorMessage>
                </div>
                <div className="col-sm-12">
                  <label className="form-label text-light opacity-75">
                    Message
                  </label>
                  <span className="text-danger">*</span>
                  <Field
                    as="textarea"
                    name="message"
                    className="form-control light"
                    rows={6}
                    placeholder="Your Message....."
                  />
                  <ErrorMessage
                    name="message"
                    render={(msg) => (
                      <small className="text-danger">{msg}</small>
                    )}
                  ></ErrorMessage>
                </div>

                <div className="col-sm-12 text-center pt-4">
                  <button
                    className="btn btn-lg btn-success font--medium px-xl-5 px-4"
                    disabled={!(dirty && isValid)}
                  >
                    Send a request
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default Offering;
