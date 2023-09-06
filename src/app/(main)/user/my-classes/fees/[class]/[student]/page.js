"use client";
import Loading from "@/components/Loading";
import config from "@/config";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Fees({ params }) {
  const [loading, setLoading] = useState(false);
  const [fees, setFees] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${config.API_URL}/landing/fees/${params.class}/${params.student}`, {
        withCredentials: true,
      })
      .then((result) => {
        setLoading(false);
        setFees(result.data?.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="dash-wrapsw card border-0 rounded-4 mb-4">
        <div className="card-header">
          <h3>Fees Info</h3>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="card-body px-4">
            {fees &&
              fees.map((fee, index) => {
                return (
                  <div
                    className="sng-ord border rounded-3 mb-4 px-3 py-3"
                    key={index}
                  >
                    <a
                      className="arrow-collapse d-flex align-items-center position-relative collapsed"
                      data-bs-toggle="collapse"
                      href={`#${fee._id}`}
                      role="button"
                      aria-expanded="false"
                      aria-controls={`${fees._id}`}
                    >
                      <div className="flex-ord-end ps-3">
                        <div className="d-inline-flex label text-success bg-light-success mb-1">
                          <span>{fee.totalAmount} INR</span>
                        </div>
                        <h5
                          className="text-dark h6 mb-1"
                          style={{ textTransform: "capitalize" }}
                        >
                          {fee.paymentMethod}/ {fee.paidAmount} INR
                          <span className="text-muted ms-3"></span>
                        </h5>
                        <p className="m-0 text-muted">
                          Paid On -{" "}
                          {fee.paidOn && new Date(fee.paidOn).toLocaleString()}
                        </p>
                      </div>
                    </a>
                    <div className="collapse" id={fee._id} style={{}}>
                      <div className="card card-body">
                        <p>{fee && fee.description}</p>
                        <p className="mb-1">
                          Transaction ID:
                          <span className="text-dark fw-medium ms-3">
                            #{fee?.transactionId.substring(4, 35)}
                          </span>
                        </p>
                        <div className="article-desc table-responsive">
                          <table className="table table-bordered">
                            <thead className="bg-secondary text-white">
                              <tr>
                                <th className="p-1">Month/ Year</th>
                                <th className="p-1">Sub Total</th>
                                <th className="p-1">Gst</th>
                                <th className="p-1">Discount</th>
                                <th className="p-1">Total Amount</th>
                                <th className="p-1">Paid Amount</th>
                                <th className="p-1">Balance</th>
                                <th className="p-1">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="p-1">
                                  {fee?.month} - {fee?.year}
                                </td>
                                <td className="p-1">{fee?.subtotal} INR</td>
                                <td className="p-1">{fee?.gst} INR</td>
                                <td className="p-1">{fee?.discount} INR</td>
                                <td className="p-1">{fee?.totalAmount} INR</td>
                                <td className="p-1">{fee?.paidAmount} INR</td>
                                <td className="p-1">{fee?.balance} INR</td>
                                <td className="p-1">{fee?.status}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
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

export default Fees;
