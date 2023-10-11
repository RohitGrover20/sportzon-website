"use client";
import Otp from "@/components/Auth/Otp";
import config from "@/config";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as Yup from "yup";

function ForgotPassword() {
  const [forget, setForget] = useState(false);
  const [mobile, setMobile] = useState(0);
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const initialValues = {
    mobile: "",
  };

  const validationSchema = Yup.object({
    mobile: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Mobile is required"),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const forget = await axios.post(
        `${config.API_URL}/users/forget-password`,
        values
      );
      if (forget) {
        if (forget?.data.code == "sent") {
          setForget(true);
          setMobile(values);
        }
      }
    } catch (err) {
      console.log(err.response);
      toast.error(err.response?.data?.message, {
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
    <div className="position-relative">
      <ToastContainer />
      {forget ? (
        <Otp mobile={mobile} />
      ) : (
        <div className="card border-0 rounded-5 p-xl-4 p-lg-4 p-3">
          <div className="square--80 circle bg-light-primary text-primary d-flex mb-4 mx-auto">
            <i className="fa-solid fa-key fs-1" />
          </div>
          <div className="card-wrap text-center mb-4">
            <h1 className="fs-2">Forgot Password?</h1>
            <p>No worries, we'll send you reset instructions.</p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ dirty, isValid }) => {
              return (
                <Form>
                  <div className="form-floating position-relative mb-4">
                    <i className="fa fa-phone position-absolute top-50 start-0 translate-middle-y ms-3 text-info" />
                    <Field
                      type="number"
                      name="mobile"
                      className="form-control form-control-lg ps-5"
                      placeholder="Registered mobile no."
                      autoComplete="off"
                    />
                    <label htmlFor="floatingInput" className="ms-4">
                      Registered Mobile No.
                    </label>
                  </div>
                  <button
                    className="btn btn-lg btn-secondary w-100"
                    disabled={!(dirty && isValid)}
                  >
                    Reset Password
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
