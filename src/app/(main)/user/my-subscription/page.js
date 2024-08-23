"use client";
import Loading from "@/components/Loading";
import NoDataFound from "@/components/NoDataFound";
import config from "@/config";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function MySubscription() {
  const [membership, setMembership] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${config.API_URL}/landing/subscription/mysubscriptions`, {
        withCredentials: true,
      })
      .then((result) => {
        setMembership(result?.data && result?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="theme-color">My Membership</h3>
      </div>
      <div className="table-responsive">
        {loading ? (
          <Loading />
        ) : membership?.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Plan Name</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {membership.map((item, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{item?.planName}</td>
                    <td>
                      {item?.startDate
                        ? new Date(item.startDate).toISOString().split("T")[0]
                        : "Invalid Date"}
                    </td>
                    <td>
                      {item?.endDate
                        ? new Date(item.endDate).toISOString().split("T")[0]
                        : "Invalid Date"}
                    </td>
                    <td>
                      <i className="fa fa-rupee me-1"></i>
                      {999}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <NoDataFound data="profile" />
        )}
      </div>
    </div>
  );
}

export default MySubscription;
