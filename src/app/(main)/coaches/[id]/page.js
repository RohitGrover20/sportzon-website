import { getCoachById } from "@/libs/fetchData";
import React from "react";
import ClassesByCoaches from "./ClassesByCoaches";

export const revalidate = 10;
async function CoachesById({ params }) {
  const id = params.id;
  const getCoach = await getCoachById(id);
  const data = getCoach?.data;

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
                <div className="d-flex align-items-center justify-content-center"></div>
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
                      {data?.experience} of experience
                    </span>
                    <h2 className="lh-base animated fadeInLeft theme-color">
                      {data?.user?.firstName} {data?.user?.lastName}
                    </h2>
                  </div>
                </div>

                <p className="animated fadeInLeft text-dark">
                  <h5 className="lh-base animated fadeInLeft text-orange">Bio</h5>
                  {data?.bio}
                </p>
                <div className="position-relative features-slec mt-4">
                  <h5 className="lh-base animated fadeInLeft text-orange">
                    Certifications
                  </h5>
                  <ul className="simple-list p-0 text-dark">
                    {data?.certification && data?.certification?.length > 0 ? (
                      data?.certification.map((item, index) => {
                        return (
                          <li className="animated fadeInLeft mb-3" key={index}>
                            <div className="ms-2 me-auto">{item}</div>
                          </li>
                        );
                      })
                    ) : (
                      <div>There is no certificates added ! </div>
                    )}
                  </ul>
                </div>
                <div className="position-relative features-slec mt-4">
                  <h5 className="lh-base animated fadeInLeft text-orange">Expertise</h5>
                  <ul className="simple-list p-0">
                    {data?.expertise && data?.expertise?.length > 0 ? (
                      data?.expertise.map((item, index) => {
                        return (
                          <li className="animated fadeInLeft mb-3 text-dark" key={index}>
                            <div className="ms-2 me-auto">{item.label}</div>
                          </li>
                        );
                      })
                    ) : (
                      <div>There is no expertise added ! </div>
                    )}
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
