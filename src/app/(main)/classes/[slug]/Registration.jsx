"use client";
import { s_a, state_arr } from "@/components/CIties";
import { Field, Formik, Form, ErrorMessage } from "formik";
import React, { useContext } from "react";
import * as Yup from "yup";
import { UserContext } from "../../../../../context/context";

function Registration(props) {
  const data = props?.data;
  const context = useContext(UserContext);
  const user = context && context;

  const initialValues = {
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
    priorExperience: "false",
    medicalCondition: "false",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().min(1).required("Full Name is required"),
    email: Yup.string().email().required("Email is required"),
    mobile: Yup.string().required("Mobile no. is required"),
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
    priorExperience: Yup.boolean().required("Required"),
    medicalCondition: Yup.boolean().required("Required"),
  });

  const onSubmit = (values) => {
    if (user && user.code == "unauthorised") {
      window.location.replace(`/login?referrer=classes&ID=${data?.slug}`);
    }
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
        {({ values, setFieldValue, dirty, isValid }) => {
          return (
            <Form>
              <div className="detail-side-middle py-3 px-3 row">
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
                      {s_a[state_arr.indexOf(values && values.state)] &&
                        s_a[state_arr.indexOf(values && values.state)].split(
                          "|"
                        ) &&
                        s_a[state_arr.indexOf(values && values.state) + 1]
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

                <div className="form-group">
                  <div className="elsoci">
                    <label>
                      Do you have any prior experience with this sport?
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <Field
                      className="form-check-input"
                      type="radio"
                      value="true"
                      name="priorExperience"
                      id="ryes"
                    />
                    <label className="form-check-label" htmlFor="ryes">
                      Yes
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <Field
                      className="form-check-input"
                      type="radio"
                      name="priorExperience"
                      id="rno"
                      value="false"
                    />
                    <label className="form-check-label" htmlFor="rno">
                      No
                    </label>
                  </div>
                  <ErrorMessage
                    name="priorExperience"
                    render={(msg) => (
                      <small className="text-danger">{msg}</small>
                    )}
                  ></ErrorMessage>
                </div>

                <div className="form-group">
                  <div className="elsoci">
                    <label>
                      Do you have any medical conditions that may affect your
                      participation?
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <Field
                      className="form-check-input"
                      type="radio"
                      value="true"
                      name="medicalCondition"
                      id="pyes"
                    />
                    <label className="form-check-label" htmlFor="pyes">
                      Yes
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <Field
                      className="form-check-input"
                      type="radio"
                      name="medicalCondition"
                      id="pno"
                      value="false"
                    />
                    <label className="form-check-label" htmlFor="pno">
                      No
                    </label>
                  </div>
                  <ErrorMessage
                    name="medicalCondition"
                    render={(msg) => (
                      <small className="text-danger">{msg}</small>
                    )}
                  ></ErrorMessage>
                </div>

                <div className="form-group">
                  <button
                    className="btn btn-primary full-width font-sm"
                    fdprocessedid="ogohv"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
      {/* <div className="detail-side-middle py-3 px-3">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            fdprocessedid="gg43l7"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            fdprocessedid="tbtrwh"
          />
        </div>
        <div className="form-group">
          <div className="elsoci">
            <label>Do you have any prior experience with this sport?</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="workindia"
              id="wyes"
              defaultValue="option1"
            />
            <label className="form-check-label" htmlFor="wyes">
              Yes
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="workindia"
              id="wno"
              defaultValue="option1"
            />
            <label className="form-check-label" htmlFor="wno">
              No
            </label>
          </div>
        </div>
        <div className="form-group">
          <div className="elsoci">
            <label>
              Do you have any medical conditions that may affect your
              participation?
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="degree"
              id="dyed"
              defaultValue="option1"
            />
            <label className="form-check-label" htmlFor="dyed">
              Yes
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="degree"
              id="dno"
              defaultValue="option1"
            />
            <label className="form-check-label" htmlFor="dno">
              No
            </label>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="jobalert"
              defaultValue="option1"
            />
            <label className="form-check-label" htmlFor="jobalert">
              Create Job Alert
            </label>
          </div>
        </div>
        <div className="form-group">
          <button
            type="button"
            className="btn btn-primary full-width font-sm"
            fdprocessedid="ogohv"
          >
            Apply Now
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default Registration;
