"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "@/config";
import ProductInfo from "./ProductInfo";
import Checkout from "./Checkout";
import Loading from "@/components/Loading";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

function Booking({ setBooking, setPaymentInfo }) {
  const [lastValue, setLastValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [venue, setVenue] = useState({});
  const [payment, setPayment] = useState(false);
  const [courts, setCourts] = useState([]);
  const [booked, setBooked] = useState([]);
  const [paymentType, setPaymentType] = useState();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const pathname = window?.location?.pathname;
    const pathSegments = pathname?.split("/");
    const lastSegment = pathSegments[pathSegments?.length - 1];
    setLastValue(lastSegment);
  }, []); // Run only once on mount

  useEffect(() => {
    console.log(lastValue, "lastvalue");
  }, [lastValue]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (payment === true) {
      setBooking(true);
      setPaymentInfo(paymentType);
      setCart([]);
    }
  }, [payment]);
  useEffect(() => {
    if (payment === true) {
      setCart([]);
    }
  }, []);

  useEffect(() => {
    if (lastValue) {
      setLoading(true);
      axios
        .get(`${config.API_URL}/landing/venues/${lastValue}`)
        .then((result) => {
          setVenue(result?.data?.data);
          axios
            .get(`${config.API_URL}/landing/courts/${result?.data?.data?._id}`)
            .then((court) => {
              setCourts(court?.data?.data);
              axios
                .post(`${config.API_URL}/landing/venues/get-slots`, {
                  arena: result?.data?.data?._id,
                })
                .then((book) => {
                  setLoading(false);
                  setBooked(book?.data?.data);
                })
                .catch((err) => {
                  setLoading(false);
                  console.log(err);
                });
            })
            .catch((error) => {
              console.log(error);
              setLoading(false);
            });
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [lastValue]);

  return (
    <div>
      <ToastContainer />
      {loading ? (
        <Loading />
      ) : (
        <section
          style={{
            backgroundImage: payment
              ? "url(assets/img/Confirmation-bg.png)"
              : "none",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="mt-0 pt-0"
        >
          <div className="container">
            {payment === true ? (
              <div className="sec-heading text-center">
                <div
                  className="label d-inline-flex rounded-4 mb-2"
                  style={{ background: "#D9D9D9" }}
                >
                  <span className="theme-color fw-bold">Venue Booking</span>
                </div>

                {paymentType?.data?.bookingId?.includes("CSH") ? (
                  <h2 className="mb-1 text-success">
                    Reservation Confirmed{" "}
                    <p className="text-dark fs-5">
                      {" "}
                      Please pay in cash at the venue.
                    </p>
                  </h2>
                ) : (
                  <h2 className="mb-1 text-success">
                    Payment Success{" "}
                    <i class="fa fa-check-circle text-success"></i>
                  </h2>
                )}
                <p className="text-dark fs-5 fw-bold text-center go-to-book-btn">
                  For more information{" "}
                  <Link href={"/user/my-bookings"}>
                    <em className="fw-bold theme-bg btn-md text-white fs-6 ms-2">
                      Go to My Booking {"    "}
                      <i className="fa fa-arrow-right"></i>
                    </em>
                  </Link>
                </p>
              </div>
            ) : (
              <div className="row mx-auto">
                <div className="col-md-7">
                  <ProductInfo
                    venue={venue}
                    courts={courts}
                    cart={cart}
                    setCart={setCart}
                    loading={loading}
                    setLoading={setLoading}
                    booked={booked}
                  />
                </div>
                <div className="col-md-5">
                  <Checkout
                    cart={cart}
                    setCart={setCart}
                    loading={loading}
                    setLoading={setLoading}
                    venue={venue}
                    setPayment={setPayment}
                    setPaymentType={setPaymentType}
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}

export default Booking;
