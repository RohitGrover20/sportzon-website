// "use client";
// import { Field, Form, Formik } from "formik";
// import React, { useState } from "react";
// import Select from "react-select";
// import * as Yup from "yup";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// function ProductInfo(props) {
//   const venue = props && props.venue;
//   const courts = props && props.courts;
//   const setCart = props && props.setCart;
//   const cart = props && props.cart;
//   const booked = props && props.booked;
//   var pricing = 0;
//   const [venueprice, setVenuePrice] = useState(0);
//   const initialValues = {
//     activity: "",
//     date: new Date(),
//     court: "",
//     slots: [],
//     priceType: "",
//     startDate: "",
//     endDate: "",
//     // discount: "",
//   };

//   const validationSchema = Yup.object({
//     activity: Yup.string().required("Activity is required"),
//     date: Yup.string().required("Date is required"),
//     slots: Yup.array().min(1).required("Slots are required"),
//     court: Yup.string().required("Court is required"),
//     // discount: Yup.string()
//     //   .uppercase()
//     //   .oneOf(["SWC25D", "SWC40D", "SWC50D"], "Invalid coupon code"),
//   });

//   const onSubmit = (values, { resetForm }) => {
//     let originalAmount = 0;
//     if (values?.slots.length > 0 && values?.court.length > 0) {
//       originalAmount =
//         values.slots.length === 1 ? pricing : pricing * values.slots.length;
//     } else {
//       originalAmount = venueprice;
//     }

//     // // Define the discount rates
//     // const discountRates = {
//     //   SWC25D: 0.25,
//     //   SWC40D: 0.4,
//     //   SWC50D: 0.5,
//     // };

//     // const discountRate =
//     //   values.discount && discountRates[values.discount.toUpperCase()]
//     //     ? discountRates[values.discount.toUpperCase()]
//     //     : 0;

//     // let discountedAmount = originalAmount * (1 - discountRate);

//     const gst = (originalAmount * 18) / 100;

//     // Add the item to the cart with the discounted amount and GST
//     setCart([
//       ...cart,
//       {
//         ...values,
//         pricing: pricing,
//         status: "completed",
//         amount: originalAmount,
//         gst: gst,
//       },
//     ]);
//     resetForm(true);
//   };

//   return (
//     <div className="col-xl-12 col-lg-12 col-lg-offset-1 pt-3" style={{overflow:"visible" , position:"relative"}}>
//       <div className="border rounded card overflow-visible">
//         <Formik
//           initialValues={initialValues}
//           validationSchema={() => validationSchema}
//           onSubmit={onSubmit}
//         >
//           {({ values, setFieldValue, dirty, isValid }) => {
//             let slots = [];
//             const filteredCourt =
//               courts && courts?.filter((ele) => ele.slug == values?.court);
//             pricing =
//               filteredCourt && filteredCourt[0] && filteredCourt[0].pricing;

//             const filteredSlots =
//               filteredCourt &&
//               filteredCourt[0] &&
//               filteredCourt[0].slots &&
//               filteredCourt[0].slots.map((slot) => {
//                 slot.label = slot.from + " to " + slot.to;
//                 slot.value = slot.from + " to " + slot.to;
//                 return { label: slot.label, value: slot.value };
//               });
//             const courtBooking =
//               booked && booked.filter((ele) => ele.court == values.court);
//             const dateBooking =
//               courtBooking &&
//               courtBooking.filter(
//                 (ele) =>
//                   new Date(ele.date).toDateString() ==
//                   new Date(values.date).toDateString()
//               );

//             const bookedSlots =
//               dateBooking &&
//               dateBooking
//                 .map((ele) => {
//                   return (
//                     ele.slots &&
//                     ele.slots.map((item) => {
//                       return item;
//                     })
//                   );
//                 })
//                 .flat();

