import ClassesCard from "@/components/Cards/ClassesCard";
import EventsCard from "@/components/Cards/EventsCard";
import SimpleCard from "@/components/Cards/SimpleCard";
import BannerSlider from "@/components/HeaderOne/BannerSlider";
import HorizontalSearch from "@/components/HeaderOne/HorizontalSearch";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";
import { getEvents, getVenue } from "@/libs/fetchData";

export default async function Home() {
  const { data } = await getEvents();
  const venuesData = await getVenue();
  const venues = venuesData && venuesData.data;
  const events = data;
  return (
    <>
      <BannerSlider />
      <HorizontalSearch />
      {/* Nearby Venues------------------------ */}
      <section className="pt-0 pb-5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-12 col-lg-10 col-md-11 mb-3">
              <div className="sec-heading text-center">
                <div className="label text-orange bg-light-orange d-inline-flex rounded-4 mb-2 font--medium">
                  <span>Venues</span>
                </div>
                <h2 className="mb-1">Explore Venues Near You</h2>
                <p className="test-muted fs-6">
                  At vero eos et accusamus et iusto odio dignissimos ducimus
                </p>
              </div>
              <div className="row justify-content-center g-4">
                <div className='venue-slider' id="venue-slider">
                  {venues && venues.map((item, index) => {
                    return (
                      <SimpleCard key={index} item={item} />
                    )
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Features------------------------------- */}
      <section className="pt-0 pb-0">
        <div className="container">
          <div className="row justify-content-between align-items-center mb-5">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="position-relative exloi py-lg-0 pb-4">
                <div className="exloi-caption">
                  <div className="label text-orange bg-light-orange d-inline-flex rounded-4 mb-2 font--medium">
                    <span>Analysis</span>
                  </div>
                  <h2 className="mb-3 lh-base">
                    Unleash  &amp; your athletic journey with the ultimate sports companion!
                  </h2>
                  <p className="mb-0 fs-5 fw-light">
                    We bring together venues, coaches, events, tournaments, marathons, and a host of incredible features to revolutionize your sporting journey.
                  </p>
                  <div className="clixs-serv mt-4">
                    <div className="row px-3 py-4">
                      <div className="col-sm-12 ps-0">
                        <div className="d-flex align-items-start mb-3">
                          <span className="text-orange px-3 py-2 rounded-2 bg-light-orange fs-2 mb-4">
                            <i className="fa-solid fa-face-grin-stars" />
                          </span>
                          <div className="ps-3">
                            <h5>Convenience</h5>
                            <p>
                              Finding and booking sports venues or coaches is just a few clicks away with our user-friendly interface.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <span className="text-warning px-3 py-2 rounded-2 bg-light-warning fs-2 mb-4">
                            <i className="fa-solid fa-seedling" />
                          </span>
                          <div className="ps-3">
                            <h5>Extensive Variety</h5>
                            <p>
                              We cater to a wide range of sports and activities, ensuring that every enthusiast finds their perfect match on SportZon.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <span className="text-success px-3 py-2 rounded-2 bg-light-success fs-2 mb-4">
                            <i className="fa-solid fa-wallet" />
                          </span>
                          <div className="ps-3">
                            <h5>Cost-Effective Solutions</h5>
                            <p>
                              Take advantage of our exclusive coupons and discounts to elevate your sports experience without breaking the bank.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-start">
                          <span className="text-danger px-3 py-2 rounded-2 bg-light-danger fs-2 mb-4">
                            <i className="fa-solid fa-globe" />
                          </span>
                          <div className="ps-3">
                            <h5>Community Engagement</h5>
                            <p>
                              Connect with like-minded individuals, athletes, and coaches, fostering a vibrant sports community.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* End Col */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <div className="position-relative">
                <img src="assets/img/seo-1.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events---------------- */}
      <section className="pt-0 pb-0">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-12 col-lg-10 col-md-11 mb-3">
              <div className="sec-heading text-center">
                <div className="label text-orange bg-light-orange d-inline-flex rounded-4 mb-2 font--medium">
                  <span>Events</span>
                </div>
                <h2 className="mb-1">Explore Upcoming Events Near You</h2>
                <p className="test-muted fs-6">
                  At vero eos et accusamus et iusto odio dignissimos ducimus
                </p>
              </div>
              <div className="row justify-content-center g-4">
                <div className='event-slider' id="event-slider">
                  {events && events.map((item, index) => {
                    return (
                      <EventsCard item={item} key={index} />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sportzon----------------------- */}
      <section className="position-relative">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-7 col-lg-7 col-md-11 mb-3">
              <div className="sec-heading text-center">
                <div className="label text-success bg-light-success d-inline-flex rounded-4 mb-2 font--medium">
                  <span>Our Features</span>
                </div>
                <h2 className="mb-1">Why Choose Sportzon?</h2>
                <p className="test-muted fs-6">
                  vero accusamus et iusto odio dignissimos ducimus
                </p>
              </div>
            </div>
          </div>
          <div className="row g-xl-5 g-lg-5 g-4">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="hgh-features-wrap d-flex gray-simple rounded-4 p-3">
                <div className="row align-items-center">
                  <div className="col-sm-3 col-3 h-100">
                    <div className="hgh-features-icons bg-white d-flex align-items-center justify-content-center rounded-3 h-100 py-3 h-mob-auto">
                      <i className="fa-solid fa-tree text-orange fs-1" />
                    </div>
                  </div>
                  <div className="col-sm-9 col-9">
                    <div className="hgh-features-captions py-3 pe-3">
                      <h4 className="mb-2 fs-5">Comprehensive Sports Ecosystem</h4>
                      <p className="m-0">
                        SportZon provides a complete and diverse sports ecosystem, bringing together venues, coaches, events, tournaments, and marathons all in one platform. Say goodbye to multiple searches and embrace the convenience of a centralized sports hub.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Col */}
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="hgh-features-wrap d-flex gray-simple rounded-4 p-3">
                <div className="row align-items-center">
                  <div className="col-sm-3 col-3 h-100">
                    <div className="hgh-features-icons bg-white d-flex align-items-center justify-content-center rounded-3 h-100 py-3 h-mob-auto">
                      <i className="fa fa-football text-orange fs-1" />
                    </div>
                  </div>
                  <div className="col-sm-9 col-9">
                    <div className="hgh-features-captions py-3 pe-3">
                      <h4 className="mb-2 fs-5">Top-Notch Venues</h4>
                      <p className="m-0">
                        Explore a curated selection of top-notch sports venues, ensuring you have access to the best facilities for your favourite sports activities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Col */}
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="hgh-features-wrap d-flex gray-simple rounded-4 p-3">
                <div className="row align-items-center">
                  <div className="col-sm-3 col-3 h-100">
                    <div className="hgh-features-icons bg-white d-flex align-items-center justify-content-center rounded-3 h-100 py-3 h-mob-auto">
                      <i className="fa-solid fa-user text-orange fs-1" />
                    </div>
                  </div>
                  <div className="col-sm-9 col-9">
                    <div className="hgh-features-captions py-3 pe-3">
                      <h4 className="mb-2 fs-5">Expert Coaches</h4>
                      <p className="m-0">
                        Connect with experienced and qualified coaches who can take your skills to the next level, regardless of your level of expertise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Col */}
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="hgh-features-wrap d-flex gray-simple rounded-4 p-3">
                <div className="row align-items-center">
                  <div className="col-sm-3 col-3 h-100">
                    <div className="hgh-features-icons bg-white d-flex align-items-center justify-content-center rounded-3 h-100 py-3 h-mob-auto">
                      <i className="fa fa-eye text-orange fs-1" />
                    </div>
                  </div>
                  <div className="col-sm-9 col-9">
                    <div className="hgh-features-captions py-3 pe-3">
                      <h4 className="mb-2 fs-5">Stay Updated on Events</h4>
                      <p className="m-0">
                        Stay ahead of the game with up-to-date event listings, allowing you to participate in thrilling tournaments and marathons or be a part of the cheering crowd.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
      </section>

      {/* Classes------------------------ */}
      <section className="pt-0">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-12 col-lg-10 col-md-11 mb-3">
              <div className="sec-heading text-center">
                <div className="label text-orange bg-light-orange d-inline-flex rounded-4 mb-2 font--medium">
                  <span>Classes</span>
                </div>
                <h2 className="mb-1">Experience Sports at its best</h2>
                <p className="test-muted fs-6">
                  At vero eos et accusamus et iusto odio dignissimos ducimus
                </p>
              </div>
              <div className="row justify-content-center g-4">
                <div className='hero' id="classes-slider">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <ClassesCard />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <ClassesCard />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <ClassesCard />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <ClassesCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Newsletter />
    </>
  )
}
