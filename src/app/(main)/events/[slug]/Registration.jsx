"use client";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import * as Yup from "yup";
import { UserContext } from "../../../../../context/context";
import axios from "axios";
import { s_a, state_arr } from "@/components/CIties";
import config from "@/config";
import Loading from "@/components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "@/components/Auth/LoginForm";

function Registration(props) { 
  const [loader, setLoader] = useState(false);
  const context = useContext(UserContext);
  const user = context && context;
  const event = props && props.event;
  const initialValues = {
    bookingType: "event",
    eventType: event && event.eventType,
    ticketSystem: event && event.ticketSystem,
    event: event && event._id,
    club: event && event.club,
    team: "",
    user: (user && user.data && user.data._id) || "",
    noOfTickets: 1,
    fullName:
      (user && user.data && user.data.firstName + " " + user.data.lastName) ||
      "",
    email: (user && user.data && user.data.email) || "",
    mobile: (user && user.data && user.data.mobile) || "",
    gender: (user && user.data && user.data.gender) || "male",
    address: "",
    city: (user && user.data && user.data.city) || "",
    state: (user && user.data && user.data.state) || "",
    pincode: (user && user.data && user.data.pincode) || "",
    members: [
      {
        name: "",
        age: "",
        mobile: "",
      },
    ],
    amount: event && event.entryFees,
    checked: false,
  };
  const validationSchema = Yup.object({
    fullName: Yup.string().min(1).required("Full Name is required"),
    email: Yup.string().email().required("Email is required"),
    mobile: Yup.string().required("Mobile no. is required"),
    gender: Yup.string().required("Gender is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    pincode: Yup.string()
      .matches(/^[0-9]{6}$/, "Must be exactly 6 digits")
      .required("Pincode is required"),
    team: Yup.string().when("eventType", {
      is: (type) => type == "tournament",
      then: () => Yup.string().required("Team name is required"),
    }),
    members:
      event && event.eventType == "tournament"
        ? Yup.array().of(
            Yup.object().shape({
              name: Yup.string().required("Name is required"),
            })
          )
        : null,
    noOfTickets: Yup.number().when("ticketSystem", {
      is: (check) => check == true,
      then: () =>
        Yup.number().positive().required("No. of Tickets are required"),
    }),
    checked: Yup.bool().oneOf([true], "Field must be checked"),
  });
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    setLoader(true);
    if (user && user.code == "unauthorised") {
      window.location.replace("/login");
    } else {
      const _data = {
        ...values,
        eventDate : event.eventDate,
        title : event.title,
        amount: values.noOfTickets * values.amount * 100,
      };
      axios
        .post(`${config.API_URL}/landing/payments/orders`, _data, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data && res.data.code == "duplicate") {
            toast.warning(res.data && res.data && res.data.message, {
              position: "top-right",
              autoClose: 2000,
              onClose: () => {
                setLoader(false);
                setSubmitting(false);
                resetForm(true);
                const closeBtn =
                  document && document.getElementById("registrationClose");
                closeBtn.click();
              },
            });
          } else {
            handleOpenRazorpay({ ...res.data.data, _data , eventDate : event.eventDate,
              title : event.title, });
          }
        })
        .catch((err) => {
          setLoader(false);
          console.log(err);
        });
    }
  };

  const handleOpenRazorpay = (data) => {
    var options = {
      // key: "rzp_test_1KAe5ngzKfHbdN", // Enter the Key ID generated from the Dashboard
      Key :"rzp_live_gk7iMvPaNzkvr2",
      amount: Number(data.amount * 100), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: data.currency,
      name: "Sportzon",
      description:
        "Description of the purchase item shown on the Checkout form. It should start with an alphanumeric character.",
      image: "http://localhost:8080/assets/img/logo/fav-color.png",
      order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      // "callback_url": "",
      prefill: {
        name: data.values && data.values.fullName,
        email: data.values && data.values.email,
        contact: data.values && data.values.mobile,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#ff611a",
      },
      handler: function (response) {
        axios
          .post(
            `${config.API_URL}/landing/bookings/process`,
            { response: response, data: data?._data },
            { withCredentials: true }
          )
          .then((res) => {
            toast.success(res.data && res.data && res.data.message, {
              position: "top-right",
              autoClose: 2000,
              onClose: () => {
                setLoader(false);
                const closeBtn =
                  document && document.getElementById("registrationClose");
                closeBtn.click();
              },
            });
          })
          .catch((err) => {
            setLoader(false);
            console.log(err);
          });
      },
    };
    var rzp = new window.Razorpay(options);
    rzp.on("payment.failed", function (response) {
      axios
        .post(
          `${config.API_URL}/landing/payments/failed-payment`,
          {
            order_id: response.error.metadata.order_id,
            payment_id: response.error.metadata.payment_id,
            status: "failed",
          },
          { withCredentials: true }
        )
        .then(() => {
          alert(response.error.description);
        })
        .catch((err) => {
          console.log(err);
        });

      alert(response.error.metadata.payment_id);
    });
    rzp.open();
  };

  return (
    <>
      <ToastContainer />

      {user && user.code == "unauthorised" ? (
        <div className="modal-body">
          <LoginForm />
        </div>
      ) : (
        <>
          <div className="modal-header">
            <div className="mdl-title mb-1">
              <h4 className="modal-header-title" style={{ fontSize: "24px" }}>
                {event?.eventType} Registration
              </h4>
              <p>
                Please book for your {event?.eventType} by filling the form
                below, specify the expected number joining the {event?.eventType}
                .
              </p>
            </div>
          </div>
          <div className="modal-body">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              enableReinitialize
            >
              {({ values, setFieldValue, dirty, isValid }) => {
                const totalAmount = (ticket) => {
                  const fees = event && event.entryFees;
                  const netAmount = parseFloat(fees * ticket);
                  return netAmount;
                };
                return (
                  <div className="col-12">
                    {loader == true ? (
                      <Loading />
                    ) : (
                      <Form className="row">
                        {event && event.memberType == "team" ? (
                          <div className="form-floating mb-4">
                            <div className="col-lg-12 col-sm-12 col-xs-12 col-xl-12">
                            <label>Team Name</label>
                              <Field
                                type="text"
                                name="team"
                                className="form-control"
                                placeholder="Enter Team Name"
                              />
                              
                            </div>
                          </div>
                        ) : null}
                        <div className="col-lg-6 col-sm-6 col-xs-12 col-xl-6 p-1">
                          <div className="form-floating mb-1">
                            <Field
                              type="text"
                              name="fullName"
                              className="form-control"
                            />
                            <label>Full Name</label>
                            <ErrorMessage
                              name="fullName"
                              render={(msg) => (
                                <small className="text-danger">{msg}</small>
                              )}
                            ></ErrorMessage>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-xs-12 col-xl-6 p-1">
                          <div className="form-floating mb-1">
                            <Field
                              type="email"
                              name="email"
                              className="form-control"
                            />
                            <label>Email</label>
                            <ErrorMessage
                              name="email"
                              render={(msg) => (
                                <small className="text-danger">{msg}</small>
                              )}
                            ></ErrorMessage>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-xs-12 col-xl-6 p-1">
                          <div className="form-floating mb-1">
                            <Field
                              type="number"
                              name="mobile"
                              className="form-control"
                            />
                            <label>Mobile</label>
                            <ErrorMessage
                              name="mobile"
                              render={(msg) => (
                                <small className="text-danger">{msg}</small>
                              )}
                            ></ErrorMessage>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-xs-12 col-xl-6 p-1">
                          <div className="form-floating mb-1">
                            <Field
                              as="select"
                              name="gender"
                              className="form-select"
                            >
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                            </Field>
                            <label>Gender</label>
                            <ErrorMessage
                              name="gender"
                              render={(msg) => (
                                <small className="text-danger">{msg}</small>
                              )}
                            ></ErrorMessage>
                          </div>
                        </div>
                        <div className="col-lg-12 col-sm-12 col-xs-12 col-xl-12 p-1">
                          <div className="form-floating mb-1">
                            <Field
                              type="textarea"
                              name="address"
                              className="form-control"
                            ></Field>
                            <label>Address</label>
                            <ErrorMessage
                              name="address"
                              render={(msg) => (
                                <small className="text-danger">{msg}</small>
                              )}
                            ></ErrorMessage>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-xs-12 col-xl-4 p-1">
                          <div className="form-floating mb-1">
                            <Field
                              as="select"
                              name="state"
                              className="form-select"
                            >
                              <option disabled selected value="">
                                --Select a State--
                              </option>
                              {state_arr &&
                                state_arr.map((item, index) => {
                                  return <option key={index}>{item}</option>;
                                })}
                            </Field>
                            <label>State</label>
                            <ErrorMessage
                              name="state"
                              render={(msg) => (
                                <small className="text-danger">{msg}</small>
                              )}
                            ></ErrorMessage>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-xs-12 col-xl-4 p-1">
                          <div className="form-floating mb-1">
                            <Field
                              as="select"
                              className="form-select"
                              name="city"
                            >
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
                            <label>City</label>
                            <ErrorMessage
                              name="city"
                              render={(msg) => (
                                <small className="text-danger">{msg}</small>
                              )}
                            ></ErrorMessage>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-xs-12 col-xl-4 p-1">
                          <div className="form-floating mb-1">
                            <Field
                              type="number"
                              name="pincode"
                              className="form-control"
                            />
                            <label>Pincode</label>
                            <ErrorMessage
                              name="pincode"
                              render={(msg) => (
                                <small className="text-danger">{msg}</small>
                              )}
                            ></ErrorMessage>
                          </div>
                        </div>

                        {event && event.ticketSystem == true ? (
                          <div className="col-lg-6 col-sm-6 col-xs-12 col-xl-6 p-1">
                            <div className="form-floating mb-1">
                              <Field
                                type="number"
                                name="noOfTickets"
                                className="form-control"
                                min={1}
                                max={1000}
                                onChange={(e) => {
                                  setFieldValue(
                                    "amount",
                                    totalAmount(e.target.value)
                                  );
                                  setFieldValue("noOfTickets", e.target.value);
                                }}
                              />
                              <label>No. of Tickets</label>
                              <ErrorMessage
                                name="noOfTickets"
                                render={(msg) => (
                                  <small className="text-danger">{msg}</small>
                                )}
                              ></ErrorMessage>
                            </div>
                          </div>
                        ) : null}
                        {event && event.memberType == "team" ? (
                          <>
                            <strong className="mt-4 mb-2">
                              Member&#39;s Details
                            </strong>
                            <FieldArray name="members">
                              {({ remove, push }) => (
                                <>
                                  <button
                                    type="button"
                                    className="btn btn-outline-success btn-sm float-end w-100"
                                    onClick={() =>
                                      push({ name: "", age: "", mobile: "" })
                                    }
                                  >
                                    <i className="fa fa-plus me-2" /> Add Member
                                  </button>
                                  {values.members.length > 0 &&
                                    values.members.map((member, index) => (
                                      <div
                                        className="row row-xs align-items-center"
                                        key={index}
                                      >
                                        <div className="col-sm-4">
                                          <div className="form-floating mt-2">
                                            <Field
                                              type="text"
                                              name={`members.${index}.name`}
                                              className="form-control"
                                              placeholder="ABC Team"
                                            />
                                            <label>Player&#39;s Name</label>
                                            <ErrorMessage
                                              name={`members.${index}.name`}
                                              render={(msg) => (
                                                <small className="text-danger">
                                                  {msg}
                                                </small>
                                              )}
                                            ></ErrorMessage>
                                          </div>
                                        </div>
                                        <div className="col-sm-3 ps-0">
                                          <div className="form-floating mt-2">
                                            <Field
                                              as="select"
                                              name={`members.${index}.age`}
                                              className="form-control"
                                              placeholder="ABC Team"
                                            >
                                              <option value={""}>
                                                --Age--
                                              </option>
                                              <option>10-18 Years</option>
                                              <option>18-25 Years</option>
                                              <option>25-35 Years</option>
                                              <option>Above 35 Years</option>
                                            </Field>
                                            <label>Age</label>
                                          </div>
                                        </div>
                                        <div className="col-sm-4 ps-0">
                                          <div className="form-floating mt-2">
                                            <Field
                                              type="text"
                                              name={`members.${index}.mobile`}
                                              className="form-control"
                                              placeholder="ABC Team"
                                            />
                                            <label>Player&#39;s Contact</label>
                                          </div>
                                        </div>
                                        <div className="col-sm-1 ps-0">
                                          <button
                                            type="button"
                                            className="btn btn-outline-danger btn-sm me-1"
                                            onClick={() => remove(index)}
                                          >
                                            <i className="fa fa-minus me-1" />
                                          </button>
                                        </div>
                                      </div>
                                    ))}
                                </>
                              )}
                            </FieldArray>
                          </>
                        ) : null}

                        <div className="form-group mt-2">
                          <h3 className="text-primary text-end">
                            ₹{values.amount}
                          </h3>

                          <Field
                            name="checked"
                            type="checkbox"
                            className="form-check-input me-2"
                            id="flexCheckDefault"
                          ></Field>
                          <span htmlFor="flexCheckDefault">
                            I understand that I am responsible for reading and
                            understanding the terms and conditions of the event
                            or service I am registering for.
                          </span>
                        </div>
                        <div className="form-group mt-5">
                          <button
                            disabled={!(dirty && isValid)}
                            className="btn btn-primary full-width font--bold btn-lg"
                          >
                            <i className="fa-solid fa-paper-plane me-2 ms-n1" />
                            Registration
                          </button>
                        </div>
                      </Form>
                    )}
                  </div>
                );
              }}
            </Formik>
          </div>
        </>
      )}
    </>
  );
}

export default Registration;
