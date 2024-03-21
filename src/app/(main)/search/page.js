"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import config from "@/config";
import EventsCard from "@/components/Cards/EventsCard";
import SimpleCard from "@/components/Cards/SimpleCard";
import Loading from "@/components/Loading";
import NoDataFound from "@/components/NoDataFound";

function Search() {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);
  const searchParams = useSearchParams();
  const referrer = searchParams.get("referrer");
  const keyword = searchParams.get("keyword");
  const state = searchParams.get("state");
  const date = searchParams.get("date");
  const city = searchParams.get("city");
  const activity = searchParams.get("activity");

  useEffect(() => {
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
        setData(result && result.data && result.data.data);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  }, [searchParams]);

  return (
    <>
      <section className="position-relative py-4 bg-light-success">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-10 col-md-12 col-sm-12">
              <div className="exlopi-yut">
                <div className="text-center">
                  <h5 className="display-5 font--bold">
                    Search <span className="text-primary">Result</span>
                  </h5>
                  <p className="text-muted fs-6">
                    Visit Sportzon today and experience the excitement of
                    sports!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {loader == true ? (
        <Loading />
      ) : (
        <section className=" position-relative">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-12 col-lg-12">
                <h5 className="mb-3" style={{ textTransform: "capitalize" }}>
                  Explore all Items
                </h5>
              </div>
            </div>

            <div className="row justify-content-center g-4">
              {data && data?.length>0 ? 
                data.map((item, index) => {
                  return (
                    <div
                      className="col-xl-4 col-lg-4 col-md-4 col-sm-6"
                      key={index}
                    >
                      {referrer == "venues" || referrer == "homepage" ? (
                        <SimpleCard item={item} />
                      ) : (
                        <EventsCard item={item} />
                      )}
                    </div>
                  );
                }) : <NoDataFound/>}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Search;
