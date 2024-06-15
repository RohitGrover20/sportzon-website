import React from "react";
import DOMPurify from "isomorphic-dompurify";

function ClassesCard(props) {
  const classes = props && props?.class;
  let cleanDescription = DOMPurify.sanitize(classes?.description);
  return (
    <div
      className="rounded-4 zoom-on-hover"
      style={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
        opacity: 0.9,
        marginBottom: "20px",
        overflow: "hidden",
      }}
    >
      <div className="zoom-effect-wrapper">
        <div className="zoom-effect-img">
          <img
            src={classes?.banner}
            className="img-fluid"
            alt={classes?.slug}
            style={{ height: "200px", width: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="bg-orange" color="#ff611a">
        <div className="d-flex align-items-center  justify-content-center pt-3">
          <span className="label font--medium text-orange me-3 bg-white">
            <i className="fa fa-map-marker" /> {classes?.city}, {classes?.state}
          </span>
          <span className="label bg-white text-orange font--medium me-3">
            <i className="fa fa-bookmark" /> {classes?.activity}
          </span>
        </div>
        <h5 className="lh-base text-center mt-3 fs-3 text-white">
          {classes?.title}
        </h5>
        <div className="m-3 text-white">
          <p
            dangerouslySetInnerHTML={{
              __html:
                cleanDescription.length > 150
                  ? `${cleanDescription.substring(0, 150) + "...."}`
                  : cleanDescription,
            }}
          />
          <h5 className="text-white text-center">Trainer: Richa Kocher</h5>
          <hr style={{ width: "30" }} />
        </div>

        <div
          className="d-flex align-items-center justify-content-between p-0"
          style={{ justifyContent: "between" }}
        >
          <div className="edlois">
            {classes?.classType === "afterSchool" && (
              <small
                className="text-success"
                style={{ textTransform: "capitalize" }}
              >
                {classes && classes?.feesFrequency == "oneTime"
                  ? "One Time"
                  : classes?.feesFrequency}
              </small>
            )}
            <div className="h3 fw-semibold text-dark">
              {classes && classes?.classType === "afterSchool" && (
                <>
                  <i className="fa fa-rupee me-1"></i>
                  {classes?.fees}{" "}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassesCard;
