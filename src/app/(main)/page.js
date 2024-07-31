import dynamic from "next/dynamic";
const ClassesCard = dynamic(() => import("@/components/Cards/ClassesCard"), {
  ssr: false,
});
// import EventsCard from "@/components/Cards/EventsCard";
// const EventsCard = dynamic(() => import("@/components/Cards/EventsCard"), {
//   ssr: false,
// });
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
  getEvents
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
              <div className="sec-heading text-center mt-4"></div>
              <div className="row justify-content-center g-4">
                <div id="event-slider">
                  {events &&
                    events?.map((item, index) => (
                      <div key={index}>
                        <EventsCard item={item}/>
                      </div>
                    ))}
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
