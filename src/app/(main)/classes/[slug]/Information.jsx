import React from "react";
import DOMPurify from "isomorphic-dompurify";
// import Link from "next/link";
import Share from "@/components/Share";
import Link from "next/link";
function Information(props) {
  const data = props?.data;
  let cleanDescription = DOMPurify.sanitize(data?.description);
  return (
    <div>
      <div className="jbs-blocs">
        <div className="jbs-blocs-body">
          <div className="jbs-content mb-3">
            <h6>Information:</h6>
            <ul className="simple-list colored-list">
              <li>
                <strong>Fees</strong> : {data?.fees} INR/{data?.feesFrequency}
              </li>
              <li>
                <strong>Duration</strong> : {data?.duration} Days
              </li>
              <li>
                <strong>Address</strong> : {data?.address}
              </li>
              <li>
                <strong>Class Timings</strong> :{" "}
                {data?.classTiming?.map((item, index) => (
                  <div className="badge badge-success me-1" key={index}>
                    {item.from} - {item.to}
                  </div>
                ))}
              </li>
            </ul>
          </div>
          <div className="jbs-content mb-3">
            <h6>Coaches:</h6>
            {/* <ul className="simple-list colored-list"> */}
            <div className="row">
              {data?.coaches?.map((item, index) => {
                return (
                  <div className="col-lg-6" key={index}>
                    <div
                      className="d-flex align-items-center justify-content-start p-3 rounded-3 border"
                      key={index}
                    >
                      <div className="flex-shrink-0">
                        <img
                          src="/assets/img/l-1.png"
                          className="img-fluid"
                          width={80}
                          alt=""
                        />
                      </div>
                      <div className="ps-3">
                        <h6 className="mb-2">{item?.label}</h6>
                        <button className="m-0 btn btn-primary btn-sm">
                          + Follow
                        </button>
                        <Link href={`/coaches/${item.value}`}>
                          <button className="m-0 btn btn-secondary btn-sm ms-1">
                            Profile
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* </ul>s */}
          </div>
          <div className="jbs-content mb-3">
            <h6>Amenities:</h6>
            <ul className="simple-list colored-list">
              {data?.amenities?.map((item, index) => {
                return <li key={index}>{item?.label}</li>;
              })}
            </ul>
          </div>

          <div className="jbs-content mb-4">
            <h6>Description:</h6>
            <div
              dangerouslySetInnerHTML={{
                __html: `${cleanDescription}`,
              }}
            ></div>
          </div>
        </div>
        <div className="jbs-blox-footer d-flex align-items-center justify-content-between">
          <div className="blox-first-footer">
            <div className="ftr-share-block">
              <ul className="p-0 d-flex align-items-center colored-list">
                <li className="me-2">
                  <strong className="fw-medium text-dark">
                    Share This Class:
                  </strong>
                </li>
                <Share />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
