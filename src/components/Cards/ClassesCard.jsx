import React from "react";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import Rating from "../Rating";

function ClassesCard(props) {
  const classes = props && props.class;
  let cleanDescription = DOMPurify.sanitize(classes.description);
  return (
    <div
      className="priocs rounded-3 bg-white p-3 "
      // style={{ border: "3px solid #eee" }}
      style={{
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)", // Add a box shadow
      opacity: 0.9,
      // width: "300px",
      marginBottom: "20px"
    }}
    >
      <div className="zoom-effect-wrapper">
        <div className="zoom-effect-img">
          <img
            src={classes?.banner}
            className="img-fluid rounded-4"
            alt={classes?.slug}
            style={{ height: "200px", width: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
      {/* <div className="col-xl-12 col-lg-12 col-md-12 col-xl-12 px-xl-12"> */}
      {/* Top Item */}
      <div className="d-flex align-items-center pt-3 py-2">
        <span className="label bg-light-orange font--medium text-orange me-3">
          <i className="fa fa-map-marker" /> {classes?.city}, {classes?.state}
        </span>
        <span className="label bg-light-success font--medium text-success me-3">
          <i className="fa fa-bookmark" /> {classes?.activity}
        </span>
      </div>
      {/* Item Title */}
      <h5 className="lh-base">{classes?.title}</h5>
      <p
  dangerouslySetInnerHTML={{
    __html: cleanDescription.length > 150
      ? `${cleanDescription.substring(0, 150) + "...."}`
      : cleanDescription,
  }}
/>
      {/* Item Rate & review */}

      <div className="d-flex justify-content-between align-items-center">
  <div>
    <Rating rating={classes?.rating} />
  </div>
  <div className="h6">
    <i className="fa fa-users" /> Trainers
    {classes &&
      classes.coaches &&
      classes.coaches.map((item, index) => {
        return (
          <span className="badge badge-dark ms-1" key={index}>
            {item.label}
          </span>
        );
      })}
  </div>
</div>

      {/* <div className="d-flex"> */}
      <div
        className="d-flex align-items-center justify-content-between p-0"
        style={{ justifyContent: "between" }}
      >
        <div className="edlois">
          <small
            className="text-success"
            style={{ textTransform: "capitalize" }}
          >
            {classes && classes.feesFrequency == "oneTime"
              ? "One Time"
              : classes.feesFrequency}
          </small>
          <div className="h3 fw-semibold text-dark">
            <i className="fa fa-rupee me-1 "></i>
            {classes && classes.fees}
          </div>
        </div>
        <Link href={`/classes/${classes.slug}`}>
          <button className="btn btn-primary btn-md me-2" type="button">
            <i className="fa-solid fa-paper-plane me-2 ms-n1" />
            Join Now
          </button>
        </Link>
      </div>
      {/* </div> */}
    </div>
  );
}

export default ClassesCard;
