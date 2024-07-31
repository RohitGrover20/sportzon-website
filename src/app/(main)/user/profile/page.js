"use client";
import React, { useContext, useState , useEffect } from "react";
import { UserContext } from "../../../../../context/context";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { s_a, state_arr } from "@/components/CIties";
import axios from "axios";
import config from "@/config";
import Loading from "@/components/Loading";
import Link from "next/link";
import Image from "next/image";
function Profile() {
  const [loader, setLoader] = useState(false);
  const [showProfile, setShowProfile] = useState(false); // State to manage view
  const context = useContext(UserContext);
  const user = context && context.data;
  const initialValues = {
    firstName: (user && user?.firstName) || "",
    lastName: (user && user?.lastName) || "",
    email: (user && user?.email) || "",
    mobile: (user && user?.mobile) || "",
    gender: (user && user?.gender) || "",
    state: (user && user?.state) || "",
    city: (user && user?.city) || "",
    pincode: (user && user?.pincode) || "",
  };
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    mobile: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Mobile is required"),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setLoader(true);
      const profile = await axios.post(
        `${config.API_URL}/landing/auth/profile-update`,
        values,
        {
          withCredentials: true,
        }
      );
      if (profile) {
        setLoader(false);
        toast.success(profile && profile.data && profile.data.message, {
          position: "top-right",
          autoClose: 2000,
          onClose: () => {
            setSubmitting(false);
            resetForm(true);
            window.location.reload();
          },
        });
      } else {
        setLoader(false);
        toast.error("Couldn't proceed. Try again later", {
          position: "top-right",
          autoClose: 2000,
          onClose: () => {
            setSubmitting(false);
            resetForm(true);
          },
        });
      }
    } catch (err) {
      setLoader(false);
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
const [bookingCount , setBookingCount] = useState();
const [classesCount , setClassesCount] = useState();
useEffect(() => {
  axios
    .get(`${config.API_URL}/landing/class-registration/my-classes`, {
      withCredentials: true,
    })
    .then((result) => {
      setClassesCount(result?.data && result?.data?.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);
  useEffect(() => {
    axios
      .get(`${config.API_URL}/landing/bookings`, { withCredentials: true })
      .then((result) => {
        setBookingCount(result?.data && result?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="dash-wrapsw card border-0 rounded-4 mb-4">
      <div className="card-header">
        <h3 className="theme-color p-2">Personal Information</h3>
      </div>
      <ToastContainer />
      {!user || loader ? (
        <Loading />
      ) : (
        <div className="card-body">
          {!showProfile ? (
            <div className="text-center">
              <h2 className="theme-color mb-4">
                <span>Welcome ,</span>
                <span className="text-orange">
                  {user?.firstName} {user?.lastName}
                </span>
              </h2>
              <Image src="/assets/img/welcome.jpg" alt="welcome" width={700} height={350}/>
              <div>
              <p className="fs-6 text-orange">
                  Here's a quick look at your profile and activities !
                </p>
                <div className="d-flex justify-content-around fs-6 text-dark m-3 profile-card">
                  <span>Name : {user?.firstName}</span>{" "}
                  <span>Email Id : {user?.email}</span>
                  <span>Mobile No. : {user?.mobile}</span>
                </div>
              </div>
              <div className="d-flex justify-content-around profile-card">
                <div
                  className="card profile-card"
                  style={{
                    zIndex: 10,
                    maxWidth: "45%",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <div className="card-body">
                    <h2 className="text-orange">My Bookings</h2>
                    <h6>Count: {bookingCount && bookingCount?.length}</h6>
                    <p className="card-text">
                      You have a total of <strong> {bookingCount && bookingCount?.length} bookings</strong> for venues
                      and events.Manage and review your bookings easily through
                      our platform.
                    </p>
                    <Link href={`/venues`} className="me-2">
                      <button className="btn btn-md btn-success text-white">
                        Book Venue Now
                      </button>
                    </Link>
                    <Link href={`/events`}>
                      <button className="btn btn-md btn-success text-white">
                        Book Event Now
                      </button>
                    </Link>
                  </div>
                </div>
                <div
                  className="card profile-card"
                  style={{
                    zIndex: 10,
                    maxWidth: "45%",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <div className="card-body">
                    <h2 className="text-orange">My Classes</h2>
                    <h6>Count: {classesCount && classesCount?.length}</h6>
                    <p className="card-text">
                      You have a total of <strong>{classesCount && classesCount?.length} learning</strong> classes.
                      Manage and review your classes easily through our
                      platform.
                    </p>
                    <Link href={`/classes`}>
                      <button className="btn btn-md btn-success text-white">
                        Book Class Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="alert alert-info mt-4"
                style={{
                  fontSize: "18px",
                  padding: "15px",
                  borderRadius: "5px",
                }}
              >
                You have upcoming bookings for venues and events. Stay organized
                and prepare for your next visit!
              </div>{" "}
              <p>Click the button below to edit your profile information.</p>
              <button
                className="btn btn-orange"
                onClick={() => setShowProfile(true)}
              >
                Edit Profile
              </button>
            </div>
          ) : (
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ values, dirty, isValid }) => {
                return (
                  <Form>
                    <div className="row row-cols-1 row-cols-sm-2 mt-3">
                      <div className="col mb-3">
                        <label className="mb-1">
                          First Name <small className="text-danger">*</small>
                        </label>
                        <Field
                          name="firstName"
                          className="form-control lg"
                          type="text"
                          placeholder="Enter first name"
                          required=""
                        />
                        <ErrorMessage
                          name="firstName"
                          render={(msg) => (
                            <small className="text-danger">{msg}</small>
                          )}
                        />
                      </div>
                      <div className="col mb-3">
                        <label className="mb-1">
                          Last Name <small className="text-danger">*</small>
                        </label>
                        <Field
                          name="lastName"
                          className="form-control lg"
                          type="text"
                          placeholder="Enter last name"
                          required=""
                        />
                        <ErrorMessage
                          name="lastName"
                          render={(msg) => (
                            <small className="text-danger">{msg}</small>
                          )}
                        />
                      </div>
                      <div className="col mb-3">
                        <label className="mb-1">
                          Mobile Number <small className="text-danger">*</small>
                        </label>
                        <Field
                          name="mobile"
                          className="form-control lg"
                          type="number"
                          placeholder="Enter mobile number"
                          required=""
                        />
                        <ErrorMessage
                          name="mobile"
                          render={(msg) => (
                            <small className="text-danger">{msg}</small>
                          )}
                        />
                      </div>
                      <div className="col mb-3">
                        <label className="mb-1">
                          Email Address <small className="text-danger">*</small>
                        </label>
                        <Field
                          name="email"
                          className="form-control lg"
                          type="email"
                          placeholder="Enter email address"
                          required=""
                        />
                        <ErrorMessage
                          name="email"
                          render={(msg) => (
                            <small className="text-danger">{msg}</small>
                          )}
                        />
                      </div>
                      <div className="col mb-3">
                        <label className="mb-1">Gender</label>
                        <Field
                          as="select"
                          name="gender"
                          className="form-select"
                        >
                          <option>Male</option>
                          <option>Female</option>
                        </Field>
                      </div>
                      <div className="col mb-3">
                        <label className="mb-1">State</label>
                        <Field as="select" name="state" className="form-select">
                          <option disabled selected value="">
                            --Select a State--
                          </option>
                          {state_arr &&
                            state_arr.map((item, index) => {
                              return <option key={index}>{item}</option>;
                            })}
                        </Field>
                        <ErrorMessage
                          name="state"
                          render={(msg) => (
                            <small className="text-danger">{msg}</small>
                          )}
                        />
                      </div>
                      <div className="col mb-3">
                        <label className="mb-1">City</label>
                        <Field as="select" className="form-select" name="city">
                          <option selected value="">
                            --Select a City--
                          </option>
                          {s_a[state_arr.indexOf(values && values.state)] &&
                            s_a[
                              state_arr.indexOf(values && values.state)
                            ].split("|") &&
                            s_a[state_arr.indexOf(values && values.state)]
                              .split("|")
                              .map((item, index) => {
                                return <option key={index}>{item}</option>;
                              })}
                        </Field>
                        <ErrorMessage
                          name="city"
                          render={(msg) => (
                            <small className="text-danger">{msg}</small>
                          )}
                        />
                      </div>
                      <div className="col mb-3">
                        <label className="mb-1">Pincode</label>
                        <Field
                          type="number"
                          name="pincode"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="d-flex justify-content-end">
                      <button
                        className="btn btn-secondary me-2"
                        type="reset"
                        disabled={!(dirty && isValid)}
                      >
                        <i className="fa fa-cancel me-2"></i>Cancel
                      </button>
                      <button
                        className="btn btn-success"
                        disabled={!(dirty && isValid)}
                      >
                        <i className="fa fa-save me-2"></i>Save
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          )}
        </div>
      )}
    </div>
  );
}

export default Profile;
