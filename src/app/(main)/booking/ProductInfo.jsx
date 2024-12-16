"use client";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import Select from "react-select";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ProductInfo(props) {
  const { venue, courts, setCart, booked } = props;
  const [venuePrice, setVenuePrice] = useState(0);

  const initialValues = {
    activity: "",
    date: new Date(),
    court: "",
    slots: [],
  };

  const validationSchema = Yup.object({
    activity: Yup.string().required("Activity is required"),
    date: Yup.date().required("Date is required"),
    slots: Yup.array().min(1, "Slots are required").required("Slots are required"),
    court: Yup.string().required("Court is required"),
  });

  // const pricing = (values) => {
  //   const filteredCourt = courts?.find((ele) => ele.slug === values.court);
  //   if (!filteredCourt) return 0;

  //   const selectedDay = new Date(values.date)
  //     .toLocaleString("en-US", { weekday: "long" })
  //     .toLowerCase();

  //   return filteredCourt?.pricing[selectedDay] || 0;
  // };

  // const getSlotPricing = (court, slot) => {
  //   const selectedDay = new Date().toLocaleString("en-US", { weekday: "long" }).toLowerCase();
  //   const dayPricing = court?.pricing[selectedDay] || {};
  //   return dayPricing[slot] || 0;
  // };

  // const getWeeklyPricing = (court) => {
  //   const daysOfWeek = [
  //     "sunday",
  //     "monday",
  //     "tuesday",
  //     "wednesday",
  //     "thursday",
  //     "friday",
  //     "saturday",
  //   ];
  //   const pricingForWeek = {};

  //   daysOfWeek.forEach((day) => {
  //     pricingForWeek[day] = court?.pricing[day] || 0;
  //   });

  //   return pricingForWeek;
  // };

  const onSubmit = (values, { resetForm }) => {
    // Extract values from the form submission
    const { activity, court, date, slots } = values;
  
    // Calculate the total amount based on selected slots
    const totalSlotPrice = slots.reduce((total, slot) => total + Number(slot.price), 0);
  
    // Determine the original amount based on slots or default to venue price
    const originalAmount = slots.length > 0 ? totalSlotPrice : venuePrice;
  
    // Calculate GST (18%)
    const gst = (originalAmount * 0.18).toFixed(2); // Using 0.18 for clarity
  
    // Update the cart with the new booking information
    setCart((prevCart) => [
      ...prevCart,
      {
        activity,
        court,
        date,
        slots,
        pricing: totalSlotPrice,
        status: "completed",
        amount: originalAmount,
        gst: Number(gst), // Ensure GST is a number
      },
    ]);
  
    // Reset the form after submission
    resetForm(); // Resets all form values
  };
  
  return (
    <div className="col-xl-12 col-lg-12 pt-3">
      <div className="border rounded card overflow-visible">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue, dirty, isValid }) => {
            const filteredCourt = courts?.filter(
              (ele) => ele.activity === values.activity
            );

            const selectedDate = new Date(values?.date);
            const options = { weekday: "long" };
            const currentDay = selectedDate
              .toLocaleDateString("en-US", options)
              .toLowerCase();

            const selectedCourt = filteredCourt?.find(
              (ele) => ele.slug === values.court
            );

            const daySlots = selectedCourt?.slots?.[currentDay] || [];
            const filteredSlots = Array.isArray(daySlots)
              ? daySlots.map((slot) => ({
                  label: `${slot?.startTime} to ${slot?.endTime}`,
                  value: `${slot?.startTime} to ${slot?.endTime}`,
                  // price: getSlotPricing(selectedCourt, slot),
                  price: `${slot?.price}`,
                }))
              : [];
            const bookedSlots = booked
              .filter((booking) => booking.court === values.court)
              .flatMap((booking) =>
                booking.slots
                  .filter(
                    (b) =>
                      new Date(b.date).toISOString().split("T")[0] ===
                      values.date.toISOString().split("T")[0]
                  )
                  .map((b) => b.slot.value)
              );

            const availableSlots = filteredSlots
              .filter((slot) => {
                const currentDate = new Date();
                const selectedDate = new Date(values?.date);

                if (selectedDate.toDateString() === currentDate.toDateString()) {
                  const currentHour = currentDate.getHours();
                  const currentMinute = currentDate.getMinutes();
                  const [slotStartHour, slotStartMinute] = slot.label
                    .split(" to ")[0]
                    .split(":")
                    .map(Number);

                  if (
                    slotStartHour > currentHour ||
                    (slotStartHour === currentHour &&
                      slotStartMinute > currentMinute)
                  ) {
                    return true;
                  }
                  return false;
                }

                return true;
              })
              .filter((slot) => !bookedSlots.includes(slot.value));
            const getAvailableDates = (court, numDays = 90) => {
              const availableDates = [];
              const daysOfWeek = [
                "sunday",
                "monday",
                "tuesday",
                "wednesday",
                "thursday",
                "friday",
                "saturday",
              ];

              const today = new Date();

              for (let i = 0; i < numDays; i++) {
                const date = new Date(today);
                date.setDate(today.getDate() + i);
                const dayName = daysOfWeek[date.getDay()];
                const daySlots = court?.slots?.[dayName] || [];

                if (daySlots.length > 0) {
                  availableDates.push(date);
                }
              }

              return availableDates;
            };

            return (
              <Form>
                <div className="row g-4 pb-md-3 align-items-center mt-2 px-3">
                  <div className="col-sm-4">
                    <label className="form-label">
                      <strong>
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
                        setFieldValue("activity", e.target.value);
                        setFieldValue("court", "");
                        setFieldValue("slots", []);
                      }}
                    >
                      <option value="">-- Select --</option>
                      {venue?.activities?.map((item, index) => (
                        <option key={index} value={item.value}>
                          {item.value}
                        </option>
                      ))}
                    </Field>
                  </div>

                  <div className="col-sm-4">
                    <label className="form-label">
                      <strong>
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
                      <option value="">-- Select --</option>
                      {filteredCourt.length === 0 ? (
                        <option disabled>No Courts Available</option>
                      ) : (
                        filteredCourt.map((item, index) => (
                          <option key={index} value={item.slug}>
                            {item.title}
                          </option>
                        ))
                      )}
                    </Field>
                  </div>

                  {selectedCourt && (
                    <div className="col-sm-12 mt-3">
                      <h5>Slot Pricing for {selectedCourt?.title}</h5>
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Slot</th>
                            <th>Price (Rs.)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {availableSlots.length>0 ? availableSlots.map((slot, index) => (
                            <tr key={index}>
                              <td>{slot?.label}</td>
                              <td>{slot?.price}</td> 
                            </tr>
                          )) : <tr><p className="text-center fs-5">No Slots Available for this date</p></tr>}
                        </tbody>
                      </table>
                    </div>
                  )}

                  <div className="col-sm-4">
                    <label className="form-label">
                      <strong>
                        Date<span className="text-danger">*</span>
                      </strong>
                    </label>
                  </div>
                  <div className="col-sm-8">
                    <DatePicker
                      selected={values?.date}
                      className="form-select"
                      onChange={(date) => setFieldValue("date", date)}
                      placeholderText="Please select a date"
                      minDate={new Date()}
                      dateFormat="dd/MM/yy"
                      filterDate={(date) => {
                        const availableDates = selectedCourt
                          ? getAvailableDates(selectedCourt, 365)
                          : [];
                        return availableDates.some(
                          (d) => d.toDateString() === date.toDateString()
                        );
                      }}
                    />
                  </div>

                  <div className="col-sm-4">
                    <label className="form-label">
                      <strong>
                        Slots<span className="text-danger">*</span>
                      </strong>
                    </label>
                  </div>
                  <div className="col-sm-8">
                    <Select
                      name="slots"
                      options={availableSlots}
                      isMulti
                      classNamePrefix="select"
                      className="basic-multi-select"
                      value={values.slots}
                      onChange={(option) => setFieldValue("slots", option)}
                    />
                  </div>
                </div>

                <div className="col-sm-12">
                  <div className="d-grid gap-2 col-4 mx-auto mt-3 mb-3">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={!(dirty && isValid)}
                    >
                      Submit
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