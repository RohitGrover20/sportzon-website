"use client";
import React from "react";

function BookingSection(props) {
  const venue = props && props?.venue;
  const handleBookNow = () => {
    const section = document.getElementById("book-now-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="position-relative mb-5 mb-lg-5 p-0 m-5 book-btn">
      <div className="d-flex my-1 justify-content-around p-0 pb-1">
        <button
          className="btn btn-lg"
          style={{ background: "#0a5993" }}
          // onClick={() => {
          //   window.location.replace(`/booking?venue=${venue && venue?.slug}`);
          // }}
          onClick={handleBookNow}
        >
          <p className="text-white fs-6 pb-0 mb-0">Book Now</p>
        </button>
        <button
          className="btn btn-lg bg-orange"
          onClick={() => {
            window.location.replace(`/offering-for-corporates`);
          }}
        >
          <p className="text-white fs-6 pb-0 mb-0 ">Bulk/ Corporate</p>
        </button>
      </div>
    </div>
  );
}

export default BookingSection;
