"use client";
import React from "react";
import config from "@/config";
import Link from "next/link";
import axios from "axios";
// import {} from "next/navigation";

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
    // <ul className="nav-menu nav-menu-social align-to-right">
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
            src={user && user.profile}
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
              <button type="button" className="btn btn-whites" onClick={logout}>
                Logout
              </button>
            </div>
          </div>
          <ul>
            <li>
              <Link href="/user/profile">
                <i className="fa fa-user me-3"></i>Profile
              </Link>
            </li>
            <li>
              <Link href="/user/settings">
                <i className="fa fa-cog me-3"></i>Settings
              </Link>
            </li>
            <li>
              <Link href="/user/help-support">
                <i className="fa-solid fa-question-circle me-3" />
                Help & Support
              </Link>
            </li>
            <li onClick={logout}>
              <Link href={`${config.API_URL}/auth/logout`}>
                <i className="fa fa-sign-out me-3"></i>Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </li>
    // </ul>
  );
}

export default UserMenu;
