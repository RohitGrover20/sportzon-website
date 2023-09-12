import { getCoachById } from "@/libs/fetchData";
import React from "react";
import ClassesByCoaches from "./ClassesByCoaches";

async function CoachesById({ params }) {
  const id = params.id;
  const { data } = await getCoachById(id);
  return (
    <>
      <section className="py-5 bg-light-seegreen">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div
              className="col-xl-3 col-lg-3 col-md-3 wow  fadeInRight animated mb-4"
              style={{ visibility: "visible", animationName: "fadeInRight" }}
            >
              <div className="position-relative animated fadeInRight text-center">
                <img
                  src={
                    data?.user?.profile
                      ? data?.user?.profile
                      : `/assets/img/userplaceholder.png`
                  }
                  className="img-fluid border shadow-sm"
                  alt="coach"
                />
                <div className="d-flex align-items-center justify-content-center">
                  {/* <button className="btn btn-orange btn-sm mt-2">
                    + Follow
                  </button> */}
                  {/* <span className="text-orange ms-3 me-3">190 Follows</span>
                  <span className="text-primary">2 Following</span> */}
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-9">
              <div
                className="d-block position-relative wow  fadeInLeft animated"
                style={{ visibility: "visible", animationName: "fadeInLeft" }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="label bg-light-primary text-primary animated fadeInLeft">
                      {data?.experience} Years of experience
                    </span>
                    <h2 className="lh-base animated fadeInLeft">
                      {data?.user?.firstName} {data?.user?.lastName}
                    </h2>
                  </div>
                </div>

                <p className="animated fadeInLeft">{data?.bio}</p>
                <div className="position-relative features-slec mt-4">
                  <h5 className="lh-base animated fadeInLeft">
                    Certifications
                  </h5>
                  <ul className="simple-list p-0">
                    {data?.certification &&
                      data?.certification.map((item, index) => {
                        return (
                          <li className="animated fadeInLeft mb-3" key={index}>
                            <div className="ms-2 me-auto">{item}</div>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ClassesByCoaches id={id} />
    </>
  );
}

export default CoachesById;
