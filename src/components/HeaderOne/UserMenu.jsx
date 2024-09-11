"use client";
import React from "react";
import config from "@/config";
import Link from "next/link";
import axios from "axios";

function UserMenu(props) {
  const user = props && props.user && props.user.data;
  const logout = () => {
    axios
      .get(`${config.API_URL}/auth/logout`)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <li className="text-white">
        Hi, {user && user?.firstName} {user && user?.lastName}
      </li>
      <li>
        <div className="btn-group account-drop">
          <button
            type="button"
            className="btn btn-order-by-filt"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src={
                user?.profile !== null && user?.profile !== undefined
                  ? user?.profile
                  : "/assets/img/userplaceholder.png"
              }
              className="img-fluid circle"
              alt="Profile"
            />
          </button>
          <div className="dropdown-menu pull-right animated flipInX">
            <div className="drp_menu_headr">
              <h4>
                Hi, {user && user.firstName} {user && user.lastName}
              </h4>
              <div className="drp_menu_headr-right">
                <button
                  type="button"
                  className="btn btn-whites"
                  onClick={logout}
                >
                  <a href={`${config.API_URL}/auth/logout`}>Logout!</a>
                </button>
              </div>
            </div>
            <ul>
              <li>
                <Link href="/user/profile">
                  <i
                    className="fa fa-user me-3"
                    style={{ color: "#0a5993" }}
                  ></i>
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/user/settings">
                  <i
                    className="fa fa-cog me-3"
                    style={{ color: "#0a5993" }}
                  ></i>
                  Settings
                </Link>
              </li>
              <li>
                <Link href="/user/help-support">
                  <i
                    className="fa-solid fa-question-circle me-3 "
                    style={{ color: "#0a5993" }}
                  />
                  Help & Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </>
  );
}

export default UserMenu;
