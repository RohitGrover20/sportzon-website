"use client";
import React, { useState } from "react";
import { state_arr, s_a } from "./CIties";
import { option } from "./Activities";

function SearchBar(props) {
  const searchType = props && props.searchType;
  const [search, setSearch] = useState({
    state: "",
    activity: "",
    keyword: "",
    city: "",
  });

  const SearchFunc = () => {
    window.open(
      `/search?keyword=${search?.keyword
        ?.replace(/[^A-Z0-9]/gi, "-")
        ?.toLowerCase()}&state=${search?.state}&city=${search?.city}&activity=${
        search?.activity
      }&referrer=${searchType}`,
      "_blank"
    );
  };
  return (
    <section className="bg-cover call-action-container  position-relative theme-bg">
      <div className="position-absolute top-0 end-0 z-0">
        <img src="/assets/img/alert-bg.png" alt="SVG" width={300} />
      </div>
      <div className="position-absolute bottom-0 start-0 me-10 z-0">
        <img src="/assets/img/circle.png" alt="SVG" width={150} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <form>
              <div className="row">
                <div className="col-lg-3">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id={`${searchType}Id`}
                      autoComplete="off"
                      onChange={(e) => {
                        setSearch({ ...search, keyword: e.target.value });
                      }}
                    />
                    <label htmlFor={`${searchType}Id`}>
                      Search for {searchType}
                    </label>
                  </div>
                </div>
                <div className="col-lg-2">
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
                        state_arr?.map((item, index) => {
                          return <option key={index}>{item}</option>;
                        })}
                    </select>
                    <label htmlFor="locationField">Filter by State</label>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-floating mb-3">
                    <select
                      id="city"
                      name="city"
                      className="form-control"
                      onChange={(e) => {
                        setSearch({ ...search, city: e.target.value });
                      }}
                    >
                      <option selected disabled value="">
                        --select one--
                      </option>
                      {s_a[state_arr.indexOf(search && search.state)] &&
                        s_a[state_arr.indexOf(search && search.state)].split(
                          "|"
                        ) &&
                        s_a[state_arr.indexOf(search && search.state)]
                          .split("|")
                          .map((item, index) => {
                            return <option key={index}>{item}</option>;
                          })}
                    </select>
                    <label htmlFor="locationField">Filter by City</label>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-floating mb-3">
                    <select
                      id="activityList"
                      className="form-control"
                      onChange={(e) => {
                        setSearch({ ...search, activity: e.target.value });
                      }}
                    >
                      <option selected disabled value="">
                        --select one--
                      </option>
                      {option &&
                        option.map((item, index) => {
                          return <option key={index}>{item.value}</option>;
                        })}
                    </select>
                    <label htmlFor="activityList">Filter by Activities</label>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-floating mb-3">
                    <button
                      className="btn btn-orange w-100"
                      type="button"
                      onClick={SearchFunc}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
