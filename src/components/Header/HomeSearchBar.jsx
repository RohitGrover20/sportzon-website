"use client";
import React, { useState, useEffect } from "react";
import { getClasses, getEvents, getVenue } from "@/libs/fetchData";
import Link from "next/link";
function HomeSearchBar() {
  const [venues, setVenues] = useState([]);
  const [events, setEvents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [type, setType] = useState();

  const [search, setSearch] = useState({
    searchType: "",
    state: "",
    activity: "",
    keyword: "",
  });
  useEffect(() => {
    async function fetchData() {
      const venuesData = await getVenue();
      setVenues(venuesData?.data || []);
      const eventsData = await getEvents();
      const upcomingEvents = eventsData?.data?.length > 0 ? eventsData?.data?.filter(item =>  new Date(item?.eventDate) >= new Date()) : [];
      setEvents(upcomingEvents || []);
      const classesData = await getClasses();
      setClasses(classesData?.data || []);
    }
    fetchData();
  }, []);
  const SearchFunc = () => { 
    window.open(
      `/search?keyword=${search?.keyword
        ?.replace(/[^A-Z0-9.]/gi, "-")
        ?.toLowerCase()}&state=${search?.state}&activity=${
        search?.activity
      }&referrer=${type}`,
      "_blank"
    );
  };
  const handleDropDown = () => {
    if (type === "venues") {
      return venues?.map((venue, index) => (
        <option key={index} value={venue.id}>
          {venue?.slug}
        </option>
      ));
    } else if (type === "events") {
      return events?.map((event, index) => (
        <option key={index} value={event.id}>
          {event?.slug}
        </option>
      ));
    } else if (type === "classes") {
      return classes?.map((classItem, index) => (
        <option key={index} value={classItem.id}>
          {classItem?.slug}
        </option>
      ));
    }
    return null;
  };

  return (
    <div className="home-search-bar">
      <div className="d-flex flex-wrap justify-content-center">
        <form className="w-100" style={{ maxWidth: "1200px" }}>
          <div className="row w-100 gx-2 gy-2" style={{alignItems:"center" , textAlign:"center"}}>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <div className="form-floating">
                <select
                  name="searchType"
                  id="searchType"
                  styles={{ minHeight: "53px" }}
                  className="form-control"
                  onChange={(e) => {
                    setSearch({ ...search, referrer: e?.target?.value });
                    setType(e.target.value);
                  }}
                >
                  <option value="" selected disabled>
                    --Select one--
                  </option>
                  <option value="venues">Venues</option>
                  <option value="classes">Classes</option>
                  <option value="events">Events</option>
                </select>
                <label htmlFor="locationField">Select Category</label>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <div className="form-floating">
                <select
                  name="searchName"
                  id="searchName"
                  styles={{ minHeight: "53px" }}
                  className="form-control"
                  onChange={(e) => {
                    setSearch({ ...search, keyword: e.target.value });
                  }}
                >
                  <option value="" selected>
                    --Select Category--
                  </option>
                  {handleDropDown()}
                </select>
                <label htmlFor="locationField">Select Option</label>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <div className="form-floating">
                {search?.referrer && search?.keyword ? (
                  <Link href={`/${search?.referrer}/${search && search?.keyword}`}>
                  <button
                    className="btn btn-orange w-100"
                    type="button"
                    // onClick={SearchFunc}
                  >
                    Search
                  </button>
                  </Link>
                ) : (
                  <button className="btn btn-secondary w-100" type="button">
                    Search
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HomeSearchBar;