//             const checkDate =
//               new Date().toDateString() == new Date(values.date).toDateString();
//             slots =
//               filteredSlots &&
//               filteredSlots.filter((ele) =>
//                 bookedSlots.every((item) => {
//                   return (
//                     item.value !== ele.value &&
//                     (checkDate
//                       ? ele.label &&
//                         ele.label.slice(0, 2) > new Date().getHours()
//                       : item)
//                   );
//                 })
//               );
//             return (
//               <Form style={{overflow:"visible" , position:"relative"}}>
//                 <div className="row g-4  pb-md-3  mb-md-1 align-items-center mt-2 px-3 ">
//                   {/* <h5 className="text-center pb-0 mb-0 theme-color fw-bold">
//                     Book Your Play Zone
//                   </h5> */}
//                   {/* <div>
//                     {props?.venue?.slug == "sportzon-wave-city" && (
//                       <div className="alert alert-info text-center">
//                         <strong className="fw-bold fs-4 text-success">
//                           Special Offer!
//                         </strong>{" "}
//                         <br />
//                         Get a{" "}
//                         <span className="text-danger font-weight-bold">
//                           25% discount
//                         </span>{" "}
//                         on your booking! Use{" "}
//                         <span className="badge badge-warning fs-6">
//                           CODE: SWC25D
//                         </span>
//                       </div>
//                     )}
//                   </div> */}
//                   <div className="col-sm-4"></div>
//                   <div className="col-sm-8"></div>
//                   {/* {values?.quickselecthub == "venuebook" && (
//                     <>
//                       <div className="col-sm-4">
//                         <label className="form-label">
//                           <strong>Price Type</strong>
//                         </label>
//                       </div>

//                       <div className="col-sm-8">
//                         <Field
//                           name="priceType"
//                           as="select"
//                           className="form-select"
//                           onChange={(e) => {
//                             setFieldValue("priceType", e?.target?.value);
//                             setVenuePrice(
//                               e?.target?.value == "day"
//                                 ? props?.venue?.dayPrice
//                                 : e?.target?.value == "week"
//                                 ? props?.venue?.weekPrice
//                                 : props?.venue?.monthPrice
//                             );
//                           }}
//                         >
//                           <option value="">-- Select a price --</option>
//                           <option value="day">
//                             Rs. {props?.venue?.dayPrice} Per Day Price
//                           </option>
//                           <option value="week">
//                             Rs. {props?.venue?.weekPrice} Per Week Price
//                           </option>
//                           <option value="month">
//                             Rs. {props?.venue?.monthPrice} Per Month Price
//                           </option>
//                         </Field>
//                       </div>
//                       <div className="col-sm-4">
//                         <label className="form-label">
//                           <strong>Start Date</strong>
//                         </label>
//                       </div>
//                       <div className="col-sm-8">
//                         <DatePicker
//                           selected={values.startDate}
//                           className="form-select"
//                           onChange={(e) => {
//                             setFieldValue("startDate", e);
//                           }}
//                           placeholderText="Please select a date"
//                           minDate={new Date()}
//                         />
//                       </div>
//                       <div className="col-sm-4">
//                         <label className="form-label">
//                           <strong>End Date</strong>
//                         </label>
//                       </div>
//                       <div className="col-sm-8">
//                         <DatePicker
//                           selected={values?.endDate}
//                           className="form-select"
//                           onChange={(e) => {
//                             setFieldValue("endDate", e);
//                           }}
//                           placeholderText="Please select a date"
//                           minDate={new Date()}
//                         />
//                       </div>
//                     </>
//                   )} */}
//                   <>
//                     <div className="col-sm-4">
//                       <label className="form-label">
//                         <strong className="theme-color">
//                           Activity<span className="text-danger">*</span>
//                         </strong>
//                       </label>
//                     </div>
//                     <div className="col-sm-8">
//                       <Field
//                         name="activity"
//                         as="select"
//                         className="form-select"
//                         onChange={(e) => {
//                           setFieldValue("activity", e?.target?.value);
//                           setFieldValue("court", "");
//                           setFieldValue("slots", []);
//                         }}
//                       >
//                         <option value="">-- Select--</option>
//                         {venue &&
//                           venue?.activities &&
//                           venue?.activities.map((item, index) => {
//                             return (
//                               <option key={index} value={item.value}>
//                                 {item.value}
//                               </option>
//                             );
//                           })}
//                       </Field>
//                     </div>
//                     <div className="col-sm-4">
//                       <label className="form-label">
//                         <strong className="theme-color">
//                           Court<span className="text-danger">*</span>
//                         </strong>
//                       </label>
//                     </div>
//                     <div className="col-sm-8">
//                       <Field
//                         as="select"
//                         name="court"
//                         className="form-select"
//                         onChange={(e) => {
//                           setFieldValue("court", e.target.value);
//                           setFieldValue("slots", []);
//                         }}
//                       >
//                         {courts?.filter(
//                           (el) => el?.activity == values?.activity
//                         ).length == 0 ? (
//                           <>
//                             <option value="">--Select--</option>
//                             <option disabled selected value="">
//                               No Courts Available
//                             </option>
//                           </>
//                         ) : (
//                           <option value="">-- Select--</option>
//                         )}

