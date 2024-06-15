import React from "react";
import Link from "next/link";
function AboutUs() {
  return (
    <div>
      <section
        className="bg-cover"
        style={{ background: "url(/assets/img/aboutTop.jpeg)no-repeat" }}
        data-overlay={4}
      >
        <div className="ht-50" />
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 col-12">
              <h1 className="text-white mb-4">
                Welcome to Sportzon,
                <br />
              </h1>
              <h2 className="text-white">
                The ultimate destination for sports enthusiasts of all levels.
              </h2>
              <p className="fs-5 fw-light text-light mb-4">
                At Sportzon, we're not just a platform; we're your ultimate
                destination for sports and fitness. Whether you're an individual
                seeking a personal trainer, booking top-notch sports complexes,
                or a team ready for tournaments, Sportzon revolutionizes the way
                you engage with sports. Embrace a healthier, more active
                lifestyle with Sportzon. Join us in redefining the way sports
                enthusiasts of all levels engage with their passion. Your
                journey to excellence begins now. Welcome to Sportzon – where
                passion meets play!
              </p>
              <Link href="/contact-us" className="btn btn-primary px-5">
                Know More..
              </Link>
            </div>
          </div>
        </div>
        <div className="ht-80" />
      </section>

      <>
        <section>
          <div className="container">
            <div className="row justify-content-between align-items-center mb-5">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="position-relative exloi">
                  <div className="position-relative pe-4 pb-4">
                    <img
                      src="/assets/img/pays-3.png"
                      className="img-fluid rounded-4"
                      alt="Loading..."
                    />
                  </div>
                  <div className="position-absolute bottom-0 end-0">
                    <img
                      src="assets/img/img-3.png"
                      className="img-fluid rounded-2 shadow"
                      width={230}
                      alt="Loading.."
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="position-relative exloi py-lg-0 py-4">
                  <div className="exloi-caption">
                    <div className="label text-success bg-light-success d-inline-flex rounded-4 mb-2 font--medium">
                      <span>Let's Introduce</span>
                    </div>
                    <h2 className="display-5 font--bold lh-base mb-3">
                      Our Story
                    </h2>
                    <p className="mb-0 fs-5 fw-light mb-3">
                      <strong>Sportzon</strong>, your all-encompassing sports
                      companion, extends its reach through both a dynamic
                      website and a user-friendly mobile app. Seamlessly
                      integrating technology into the world of sports, we bring
                      you a unified platform that caters to all your athletic
                      needs, whether you're exploring on the web or on the go.
                      Discover, engage, and elevate your sports experience with
                      Sportzon - where innovation meets accessibility. If you
                      have difficulty finding the time or resources to do so.
                      This may include people who work long hours, who do not
                      have access to a sports complex, or who are new to an
                      area.
                    </p>
                    <p className="mb-3 fs-5 fw-light">
                      <strong> Sportzon </strong>, born out of a vision by
                      founder{" "}
                      <span>
                        {" "}
                        <strong> Mr. Manoj Attri </strong>
                      </span>
                      , stands as a beacon of convenience in the sports
                      industry. Recognizing a gap that begged to be filled, Mr.
                      Attri embarked on a mission to create a platform that
                      transcends age and skill barriers, making sports easily
                      accessible to all.
                    </p>

                    <p className="mb-0 fs-5 fw-light">
                      Individuals can use the app to find sports complexes near
                      them, book court time, and find coaches and personal
                      trainers. Businesses can use the app to promote their
                      sports complexes, events, and services. Sportzon is a
                      great example of how technology can be used to improve
                      people's lives. The app makes it easier for people to find
                      and participate in sports, which can lead to a healthier
                      and happier lifestyle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="clearfix" />
      </>
    </div>
  );
}

export default AboutUs;
