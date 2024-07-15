import React from "react";
import DOMPurify from "isomorphic-dompurify";
function Information(props) {
  const data = props?.data;
  let cleanDescription = DOMPurify.sanitize(data?.description);
  return (
    <div>
      <div className="jbs-blocs">
        <div className="jbs-blocs-body">
          <div className="jbs-content mb-3 p-3 card">
            <h6 className="text-orange">Information:</h6>
            <ul className="simple-list colored-list">
              <li className="text-dark">
                <strong className="theme-color">Fees</strong> : {data?.fees}{" "}
                INR/{data?.feesFrequency}
              </li>
              <li className="text-dark">
                <strong className="theme-color">Duration</strong> :{" "}
                {data?.duration} Days
              </li>
              <li className="text-dark">
                <strong className="theme-color">Address</strong> :{" "}
                {data?.address}
              </li>
              <li className="text-dark">
                <strong className="theme-color">Class Timings</strong> :{" "}
                {data?.classTiming?.map((item, index) => (
                  <div className="badge badge-success me-1" key={index}>
                    {item?.from} - {item?.to}
                  </div>
                ))}
              </li>
            </ul>
          </div>
          <div className="jbs-content mb-3 card p-3">
            <h6 className="text-orange">Amenities:</h6>
            <ul className="simple-list colored-list d-flex">
              {data?.amenities?.map((item, index) => {
                return (
                  <li key={index} className="me-3">
                    {item?.label}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="jbs-content card mb-4 p-3">
            <h6 className="text-orange">Details:</h6>
            <div
              dangerouslySetInnerHTML={{
                __html: `${cleanDescription}`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
