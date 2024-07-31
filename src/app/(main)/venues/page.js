"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getVenue } from "@/libs/fetchData";
import Link from "next/link";
export const revalidate = 10;
function Venues() {
  const [search, setSearch] = useState({
    state: "",
    activity: "",
    city: "",
    keyword: "",
  });
  const [venues, setVenues] = useState();
  useEffect(() => {
    async function fetchData() {
      const venuesData = await getVenue();
      setVenues(venuesData?.data || []);
    }
    fetchData();
  }, []);

  return (
    <div className="position-relative">
      <div className="position-relative w-100">
        <Image
          src="/assets/img/Venue-bg-img.png"
          layout="responsive"
          width={1800}
          height={1000}
          alt="Venue Background"
          style={{ height: "20px" }}
        />
      </div>
      {/* Overlay content section */}
      <div id="content" className="overlay-container">
        <h2 className="text-uppercase text-white fw-bolder">
          Find Your Perfect Play At
        </h2>
        <h2 className="text-orange display-2 fw-bold bolder text-center">
          SPORTZON
        </h2>
        <div className="p-4 pb-3 venue-form">
          <h5 className="text-white text-center">
            Availability Form - Secure Your Play Time!
          </h5>
          <form>
            <div className="form-floating mb-3">
              <select
                className="form-control"
                id="venuesId"
                autoComplete="off"
                placeholder="Enter Name"
                onChange={(e) => {
                  setSearch({ ...search, keyword: e.target.value });
                }}
              >
                <option>--Select Venue--</option>
                {venues &&
                  venues.map((item) => {
                    return (
                      <>
                        <option value={item?.slug}>{item?.title}</option>
                      </>
                    );
                  })}
              </select>
              <label htmlFor="searchTypeId">Search for Venues</label>
            </div>

            <div className="text-center mt-5">
              <Link href={`/venues/${search?.keyword}`}>
                <button
                  type="submit"
                  className="btn text-white text-uppercase fw-bold"
                >
                  Check Availability Now!
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  );
}
export default Venues;