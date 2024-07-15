"use client";
import Loading from "@/components/Loading";
import NoDataFound from "@/components/NoDataFound";
import config from "@/config";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Transaction() {
  const [transaction, setTransaction] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/landing/payments/recent-transactions`, {
        withCredentials: true,
      })
      .then((result) => {
        setTransaction(result?.data?.data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="table-responsive">
      {loading ? (
        <Loading />
      ) : transaction?.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sr. No.</th>
              <th scope="col">Order ID</th>
              <th scope="col">Payment ID</th>
              <th scope="col">Date</th>
              <th scope="col">Method</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {transaction.map((item, index) => {
              const timeStamp = item?.value?.created_at;
              const paymentDate = new Date(timeStamp * 1000).toLocaleString();
              return (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    {item.value?.order_id?.substring(6, 40)}
                  </td>
                  <td>
                    {item.value?.id?.substring(4, 40)}
                  </td>
                  <td>{paymentDate}</td>
                  <td>
                    <strong>{item.value?.method}</strong>
                  </td>
                  <td>
                    <i className="fa fa-rupee me-1"></i>
                    {item.value?.amount / 100}
                  </td>
                  <td>
                    {item.value?.status === "captured" ? (
                      <span className="label text-success bg-light-success">
                        Completed
                      </span>
                    ) : item.value?.status === "failed" ? (
                      <span className="label text-danger bg-light-danger">
                        Failed
                      </span>
                    ) : (
                      <span className="label text-info bg-light-info">
                        {item.value?.status}
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <NoDataFound data="profile"/>
      )}
    </div>
  );
}

export default Transaction;
