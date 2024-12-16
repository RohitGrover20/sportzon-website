"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const SportsProg = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Use useEffect to set the visibility state to true on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay for entrance animation (500ms)
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Side Content */}
        <div className="col-lg-6 content-left p-4">
          <div
            className={`bg-light p-4 rounded shadow-lg ${
              isVisible ? "animate__animated animate__fadeInLeft" : ""
            }`} // Animation class
            style={{
              transition: "transform 0.3s ease",
              cursor: "pointer",
            }}
            // Scale effect on hover
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <h2 className="text-dark mb-3 fw-bold">
              <i className="bi bi-trophy me-2"></i> Welcome to Our Sports
              Program!
            </h2>
            <p className="fs-6 text-dark mb-4">
              Join us to explore various sports activities and improve your
              skills.
            </p>
            <p className="fs-6 text-muted mb-4">
              Whether you're a beginner or an experienced athlete, we have
              something for everyone! Sportzon is a state-of-the-art e-learning
              platform that offers product, role and sport-specific content and
              certification for new and existing customers who want to improve
              their technical skills.
            </p>
            <button className="btn btn-orange btn-md mt-2">Get Started</button>
          </div>
        </div>

        {/* Right Side GIF */}
        <div className="col-lg-6 content-right d-flex justify-content-center">
          <div
            className={`rounded ${
              isVisible ? "animate__animated animate__fadeInRight" : ""
            }`} // Animation class
            style={{
              transition: "transform 0.3s ease",
              cursor: "pointer",
            }}
            // Scale effect on hover
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <Image
              src="/assets/img/info/efco.png" // Replace with your GIF path if needed
              width={500}
              height={400}
              alt="Sports Animation"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-md-6 mb-4">
          <h3 className="text-dark fw-bold">Learn in Context</h3>
          <p className="text-dark">
            Our education team has extensive experience in the industry and has
            crafted courses to teach software and hardware product skills within
            the context of analysis and coaching roles.
          </p>
        </div>
        <div className="col-md-6 mb-4">
          <h3 className="text-dark fw-bold">Learn at Your Own Pace</h3>
          <p className="text-dark">
            Access our resources anytime and anywhere, allowing you to learn at
            a pace that suits you best.
          </p>
        </div>
      </div>

      {/* New Section: Find a Course */}
      <div className="my-5">
  <h2 className="text-center text-dark fw-bold mb-4">Find a Course</h2>
  <div className="row">
    {/* Course 1 */}
    <div className="col-md-4 mb-4">
      <div className="card border-0 shadow h-100">
        <Image
          src="/assets/img/stadium-bg.png"
          className="card-img-top img-fluid rounded"
          alt="Beginner Basketball"
          width={400}
          height={200}
        />
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">Beginner Basketball</h5>
          <p className="card-text text-muted">
            Learn the basics of basketball, from dribbling to shooting.
          </p>
          <button className="btn btn-outline-primary mt-2">Enroll Now</button>
        </div>
      </div>
    </div>

    {/* Course 2 */}
    <div className="col-md-4 mb-4">
      <div className="card border-0 shadow h-100">
        <Image
          src="/assets/img/stadium-bg.png"
          className="card-img-top img-fluid rounded"
          alt="Advanced Soccer Techniques"
          width={400}
          height={200}
        />
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">Advanced Soccer Techniques</h5>
          <p className="card-text text-muted">
            Master advanced techniques to take your soccer game to the next
            level.
          </p>
          <button className="btn btn-outline-primary mt-2">Enroll Now</button>
        </div>
      </div>
    </div>

    {/* Course 3 */}
    <div className="col-md-4 mb-4">
      <div className="card border-0 shadow h-100">
        <Image
          src="/assets/img/stadium-bg.png"
          className="card-img-top img-fluid rounded"
          alt="Yoga for Athletes"
          width={400}
          height={200}
        />
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">Yoga for Athletes</h5>
          <p className="card-text text-muted">
            Enhance your flexibility and mental focus with yoga tailored for
            athletes.
          </p>
          <button className="btn btn-outline-primary mt-2">Enroll Now</button>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default SportsProg;
