import React from "react";

const NoDataFound = () => {
  return (
    <div className="text-center mt-5">
      <i className="fas fa-exclamation-triangle fa-10x text-warning"></i>
      <h5 className="mt-4">No Data Found</h5>
      <p className="text-muted">Sorry, but there is no data available.</p>
    </div>
  );
};

export default NoDataFound;