//                         {courts &&
//                           courts
//                             .filter((el) => el.activity == values.activity)
//                             .map((item, index) => {
//                               return (
//                                 <option key={index} value={item.slug}>
//                                   {item.title} - Rs.
//                                   {item.pricing + item.pricing * (18 / 100)}
//                                 </option>
//                               );
//                             })}
//                       </Field>
//                     </div>
//                     <div className="col-sm-4">
//                       <label className="form-label">
//                         <strong className="theme-color">
//                           Date<span className="text-danger">*</span>
//                         </strong>
//                       </label>
//                     </div>
//                     <div className="col-sm-8">
//                       <DatePicker
//                         selected={values.date}
//                         className="form-select"
//                         onChange={(e) => {
//                           setFieldValue("date", e);
//                         }}
//                         placeholderText="Please select a date"
//                         minDate={new Date()}
//                       />
//                     </div>
//                     <div className="col-sm-12 mb-0 pb-0">
//                       <label className="form-label">
//                         <strong className="theme-color">
//                           Slots<span className="text-danger">*</span>
//                         </strong>
//                       </label>
//                     </div>
//                     <div className="col-sm-12 mt-0">
//                       {slots && slots?.length == 0 && values?.court !== "" ? (
//                         <div className="alert alert-danger">
//                           No Slots are available
//                         </div>
//                       ) : (
//                         <div style={{ overflow:"visible" , position:"relative"}}>
//                         <Select
//                           isMulti={true}
//                           closeMenuOnSelect={false}
//                           isClearable={true}
//                           name="slots"
//                           options={slots}
//                           // styles={{ minHeight: "53px" }}
//                           classNamePrefix="select"
//                           onChange={(e) => {
//                             setFieldValue("slots", e);
//                           }}
//                         />
//                         </div>
//                       )}
//                     </div>
//                     {/* {props?.venue?.slug == "sportzon-wave-city" && (
//                       <div className="col-sm-12 mb-3">
//                         <label className="form-label">
//                           <strong className="theme-color">Discount Code</strong>
//                         </label>
//                         <div className="input-group">
//                           <Field
//                             name="discount"
//                             className="form-control lg"
//                             type="text"
//                             placeholder="Enter Coupon Code"
//                             onChange={(e) =>
//                               setFieldValue(
//                                 "discount",
//                                 e.target.value.toUpperCase()
//                               )
//                             }
//                           />
//                         </div>
//                         <ErrorMessage
//                           name="discount"
//                           render={(msg) => (
//                             <small className="text-danger">{msg}</small>
//                           )}
//                         ></ErrorMessage>
//                       </div>
//                     )} */}
//                   </>
//                   <div className="col-sm-12">
//                     <button
//                       className="btn btn-lg btn-primary w-100"
//                       disabled={!(dirty && isValid)}
//                     >
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               </Form>
//             );
//           }}
//         </Formik>
//       </div>
//     </div>
//   );
// }

// export default ProductInfo;




// "use client";
// import { Field, Form, Formik } from "formik";
// import config from "@/config";
// import axios from "axios";
// import React, { useState , useEffect} from "react";
// import Select from "react-select";
// import * as Yup from "yup";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// function ProductInfo(props) {
//   const venue = props && props.venue;
//   const courts = props && props.courts;
//   const setCart = props && props.setCart;
//   const cart = props && props.cart;
//   const booked = props && props.booked;
//   var pricing = 0;
//   const [venueprice, setVenuePrice] = useState(0);
//   const initialValues = {
//     activity: "",
//     date: new Date(),
//     court: "",
//     slots: [],
//     priceType: "",
//     startDate: "",
//     endDate: "",
//   };

