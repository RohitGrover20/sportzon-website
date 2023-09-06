"use client";
import Loading from "@/components/Loading";
import config from "@/config";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Report({ params }) {
  const months = [
    "January",
    "Februrary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [loading, setLoading] = useState(false);
  const [reports, setReports] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${config.API_URL}/landing/reports/${params.class}/${params.student}`,
        {
          withCredentials: true,
        }
      )
      .then((result) => {
        setLoading(false);
        setReports(result.data?.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  console.log(reports);
  return (
    <div>
      <div className="dash-wrapsw card border-0 rounded-4 mb-4">
        <div className="card-header">
          <h3>Reports Info</h3>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="card-body px-4">
            {reports &&
              reports.map((report, index) => {
                return (
                  <div
                    className="sng-ord border rounded-3 mb-4 px-3 py-3 d-flex justify-content-between align-items-center"
                    key={index}
                  >
                    <div className="month">
                      <h6>
                        {months[new Date(report?.month).getMonth() - 1]} -{" "}
                        {new Date(report?.month).getFullYear()}
                      </h6>
                    </div>
                    <div className="link">
                      {report?.reportPdf ? (
                        <a href={report?.reportPdf} target="_blank">
                          <button className="btn btn-primary btn-sm">
                            <i className="fa fa-download me-2"></i> Download
                            Report
                          </button>
                        </a>
                      ) : (
                        "Not Available"
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Report;
