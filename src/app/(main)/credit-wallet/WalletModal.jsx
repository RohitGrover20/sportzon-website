"use client";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "../../../../context/context";
import axios from "axios";
import config from "@/config";
import { toast } from "react-toastify";

function WalletModal() {
  const router = useRouter();
  const context = useContext(UserContext);
  const user = context && context;
  // const subscriptionData = await getSubscriptionPlan();

  const [amount, setAmount] = useState("");
  const [isAmountValid, setIsAmountValid] = useState(true);

  const payment = async () => {
    if (user && user.code == "unauthorised") {
      window.location.replace(`/login`);
    } else {
      axios
        .post(
          `${config.API_URL}/landing/payments/orders`,
          { amount: amount * 100 },
          { withCredentials: true }
        )
        .then((res) => {
          handleOpenRazorpay({
            ...res.data.data,
          });
        })
        .catch((err) => {
          console.log(err);
          const error = err?.response;
          toast.error(
            error && error?.data && error?.data && error?.data?.message,
            {
              position: "top-right",
              autoClose: 2000,
              onClose: () => {},
            }
          );
        });
    }
  };

  const handleOpenRazorpay = (data) => {
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
            `${config.API_URL}/landing/wallet/process`,
            {
              ...data.values,
              response: response,
              amount: data?.amount / 100,
            },
            { withCredentials: true }
          )
          .then((res) => {
            toast.success(res.data && res.data && res.data.message, {
              position: "top-right",
              autoClose: 2000,
              onClose: () => {
                window.location.replace("/user/credit-wallet");
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
  const handleRecharge = () => {
    payment();
  };

  const handleCreditHistoryClick = () => {
    router.push("/user/credit-wallet");
  };

  return (
    <>
      <h5 className="display-4 bold fw-bold text-center text-orange mb-0">
        Add Credit Coins Now !
      </h5>
      <div className="modal-body">
        <p className="text-center">
          Easily add credit coins to your wallet for seamless transactions and
          premium features.
        </p>
        <p className="text-center font-weight-bold text-success">
          Add your wallet with credit coins and get an additional 10% credit
          coins!
        </p>
        <p className="text-center text-success">(1 credit coin = ₹1)</p>
        <div className="mb-3">
          <label htmlFor="rechargeAmount" className="form-label">
            Recharge Amount
          </label>
          <div className="input-group">
            <span className="input-group-text">₹</span>
            <input
              type="number"
              className={`form-control ${!isAmountValid ? "is-invalid" : ""}`}
              id="rechargeAmount"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => {
                const value = Math.max(0, e.target.value); // Ensure value is non-negative
                setAmount(value);
                setIsAmountValid(value > 0);
              }}
              min="0"
            />
            {!isAmountValid && (
              <div className="invalid-feedback">
                Please enter a positive amount.
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary mod-close"
          data-bs-dismiss="modal"
          aria-hidden="true"
        >
          Cancel
        </button>

        <button
          type="button"
          className="btn btn-orange mod-close"
          data-bs-dismiss="modal"
          aria-hidden="true"
          onClick={handleCreditHistoryClick}
        >
          Check Your Credit History
        </button>

        <button
          type="button"
          className="btn btn-orange mod-close"
          data-bs-dismiss="modal"
          aria-hidden="true"
          onClick={handleRecharge}
          disabled={!amount}
        >
          Recharge Now
        </button>
      </div>
    </>
  );
}

export default WalletModal;
