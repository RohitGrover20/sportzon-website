"use client";
import config from "@/config";
import axios from "axios";
import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { toast } from "react-toastify";
import ResetPassword from "./ResetPassword";

function Otp(props) {
  const mobile = props?.mobile?.mobile;
  const [otp, setOtp] = useState("");
  const [verify, setVerify] = useState(false);
  const sendOtp = async () => {
    const values = { mobile, otp };
    try {
      const verify = await axios.post(
        `${config.API_URL}/users/verify-otp`,
        values
      );
      if (verify) {
        if (verify?.data.code == "verified") {
          setVerify(true);
        }
      }
    } catch (err) {
      toast.error(err.response?.data?.message, {
        position: "top-right",
        autoClose: 2000,
        onClose: () => {
          setOtp("");
        },
      });
    }
  };
  return (
    <div className="card border-0 rounded-5 p-xl-4 p-lg-4 p-3">
      <div className="square--80 circle bg-light-primary text-primary d-flex mb-4 mx-auto">
        <i className="fa-solid fa-key fs-1" />
      </div>
      {verify ? (
        <ResetPassword mobile={mobile} />
      ) : (
        <div className="card-wrap text-center mb-4">
          <h1 className="fs-2">OTP?</h1>
          <p>Use OTP sent to your registered mobile No.</p>
          <OTPInput
            value={otp}
            onChange={setOtp}
            containerStyle={"d-flex justify-content-center align-item-center"}
            inputStyle="form-control w-25 border-2 shadow-sm"
            numInputs={4}
            placeholder={"0000"}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
          />
          <div className="text-end">
            <button
              className="btn btn-lg btn-primary mt-5"
              disabled={otp.length < 4 ? true : false}
              onClick={sendOtp}
            >
              Reset Password
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Otp;
