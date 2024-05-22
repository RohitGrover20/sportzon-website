"use client";
import React from "react";
import { useState } from "react";
import { option } from "../Activities";
import { s_a, state_arr } from "../CIties";

function HorizontalSearch() {
  const [search, setSearch] = useState({
    date: "",
    city: "",
    state: "",
    activity: "",
    referrer: "",
  });

  const searchFunc = () => {
    window.open(
      `/search?state=${search?.state}&city=${search?.city}&activity=${search?.activity}&date=${search.date}&referrer=${search.referrer}`,
      "_blank"
    );
  };

  // Function to check if any field is filled
  const isSearchDataFilled = () => {
    return Object.values(search).some((value) => value !== "");
  };
  return (
    <section
      className="position-relative p-0 m-0 venue-search-bar"
      id="venue-search-bar"
    >
      <div className="container shadow-lg bg-primary p-5 rounded">
        <div className="col-12">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-2 p-1">
              <div className="form-floating">
                <select
                  name="searchType"
                  id="searchType"
                  styles={{ minHeight: "53px" }}
                  // classNamePrefix="select"
                  className="form-control"
                  onChange={(e) => {
                    setSearch({ ...search, referrer: e.target.value });
                  }}
                >
                  <option value="" selected>
                    --Select one--
                  </option>
                  <option value="events">Events</option>
                  <option value="venues">Venues</option>
                  <option value="classes">Classes</option>
                </select>
                <label htmlFor="searchType">Search Type</label>
              </div>
            </div>
            <div className="col-lg-2 p-1">
              <div className="form-floating">
                <select
                  name="state"
                  id="state"
                  styles={{ minHeight: "53px" }}
                  // classNamePrefix="select"
                  className="form-control"
                  onChange={(e) => {
                    setSearch({ ...search, state: e.target.value });
                  }}
                >
                  <option value="">
                    --Select one--
                  </option>
                  {state_arr &&
                    state_arr.map((item, index) => {
                      return <option key={index}>{item}</option>;
                    })}
                </select>
                <label htmlFor="state">State</label>
              </div>
            </div>

            <div className="col-lg-2 p-1">
              <div className="form-floating">
                <select
                  styles={{ minHeight: "53px" }}
                  // classNamePrefix="select"
                  name="city"
                  id="city"
                  className="form-control"
                  onChange={(e) => {
                    setSearch({ ...search, city: e.target.value });
                  }}
                >
                  <option value="">
                    --Select one--
                  </option>
                  {s_a[state_arr.indexOf(search?.state)] &&
                    s_a[state_arr.indexOf(search?.state)].split("|") &&
                    s_a[state_arr.indexOf(search?.state) ]
                      .split("|")
                      .map((item, index) => {
                        return <option key={index}>{item}</option>;
                      })}
                </select>
                <label htmlFor="city">City</label>
              </div>
            </div>
            <div className="col-lg-2 p-1">
              <div className="form-floating">
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="form-control"
                  onChange={(e) => {
                    setSearch({ ...search, date: e.target.value });
                  }}
                />
                <label htmlFor="date">Date</label>
              </div>
            </div>

            <div className="col-lg-2 p-1">
              <div className="form-floating">
                <select
                  id="activityList"
                  className="form-control"
                  onChange={(e) => {
                    setSearch({ ...search, activity: e.target.value });
                  }}
                >
                  <option value="">--select one--</option>
                  {option &&
                    option.map((item, index) => {
                      return <option key={index}>{item.value}</option>;
                    })}
                </select>
                <label htmlFor="activityList">Filter by Activities</label>
              </div>
            </div>
            <div className="col-lg-2 p-1">
              <button
                className={` ${
                  !isSearchDataFilled()
                    ? "btn btn-grey w-100 mt-0"
                    : "btn btn-orange w-100 mt-0"
                }`}
                onClick={() => {
                  //   e.preventDefault();
                  searchFunc();
                }}
                disabled={!isSearchDataFilled()}
              >
                Search Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HorizontalSearch;
