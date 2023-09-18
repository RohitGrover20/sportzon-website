"use client";
import config from "@/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/context";
import Loading from "./Loading";

function RatingCard(props) {
  const [loading, setLoading] = useState(false);
  const context = useContext(UserContext);
  const user = context && context;
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const on = {
    color: "#f69520",
    fontSize: "35px",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    cursor: "pointer",
  };
  const off = {
    color: "#ccc",
    fontSize: "35px",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    cursor: "pointer",
  };

  const saveRating = async () => {
    try {
      setLoading(true);
      const rate = await axios.post(
        `${config.API_URL}/landing/rating`,
        { rating: rating, arena: props?.arena, type: props?.type },
        {
          withCredentials: true,
        }
      );
      if (rate) {
        setLoading(true);
        const code = rate.data?.code;
        code == "created"
          ? toast.success
          : toast.warning(rate.data && rate.data && rate.data.message, {
              position: "top-right",
              autoClose: 2000,
              onClose: () => {
                const closeBtn =
                  document && document.getElementById("mod-close");
                closeBtn.click();
                setLoading(false);
              },
            });
      }
    } catch (err) {
      const error = err.response;
      setLoading(true);
      toast.error(error.data && error.data && error.data.message, {
        position: "top-right",
        autoClose: 2000,
        onClose: () => {
          const closeBtn = document && document.getElementById("mod-close");
          closeBtn.click();
          setLoading(false);
        },
      });
    }
  };
  return (
    <>
      <ToastContainer />
      <a
        className="text-primary position-relative fw-semibold p-0"
        data-bs-toggle="modal"
        data-bs-target={
          user && user.code == "unauthorised" ? "#login" : "#RatingCard"
        }
        style={{ cursor: "pointer" }}
      >
        <span className="text-success ms-2"> (Rate Item?)</span>
      </a>
      <div
        className="modal fade"
        id="RatingCard"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="RatingCard"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-sm"
          role="document"
        >
          <div className="modal-content" id="RatingCardContent">
            <span
              className="mod-close"
              id="mod-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              <i className="fas fa-close" />
            </span>
            <div className="modal-header p-3">
              <div className="mdl-title mb-0">
                <h5 className="modal-header-title">Give your ratings</h5>
              </div>
            </div>
            {loading ? (
              <Loading />
            ) : (
              <div className="modal-body text-center ">
                {[...Array(5)].map((star, index) => {
                  index += 1;
                  return (
                    <button
                      style={index <= (hover || rating) ? on : off}
                      type="button"
                      key={index}
                      onClick={() => setRating(index)}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(rating)}
                    >
                      <span className="star">&#9733;</span>
                    </button>
                  );
                })}
              </div>
            )}
            <div className="modal-footer p-1">
              <button
                className="btn btn-primary"
                type="button"
                onClick={saveRating}
              >
                <i className="fa fa-save me-1" /> Save Rating
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RatingCard;
