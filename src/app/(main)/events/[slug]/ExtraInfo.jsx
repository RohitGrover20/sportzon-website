import React from "react";
// import Registration from './Registration'
import DOMPurify from "isomorphic-dompurify";
import NoDataFound from "@/components/NoDataFound";

function ExtraInfo(props) {
  const event = props && props.event;
  let cleanDescription = DOMPurify.sanitize(event?.description);
  return (
    <div className="row pt-0">
      <div className="col-xl-12 col-lg-12 col-md-12">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
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
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="location-tab"
              data-bs-toggle="tab"
              data-bs-target="#location-tab-pane"
              type="button"
              role="tab"
              aria-controls="location-tab-pane"
              aria-selected="true"
            >
              Location
            </button>
          </li>
          {event && event.eventType == "tournament" ? (
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
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
            className="tab-pane fade show active"
            id="description-tab-pane"
            role="tabpanel"
            aria-labelledby="description-tab"
            tabIndex={0}
          >
            {cleanDescription?.length>0 ? 
            <div
              dangerouslySetInnerHTML={{
                __html: `${cleanDescription}`,
              }}
            ></div> : <NoDataFound/>}
          </div>
          <div
            className="tab-pane fade"
            id="location-tab-pane"
            role="tabpanel"
            aria-labelledby="location-tab"
            tabIndex={0}
          >
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  className="gmap_iframe"
                  width="100%"
                  height="400px"
                  src={`https://maps.google.com/maps?width=600&height=400&hl=en&q=${
                    event && event.address
                  }&t=p&z=14&ie=UTF8&iwloc=B&output=embed`}
                />
              </div>
            </div>
          </div>
          {event && event.eventType == "tournament" ? (
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
      {/* <Registration event={event} /> */}
    </div>
  );
}

export default ExtraInfo;
