"use client";
import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../../../context/context";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { state_arr } from "@/components/CIties";
import axios from "axios";
import config from "@/config";
import Loading from "@/components/Loading";
import Link from "next/link";
import Image from "next/image";

// Icon styles
const iconStyles = {
  Gold: { color: "gold" },
  Silver: { color: "silver" },
  Platinum: { color: "#e5e4e2" },
  "Corporate / Institutional": { color: "#0000FF" },
};

function Profile() {
  const [loader, setLoader] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
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
        { withCredentials: true }
      );
      if (profile) {
        setLoader(false);
        toast.success(profile.data.message, {
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

  const [bookingCount, setBookingCount] = useState();
  const [classesCount, setClassesCount] = useState();
  const [membership, setMembership] = useState([]);
  const [totalCoins , setTotalCoins] =useState(0);
  useEffect(() => {
    axios
      .get(`${config.API_URL}/landing/subscription/mysubscriptions`, {
        withCredentials: true,
      })
      .then((result) => {
        setMembership(result?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/landing/class-registration/my-classes`, {
        withCredentials: true,
      })
      .then((result) => {
        setClassesCount(result?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/landing/bookings`, { withCredentials: true })
      .then((result) => {
        setBookingCount(result?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
// Total Coins 
  useEffect(() => {
    if (user) {
      axios
        .get(
          `${config.API_URL}/landing/wallet/${user?._id}/total-coins`,
          {
            withCredentials: true,
          }
        )
        .then((result) => {
          setTotalCoins(result?.data?.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user]);

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
              {/* Membership Plan Section */}
              <div className="membership-plan mb-4">
                <h2 className="theme-color mb-3">
                  Welcome , {user?.firstName} {user?.lastName}
                </h2>
                <div className="d-flex justify-content-center align-items-center mb-2">
                  {membership[0]?.planName === "Gold" && (
                    <i
                      className="fa fa-trophy fa-3x"
                      style={iconStyles.Gold}
                      aria-hidden="true"
                    ></i>
                  )}
                  {membership[0]?.planName === "Silver" && (
                    <i
                      className="fa fa-medal fa-3x"
                      style={iconStyles.Silver}
                      aria-hidden="true"
                    ></i>
                  )}
                  {membership[0]?.planName === "Platinum" && (
                    <i
                      className="fa fa-crown fa-3x"
                      style={iconStyles.Platinum}
                      aria-hidden="true"
                    ></i>
                  )}
                  {membership[0]?.planName === "Corporate / Institutional" && (
                    <i
                      className="fa fa-briefcase fa-3x"
                      style={iconStyles["Corporate / Institutional"]}
                      aria-hidden="true"
                    ></i>
                  )}
                  <h4 className="text-dark">&nbsp; &nbsp;Current Credits: {totalCoins?.totalCoins}</h4>
                </div>
              </div>
              <Image
                src="/assets/img/welcome.jpg"
                alt="welcome"
                width={700}
                height={350}
              />
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
                      You have a total of{" "}
                      <strong>
                        {" "}
                        {bookingCount && bookingCount?.length} bookings
                      </strong>{" "}
                      for venues and events.Manage and review your bookings
                      easily through our platform.
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
                      You have a total of{" "}
                      <strong>
                        {classesCount && classesCount?.length} learning
                      </strong>{" "}
                      classes. Manage and review your classes easily through our
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
                className="alert alert-info"
                style={{
                  marginTop: "20px",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <strong>Note:</strong> Please make sure to keep your profile
                information updated for a smooth experience.
              </div>
              <button
                className="btn btn-primary mt-4"
                onClick={() => setShowProfile(true)}
              >
                View Profile
              </button>
            </div>
          ) : (
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <Field
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">
                      Mobile
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="mobile"
                      name="mobile"
                    />
                    <ErrorMessage
                      name="mobile"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="gender" className="form-label">
                      Gender
                    </label>
                    <Field
                      as="select"
                      className="form-control"
                      id="gender"
                      name="gender"
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </Field>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="state" className="form-label">
                      State
                    </label>
                    <Field
                      as="select"
                      className="form-control"
                      id="state"
                      name="state"
                    >
                      <option value="">Select State</option>
                      {state_arr.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="city" className="form-label">
                      City
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="pincode" className="form-label">
                      Pincode
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="pincode"
                      name="pincode"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Updating..." : "Update Profile"}
                  </button>
                </Form>
              )}
            </Formik>
          )}
        </div>
      )}
    </div>
  );
}

export default Profile;
