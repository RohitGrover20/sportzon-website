"use client";
import React, { useState } from "react";
import Image from "next/image";
import { option } from "@/components/Activities";
import { s_a, state_arr } from "@/components/CIties";

export const revalidate = 10;

function Venues() {
  const [search, setSearch] = useState({
    state: "",
    activity: "",
    city: "",
    keyword: "",
  });

  const SearchFunc = () => {
    window.open(
      `/search?keyword=${search?.keyword
        ?.replace(/[^A-Z0-9]/gi, "-")
        ?.toLowerCase()}&state=${search?.state}&activity=${
        search?.activity
      }&city=${search?.city}&referrer=${"venues"}`,
      "_blank"
    );
  };

  return (
    <div className="position-relative">
      <div
        className="position-relative w-100"
        style={{ height: "auto", overflow: "hidden" }}
      >
        <Image
          src="/assets/img/venue-bg.png"
          layout="responsive"
          width={1800}
          height={1000}
          alt="Venue Background"
        />
      </div>
      {/* Overlay content section */}
      <div id="content" className="overlay-container">
        <h2 className="text-uppercase text-white fw-bolder">
          Find Your Perfect Play At
        </h2>
        <h2 className="text-orange display-2 fw-bold bolder">SPORTZON</h2>
        <p className="text-white text-center">
          Discover Sportzon's real-time availability by state and city, securing
          playtime for Basketball to Archery effortlessly!
        </p>
        <div className="p-4 pb-3 venue-form">
          <h5 className="text-white text-center">
            Availability Form - Secure Your Play Time!
          </h5>
          <form>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="venuesId"
                autoComplete="off"
                placeholder="Enter Name"
                onChange={(e) => {
                  setSearch({ ...search, keyword: e.target.value });
                }}
              />
              <label htmlFor="searchTypeId">Search for Venues</label>
            </div>

            <div className="form-floating mb-3">
              <select
                id="stateList"
                name="stateList"
                className="form-control"
                onChange={(e) => {
                  setSearch({ ...search, state: e.target.value });
                }}
              >
                <option selected disabled value="">
                  --select one--
                </option>
                {state_arr &&
                  state_arr.map((item, index) => {
                    return <option key={index}>{item}</option>;
                  })}
              </select>
              <label htmlFor="stateList">Filter by State</label>
            </div>

            <div className="form-floating mb-3">
              <select
                id="cityList"
                name="cityList"
                className="form-control"
                onChange={(e) => {
                  setSearch({ ...search, city: e.target.value });
                }}
              >
                <option selected disabled value="">
                  --select one--
                </option>
                {s_a[state_arr.indexOf(search?.state && search?.state)] &&
                  s_a[state_arr.indexOf(search && search?.state)].split("|") &&
                  s_a[state_arr.indexOf(search && search?.state)]
                    .split("|")
                    .map((item, index) => {
                      return <option key={index}>{item}</option>;
                    })}
              </select>
              <label htmlFor="cityList">Filter by City</label>
            </div>

            <div className="form-floating mb-3">
              <select
                id="activityList"
                className="form-control"
                onChange={(e) => {
                  setSearch({ ...search, activity: e?.target?.value });
                }}
              >
                <option selected disabled value="">
                  --select one--
                </option>
                {option &&
                  option.map((item, index) => {
                    return <option key={index}>{item?.value}</option>;
                  })}
              </select>
              <label htmlFor="activityList">Filter by Activities</label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn text-white text-uppercase fw-bold"
                onClick={SearchFunc}
              >
                Check Availability Now!
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  );
}

export default Venues;
