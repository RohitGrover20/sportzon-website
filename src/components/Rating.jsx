import React from "react";

function Rating(props) {
  const rating = Math.round(props?.rating * 10) / 10;
  const differ = 5 - rating;
  let stars = [];
  for (let i = 0; i < rating; i++) {
    // Use whatever looping you need here

    stars.push(<i className="fa-solid fa-star text-warning" key={i} />); // Edit your images here
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
