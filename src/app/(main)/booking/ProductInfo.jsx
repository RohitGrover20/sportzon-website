"use client";
import { Field, Form, Formik } from "formik";
import config from "@/config";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ProductInfo(props) {
  const venue = props?.venue;
  const courts = props?.courts;
  const setCart = props?.setCart;
  const cart = props?.cart;
  const booked = props?.booked || [];

  var pricing = 0;
  const [venueprice, setVenuePrice] = useState(0);
  const initialValues = {
    activity: "",
    date: new Date(),
    court: "",
    slots: [],
    priceType: "",
    startDate: "",
    endDate: "",
  };

  const validationSchema = Yup.object({
    activity: Yup.string().required("Activity is required"),
    date: Yup.string().required("Date is required"),
    slots: Yup.array().min(1).required("Slots are required"),
    court: Yup.string().required("Court is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    let originalAmount = 0;
    if (values?.slots.length > 0 && values?.court.length > 0) {
      originalAmount =
        values.slots.length === 1 ? pricing : pricing * values.slots.length;
    } else {
      originalAmount = venueprice;
    }

    const gst = (originalAmount * 18) / 100;
    setCart([
      ...cart,
      {
        ...values,
        pricing: pricing,
        status: "completed",
        amount: originalAmount,
        gst: gst,
      },
    ]);
    resetForm(true);
  };

  // Fetch bookings from the API
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    axios
      .get(`${config.API_URL}/landing/bookings`, { withCredentials: true })
      .then((result) => {
        setBooking(result?.data?.data || []);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="col-xl-12 col-lg-12 col-lg-offset-1 pt-3" style={{ overflow: "visible", position: "relative" }}>
      <div className="border rounded card overflow-visible">
        <Formik
          initialValues={initialValues}
          validationSchema={() => validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue, dirty, isValid }) => {
            let slots = [];
            const filteredCourt = courts?.filter((ele) => ele.slug === values?.court);
            pricing = filteredCourt?.[0]?.pricing || 0;

            const filteredSlots = filteredCourt?.[0]?.slots?.map((slot) => {
              slot.label = slot.from + " to " + slot.to;
              slot.value = slot.from + " to " + slot.to;
              return { label: slot.label, value: slot.value };
            });

            const isToday = new Date().toDateString() === new Date(values.date).toDateString();
            const currentHour = new Date().getHours();
            const currentMinute = new Date().getMinutes();

            const selectedDateString = new Date(values.date).toISOString().split('T')[0];

            // Adjust the filtering based on your data structure
            const bookedSlots = booked
              .filter((booking) => booking.court === values.court)
              .flatMap((booking) =>
                booking.slots
                  .filter((b) => {
                    try {
                      const bookingDate = new Date(b.date);
                      if (isNaN(bookingDate.getTime())) {
                        console.error(`Invalid date format for booking: ${b.date}`);
                        return false;
                      }
                      
                      const bookingDateString = bookingDate.toISOString().split('T')[0];
                      return bookingDateString === selectedDateString;
                    } catch (error) {
                      console.error("Error processing booking date:", error);
                      return false;
                    }
                  })
                  .map((b) => b.slot.value)
              );

            slots = filteredSlots?.filter((ele) => {
              const [startHour, startMinute] = ele.label.split(" to ")[0].split(":");
              return (
                ele &&
                (!isToday ||
                  (startHour > currentHour ||
                    (startHour === currentHour && startMinute > currentMinute))) &&
                !bookedSlots.includes(ele.value)
              );
            });

            return (
              <Form style={{ overflow: "visible", position: "relative" }}>
                <div className="row g-4 pb-md-3 mb-md-1 align-items-center mt-2 px-3">
                  <div className="col-sm-4">
                    <label className="form-label">
                      <strong className="theme-color">
                        Activity<span className="text-danger">*</span>
                      </strong>
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
                      <option value="">-- Select--</option>
                      {venue?.activities?.map((item, index) => (
                        <option key={index} value={item.value}>
                          {item.value}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="col-sm-4">
                    <label className="form-label">
                      <strong className="theme-color">
                        Court<span className="text-danger">*</span>
                      </strong>
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
                      {courts?.filter((el) => el?.activity === values?.activity).length === 0 ? (
                        <>
                          <option value="">--Select--</option>
                          <option disabled selected value="">
                            No Courts Available
                          </option>
                        </>
                      ) : (
                        <option value="">-- Select--</option>
                      )}
                      {courts?.filter((el) => el.activity === values.activity).map((item, index) => (
                        <option key={index} value={item.slug}>
                          {item.title} - Rs.{item?.pricing}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="col-sm-4">
                    <label className="form-label">
                      <strong className="theme-color">
                        Date<span className="text-danger">*</span>
                      </strong>
                    </label>
                  </div>
                  <div className="col-sm-8">
                    <DatePicker
                      selected={values?.date}
                      className="form-select"
                      onChange={(e) => setFieldValue("date", e)}
                      placeholderText="Please select a date"
                      minDate={new Date()}
                      dateFormat="dd/MM/yy"
                    />
                  </div>
                  <div className="col-sm-12 mb-0 pb-0">
                    <label className="form-label">
                      <strong className="theme-color">
                        Slots<span className="text-danger">*</span>
                      </strong>
                    </label>
                  </div>
                  <div className="col-sm-12 mt-0">
                    {slots?.length === 0 && values?.court !== "" ? (
                      <div className="alert alert-danger">
                        No Slots are available
                      </div>
                    ) : (
                      <div style={{ overflow: "visible", position: "relative" }}>
                        <Select
                          isMulti={true}
                          closeMenuOnSelect={false}
                          isClearable={true}
                          name="slots"
                          options={slots}
                          classNamePrefix="select"
                          onChange={(e) => setFieldValue("slots", e)}
                        />
                      </div>
                    )}
                  </div>
                  <div className="col-sm-12 text-center mt-2">
                    <button
                      type="submit"
                      className="btn btn-primary"
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


