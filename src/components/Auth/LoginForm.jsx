"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { useSearchParams } from "next/navigation";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import axios from "axios";
import config from "@/config";
function LoginForm() {
  const searchParams = useSearchParams();
  const referrer = searchParams.get("referrer");
  const ID = searchParams.get("ID");
  const [msg, setMessage] = useState("");
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string().required("Pasword is required"),
  });
  console.log(searchParams.get("referrder"));
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const login = await axios.post(
        `${config.API_URL}/auth/landing/login`,
        values,
        { withCredentials: true }
      );
      if (login) {
        if (referrer == null && ID == null) {
          window.location.replace("/");
        } else {
          window.location.replace(`/${referrer}/${ID}`);
        }
      } else {
        setMessage("Wrong Credentials. Please try again");
        setTimeout(() => {
          setSubmitting(false);
          resetForm();
          setMessage("");
        }, 2000);
      }
    } catch (err) {
      setMessage("Something went wrong. Please try again");
      setTimeout(() => {
        setSubmitting(false);
        resetForm();
        setMessage("");
      }, 2000);
    }
  };

  const googleAuth = () => {
    window.open(`http://localhost:9000/auth/google/callback`, "_self");
  };
  const facebookAuth = () => {
    window.open(`http://localhost:9000/auth/facebook/callback`, "_self");
  };
  return (
    <>
      <h5 className="fs-2">Log in To Your Account</h5>
      <p className="pb-3 mb-3 mb-lg-4">Welcome Back! Select Method to Login:</p>
      {!msg == "" ? (
        <div className="alert alert-danger" role="alert">
          {msg}
        </div>
      ) : null}
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue, errors, dirty, isValid }) => {
          return (
            <Form>
              <div className="position-relative mb-4 ">
                <i className="fa-regular fa-envelope position-absolute top-50 start-0 translate-middle-y ms-3" />
                <Field
                  className="form-control lg ps-5"
                  type="email"
                  placeholder="Email address"
                  required=""
                  name="email"
                />
              </div>
              <div className="mb-4 position-relative">
                <i className="fa-solid fa-lock position-absolute top-50 start-0 translate-middle-y ms-3" />
                <Field
                  className="form-control lg ps-5"
                  type="password"
                  id="password-field"
                  name="password"
                  placeholder="Password"
                  required=""
                />
                <span className="fa-solid fa-eye toggle-password position-absolute top-50 end-0 translate-middle-y me-3" />
              </div>
              <div className="pb-3">
                <div className="d-flex flex-wrap align-items-center justify-content-between pb-4">
                  <form-check className="my-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="keep-signedin"
                    />
                    <label
                      className="form-check-label ms-1"
                      htmlFor="keep-signedin"
                    >
                      Keep me signed in
                    </label>
                  </form-check>
                  <Link
                    className="fs-sm fw-semibold text-decoration-none my-1"
                    href="/forgot-password"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <button
                className="btn btn-lg btn-primary w-100"
                type="submit"
                disabled={!(dirty && isValid)}
              >
                Sign In
              </button>
            </Form>
          );
        }}
      </Formik>

      <h2 className="h6 font--medium text-muted text-center py-4">
        Or sign in with your social account
      </h2>
      <div className="row row-cols-1 row-cols-sm-2 gy-3">
        <div className="col">
          <button
            className="btn btn--googleplus w-100 font--medium"
            onClick={googleAuth}
          >
            <i className="fa-brands fa-google-plus-g me-2" />
            Google
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn--facebook w-100 font--medium"
            onClick={facebookAuth}
          >
            <i className="fa-brands fa-facebook me-2" />
            Facebook
          </button>
        </div>
      </div>
      <p className="pt-4 text-center">
        <span className="text-muted">Don't have account?</span>{" "}
        <Link className="text-primary font--medium" href="/register">
          Create An Account
        </Link>
      </p>
    </>
  );
}

export default LoginForm;
