import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import config from "@/config";
import { toast } from "react-toastify";
function ResetPassword(props) {
  const mobile = props?.mobile;
  const [show, setShow] = useState(false);
  const initialValues = {
    newPassword: "",
  };
  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*[\]{}()?"\\,><':;|_~`=+-])[a-zA-Z\d!@#$%^&*[\]{}()?"\\,><':;|_~`=+-]{6,99}$/,
        "Must contain at least 6 Characters, 1 Uppercase, 1 Lowercase, 1 Special Character, and 1 Number"
      )
      .required("Password is required"),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const reset = await axios.post(`${config.API_URL}/users/reset-password`, {
        ...values,
        mobile,
      });
      if (reset) {
        toast.success(reset?.data?.message, {
          position: "top-right",
          autoClose: 2000,
          onClose: () => {
            setSubmitting(false);
            resetForm(true);
            window.location.replace("/login");
          },
        });
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
    <>
      <div className="card-wrap text-center mb-4">
        <h1 className="fs-2">Reset Password</h1>
        <p>Reset your account password using form below</p>
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
                <i className="fa fa-lock position-absolute top-50 start-0 translate-middle-y ms-3 text-info" />
                <Field
                  type={show ? "text" : "password"}
                  name="newPassword"
                  className="form-control form-control-lg ps-5"
                  placeholder="New Password"
                />
                <label htmlFor="floatingInput" className="ms-4">
                  Set New Password
                </label>
                <div className="text-end">
                  <small
                    onClick={() => setShow(!show)}
                    style={{ cursor: "pointer" }}
                  >
                    {show ? "Hide" : "Show"} Password?
                  </small>
                </div>
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
    </>
  );
}

export default ResetPassword;
