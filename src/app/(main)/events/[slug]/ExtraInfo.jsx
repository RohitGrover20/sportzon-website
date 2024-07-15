import React from "react";
import DOMPurify from "isomorphic-dompurify";
import NoDataFound from "@/components/NoDataFound";

function ExtraInfo(props) {
  const event = props && props?.event;
  let cleanDescription = DOMPurify.sanitize(event?.description);

  const totalBooking = event?.totalSlots - event?.emptySlots;
  const progress = parseInt(parseFloat(totalBooking / event?.totalSlots) * 100);
  return (
    <div className="row pt-0">
      <div className="col-xl-12 col-lg-12 col-md-12">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active fs-6"
              id="description-tab"
              data-bs-toggle="tab"
              data-bs-target="#description-tab-pane"
              type="button"
              role="tab"
              aria-controls="description-tab-pane"
              aria-selected="true"
            >
              Description
            </button>
          </li>
          {event && event?.eventType == "tournament" ? (
            <li className="nav-item" role="presentation">
              <button
                className="nav-link fs-6"
                id="info-tab"
                data-bs-toggle="tab"
                data-bs-target="#team-tab-pane"
                type="button"
                role="tab"
                aria-controls="team-tab-pane"
                aria-selected="false"
                tabIndex={-1}
              >
                Participating Team
              </button>
            </li>
          ) : null}
        </ul>
        <div className="tab-content pt-4" id="myTabContent">
          <div
            className="tab-pane fade show active text-dark card p-3"
            id="description-tab-pane"
            role="tabpanel"
            aria-labelledby="description-tab"
            tabIndex={0}
          >
            {cleanDescription?.length > 0 ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: `${cleanDescription}`,
                }}
              ></div>
            ) : (
              <NoDataFound />
            )}
          </div>
          <div className="card mt-4 p-3 overflow-visible">
            <div className="">
              <div className="d-flex justify-content-between">
                <h5 classN ame="text-secondary">
                  Slots Available
                </h5>
                <h5 className="text-info">
                  {parseFloat(event?.emptySlots)}/{event && event?.totalSlots}
                </h5>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-label="Animated striped example"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  style={{ width: progress + "%" }}
                />
              </div>
            </div>
          </div>
          {event && event?.eventType == "tournament" ? (
            <div
              className="tab-pane fade"
              id="team-tab-pane"
              role="tabpanel"
              aria-labelledby="info-tab"
              tabIndex={0}
            >
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Team</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Team 1</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Team 2</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Team 3</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Team 4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ExtraInfo;
