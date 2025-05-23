"use client";
import config from "@/config";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
function Register() {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    checked: false,
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    mobile: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Mobile is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*[\]{}()?"\\,><':;|_~`=+-])[a-zA-Z\d!@#$%^&*[\]{}()?"\\,><':;|_~`=+-]{6,99}$/,
        "Must contain at least 6 Characters, 1 Uppercase, 1 Lowercase, 1 Special Character, and 1 Number"
      )
      .required("Password is required"),
    confirmPassword: Yup.string().test(
      "passwords-match",
      "Passwords must match",
      function (value) {
        return this.parent.password === value;
      }
    ),
    checked: Yup.boolean().oneOf([true], "Please check this box"),
  });
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const register = await axios.post(
        `${config.API_URL}/landing/auth/register`,
        values
      );
      if (register) {
        const myToast =
          register.data && register.data && register.data.code == "duplicate"
            ? toast.warning
            : toast.success;
        myToast(register && register.data && register.data.message, {
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

  const googleAuth = () => {
    window.open(`${config.API_URL}/auth/google`, "_self");
  };
  const facebookAuth = () => {
    window.open(`${config.API_URL}/auth/facebook`, "_self");
  };
  return (
    <>
      <ToastContainer />
      <div className="text-center">
        <a className="" href="/">
          <Image
            src="/assets/img/Footer-logo.png"
            width={200}
            height={100}
            alt="logo"
          ></Image>
        </a>
      </div>
      <p className="pt-4 text-center">
        <span className="text-orange">Have an account already?</span>{" "}
        <a
          className="text-orange fw-bold text-decoration-underline"
          href="/login"
        >
          Login
        </a>
      </p>
      <h1 className="fs-1 text-orange text-uppercase text-center">
        Create An Account
      </h1>
      <p className=" mb-lg-4 text-center text-black">
        Welcome Back! Select Method to Register:
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ dirty, isValid }) => {
          return (
            <Form>
              <div className="row row-cols-1 row-cols-sm-2">
                <div className="col mb-4">
                  <Field
                    name="firstName"
                    className="form-control lg"
                    type="text"
                    placeholder="First Name *"
                    required=""
                  />
                  <ErrorMessage
                    name="firstName"
                    render={(msg) => (
                      <small className="text-danger">{msg}</small>
                    )}
                  ></ErrorMessage>
                </div>
                <div className="col mb-4">
                  <Field
                    name="lastName"
                    className="form-control lg"
                    type="text"
                    placeholder="Last Name *"
                    required=""
                  />
                  <ErrorMessage
                    name="lastName"
                    render={(msg) => (
                      <small className="text-danger">{msg}</small>
                    )}
                  ></ErrorMessage>
                </div>
                <div className="col mb-4">
                  <Field
                    name="email"
                    className="form-control lg"
                    type="email"
                    placeholder="Email *"
                    required=""
                  />
                  <ErrorMessage
                    name="email"
                    render={(msg) => (
                      <small className="text-danger">{msg}</small>
                    )}
                  ></ErrorMessage>
                </div>
                <div className="col mb-4">
                  <Field
                    name="mobile"
                    className="form-control lg"
                    type="number"
                    placeholder="Mobile Number *"
                    required=""
                  />
                  <ErrorMessage
                    name="mobile"
                    render={(msg) => (
                      <small className="text-danger">{msg}</small>
                    )}
                  ></ErrorMessage>
                </div>
              </div>

              <div className="mb-4 position-relative">
                <Field
                  className="form-control lg"
                  type="password"
                  name="password"
                  placeholder="Password *"
                  required=""
                />
                <ErrorMessage
                  name="password"
                  render={(msg) => <small className="text-danger">{msg}</small>}
                ></ErrorMessage>
              </div>
              <div className="mb-4 position-relative">
                <Field
                  className="form-control lg"
                  type="text"
                  id="password-field"
                  name="confirmPassword"
                  placeholder="Confirm Password *"
                  required=""
                />
                <ErrorMessage
                  name="confirmPassword"
                  render={(msg) => <small className="text-danger">{msg}</small>}
                ></ErrorMessage>
              </div>

              <div className="pb-1">
                <div className="d-flex flex-wrap align-items-center justify-content-between pb-2">
                  <form-check className="my-1">
                    <Field
                      name="checked"
                      className="form-check-input"
                      type="checkbox"
                      id="keep-signedin"
                    />
                    <label
                      className="form-check-label ms-1"
                      htmlFor="keep-signedin"
                    >
                      I agree to <a href="#">Terms &amp; Conditions</a>
                    </label>
                  </form-check>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-lg btn-primary w-50 text-uppercase"
                  disabled={!(dirty && isValid)}
                >
                  Sign Up
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
      <h2 className="h6 font-medium text-muted text-center py-4">
        <div className="d-flex align-items-center">
          <div className="flex-grow-1">
            <hr className="theme-color border-2" />
          </div>
          <div className="px-2 theme-color">OR</div>
          <div className="flex-grow-1 theme-color">
            <hr className="theme-color border-2" />
          </div>
        </div>
      </h2>
      <div className="row row-cols-1 row-cols-sm-2 gy-3 justify-content-center">
        <div className="col-6 col-md-4">
          <button
            className="btn btn--googleplus w-100 font--medium"
            onClick={googleAuth}
          >
            <i className="fa-brands fa-google-plus-g me-2" />
            Google
          </button>
        </div>
        <div className="col-6 col-md-4">
          <button
            className="btn btn--facebook w-100 font--medium"
            onClick={facebookAuth}
          >
            <i className="fa-brands fa-facebook me-2" />
            Facebook
          </button>
        </div>
      </div>
    </>
  );
}

export default Register;