//   const validationSchema = Yup.object({
//     activity: Yup.string().required("Activity is required"),
//     date: Yup.string().required("Date is required"),
//     slots: Yup.array().min(1).required("Slots are required"),
//     court: Yup.string().required("Court is required"),
//   });

//   const onSubmit = (values, { resetForm }) => {
//     let originalAmount = 0;
//     if (values?.slots.length > 0 && values?.court.length > 0) {
//       originalAmount =
//         values.slots.length === 1 ? pricing : pricing * values.slots.length;
//     } else {
//       originalAmount = venueprice;
//     }

//     const gst = (originalAmount * 18) / 100;

//     setCart([
//       ...cart,
//       {
//         ...values,
//         pricing: pricing,
//         status: "completed",
//         amount: originalAmount,
//         gst: gst,
//       },
//     ]);
//     resetForm(true);
//   };


//   // bookings api 
//   const [booking, setBooking] = useState([]);
//   useEffect(() => {
//     axios
//       .get(`${config.API_URL}/landing/bookings`, { withCredentials: true })
//       .then((result) => {
//         setBooking(result?.data && result?.data?.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
//   console.log(booking , "booking info")
//   return (
//     <div className="col-xl-12 col-lg-12 col-lg-offset-1 pt-3" style={{ overflow: "visible", position: "relative" }}>
//       <div className="border rounded card overflow-visible">
//         <Formik
//           initialValues={initialValues}
//           validationSchema={() => validationSchema}
//           onSubmit={onSubmit}
//         >
//           {({ values, setFieldValue, dirty, isValid }) => {
//             let slots = [];
//             const filteredCourt =
//               courts && courts?.filter((ele) => ele.slug == values?.court);
//             pricing =
//               filteredCourt && filteredCourt[0] && filteredCourt[0].pricing;

//             const filteredSlots =
//               filteredCourt &&
//               filteredCourt[0] &&
//               filteredCourt[0].slots &&
//               filteredCourt[0].slots.map((slot) => {
//                 slot.label = slot.from + " to " + slot.to;
//                 slot.value = slot.from + " to " + slot.to;
//                 return { label: slot.label, value: slot.value };
//               });

//             const isToday =
//               new Date().toDateString() == new Date(values.date).toDateString();
//             console.log(isToday , "today date")
//             const currentHour = new Date().getHours();
//             const currentMinute = new Date().getMinutes();

//             slots =
//               filteredSlots &&
//               filteredSlots.filter((ele) =>{
//                 console.log(ele , "ele")
//                   const [startHour, startMinute] = ele.label.split(" to ")[0].split(":");
//                   return (
//                     ele &&
//                     (!isToday || (startHour > currentHour || (startHour == currentHour && startMinute > currentMinute)))
//                   )}
//               );
//               console.log(slots , "slots")
//             return (
//               <Form style={{ overflow: "visible", position: "relative" }}>
//                 <div className="row g-4 pb-md-3 mb-md-1 align-items-center mt-2 px-3">
//                   <div className="col-sm-4">
//                     <label className="form-label">
//                       <strong className="theme-color">
//                         Activity<span className="text-danger">*</span>
//                       </strong>
//                     </label>
//                   </div>
//                   <div className="col-sm-8">
//                     <Field
//                       name="activity"
//                       as="select"
//                       className="form-select"
//                       onChange={(e) => {
//                         setFieldValue("activity", e?.target?.value);
//                         setFieldValue("court", "");
//                         setFieldValue("slots", []);
//                       }}
//                     >
//                       <option value="">-- Select--</option>
//                       {venue &&
//                         venue?.activities &&
//                         venue?.activities.map((item, index) => {
//                           return (
//                             <option key={index} value={item.value}>
//                               {item.value}
//                             </option>
//                           );
//                         })}
//                     </Field>
//                   </div>
//                   <div className="col-sm-4">
//                     <label className="form-label">
//                       <strong className="theme-color">
//                         Court<span className="text-danger">*</span>
//                       </strong>
//                     </label>
//                   </div>
//                   <div className="col-sm-8">
//                     <Field
//                       as="select"
//                       name="court"
//                       className="form-select"
//                       onChange={(e) => {
//                         setFieldValue("court", e.target.value);
//                         setFieldValue("slots", []);
//                       }}
//                     >
//                       {courts?.filter(
//                         (el) => el?.activity == values?.activity
//                       ).length == 0 ? (
//                         <>
//                           <option value="">--Select--</option>
//                           <option disabled selected value="">
//                             No Courts Available
//                           </option>
//                         </>
//                       ) : (
//                         <option value="">-- Select--</option>
//                       )}

