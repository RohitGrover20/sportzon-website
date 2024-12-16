import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
const ClassesCard = dynamic(() => import("@/components/Cards/ClassesCard"), {
  ssr: false,
});
const SimpleCard = dynamic(() => import("@/components/Cards/SimpleCard"), {
  ssr: false,
});
const BannerSlider = dynamic(
  () => import("@/components/HeaderOne/BannerSlider"),
  { ssr: false }
);
const Newsletter = dynamic(() => import("@/components/Newsletter"), {
  ssr: false,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: false,
});
import {
  getClasses,
  getHomeBanner,
  getTestimonials,
  getVenue,
  getEvents,
} from "@/libs/fetchData";
import AboutUs from "@/components/AboutUs";
import EventsCard from "@/components/Cards/EventsCard";
export const revalidate = 10;
export default async function Home() {
  const testimonialData = await getTestimonials();
  const testimonials = testimonialData?.data;
  const bannerData = await getHomeBanner();
  const classesData = await getClasses();
  const classes = classesData && classesData.data;
  const banners = bannerData && bannerData.data;
  const venuesData = await getVenue();
  const venues = venuesData && venuesData?.data;
  const eventsData = await getEvents();
  const events = eventsData && eventsData?.data;
  return (
    <>
      {banners && <BannerSlider banners={banners} />}
      <AboutUs />
      {/* Venues------------------------- */}
      <section
        className="pt-5 pb-5"
        style={{
          backgroundImage: 'url("/assets/img/orange-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-12 col-lg-10 col-md-11 mb-3">
              <div className="sec-heading text-center mt-4"></div>
              <div className="row justify-content-center g-4">
                <div id="venue-slider">
                  {venues &&
                    venues?.map((item, index) => (
                      <div key={index}>
                        <SimpleCard item={item} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes------------------------ */}
      <section className="pt-5 pb-3">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-12 col-lg-10 col-md-11">
              <div className="sec-heading text-center">
                <h1
                  className="mb-1 fw-light display-1 text-center classes-title"
                  style={{ color: "#25aeda" }}
                >
                  Play Beyond <span className="text-orange">Limits</span>{" "}
                </h1>
                <p className="fs-6 classes-subtitle">
                  Elevate your game with us. State-of-the-art facilities, expert
                  coaching, and a community dedicated to sporting excellence.
                  Discover the thrill of sports at its best.
                </p>
              </div>
              <div className="row justify-content-center g-4">
                <div className="hero" id="classes-slider">
                  {classes &&
                    classes.map((item, index) => {
                      return (
                        <div
                          className="col-xl-4 col-lg-4 col-md-6 col-sm-6"
                          key={index}
                        >
                          <ClassesCard class={item} />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events------------------------- */}
      <section
        className="p-3"
        style={{
          backgroundImage: 'url("/assets/img/orange-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-12 col-lg-10 col-md-11 mb-3">
              <div className="sec-heading text-center">
                <h1 className="mb-1 fw-light display-1 text-center classes-title text-white">
                  Exciting Sports <span className="theme-color">Events</span>{" "}
                </h1>
                <p className="fs-6 text-white">
                  Catch the action with our thrilling sports events. Don’t miss
                  out on the excitement!
                </p>
              </div>{" "}
              <div className="row justify-content-center g-4">
                <div id="event-slider">
                  {events &&
                    events?.map((item, index) => (
                      <div key={index}>
                        <EventsCard item={item} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="pt-5 pb-5 bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-12 col-lg-10 col-md-11 text-center">
              <div className="sec-heading mb-4">
                <h2
                  className="mb-1 fw-light display-1 text-center"
                  style={{ color: "#25aeda" }}
                >
                  Our Trusted <span className="text-orange">Partners</span>
                </h2>
                <p className="fs-6">
                  We're proud to collaborate with leading companies in the
                  sports industry to bring you the best.
                </p>
              </div>
              <div className="mb-4">
                <Link href="/partner-with-us">
                  <button
                    className="btn btn-orange btn-md ms-auto me-5 p-2"
                    type="button"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Want to Join Us as a Partner?
                  </button>
                </Link>
              </div>
              <div className="row justify-content-center g-4">
                {/* Partner Logos Section */}
                <div className="col-md-2 col-sm-4 col-6">
                  <div className="partner-logo text-center">
                    <Image
                      src="/assets/img/partner-company/pine-labs.jpeg"
                      width="100"
                      height="100"
                      alt="Partner 1"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-2 col-sm-4 col-6">
                  <div className="partner-logo text-center">
                    <Image
                      src="/assets/img/partner-company/hcl.jpeg"
                      width="100"
                      height="100"
                      alt="Partner 2"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-2 col-sm-4 col-6">
                  <div className="partner-logo text-center">
                    <Image
                      src="/assets/img/partner-company/dabur.jpeg"
                      width="100"
                      height="100"
                      alt="Partner 3"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-2 col-sm-4 col-6">
                  <div className="partner-logo text-center">
                    <Image
                      src="/assets/img/partner-company/Capgimini.jpeg"
                      width="150"
                      height="100"
                      alt="Partner 4"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-2 col-sm-4 col-6">
                  <div className="partner-logo text-center">
                    <Image
                      src="/assets/img/partner-company/Easemytrip.jpeg"
                      width="150"
                      height="100"
                      alt="Partner 5"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-2 col-sm-4 col-6">
                  <div className="partner-logo text-center">
                    <Image
                      src="/assets/img/partner-company/Resource-Logistics.jpeg"
                      width="100"
                      height="100"
                      alt="Partner 6"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-2 col-sm-4 col-6">
                  <div className="partner-logo text-center">
                    <Image
                      src="/assets/img/partner-company/Statesman.jpeg"
                      width="150"
                      height="100"
                      alt="Partner 7"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-2 col-sm-4 col-6">
                  <div className="partner-logo text-center">
                    <Image
                      src="/assets/img/partner-company/Adobe.jpeg"
                      width="100"
                      height="100"
                      alt="Partner 8"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-2 col-sm-4 col-6">
                  <div className="partner-logo text-center">
                    <Image
                      src="/assets/img/partner-company/Coforge.jpeg"
                      width="100"
                      height="100"
                      alt="Partner 9"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-2 col-sm-4 col-6">
                  <div className="partner-logo text-center">
                    <Image
                      src="/assets/img/partner-company/Honda.png"
                      width="100"
                      height="100"
                      alt="Partner 10"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-2 col-sm-4 col-6">
                  <div className="partner-logo text-center">
                    <Image
                      src="/assets/img/partner-company/Hero.jpeg"
                      width="100"
                      height="100"
                      alt="Partner 11"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-2 col-sm-4 col-6">
                  <div className="partner-logo text-center">
                    <Image
                      src="/assets/img/partner-company/Wave.jpeg"
                      width="100"
                      height="100"
                      alt="Partner 12"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-2 col-sm-4 col-6">
                  <div className="partner-logo text-center">
                    <Image
                      src="/assets/img/partner-company/Tcs.jpeg"
                      width="100"
                      height="100"
                      alt="Partner 13"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-2 col-sm-4 col-6">
                  <div className="partner-logo text-center">
                    <Image
                      src="/assets/img/partner-company/GreenFarm.jpeg"
                      width="100"
                      height="100"
                      alt="Partner 14"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-2 col-sm-4 col-6">
                  <div className="partner-logo text-center">
                    <Image
                      src="/assets/img/partner-company/Sarvodhya.jpeg"
                      width="100"
                      height="100"
                      alt="Partner 15"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-2 col-sm-4 col-6">
                  <div className="partner-logo text-center">
                    <Image
                      src="/assets/img/partner-company/Axa.jpeg"
                      width="100"
                      height="100"
                      alt="Partner 16"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {testimonials && <Testimonials testimonials={testimonials} />}
      <Newsletter />

      <a
        href="https://wa.me/9654696000"
        target="_blank"
        rel="noopener noreferrer"
        className="position-fixed bottom-0 end-0 m-3 p-3 bg-white text-white shadow-lg text-center"
        style={{
          zIndex: 9999,
          borderRadius: "9%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px 15px",
        }}
      >
        <i
          className="fab fa-whatsapp"
          aria-hidden="true"
          style={{ fontSize: "40px", color: "green", marginRight: "10px" }}
        ></i>
        <span
          style={{ color: "green", fontSize: "16px", fontWeight: "normal" }}
        >
          Chat With Us
        </span>
      </a>
    </>
  );
}
