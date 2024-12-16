"use client";
import React, { useState, useRef, useEffect } from "react";
import OrderCart from "./OrderCart";

function MembershipPlans({ data }) {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const orderCartRef = useRef(null);

  useEffect(() => {
    if (selectedPlan && orderCartRef.current) {
      orderCartRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedPlan]);

  const renderCard = (item, index) => {
    return (
      <div
        key={index}
        className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center"
      >
        <div
          className="card border-primary rounded-3 text-center"
          style={{
            height: "100%",
            width: "100%",
            transition:
              "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 1)",
          }}
          onMouseEnter={(e) => applyHoverEffect(e, true)}
          onMouseLeave={(e) => applyHoverEffect(e, false)}
        >
          <div className="card-body theme-bg text-white">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h5 className="card-title mb-3 text-white fs-2 fw-bold">
                {item?.planName}
              </h5>
              <div
                className="theme-bg text-white p-2 mb-4 d-flex flex-column justify-content-center align-items-center rounded border border-white shadow-sm"
                style={{ width: "210px" }}
              >
                <p className="fs-4 m-0 p-0 fw-bold">Rs. {item?.price}</p>
                <p className="fs-5">Yearly</p>
              </div>
            </div>
            <ul className="list-unstyled mb-4">
              {item.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="d-flex align-items-start mb-2"
                >
                  <i
                    className="fa fa-check-circle me-3"
                    style={{ fontSize: "40px", color: "#ff611a" }}
                  ></i>
                  <span className="text-start">{feature?.description}</span>
                </li>
              ))}
            </ul>
            <button
              className="btn btn-lg mb-3"
              type="submit"
              onClick={() => setSelectedPlan(item)}
              style={{ background: "#ff611a", color: "white" }}
            >
              Buy Now
            </button>
            <p className="text-muted fs-6" style={{ fontStyle: "italic" }}>
              * This is a one-time payment, and there will be no auto-renewal.
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Function to apply hover effect by updating the card style
  const applyHoverEffect = (e, isHovering) => {
    const cardElement = e.currentTarget;
    cardElement.style.boxShadow = isHovering
      ? "0 8px 16px rgba(0, 0, 0, 2)"
      : "0 4px 12px rgba(0, 0, 0, 1)";
    cardElement.style.transform = isHovering ? "scale(1.05)" : "scale(1)";
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {data && data?.map((item, index) => renderCard(item, index))}
      </div>
      {selectedPlan && (
        <div className="container mt-5" ref={orderCartRef}>
          <OrderCart data={selectedPlan} />
        </div>
      )}
    </div>
  );
}

export default MembershipPlans;