//                       {courts &&
//                         courts
//                           .filter((el) => el.activity == values.activity)
//                           .map((item, index) => {
//                             return (
//                               <option key={index} value={item.slug}>
//                                 {item.title} - Rs.
//                                 {item.pricing + item.pricing * (18 / 100)}
//                               </option>
//                             );
//                           })}
//                     </Field>
//                   </div>
//                   <div className="col-sm-4">
//                     <label className="form-label">
//                       <strong className="theme-color">
//                         Date<span className="text-danger">*</span>
//                       </strong>
//                     </label>
//                   </div>
//                   <div className="col-sm-8">
//                     <DatePicker
//                       selected={values.date}
//                       className="form-select"
//                       onChange={(e) => {
//                         setFieldValue("date", e);
//                       }}
//                       placeholderText="Please select a date"
//                       minDate={new Date()}
//                     />
//                   </div>
//                   <div className="col-sm-12 mb-0 pb-0">
//                     <label className="form-label">
//                       <strong className="theme-color">
//                         Slots<span className="text-danger">*</span>
//                       </strong>
//                     </label>
//                   </div>
//                   <div className="col-sm-12 mt-0">
//                     {slots && slots?.length == 0 && values?.court !== "" ? (
//                       <div className="alert alert-danger">
//                         No Slots are available
//                       </div>
//                     ) : (
//                       <div style={{ overflow: "visible", position: "relative" }}>
//                         <Select
//                           isMulti={true}
//                           closeMenuOnSelect={false}
//                           isClearable={true}
//                           name="slots"
//                           options={slots}
//                           classNamePrefix="select"
//                           onChange={(e) => {
//                             setFieldValue("slots", e);
//                           }}
//                         />
//                       </div>
//                     )}
//                   </div>
//                   <div className="col-sm-12">
//                     <button
//                       className="btn btn-lg btn-primary w-100"
//                       disabled={!(dirty && isValid)}
//                     >
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               </Form>
//             );
//           }}
//         </Formik>
//       </div>
//     </div>
//   );
// }

// export default ProductInfo;


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
        setBooking(result?.data && result?.data?.data);
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
            const filteredCourt =
              courts && courts?.filter((ele) => ele.slug == values?.court);
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

            const isToday =
              new Date().toDateString() == new Date(values.date).toDateString();

            const currentHour = new Date().getHours();
            const currentMinute = new Date().getMinutes();

            // Filter out slots already booked
            const bookedSlots = booked
              .filter(
                (b) =>
                  new Date(b.date).toDateString() ===
                    new Date(values.date).toDateString() &&
                  b.court === values.court
              )
              .map((b) => b.slots)
              .flat()
              .map((s) => s.value);

            slots =
              filteredSlots &&
              filteredSlots.filter((ele) => {
                const [startHour, startMinute] = ele.label.split(" to ")[0].split(":");
                return (
                  ele &&
                  (!isToday ||
                    (startHour > currentHour ||
                      (startHour == currentHour && startMinute > currentMinute))) &&
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
                      {courts?.filter(
                        (el) => el?.activity == values?.activity
                      ).length == 0 ? (
                        <>
                          <option value="">--Select--</option>
                          <option disabled selected value="">
                            No Courts Available
                          </option>
                        </>
                      ) : (
                        <option value="">-- Select--</option>
                      )}

                      {courts &&
                        courts
                          .filter((el) => el.activity == values.activity)
                          .map((item, index) => {
                            return (
                              <option key={index} value={item.slug}>
                                {item.title} - Rs.
                                {item.pricing + item.pricing * (18 / 100)}
                              </option>
                            );
                          })}
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
                      onChange={(e) => {
                        setFieldValue("date", e);
                      }}
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
                    {slots && slots?.length == 0 && values?.court !== "" ? (
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
                          onChange={(e) => {
                            setFieldValue("slots", e);
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="col-sm-12">
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


