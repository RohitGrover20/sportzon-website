"use client";
import React, { useEffect, useState } from "react";
import { getEvents } from "@/libs/fetchData";
import EventList from "../events/EventList";
function EventGallery() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventData = await getEvents();
        setEvents(eventData?.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <section className="theme-bg pt-0 mt-0">
        <div className="container">
          <div className="row justify-content-center theme-bg pt-5 pb-5 mb-0 pe-3">
            <div className="col-xl-6 col-lg-10 col-md-12 col-sm-12">
              <div className="sec-heading center mb-0">
                <h2 className="text-white mt-3">Events Gallery</h2>
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

export default EventGallery;
