import { getEvents } from "@/libs/fetchData";
import EventList from "./EventList";

export const revalidate = 10;
async function Events() {
  const eventData = await getEvents();
  const events = eventData?.data;
  return (
    <>
      {/* <SearchBar searchType="events" /> */}
      <section className="theme-bg pt-0 mt-0">
        <div className="container">
        <div className="row justify-content-center theme-bg pt-5 pb-5 mb-0 pe-3">
        <div className="col-xl-6 col-lg-10 col-md-12 col-sm-12">
          <div className="sec-heading center mb-0">
            <div className="d-inline-flex px-4 py-1 rounded-5 text-info font--medium border border-2 border-white">
              <span className="text-white">Events</span>
            </div>
            <h2 className="text-white mt-3">Join Events Near You</h2>
          </div>
        </div>
      </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="row justify-content-center gy-xl-5 gy-lg-4 gy-5 gx-xl-5 gx-lg-4 gx-3">
              <EventList events={events} />
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix"></div>
    </>
  );
}

export default Events;
