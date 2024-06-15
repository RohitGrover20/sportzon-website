"use client";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useSearchParams } from "next/navigation";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import axios from "axios";
import config from "@/config";
import Image from "next/image";
import { useRouter } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const [redirect, setRedirect] = useState(null); // Store redirect URL for page login

  const [show, setShow] = useState(false);
  const searchParams = useSearchParams();
  const referrer = searchParams.get("referrer");
  const ID = searchParams.get("ID");
  const [msg, setMessage] = useState("");
  const initialValues = {
    username: "",
    password: "",
    mobile: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("This field is required"),
    password: Yup.string().required("Pasword is required"),
  });
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const login = await axios.post(
        `${config.API_URL}/auth/landing/login`,
        values,
        { withCredentials: true }
      );
      if (login) {
        if (referrer == null && ID == null) {
          router.push(redirect);
          window.location.reload();
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
  // Store the current page URL before navigating to the login page
  const googleAuth = () => {
    window.open(`${config.API_URL}/auth/google`, "_self");
  };
  const facebookAuth = () => {
    window.open(`${config.API_URL}/auth/facebook`, "_self");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRedirect(window?.location?.href);
    }
  }, [redirect, router.asPath]);
  return (
    <>
      <h5 className="display-1 bold fw-bold text-center text-orange mb-0">
        Welcome
      </h5>
      <p className="pb-2 mb-2 mb-lg-4 text-center fs-6 text-orange">
        Login With Email
      </p>
      {!msg == "" ? (
        <div className="alert alert-danger" role="alert">
          Wrong Credentials entered
        </div>
      ) : null}
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ dirty, isValid }) => {
          return (
            <Form>
              <div className="mb-4">
                <div className="position-relative theme-color">
                  <i className="fa-regular theme-color fa-envelope position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                  <Field
                    className="form-control ps-5"
                    type="text"
                    placeholder="Registered Email address/ Mobile No."
                    required=""
                    name="username"
                  />
                </div>
                <ErrorMessage
                  name="username"
                  render={(msg) => (
                    <small className="text-danger d-block ms-5 mt-1">
                      {msg}
                    </small>
                  )}
                />
              </div>

              <div className="mb-4">
                <div className="position-relative theme-color">
                  <i className="fa-solid fa-lock theme-color position-absolute top-50 start-0 translate-middle-y ms-3" />
                  <Field
                    className="form-control lg ps-5 theme-color"
                    type={show ? "type" : "password"}
                    id="password-field"
                    name="password"
                    placeholder="Password"
                    required=""
                  />
                  <span
                    className="fa-solid fa-eye toggle-password position-absolute top-50 end-0 translate-middle-y me-3"
                    style={{ cursor: "pointer" }}
                    onClick={() => setShow(!show)}
                  />
                </div>
                <ErrorMessage
                  name="password"
                  render={(msg) => (
                    <small className="text-danger d-block ms-5 mt-1">
                      {msg}
                    </small>
                  )}
                ></ErrorMessage>
              </div>
              <div className="pb-1">
                <div className="d-flex flex-wrap flex-row-reverse pb-4">
                  <Link
                    className="fs-sm fw-semibold text-decoration-none my-1 theme-color"
                    href="/forgot-password"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <button
                  className="btn btn-lg btn-orange w-50"
                  type="submit"
                  disabled={!(dirty && isValid)}
                >
                  LOGIN
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

      <div className="row justify-content-center">
        <div className="col-6 col-md-4">
          {" "}
          <button
            className="btn btn--googleplus w-100 font--medium"
            onClick={googleAuth}
          >
            <Image
              src="/assets/img/Google__G__Logo.png"
              width={20}
              height={20}
              alt="Google Logo"
            />
          </button>
        </div>
        <div className="col-6 col-md-4">
          {" "}
          <button
            className="btn btn--facebook w-100 font--medium"
            onClick={facebookAuth}
          >
            <i className="fa-brands fa-facebook me-2 fs-2" />
          </button>
        </div>
      </div>

      <p className="pt-4 text-center">
        <span className="text-orange">Don't have account?</span>{" "}
        <Link
          className="text-orange fw-bold text-decoration-underline"
          href="/register"
        >
          Register Now
        </Link>
      </p>
    </>
  );
}

export default LoginForm;
