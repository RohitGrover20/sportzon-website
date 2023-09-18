import React from "react";

function Rating(props) {
  const rating =
    props?.rating == "Rating is not available"
      ? "0.0"
      : parseFloat(props?.rating).toFixed(1);
  const floorRating = Math.round(props?.rating).toFixed(1);
  const differ = 5 - (isNaN(floorRating) ? 0 : floorRating);
  let stars = [];
  for (let i = 0; i < floorRating; i++) {
    stars.push(<i className="fa-solid fa-star text-warning" key={i} />);
  }

  for (let j = 0; j < differ; j++) {
    stars.push(<i className="fa-solid fa-star text-muted" key={j + "muted"} />);
  }

  return (
    <div className="d-flex justify-content-left small mb-2 align-items-center">
      {stars}
      <div className="edlois">
        <strong className="fw-semibold ms-2">{rating}</strong>
      </div>
    </div>
  );
}

export default Rating;
