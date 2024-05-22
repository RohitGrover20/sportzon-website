"use client";
import { s_a, state_arr } from "@/components/CIties";
import { Field, Formik, Form, ErrorMessage } from "formik";
import React, { useContext } from "react";
import * as Yup from "yup";
import { UserContext } from "../../../../../context/context";
import axios from "axios";
import config from "@/config";
import { toast } from "react-toastify";
import Loading from "@/components/Loading";

function Registration(props) {
  const data = props?.data;
  const club = data?.club;
  const context = useContext(UserContext);
  const user = context && context;
  const totalAmount = data?.fees + (data?.fees * 18) / 100;

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
    email: Yup.string().email().required("Email is required"),
    mobile: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Mobile no. is required"),
    emergencyMobile: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Contact no. is required"),
    emergencyName: Yup.string().required("Name is required"),
    gender: Yup.string().required("Gender is required"),
    height: Yup.number().required("Height is required"),
    weight: Yup.number().required("Weight is required"),
    dateOfBirth: Yup.string().required("Date of Birth is required"),
    age: Yup.number().required("Age is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    pincode: Yup.string()
      .matches(/^[0-9]{6}$/, "Must be exactly 6 digits")
      .required("Pincode is required"),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    if (user && user.code == "unauthorised") {
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
            `${config.API_URL}/landing/class-registration`,
            { ...data.values, response: response, amount: data.amount / 100 },
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
  return (
    <div className="detail-side-block border overflow-hidden rounded-3 mt-md-0 mt-4  shadow-lg">
      <div className="detail-side-head d-flex align-items-center bg-primary text-white p-3">
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
              Fill out the form carefully for registration
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
            <Form>
              {isSubmitting ? (
                <Loading />
              ) : (
                <div className="detail-side-middle py-3 px-3 row">
                  <div className="form-group col-lg-4">
                    <label>Class Timing</label>
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
                    <label>Full Name:</label>
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
                    <label>Email:</label>
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
                    <label>Mobile:</label>
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
                    <label>Date of Birth:</label>
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

                  <div className="form-group col-lg-4">
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
                  </div>

                  <div className="form-group col-lg-4">
                    <div className="elsoci">
                      <label>Gender:</label>
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

                  <h5> Address Information</h5>
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
                      <Field as="select" name="state" className="form-select">
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
                      <Field as="select" className="form-select" name="city">
                        <option selected value="">
                          --Select a City--
                        </option>
                        {s_a[state_arr.indexOf(values && values.state)] &&
                          s_a[state_arr.indexOf(values && values.state)].split(
                            "|"
                          ) &&
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

                  <h5> Parent's Information (if participant is under 18)</h5>

                  <div className="col-lg-4 col-sm-4 col-xs-12 col-xl-4 p-1">
                    <div className="form-floating mb-1">
                      <Field
                        type="text"
                        name="parentName"
                        className="form-control"
                      />
                      <label>Parent's/Guardian's name</label>
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
                      <label>Phone Number</label>
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
                  <h5> Emergency Contact</h5>

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
                  </div>

                  <div className="form-group">
                    <ul className="list-unstyled py-3 mb-0">
                      <li className="d-flex justify-content-between mb-2">
                        Subtotal:
                        <span className="fw-semibold ms-2">
                          <i className="fa fa-rupee"></i>
                          {data?.fees}
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
                      <span className="fs-3 font--bold text-dark ms-2">
                        <i className="fa fa-rupee"></i>
                        {totalAmount}
                      </span>
                    </div>
                  </div>

                  <div className="form-group">
                    <button
                      disabled={!(dirty && isValid)}
                      className="btn btn-primary full-width font-sm"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Registration;
