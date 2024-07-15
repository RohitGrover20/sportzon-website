"use client";
import React, { useContext, useState } from "react";
import { UserContext } from "../../../../context/context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import config from "@/config";

function Checkout(props) {
  const cart = props && props.cart;
  const venue = props && props.venue;
  const club = venue?.club;
  const setLoading = props && props.setLoading;
  const setCart = props && props.setCart;
  const setPayment = props && props.setPayment;
  const setPaymentType = props && props.setPaymentType;
  const [paymentMethod, setPaymentMethod] = useState("razorpay"); // default to razorpay

  const subtotal =
    cart &&
    cart.length > 0 &&
    cart.reduce(function (acc, obj) {
      return acc + obj.amount;
    }, 0);
  const gst =
    cart &&
    cart.length > 0 &&
    cart.reduce(function (acc, obj) {
      return acc + obj.gst;
    }, 0);
  const context = useContext(UserContext);
  const user = context && context;

  // For Cash Payment
  const handleBooking = (bookingData) => {
    axios
      .post(`${config.API_URL}/landing/bookings/process`, bookingData, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 2000,
          onClose: () => {
            setLoading(false);
            setPayment(true);
            setPaymentType(res?.data);
          },
        });
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const payment = async () => {
    setLoading(true);
    if (user && user.code == "unauthorised") {
      window.location.replace(`/login?referrer=venues&ID=${venue?.slug}`);
    } else {
      const _data = (subtotal + gst) * 100;
      const bookingData = {
        data: {
          bookingType: "arena",
          fullName: `${user.data.firstName} ${user.data.lastName}`,
          email: user.data.email,
          mobile: user.data.mobile,
          address: user.data.address,
          city: user.data.city,
          state: user.data.state,
          pincode: user.data.pincode,
          gender: user.data.gender,
          arena: venue._id,
          court: cart,
          club: club,
          paymentMethod:
            paymentMethod === "cod" ? "Cash on Delivery" : "Online",
        },
      };
      if (paymentMethod === "razorpay") {
        axios
          .post(
            `${config.API_URL}/landing/payments/orders`,
            { amount: _data, bookingType: "arena" },
            { withCredentials: true }
          )
          .then((res) => {
            handleOpenRazorpay({
              ...res.data.data,
              values: {
                ...user.data,
                bookingType: "arena",
                arena: venue && venue._id,
                court: cart,
                club: club,
              },
            });
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
            const error = err.response;
            toast.error(
              error && error?.data && error?.data && error?.data?.message,
              {
                position: "top-right",
                autoClose: 2000,
                onClose: () => {},
              }
            );
          });
      } else {
        // Handle COD or venue booking
        handleBooking(bookingData);
      }
    }
  };

  const handleOpenRazorpay = (data) => {
    var options = {
      // key: "rzp_test_1KAe5ngzKfHbdN", // Enter the Key ID generated from the Dashboard

      key: "rzp_live_gk7iMvPaNzkvr2",
      amount: Number(data.amount * 100),
      currency: data.currency,
      name: "Sportzon",
      description:
        "Description of the purchase item shown on the Checkout form.",
      image: "http://localhost:8080/assets/img/Sportzon-EIcon.png",
      order_id: data.id,
      prefill: {
        name: data.values && data.values.firstName + " " + data.values.lastName,
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
        setLoading(true);
        axios
          .post(
            `${config.API_URL}/landing/bookings/process`,
            {
              response: response,
              data: {
                bookingType: "arena",
                fullName:
                  (data.values &&
                    data.values.firstName + " " + data.values.lastName) ||
                  null,
                email: data?.values.email,
                mobile: data?.values.mobile,
                address: data?.values.address,
                city: data.values && data.values.city,
                state: data.values && data.values.state,
                pincode: data.values && data.values.pincode,
                gender: data.values && data.values.gender,
                arena: data.values && data.values.arena,
                court: data.values && data.values.court,
                club: data.values && data.values.club,
              },
            },
            { withCredentials: true }
          )
          .then((res) => {
            toast.success(res.data.message, {
              position: "top-right",
              autoClose: 2000,
              onClose: () => {
                setLoading(false);
                setPayment(true);
              },
            });
          })
          .catch(() => {
            setLoading(false);
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
          alert(response?.error?.description);
        })
        .catch((err) => {
          console.log(err);
        });

      alert(response.error.metadata.payment_id);
    });
    rzp.open();
  };

  return (
    <div className="col-xl-12 col-lg-12 col-lg-offset-1  pt-3 ">
      <div
        className="exploi rounded py-3 px-3 border card"
        style={{ backdropFilter: "blur(10px)" }}
      >
        {cart?.length == 0 ? (
          <>
            <h3 className="offcanvas-title d-flex align-items-center mb-1 theme-color justify-content-center">
              Your Cart is empty
            </h3>
            <div className="text-center">
              <i
                className="fa fa-shopping-cart text-orange m-5"
                style={{ fontSize: "60px" }}
              />
            </div>
          </>
        ) : (
          <>
            <div className="d-flex w-100 justify-content-between align-items-center border-bottom pb-2 pb-sm-2 mb-3">
              <h2 className="offcanvas-title d-flex align-items-center mb-1 theme-color fw-bold">
                Your Cart
              </h2>
            </div>
            {cart &&
              cart?.map((item, index, arr) => {
                return (
                  <div
                    className="d-sm-flex align-items-center pb-2 border-bottom pt-2"
                    key={index}
                  >
                    <div className="w-100 pt-1">
                      <div className="d-flex mb-3">
                        <div className="me-3">
                          <h3 className="fs-5 mb-2 theme-color">
                            <a href="#">{item && item?.activity}</a>
                          </h3>
                          <div className="d-flex flex-wrap">
                            <div className="text-muted fs-sm me-3">
                              <i className="fa fa-calendar" />:{" "}
                              <span className="text-dark fw-bold">
                                {new Date(item && item.date).toDateString()}
                              </span>
                            </div>
                            <div className="text-success fs-sm me-3">
                              <i className="fa fa-money text-success" />{" "}
                              {item?.amount}
                            </div>
                          </div>
                        </div>
                        <div className="text-end ms-auto">
                          <div className="fs-10 font--bold mb-2 text-success">
                            {item && item?.court}
                          </div>
                          <div
                            className="fs-4 p-0"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setCart(arr.filter((ele) => ele !== arr[index]));
                            }}
                          >
                            <i className="fa-solid fa-trash" />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="count-input">
                          <span className="me-2 theme-color fw-bold">
                            {" "}
                            <i className="fa fa-clock me-1"></i>Slots
                          </span>
                          {item &&
                            item.slots &&
                            item.slots.map((item, index) => {
                              return (
                                <div
                                  key={index.toString()}
                                  className="badge badge-success me-1"
                                >
                                  {item.label}
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

            <ul className="list-unstyled py-3 mb-0 border-top">
              <li className="d-flex justify-content-between mb-2 text-dark fw-bold">
                Subtotal:
                <span className="fw-semibold ms-2">Rs. {subtotal}</span>
              </li>
              <li className="d-flex justify-content-between mb-2 text-dark fw-bold">
                GST (18%):
                <span className="fw-semibold ms-2">Rs. {gst}</span>
              </li>
              <li className="d-flex justify-content-between mb-0 text-dark fw-bold">
                Total:
                <span className="fw-semibold ms-2">Rs. {subtotal + gst}</span>
              </li>
            </ul>
            <div className="border-top pt-4">
              <div className="mb-3">
                <input
                  type="radio"
                  id="razorpay"
                  name="paymentMethod"
                  value="razorpay"
                  checked={paymentMethod === "razorpay"}
                  onChange={() => setPaymentMethod("razorpay")}
                />
                <label htmlFor="razorpay" className="ms-2 text-dark fw-bold">
                  Pay Online
                </label>
              </div>
              <div className="mb-4">
                <input
                  type="radio"
                  id="cod"
                  name="paymentMethod"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <label htmlFor="cod" className="ms-2 text-dark fw-bold">
                  Pay At The Venue
                </label>
              </div>
              <button
                className="btn btn-success btn-block w-100"
                onClick={() => {
                  payment();
                }}
              >
                Proceed INR {subtotal + gst}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Checkout;
