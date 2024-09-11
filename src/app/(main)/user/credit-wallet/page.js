"use client";
import Loading from "@/components/Loading";
import NoDataFound from "@/components/NoDataFound";
import config from "@/config";
import axios from "axios";
import React, { useEffect, useState , useContext} from "react";
// import { UserContext } from "../../../../context/context";
import { UserContext } from "../../../../../context/context";

function MyWallet() {
  const [wallet, setWallet] = useState();
  const [loading, setLoading] = useState(true);
  const [totalCoins , setTotalCoins] = useState();
  const context = useContext(UserContext);
  const user = context && context;

  useEffect(() => {
    axios
      .get(`${config.API_URL}/landing/wallet`, {
        withCredentials: true,
      })
      .then((result) => {
        setWallet(result?.data && result?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if(user){
    axios
      .get(`${config.API_URL}/landing/wallet/${user?.data?._id}/total-coins`, {
        withCredentials: true,
      })
      .then((result) => {
        setTotalCoins(result?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    }
  }, [user]);

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="theme-color">My Wallet <span className="fs-4 text-orange">(Total Credits Coins: {totalCoins?.totalCoins})</span> </h3>
      </div>
      <div className="table-responsive">
        {loading ? (
          <Loading />
        ) : wallet?.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Type</th>
                <th scope="col">Credit Coins</th>
                <th scope="col">Date</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {wallet.map((item, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td><button className="btn bn-sm btn-success">{item?.type}</button></td>
                    <td>{item?.amount}</td>
                    <td>
                      {item?.date
                        ? new Date(item?.date).toISOString().split("T")[0]
                        : "Invalid Date"}
                    </td>
                    <td>
                      {item?.description}
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

export default MyWallet;
