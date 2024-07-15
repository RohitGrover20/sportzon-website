"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import config from "@/config";
import EventsCard from "@/components/Cards/EventsCard";
import Loading from "@/components/Loading";
import NoDataFound from "@/components/NoDataFound";
import ClassesCard from "@/components/Cards/ClassesCard";
import SearchBar from "@/components/SearchBar";
import VenuesCard from "@/components/Cards/VenuesCard";
function Search() {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Show 8 venues per page

  const [totalItems, setTotalItems] = useState(0);

  const searchParams = useSearchParams();
  const referrer = searchParams.get("referrer");
  const keyword = searchParams.get("keyword");
  const state = searchParams.get("state");
  const date = searchParams.get("date");
  const city = searchParams.get("city");
  const activity = searchParams.get("activity");

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  const fetchData = () => {
    setLoader(true);
    axios
      .post(`${config.API_URL}/landing/search`, {
        referrer,
        keyword,
        state,
        activity,
        date,
        city,
      })
      .then((result) => {
        setLoader(false);
        setData(result?.data?.data?.reverse());
        setTotalItems(result?.data?.data?.length); // Set the total number of venues
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };

  // Calculate the index of the first and last item to be displayed on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the total number of pages based on the total items and items per page
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <>
      <section className="position-relative py-4 theme-bg pt-0">
        {/* <SearchBar searchType={referrer} /> */}
      </section>
      {loader == true ? (
        <Loading />
      ) : (
        <section className="position-relative theme-bg pt-0">
          <div className="container">
            <div className="row justify-content-center g-4 pt-5">
              {currentItems?.length > 0 ? (
                currentItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <>
                      {referrer == "venues" || referrer == "homepage" ? (
                        <div
                          className="col-xl-3 col-lg-3 col-md-3 col-sm-3"
                          key={index}
                        >
                          <VenuesCard item={item} />
                        </div>
                      ) : referrer == "events" || referrer == "homepage" ? (
                        <div
                          className="col-xl-3 col-lg-3 col-md-3 col-sm-3"
                          key={index}
                        >
                          <EventsCard item={item} />
                        </div>
                      ) : (
                        <div
                          className="col-xl-4 col-lg-4 col-md-4 col-sm-6"
                          key={index}
                        >
                          <ClassesCard class={item} />
                        </div>
                      )}
                    </>
                  </React.Fragment>
                ))
              ) : (
                <NoDataFound data={"res"} />
              )}
            </div>
          </div>

          {/* Pagination component */}
          {data?.length > 0 && (
            <div className="row justify-content-center mt-5">
              <div className="col-auto">
                <nav>
                  <ul className="pagination d-flex align-items-center">
                    <li
                      className={`page-item ${currentPage === 1 && "disabled"}`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(currentPage - 1)}
                      >
                        {" "}
                        <i className="fa fa-angle-left fs-4"></i>{" "}
                      </button>
                    </li>
                    {[...Array(totalPages).keys()].map((number) => (
                      <li
                        key={number + 1}
                        className={`page-item ${
                          currentPage === number + 1 && "active"
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(number + 1)}
                        >
                          {number + 1}
                        </button>
                      </li>
                    ))}
                    <li
                      className={`page-item ${
                        currentPage === totalPages && "disabled"
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(currentPage + 1)}
                      >
                        {" "}
                        <i className="fa fa-angle-right fs-4"></i>{" "}
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
}

export default Search;
