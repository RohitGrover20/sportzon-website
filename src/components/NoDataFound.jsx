import React from "react";

const NoDataFound = (data) => {
  return (
    <div className="text-center mt-5">
      <i className="fas fa-exclamation-triangle fa-10x text-warning"></i>
      <h5 className="mt-4">{data?.data=="res" ? "Great things are on the way!": "No Data has been found !"}</h5>
      <p className="text-muted">Our team is hard at work to bring you exciting updates. Keep an eye out for what's coming!</p>
    </div>
  );
};

export default NoDataFound;
