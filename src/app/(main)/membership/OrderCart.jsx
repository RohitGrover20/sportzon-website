import React, { useContext, useState } from "react";
import config from "@/config";
import { UserContext } from "../../../../context/context";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Loading from "@/components/Loading";
const OrderCart = ({ data }) => {
  const [loader, setLoader] = useState(false);
  const context = useContext(UserContext);
  const user = context && context;

  const gst = data?.price * 0.18;

  const calculateEndDate = () => {
    let endDate = new Date();
    let extensionDays = 0;

    data?.features.forEach((feature) => {
      if (feature?.details === "Extension") {
        const matched = feature?.description?.match(/\d+/); // Try to extract a number

        if (matched) {
          const days = parseInt(matched[0], 10); // Extract the number
          extensionDays += days;
        }
      }
    });

    const totalDaysToAdd = 365 + extensionDays;

    if (!isNaN(totalDaysToAdd)) {
      const newDate = endDate.getDate() + totalDaysToAdd;
      endDate.setDate(newDate);
    } else {
      console.error("Error: Invalid totalDaysToAdd value.");
    }

    return endDate;
  };

  const startDate = new Date();
  const endDate = calculateEndDate();

  const submitDetails = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (user && user.code === "unauthorised") {
      window.location.replace("/login");
    } else {
      const _data = {
        amount: data?.price * 100,
        subTotalAmount: data?.price - gst,
        gst: gst,
        planName: data?.planName,
        discount: 0,
        userDetails: user,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
      };

      axios
        .post(`${config.API_URL}/landing/payments/orders`, _data, {
          withCredentials: true,
        })
        .then((res) => {
          if (res?.data && res?.data?.code === "duplicate") {
            toast.warning(res?.data.message, {
              position: "top-right",
              autoClose: 2000,
              onClose: () => {
                setLoader(false);
                const closeBtn =
                  document && document.getElementById("registrationClose");
                closeBtn.click();
              },
            });
          } else {
            handleOpenRazorpay({
              ...res.data.data,
              _data,
              user,
            });
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
      Key: "rzp_live_gk7iMvPaNzkvr2",
      amount: Number(data?.amount),
      currency: data?.currency,
      name: "Sportzon",
      description: "Purchase Description",
      image: "http://localhost:8080/assets/img/Sportzon-EIcon.png",
      order_id: data?.id,
      prefill: {
        name: data?.user?.data?.firstName,
        email: data?.user?.data?.email,
        contact: data?.user?.data?.mobile,
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
            `${config.API_URL}/landing/subscription/process`,
            { response: response, data: data?._data },
            { withCredentials: true }
          )
          .then((res) => {
            toast.success(res.data.message, {
              position: "top-right",
              autoClose: 2000,
              onClose: () => {
                window.location.replace("/user/my-subscription");
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
      <div className="row">
        <h2>Payment Breakdown Details :</h2>
        {user?.code === "unauthorised" ? (
          <div className="row justify-content-left">
            <div className="col-md-6 col-lg-6">
              <div className="card p-4 shadow-lg">
                <div className="text-center p-3 d-flex flex-column">
                  <h3 className="theme-color">
                    Log In or Register Now to finalize your membership purchase
                    !
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
              </div>
            </div>
          </div>
        ) : (
          <>
            {loader ? (
              <Loading />
            ) : (
              <div className="col md-6 col-sm-6">
                <h4>{data?.planName} (Yearly)</h4>
                <div
                  className="card shadow-sm border-0"
                  style={{ backdropFilter: "blur(10px)", borderRadius: "10px" }}
                >
                  <div className="card-body theme-bg text-white p-3">
                    <h3 className="card-title text-center mb-4">
                      Order Summary
                    </h3>
                    <ul className="list-unstyled mb-4 fs-4 fw-bold m-4">
                      <li className="d-flex justify-content-between mb-2">
                        <span>Subtotal Amount:</span>
                        <span>INR {(data?.price - gst).toFixed(2)}</span>
                      </li>
                      <li className="d-flex justify-content-between mb-2">
                        <span>Gst/Tax (18%):</span>
                        <span>INR {gst.toFixed(2)}</span>
                      </li>
                      <li className="d-flex justify-content-between mb-2">
                        <span>Gross Amount:</span>
                        <span>INR {data?.price?.toFixed(2)}</span>
                      </li>
                      <li className="d-flex justify-content-between mb-2">
                        <span>Discount :</span>
                        <span>- INR {0}</span>
                      </li>
                      <li className="d-flex justify-content-between mb-2 fw-bold">
                        <span>Total:</span>
                        <span>INR {data?.price.toFixed(2)}</span>
                      </li>
                    </ul>
                    <button
                      type="submit"
                      onClick={(e) => submitDetails(e)}
                      className="btn btn-orange w-100"
                    >
                      Make Payment
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default OrderCart;
