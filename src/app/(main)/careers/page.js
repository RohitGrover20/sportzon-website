"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import config from "@/config";
export const revalidate = 10;

const JobCard = ({ title, type, state, city, url, description }) => (
  <div className="col-lg-4 col-md-6 col-sm-12 ">
    <div className="card h-100 text-dark">
      <div className="card-body m-4">
        <h3 className="card-title">{title}</h3>
        <p className="card-text"><strong>Work Type:</strong>{type}</p>
        <p className="card-text">
          <strong>Location:</strong> {state}, {city}
        </p>
        <span><strong>Description:</strong></span>
        <p
          dangerouslySetInnerHTML={{
            __html: description, 
          }}
          className="fs-7"
        ></p>{" "}
        <a href={url} className="btn btn-orange btn-md">
          Apply Now
        </a>
      </div>
    </div>
  </div>
);

const Careers = () => {
  const [jobData, setJobData] = useState([]);
  useEffect(() => {
    if (window.location.hash === "#careers-section") {
      document
        .getElementById("careers-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/landing/jobs`, {
        withCredentials: true,
      })
      .then((result) => {
        setJobData(result?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section className="mt-0 p-0">
        <div className="container">
          {/* Banner Section */}
          <div className="row banner-section align-items-center my-5">
            <div className="col-lg-6">
              <div className="banner-content">
                <h5>CARRERS AT SPORTZON</h5>
                <h1 className="text-black">Work With Us</h1>
                <p className="fs-4 text-black">
                  Explore remote-friendly, flexible opportunities and join our
                  mission to make work life simpler, more pleasant, and more
                  productive.
                </p>
                <div className="mt-5">
                  <button
                    type="button"
                    className="btn btn-orange btn-md text-white text-uppercase fw-bold"
                    onClick={() =>
                      document
                        .getElementById("careers-section")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    View Careers
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <Image
                  src={"/assets/img/carrers-img.jpg"}
                  alt="carrers Banner"
                  className="img-fluid rounded-3"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="careers-section"
        style={{ background: "#ececf3", padding: "2rem 0" }}
      >
        <div className="container">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="row justify-content-center">
              <h2 className="text-center text-black">
                Are you ready to join our team?
              </h2>
              {jobData && jobData?.length > 0 ? (
                jobData.map((job, index) => (
                  <JobCard
                    key={index}
                    title={job.title}
                    type={job.type}
                    state={job.state}
                    city={job.city}
                    url={job.url}
                    description={job.description}
                  />
                ))
              ) : (
                <p className="fs-6  text-center text-muted">
                  We are not hiring at this time. Check back soon for updates on
                  new job listings !
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          background: "#f8f9fa",
          padding: "2rem 0",
          borderTop: "1px solid #dee2e6",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2 className="text-dark ">Stay in Touch for Future Openings</h2>
              <p className="fs-6 text-muted">
                Not seeing a job opening that matches your skills? Don't worry!
                We’re always eager to connect with talented individuals. Share
                your resume with us at{" "}
                <a
                  href="mailto:info@sportzon.in"
                  className="theme-color fw-bold"
                >
                  info@sportzon.in
                </a>
                , and we'll keep you in mind for future opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix"></div>
    </>
  );
};

export default Careers;
