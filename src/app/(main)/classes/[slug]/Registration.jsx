"use client";
import { s_a, state_arr } from "@/components/CIties";
import { Field, Formik, Form, ErrorMessage } from "formik";
import React, { useContext, useState, useEffect } from "react";
import * as Yup from "yup";
import { UserContext } from "../../../../../context/context";
import axios from "axios";
import config from "@/config";
import { toast } from "react-toastify";
import Loading from "@/components/Loading";
import Link from "next/link";

function Registration(props) {
  const data = props?.data;
  const club = data?.club;
  const context = useContext(UserContext);
  const [isRegistered, setIsRegistered] = useState(false);
  // const [isPaymentDone, setIsPaymentDone] = useState(false);
  const [classes, setClasses] = useState();
  const [fees, setFees] = useState();
  const [studentInfo, setStudentInfo] = useState();
  const user = context && context;

  const totalAmount = data?.fees;
  function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // If the birth month hasn't occurred yet this year or it's the same month but the birthday hasn't happened yet
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }

  // get classes registered by user
  useEffect(() => {
    axios
      .get(`${config.API_URL}/landing/class-registration/my-classes`, {
        withCredentials: true,
      })
      .then((result) => {
        setClasses(result?.data && result?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (classes) {
      setStudentInfo(
        classes?.find((item) => item?.admissionIn?._id == data?._id)
      );
    }
  }, [studentInfo, classes, data?._id]);
  // check class registeration
  useEffect(() => {
    const checkRegistrationAndPayment = async () => {
      if (user && user.code !== "unauthorised") {
        try {
          const registrationResponse = await axios.post(
            `${config.API_URL}/landing/class-registration/check-registration`,
            { class: data?._id },
            { withCredentials: true }
          );

          if (registrationResponse.data.code === "duplicate") {
            setIsRegistered(true);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    checkRegistrationAndPayment();
  }, [user, data]);

  // check fee details of student
  useEffect(() => {
    axios
      .get(`${config.API_URL}/landing/fees/${data?._id}/${studentInfo?._id}`, {
        withCredentials: true,
      })
      .then((result) => {
        setFees(result?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [studentInfo, data?._id]);

  useEffect(() => {
    console.log(fees);
  }, [fees]);
  const isCurrentMonthFeePaid = () => {
    // Get the current month number (1 to 12)
    const currentMonth = new Date().getMonth() + 1;

    // Check if there is a feeDetail for the current month that is paid
    const feeDetail = fees?.data.find((detail) => {
      return new Date(detail?.feeDate).getMonth() + 1 === currentMonth;
    });

    return !!feeDetail; // Returns true if feeDetail is found and isPaid is true, otherwise false
  };
  const feedetails = isCurrentMonthFeePaid();
  const initialValues = {
    class: data?._id,
    club: club,
    classTiming: "",
    fullName: "",
    mobile: "",
    email: "",
    dateOfBirth: "",
    gender: "male",
    height: "",
    weight: "",
    age: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    parentName: "",
    parentMobile: "",
    parentEmail: "",
    emergencyName: "",
    emergencyMobile: "",
    subtotal: data?.fees,
    totalAmount: totalAmount * 100,
    gst: (data?.fees * 18) / 100,
    discount: 0,
    balance: 0,
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    fullName: Yup.string().min(1).required("Full Name is required"),
    classTiming: Yup.string().required("Class Timing is required"),
    email: Yup.string().email("Invalid Email Format"),
    mobile: Yup.string()
      .matches(phoneRegExp, "Phone no. is not valid")
      .required("Phone no. is required"),
    parentName: Yup.string().required("Parent Name is required"),
    parentMobile: Yup.string()
      .matches(phoneRegExp, "Phone no. is not valid")
      .required("Phone no. is required"),
    gender: Yup.string().required("Gender is required"),
    height: Yup.number()
      .positive("Height must be a positive number")
      .typeError("Height must be a number"),
    weight: Yup.number()
      .positive("Weight must be a positive number")
      .typeError("Weight must be a number"),
    dateOfBirth: Yup.string().required("Date of Birth is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    pincode: Yup.string()
      .matches(/^[0-9]{6}$/, "Must be exactly 6 digits")
      .required("Pincode is required"),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    if (user && user?.code == "unauthorised") {
      window.location.replace(`/login?referrer=classes&ID=${data?.slug}`);
    } else {
      try {
        const check = await axios.post(
          `${config.API_URL}/landing/class-registration/check-registration`,
          { class: values?.class },
          { withCredentials: true }
        );
        if (check) {
          const code = check.data && check.data.code;
          if (code == "duplicate") {
            toast.warning(check.data && check.data.message, {
              position: "top-right",
              autoClose: 2000,
              onClose: () => {
                setSubmitting(false);
                resetForm();
                window.location.replace("/user/my-classes");
              },
            });
          } else if (code == "unique") {
            proceed(values);
          }
        }
      } catch (err) {
        const error = err.response;
        toast.error(error.data && error.data && error.data.message, {
          position: "top-right",
          autoClose: 2000,
          onClose: () => {
            setSubmitting(false);
            resetForm();
          },
        });
      }
    }
  };

  const proceed = (values) => {
    axios
      .post(
        `${config.API_URL}/landing/payments/orders`,
        {
          amount: totalAmount * 100, //paidAmount
        },
        { withCredentials: true }
      )
      .then((res) => {
        handleOpenRazorpay({
          ...res.data.data,
          values: values,
        });
      })
      .catch((err) => {
        const error = err.response;
        toast.error(error.data && error.data && error.data.message, {
          position: "top-right",
          autoClose: 2000,
          onClose: () => {},
        });
      });
  };

  const handleOpenRazorpay = (data) => {
    const studentAge = calculateAge(data?.values?.dateOfBirth);
    var options = {
      // key: "rzp_test_1KAe5ngzKfHbdN", // Enter the Key ID generated from the Dashboard
      Key: "rzp_live_gk7iMvPaNzkvr2",
      amount: Number(data.amount * 100), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: data.currency,
      name: "Sportzon",
      description:
        "Description of the purchase item shown on the Checkout form. It should start with an alphanumeric character.",
      image: "http://localhost:8080/assets/img/Sportzon-EIcon.png",
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
            `${config.API_URL}/landing/class-registration`,
            {
              ...data.values,
              response: response,
              amount: data?.amount / 100,
              admissionNo: "WSX",
              admissionDate: new Date(),
              age: studentAge,
            },
            { withCredentials: true }
          )
          .then((res) => {
            toast.success(res.data && res.data && res.data.message, {
              position: "top-right",
              autoClose: 2000,
              onClose: () => {
                window.location.replace("/user/my-classes");
              },
            });
          })
          .catch((err) => {
            const error = err.response;
            toast.error(error.data && error.data && error.data.message, {
              position: "top-right",
              autoClose: 2000,
            });
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
  const handleOpenRazorpay2 = (data) => {
    var options = {
      // key: "rzp_test_1KAe5ngzKfHbdN", // Enter the Key ID generated from the Dashboard
      Key: "rzp_live_gk7iMvPaNzkvr2",
      amount: Number(data.amount * 100), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: data.currency,
      name: "Sportzon",
      description:
        "Description of the purchase item shown on the Checkout form. It should start with an alphanumeric character.",
      image: "http://localhost:8080/assets/img/Sportzon-EIcon.png",
      order_id: data?.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      // "callback_url": "",
      prefill: {
        name: data && data.fullName,
        email: data && data.email,
        contact: data && data.mobile,
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
            `${config.API_URL}/landing/fees/pay-fees`,
            {
              ...data,
              response: response,
              amount: data?.amount / 100,
            },
            { withCredentials: true }
          )
          .then((res) => {
            toast.success(res?.data && res?.data && res.data.message, {
              position: "top-right",
              autoClose: 2000,
              onClose: () => {
                window.location.replace("/user/my-bookings");
              },
            });
          })
          .catch((err) => {
            const error = err?.response;
            toast.error(error?.data && error?.data && error?.data?.message, {
              position: "top-right",
              autoClose: 2000,
            });
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

  if (isRegistered) {
    return (
      <div className="text-center p-5 d-flex flex-column card">
        <h3 className="theme-color">
        You're already registered! 
        </h3>
        {feedetails ? (
          <Link href="/user/my-classes">
            <button className="btn btn-primary">Check Class Details</button>
          </Link>
        ) : (
          <div>
            <div className="form-group">
              <h5>Please pay this month's fee.</h5>
              <ul className="list-unstyled py-3 mb-0">
                <li className="d-flex justify-content-between mb-2">
                  Subtotal:
                  <span className="fw-semibold ms-2">
                    <i className="fa fa-rupee"></i>
                    {data?.fees - (data?.fees * 18) / 100}
                  </span>
                </li>
                <li className="d-flex justify-content-between mb-2">
                  GST:
                  <span className="fw-semibold ms-2">
                    {" "}
                    <i className="fa fa-rupee"></i>
                    {(data?.fees * 18) / 100}
                  </span>
                </li>
              </ul>
              <div className="d-flex align-items-center justify-content-between border-top pt-4">
                Total:
                <span className="fs-3 font--bold text-success ms-2">
                  <i className="fa fa-rupee"></i>
                  {totalAmount}
                </span>
              </div>
            </div>
            <button
              className="btn btn-primary"
              onClick={() =>
                handleOpenRazorpay2({
                  amount: totalAmount,
                  currency: "INR",
                  // values: initialValues,
                  class: fees?.data[0]?.class,
                  club: fees?.data[0]?.club,
                  student: fees?.data[0]?.student,
                  fullName: fees?.data[0]?.firstName,
                  mobile: fees?.data[0]?.mobile,
                  email: user?.data?.email,
                  contact: user?.data?.mobile,
                  subtotal: totalAmount-(totalAmount*(18/100)),
                  gst: totalAmount * (18 / 100),
                  // feeWithGst: totalAmount,
                  // feeWithoutGst: totalAmount- (totalAmount * (18/100)),
                  paidAmount: totalAmount,
                  discount: 0,
                })
              }
            >
              Pay Fees Now
            </button>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className="detail-side-block border overflow-hidden rounded-3 mt-md-0 mt-4  shadow-lg">
      <div className="detail-side-head d-flex align-items-center theme-bg text-white p-3">
        <div className="side-flex-thumb">
          <img
            src={data?.banner}
            className="rounded-circle "
            width={55}
            height={55}
            alt=""
          />
        </div>
        <div className="side-flex-caption ps-3">
          <div className="jbs-title-iop">
            <h4 className="m-0 text-white">Class Registration Form</h4>
          </div>
          <div className="jbs-locat-oiu text-sm-white">
            <span>
              <i className="fa-solid fa-check me-1" />
              Fill Out The Form Carefully For Registration
            </span>
          </div>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, dirty, isValid, isSubmitting }) => {
          return (
            <>
              {user && user?.code == "unauthorised" ? (
                <div className="text-center p-5 d-flex flex-column">
                  <h3 className="theme-color">
                    {" "}
                    For Registration Login First !
                  </h3>
                  <Link
                    href=""
                    data-bs-toggle="modal"
                    data-bs-target="#login"
                    style={{ background: "none", color: "orange" }}
                    className="p-3"
                  >
                    {" "}
                    <button className="btn btn-lg btn-orange">
                      Click Here to LogIn !
                    </button>
                  </Link>
                  or
                  <Link
                    href="/register"
                    style={{ background: "none", color: "orange" }}
                    className="p-3"
                  >
                    {" "}
                    <button className="btn btn-lg btn-orange pt-3">
                      Register Now !
                    </button>
                  </Link>
                </div>
              ) : (
                <Form>
                  {isSubmitting ? (
                    <Loading />
                  ) : (
                    <div className="detail-side-middle px-3 row">
                      <div className="col-lg-4">
                        <label>
                          Class Timing <span className="text-danger">*</span>
                        </label>
                        <Field
                          as="select"
                          className="form-control form-control-sm"
                          style={{ height: "43px" }}
                          placeholder=""
                          name="classTiming"
                        >
                          <option selected disabled={true} value="">
                            {" "}
                            --Select one--{" "}
                          </option>
                          {data?.classTiming?.map((item, index) => {
                            return (
                              <option value={JSON.stringify(item)} key={index}>
                                {item?.from} - {item?.to}
                              </option>
                            );
                          })}
                        </Field>
                        <ErrorMessage
                          name="classTiming"
                          render={(msg) => (
                            <small className="text-danger">{msg}</small>
                          )}
                        ></ErrorMessage>
                      </div>
                      <div className="form-group col-lg-4">
                        <label>
                          Full Name <span className="text-danger">*</span>
                        </label>
                        <Field
                          type="text"
                          className="form-control form-control-sm"
                          style={{ height: "43px" }}
                          placeholder=""
                          name="fullName"
                        />
                        <ErrorMessage
                          name="fullName"
                          render={(msg) => (
                            <small className="text-danger">{msg}</small>
                          )}
                        ></ErrorMessage>
                      </div>
                      <div className="form-group col-lg-4">
                        <label>Email </label>
                        <Field
                          type="email"
                          className="form-control form-control-sm"
                          style={{ height: "43px" }}
                          placeholder=""
                          name="email"
                        />
                        <ErrorMessage
                          name="email"
                          render={(msg) => (
                            <small className="text-danger">{msg}</small>
                          )}
                        ></ErrorMessage>
                      </div>
                      <div className="form-group col-lg-4">
                        <label>
                          Mobile <span className="text-danger">*</span>
                        </label>
                        <Field
                          className="form-control form-control-sm"
                          style={{ height: "43px" }}
                          placeholder=""
                          name="mobile"
                        />
                        <ErrorMessage
                          name="mobile"
                          render={(msg) => (
                            <small className="text-danger">{msg}</small>
                          )}
                        ></ErrorMessage>
                      </div>
                      <div className="form-group col-lg-4">
                        <label>
                          Date of Birth <span className="text-danger">*</span>
                        </label>
                        <Field
                          type="date"
                          className="form-control form-control-sm"
                          style={{ height: "43px" }}
                          placeholder=""
                          name="dateOfBirth"
                        />
                        <ErrorMessage
                          name="dateOfBirth"
                          render={(msg) => (
                            <small className="text-danger">{msg}</small>
                          )}
                        ></ErrorMessage>
                      </div>
                      <div className="form-group col-lg-4">
                        <label>Height (in cms)</label>
                        <Field
                          type="number"
                          min={1}
                          className="form-control form-control-sm"
                          style={{ height: "43px" }}
                          placeholder=""
                          name="height"
                        />
                        <ErrorMessage
                          name="height"
                          render={(msg) => (
                            <small className="text-danger">{msg}</small>
                          )}
                        ></ErrorMessage>
                      </div>
                      <div className="form-group col-lg-4">
                        <label>Weight (in Kgs)</label>
                        <Field
                          type="number"
                          min={1}
                          className="form-control form-control-sm"
                          style={{ height: "43px" }}
                          placeholder=""
                          name="weight"
                        />
                        <ErrorMessage
                          name="weight"
                          render={(msg) => (
                            <small className="text-danger">{msg}</small>
                          )}
                        ></ErrorMessage>
                      </div>

                      {/* <div className="form-group col-lg-4">
                        <label>Age:</label>
                        <Field
                          type="number"
                          min={1}
                          className="form-control form-control-sm"
                          style={{ height: "43px" }}
                          placeholder=""
                          name="age"
                        />
                        <ErrorMessage
                          name="age"
                          render={(msg) => (
                            <small className="text-danger">{msg}</small>
                          )}
                        ></ErrorMessage>
                      </div> */}

                      <div className="form-group col-lg-4">
                        <div className="elsoci">
                          <label>
                            Gender <span className="text-danger">*</span>
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <Field
                            className="form-check-input"
                            type="radio"
                            value="male"
                            name="gender"
                            id="male"
                          />
                          <label className="form-check-label" htmlFor="male">
                            Male
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <Field
                            className="form-check-input"
                            type="radio"
                            value="female"
                            name="gender"
                            id="female"
                          />
                          <label className="form-check-label" htmlFor="female">
                            Female
                          </label>
                        </div>
                        <ErrorMessage
                          name="gender"
                          render={(msg) => (
                            <small className="text-danger">{msg}</small>
                          )}
                        ></ErrorMessage>
                      </div>

                      <h5 className="theme-color"> Address Information</h5>
                      <div className="col-lg-12 col-sm-12 col-xs-12 col-xl-12 p-1">
                        <div className="form-floating mb-1">
                          <Field
                            type="textarea"
                            name="address"
                            className="form-control"
                          ></Field>
                          <label>
                            Address <span className="text-danger">*</span>
                          </label>
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
                          <label>
                            State <span className="text-danger">*</span>
                          </label>
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
                          <label>
                            City <span className="text-danger">*</span>
                          </label>
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
                          <label>
                            Pincode <span className="text-danger">*</span>
                          </label>
                          <ErrorMessage
                            name="pincode"
                            render={(msg) => (
                              <small className="text-danger">{msg}</small>
                            )}
                          ></ErrorMessage>
                        </div>
                      </div>

                      <h5 className="theme-color mt-3">
                        {" "}
                        Parent's Information
                      </h5>
                      <div className="col-lg-4 col-sm-4 col-xs-12 col-xl-4 p-1">
                        <div className="form-floating mb-1">
                          <Field
                            type="text"
                            name="parentName"
                            className="form-control"
                          />
                          <label>
                            Guardian's name{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <ErrorMessage
                            name="parentName"
                            render={(msg) => (
                              <small className="text-danger">{msg}</small>
                            )}
                          ></ErrorMessage>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-4 col-xs-12 col-xl-4 p-1">
                        <div className="form-floating mb-1">
                          <Field
                            type="text"
                            name="parentMobile"
                            className="form-control"
                          />
                          <label>
                            Phone Number <span className="text-danger">*</span>
                          </label>
                          <ErrorMessage
                            name="parentMobile"
                            render={(msg) => (
                              <small className="text-danger">{msg}</small>
                            )}
                          ></ErrorMessage>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-4 col-xs-12 col-xl-4 p-1">
                        <div className="form-floating mb-1">
                          <Field
                            type="email"
                            name="parentEmail"
                            className="form-control"
                          />
                          <label>Email</label>
                          <ErrorMessage
                            name="parentEmail"
                            render={(msg) => (
                              <small className="text-danger">{msg}</small>
                            )}
                          ></ErrorMessage>
                        </div>
                      </div>
                      {/* <h5 className="theme-color mt-3"> Emergency Contact</h5>
                      <div className="col-lg-6 col-sm-6 col-xs-12 col-xl-6 p-1">
                        <div className="form-floating mb-1">
                          <Field
                            type="text"
                            name="emergencyName"
                            className="form-control"
                          />
                          <label>Emergency Contact Name</label>
                          <ErrorMessage
                            name="emergencyName"
                            render={(msg) => (
                              <small className="text-danger">{msg}</small>
                            )}
                          ></ErrorMessage>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6 col-xs-12 col-xl-6 p-1">
                        <div className="form-floating mb-1">
                          <Field
                            type="text"
                            name="emergencyMobile"
                            className="form-control"
                          />
                          <label>Emergency Contact Number</label>
                          <ErrorMessage
                            name="emergencyMobile"
                            render={(msg) => (
                              <small className="text-danger">{msg}</small>
                            )}
                          ></ErrorMessage>
                        </div>
                      </div> */}

                      <div className="form-group">
                        <ul className="list-unstyled py-3 mb-0">
                          <li className="d-flex justify-content-between mb-2">
                            Subtotal:
                            <span className="fw-semibold ms-2">
                              <i className="fa fa-rupee"></i>
                              {data?.fees - (data?.fees * 18) / 100}
                            </span>
                          </li>
                          <li className="d-flex justify-content-between mb-2">
                            GST:
                            <span className="fw-semibold ms-2">
                              {" "}
                              <i className="fa fa-rupee"></i>
                              {(data?.fees * 18) / 100}
                            </span>
                          </li>
                        </ul>
                        <div className="d-flex align-items-center justify-content-between border-top pt-4">
                          Total:
                          <span className="fs-3 font--bold text-success ms-2">
                            <i className="fa fa-rupee"></i>
                            {totalAmount}
                          </span>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          disabled={!(dirty && isValid)}
                          className="btn btn-primary font-sm"
                          style={{ width: "65%" }}
                        >
                          REGISTER NOW
                        </button>
                      </div>
                    </div>
                  )}
                </Form>
              )}
            </>
          );
        }}
      </Formik>
    </div>
  );
}

export default Registration;
