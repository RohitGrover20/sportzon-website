"use client";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import Select from "react-select";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ProductInfo(props) {
  const venue = props && props.venue;
  const courts = props && props.courts;
  const setCart = props && props.setCart;
  const cart = props && props.cart;
  const booked = props && props.booked;
  var pricing = 0;
  const [venueprice, setVenuePrice] = useState(0);
  const initialValues = {
    activity: "",
    date: new Date(),
    court: "",
    slots: [],
    // quickselecthub: "",
    priceType: "",
    startDate: "",
    endDate: "",
  };

  const validationSchema = Yup.object({
    // quickselecthub: Yup.string().required("This is required"),
    activity: Yup.string().required("Activity is required"),
    date: Yup.string().required("Date is required"),
    slots: Yup.array().min(1).required("Slots are required"),
    court: Yup.string().required("Court is required"),
  });
  // const validationSchema2 = Yup.object({
  //   quickselecthub: Yup.string().required("This is required"),
  //   priceType: Yup.string().required("Price Type is required"),
  //   startDate: Yup.string().required("Date is required"),
  //   endDate: Yup.string().required("Date is required"),
  // });

  // const onSubmit = (values, { setFieldValue }) => {
  //   setCart([
  //     ...cart,
  //     {
  //       ...values,
  //       pricing: pricing,
  //       status: "upcoming",
  //       amount:
  //         values && values?.slots?.length > 0 && values?.court.length > 0
  //           ? parseInt(values.slots.length) * pricing
  //           : venueprice,
  //       gst:
  //         ((values && values?.slots?.length > 0 && values?.court.length > 0
  //           ? parseInt(values.slots.length) * pricing
  //           : venueprice) *
  //           18) /
  //         100,
  //     },
  //   ]);
  //   setFieldValue("court", "");
  // };
  const onSubmit = (values, { setFieldValue }) => {
    // Calculate the original amount based on the number of slots and court selection
    const originalAmount =
      values && values?.slots?.length > 0 && values?.court.length > 0
        ? parseInt(values.slots.length) * pricing
        : venueprice;
  
    // Define the discount rate
    const discountRate = 0.25;
  
    // Apply the discount conditionally based on disval
    const discountedAmount =
    props?.venue?.slug == "sportzon-wave-city"
        ? originalAmount * (1 - discountRate)
        : originalAmount;
  
    // Calculate GST on the discounted amount
    const gst = (discountedAmount * 18) / 100;
  
    // Add the item to the cart with the discounted amount and GST
    setCart([
      ...cart,
      {
        ...values,
        pricing: pricing,
        status: "upcoming",
        amount: discountedAmount,
        gst: gst,
      },
    ]);
  
    // Reset the court field
    setFieldValue("court", "");
  };
  
  
  return (
    <div className="col-xl-4 col-lg-4 col-lg-offset-1">
      <div className="border gray-simple rounded">
        <div className="bg-primary py-3 px-3 rounded-top">
          <h5 className="pb-0 text-white" style={{ fontWeight: "normal" }}>
            {venue && venue.title}
          </h5>
          <small className="d-flex align-items-center fs-15 lh-base text-white">
            <i className="fa fa-map-marker text-white me-1" />
            {venue && venue.city}
          </small>
        </div>
        <Formik
          initialValues={initialValues}
          // validationSchema={() => {
          //   return val !== "playzone"
          //     ? validationSchema2
          //     : validationSchema;
          // }}
          validationSchema={() => validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue, dirty, isValid }) => {
            let slots = [];
            const filteredCourt =
              courts && courts.filter((ele) => ele.slug == values.court);
            pricing =
              filteredCourt && filteredCourt[0] && filteredCourt[0].pricing;

            const filteredSlots =
              filteredCourt &&
              filteredCourt[0] &&
              filteredCourt[0].slots &&
              filteredCourt[0].slots.map((slot) => {
                slot.label = slot.from + " to " + slot.to;
                slot.value = slot.from + " to " + slot.to;
                return { label: slot.label, value: slot.value };
              });
            const courtBooking =
              booked && booked.filter((ele) => ele.court == values.court);
            const dateBooking =
              courtBooking &&
              courtBooking.filter(
                (ele) =>
                  new Date(ele.date).toDateString() ==
                  new Date(values.date).toDateString()
              );

            const bookedSlots =
              dateBooking &&
              dateBooking
                .map((ele) => {
                  return (
                    ele.slots &&
                    ele.slots.map((item) => {
                      return item;
                    })
                  );
                })
                .flat();

            const checkDate =
              new Date().toDateString() == new Date(values.date).toDateString();
            slots =
              filteredSlots &&
              filteredSlots.filter((ele) =>
                bookedSlots.every((item) => {
                  return (
                    item.value !== ele.value &&
                    (checkDate
                      ? ele.label &&
                        ele.label.slice(0, 2) > new Date().getHours()
                      : item)
                  );
                })
              );
            return (
              <Form>
                <div className="row g-4  pb-md-3  mb-md-1 align-items-center mt-2 px-3 ">
                  <h5 className="text-center pb-0 mb-0">Book Your Play Zone</h5>
                  <div className="col-sm-4">
                    {/* <label className="form-label">
                      <strong>SwiftPick Hub</strong>
                    </label> */}
                  </div>

                  <div className="col-sm-8">
                    {/* <Field
                      name="quickselecthub"
                      as="select"
                      className="form-select"
                      onChange={(e) => {
                        setFieldValue("quickselecthub", e?.target?.value);
                        setVal(e.target.value)
                      }}
                    >
                      <option value="">-- Select an activity --</option>
                      <option value="venuebook">Instant Booking Venue</option>
                      <option value="playzone">QuickPlay Zone</option>
                    </Field> */}
                  </div>
                  {values.quickselecthub == "venuebook" && (
                    <>
                      <div className="col-sm-4">
                        <label className="form-label">
                          <strong>Price Type</strong>
                        </label>
                      </div>

                      <div className="col-sm-8">
                        <Field
                          name="priceType"
                          as="select"
                          className="form-select"
                          onChange={(e) => {
                            setFieldValue("priceType", e?.target?.value);
                            setVenuePrice(
                              e?.target?.value == "day"
                                ? props?.venue?.dayPrice
                                : e?.target?.value == "week"
                                ? props?.venue?.weekPrice
                                : props?.venue?.monthPrice
                            );
                            //  venueprice(e.target.value);
                          }}
                        >
                          <option value="">-- Select a price --</option>
                          <option value="day">
                            Rs. {props?.venue?.dayPrice} Per Day Price
                          </option>
                          <option value="week">
                            Rs. {props?.venue?.weekPrice} Per Week Price
                          </option>
                          <option value="month">
                            Rs. {props?.venue?.monthPrice} Per Month Price
                          </option>
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label className="form-label">
                          <strong>Start Date</strong>
                        </label>
                      </div>
                      <div className="col-sm-8">
                        <DatePicker
                          selected={values.startDate}
                          className="form-select"
                          onChange={(e) => {
                            setFieldValue("startDate", e);
                          }}
                          placeholderText="Please select a date"
                          minDate={new Date()}
                        />
                      </div>
                      <div className="col-sm-4">
                        <label className="form-label">
                          <strong>End Date</strong>
                        </label>
                      </div>
                      <div className="col-sm-8">
                        <DatePicker
                          selected={values?.endDate}
                          className="form-select"
                          onChange={(e) => {
                            setFieldValue("endDate", e);
                          }}
                          placeholderText="Please select a date"
                          minDate={new Date()}
                        />
                      </div>
                    </>
                  )}
                  {/* {values?.quickselecthub == "playzone" && ( */}
                  <>
                    <div className="col-sm-4">
                      <label className="form-label">
                        <strong>Activity</strong>
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <Field
                        name="activity"
                        as="select"
                        className="form-select"
                        onChange={(e) => {
                          setFieldValue("activity", e?.target?.value);
                          setFieldValue("court", "");
                          setFieldValue("slots", []);
                        }}
                      >
                        <option value="">-- Select an activity --</option>
                        {venue &&
                          venue?.activities &&
                          venue?.activities.map((item, index) => {
                            return (
                              <option key={index} value={item.value}>
                                {item.value}
                              </option>
                            );
                          })}
                      </Field>
                    </div>
                    <div className="col-sm-4">
                      <label className="form-label">
                        <strong>Court</strong>
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <Field
                        as="select"
                        name="court"
                        className="form-select"
                        onChange={(e) => {
                          setFieldValue("court", e.target.value);
                          setFieldValue("slots", []);
                        }}
                      >
                        {courts.filter((el) => el.activity == values.activity)
                          .length == 0 ? (
                          <>
                            <option value="">--Select a court--</option>
                            <option disabled selected>
                              No Courts Available
                            </option>
                          </>
                        ) : (
                          <option value="">-- Select a court --</option>
                        )}

                        {courts &&
                          courts
                            .filter((el) => el.activity == values.activity)
                            .map((item, index) => {
                              return (
                                <option key={index} value={item.slug}>
                                  {item.title} - Rs.{item.pricing}
                                </option>
                              );
                            })}
                      </Field>
                    </div>
                    <div className="col-sm-4">
                      <label className="form-label">
                        <strong>Date</strong>
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <DatePicker
                        selected={values.date}
                        className="form-select"
                        onChange={(e) => {
                          setFieldValue("date", e);
                        }}
                        placeholderText="Please select a date"
                        minDate={new Date()}
                      />
                    </div>
                    <div className="col-sm-12 mb-0 pb-0">
                      <label className="form-label">
                        <strong>Slots</strong>
                      </label>
                    </div>
                    <div className="col-sm-12 mt-0">
                      {slots && slots.length == 0 && values.court !== "" ? (
                        <div className="alert alert-danger">
                          No Slots are available
                        </div>
                      ) : (
                        <Select
                          isMulti={true}
                          closeMenuOnSelect={false}
                          isClearable={true}
                          name="slots"
                          options={slots}
                          styles={{ minHeight: "53px" }}
                          classNamePrefix="select"
                          onChange={(e) => {
                            setFieldValue("slots", e);
                          }}
                        />
                      )}
                    </div>
                  </>
                  {/* )} */}
                  <div className="col-sm-12">
                    {props?.venue?.slug == "sportzon-wave-city" && (
                      <div className="alert alert-info text-center">
                        Get a 25% discount on your booking!
                      </div>
                    )}
                    <button
                      className="btn btn-lg btn-primary w-100"
                      disabled={!(dirty && isValid)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default ProductInfo;
