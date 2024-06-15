import dynamic from "next/dynamic";
// import Image from "next/image";
// import ClassesCard from "@/components/Cards/ClassesCard";
const ClassesCard = dynamic(() => import("@/components/Cards/ClassesCard"), {
  ssr: false,
});
// import EventsCard from "@/components/Cards/EventsCard";
// const EventsCard = dynamic(() => import("@/components/Cards/EventsCard"), {
//   ssr: false,
// });
// import SimpleCard from "@/components/Cards/SimpleCard";
const SimpleCard = dynamic(() => import("@/components/Cards/SimpleCard"), {
  ssr: false,
});
// import BannerSlider from "@/components/HeaderOne/BannerSlider";
const BannerSlider = dynamic(
  () => import("@/components/HeaderOne/BannerSlider"),
  { ssr: false }
);
// import HorizontalSearch from "@/components/HeaderOne/HorizontalSearch";
// const HorizontalSearch = dynamic(
//   () => import("@/components/HeaderOne/HorizontalSearch"),
//   { ssr: false }
// );
// import Newsletter from "@/components/Newsletter";
const Newsletter = dynamic(() => import("@/components/Newsletter"), {
  ssr: false,
});
// import Testimonials from "@/components/Testimonials";
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: false,
});
import {
  getClasses,
  getHomeBanner,
  getTestimonials,
  getVenue,
} from "@/libs/fetchData";
import AboutUs from "@/components/AboutUs";
export const revalidate = 10;
export default async function Home() {
  const testimonialData = await getTestimonials();
  const testimonials = testimonialData?.data;
  const bannerData = await getHomeBanner();
  const classesData = await getClasses();
  const classes = classesData && classesData.data;
  const banners = bannerData && bannerData.data;
  const venuesData = await getVenue();
  const venues = venuesData && venuesData.data;
  return (
    <>
      {banners && <BannerSlider banners={banners} />}
      {/* <HorizontalSearch /> */}
      <AboutUs />

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
              <div className="sec-heading text-center mt-4">
                <h1 className="mb-1 text-white fw-light display-1 text-center venues-title">
                  Explore Venues Near You
                </h1>
                <div className="d-flex justify-content-center">
                  <p className="text-white fs-5 w-50 venues-subtitle">
                    Discover and explore amazing venues near you for a wide
                    range of sports and activities.
                  </p>
                </div>
              </div>
              <div className="row justify-content-center g-4">
                <div id="venue-slider">
                  {venues &&
                    venues.map((item, index) => (
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
                  Evolve With <span className="text-orange">Sportzon</span>{" "}
                </h1>
                <p className="fs-6 classes-subtitle">
                  Elevate your game with us. State-of-the-art facilities, expert
                  coaching, and a community dedicated to sporting excellence.
                  Discover the thrill of sports at its best.
                </p>
              </div>
              <div className="row justify-content-center g-4 mb-3 mt-3">
                <ul
                  className="nav nav-tabs "
                  id="myTab"
                  role="tablist"
                  style={{ margin: "20px" }}
                >
                  <li
                    className="nav-item fs-2 "
                    role="presentation"
                    style={{ fontSize: "200px" }}
                  >
                    <button
                      className="nav-link active tabs-title"
                      id="inSchool-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#inSchool"
                      type="button"
                      role="tab"
                      aria-controls="inSchool"
                      aria-selected="true"
                      style={{ fontSize: "22px" }}
                    >
                      <i className="fa-solid fa-school"></i> In School Classes
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link tabs-title"
                      id="afterSchool-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#afterSchool"
                      type="button"
                      role="tab"
                      aria-controls="afterSchool"
                      aria-selected="false"
                      style={{ fontSize: "22px" }}
                    >
                      <i className="fa fa-clock-o"></i> After School Classes
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="inSchool"
                    role="tabpanel"
                    aria-labelledby="inSchool-tab"
                  >
                    <div className="row">
                      <div className="hero" id="classes-slider">
                        {classes &&
                          classes.map((item, index) => {
                            if (item.classType === "inSchool") {
                              return (
                                <div className="col-sm-4" key={index}>
                                  <ClassesCard class={item} />
                                </div>
                              );
                            }
                            return null;
                          })}
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="afterSchool"
                    role="tabpanel"
                    aria-labelledby="afterSchool-tab"
                  >
                    <div className="row">
                      <div className="hero" id="classes-slider">
                        {classes &&
                          classes.map((item, index) => {
                            if (item.classType === "afterSchool") {
                              return (
                                <div className="col-sm-4" key={index}>
                                  <ClassesCard class={item} />
                                </div>
                              );
                            }
                            return null;
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {testimonials && <Testimonials testimonials={testimonials} />}
      <Newsletter />
    </>
  );
}
