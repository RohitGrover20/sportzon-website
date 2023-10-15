"use client";
import config from "@/config";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function MyClasses() {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    axios
      .get(`${config.API_URL}/landing/class-registration/my-classes`, {
        withCredentials: true,
      })
      .then((result) => {
        setClasses(result.data && result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="dash-wrapsw card border-0 rounded-4 mb-4">
        <div className="card-header">
          <h3>My Classes</h3>
        </div>
        <div className="card-body px-4">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {classes?.map((item, index) => {
              return (
                <div className="col" key={index}>
                  <div className="card h-100 rounded-4 border-1 gray-simple">
                    <div className="card-body">
                      <span className=" text-orange">
                        {new Date(item.createdAt).toDateString()} | Status:{" "}
                        {item.status}
                      </span>
                      <div className="d-flex align-items-center pb-2 mb-1">
                        <h5 className="h5 fw-bold mb-0 text-primary">
                          {item.admissionIn?.title}
                        </h5>
                        <span className="label text-success bg-light-success ms-3">
                          {JSON.parse(item.classTiming).from} -{" "}
                          {JSON.parse(item.classTiming).to}
                        </span>
                      </div>

                      <div className="d-flex align-items-center">
                        <img
                          src={item.admissionIn?.banner}
                          alt="image"
                          width="55"
                          height="55"
                          style={{ objectFit: "cover", borderRadius: "50%" }}
                        ></img>
                        <div className="ps-3 fs-sm">
                          <div className="text-dark fw-semibold">
                            Fees - {item.admissionIn?.fees} INR /{" "}
                            {item.admissionIn?.feesFrequency}
                          </div>
                          <div className="text-muted ">
                            Student ID - <strong>{item.studentId}</strong>
                          </div>

                          <div className="text-muted">
                            Duration -{" "}
                            <strong>{item.admissionIn?.duration} Days</strong>
                          </div>
                          <div className="text-muted">
                            Address -{" "}
                            <strong>{item.admissionIn?.address}</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <Link
                        href={`./my-classes/fees/${item.admissionIn?._id}/${item._id}`}
                      >
                        <button className="btn btn-light btn-sm me-1">
                          <i className="fa fa-money me-1"></i> Fees Info
                        </button>
                      </Link>
                      <button className="btn btn-light btn-sm me-1">
                        <i className="fa fa-users me-1"></i> Attendance
                      </button>
                      <Link
                        href={`./my-classes/reports/${item.admissionIn?._id}/${item._id}`}
                      >
                        <button className="btn btn-light btn-sm me-1">
                          <i className="fa fa-file me-1"></i>Reports
                        </button>
                      </Link>
                      {/* <button className="btn btn-dark btn-sm me-1">
                        More Info
                      </button> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyClasses;
