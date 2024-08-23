"use client";
import config from "@/config";
import Link from "next/link";
import React, { useContext, useState } from "react";
import ProfileImageModal from "./ProfileImageModal";
import { UserContext } from "../../context/context";
import axios from "axios";

function ProfileSideBar() {
  const context = useContext(UserContext);
  const user = context && context;
  const [isOpen, setIsOpen] = useState(false);
  const [open , setOpen] = useState(false);
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

  const closeSidebar = () => {
    setIsOpen(false); // Close the sidebar by setting isOpen to false
  };

  return (
    <div className="col-xl-3 col-lg-4">
      <button
        type="button"
        className="d-lg-none btn btn-md btn-orange w-100 rounded-0 fixed-bottom"
        onClick={() => setIsOpen(true)} // Open sidebar when this button is clicked
      >
        <i className="fa-solid fa-filter me-2"></i>Dashboard Navigation
      </button>
      <div
        className={`offcanvas-lg offcanvas-start${isOpen ? " show" : ""}`}
        data-bs-scroll="true"
        data-bs-backdrop="false"
        id="Sidebaruser"
      >
        <div className="offcanvas-header">
          <button
            className="btn-close"
            type="button"
            onClick={closeSidebar} // Close sidebar when close button is clicked
          ></button>
        </div>
        <div className="offcanvas-body pt-0 pe-lg-4">
          <div className="position-relative px-lg-4 py-lg-5 rounded-4 bg-white">
            <div className="user-prfl text-center mx-auto">
              <div className="position-relative mb-2">
                <img
                  src={
                    user && user?.data?.profile
                      ? user?.data?.profile.includes("http")
                        ? user?.data?.profile
                        : config.API_URL + "/user/profile/" + user.profile
                      : "/assets/img/userplaceholder.png"
                  }
                  className="img-fluid circle"
                  style={{
                    border: "5px solid #0a5993",
                    objectFit: "contain",
                    width: "120px",
                    height: "120px",
                  }}
                  alt="img"
                />
                <i
                  className="fa fa-pen position-absolute bg-orange p-2 circle text-white"
                  data-bs-toggle="modal"
                  data-bs-target="#profileImg"
                  onClick={()=>setOpen(true)}
                  style={{ right: "25%", bottom: "5%" }}
                />
                <ProfileImageModal open={open} />
              </div>
              <div className="user-caps">
                <h5 className="mb-0">
                  {user && user.firstName} {user && user.lastName}
                </h5>
                <p className="m-0 text-muted">{user && user.email}</p>
              </div>
            </div>
            <div className="user-prfl-nav mt-4">
              <ul className="no-ul-list">
                <li className="py-3">
                  <Link
                    href="/user/profile"
                    className="fw-medium active text-primary"
                    onClick={closeSidebar} // Close sidebar when link is clicked
                  >
                    <i className="fa-solid fa-user me-2 theme-color" />
                    Personal Information
                  </Link>
                </li>
                <li className="py-3">
                  <Link
                    href="/user/my-bookings"
                    className="fw-medium"
                    onClick={closeSidebar} // Close sidebar when link is clicked
                  >
                    <i className="fa-solid fa-file me-2 theme-color" />
                    My Bookings
                  </Link>
                </li>
                <li className="py-3">
                  <Link
                    href="/user/my-subscription"
                    className="fw-medium"
                    onClick={closeSidebar} // Close sidebar when link is clicked
                  >
                    <i className="fa-solid fa-file me-2 theme-color" />
                    My Membership
                  </Link>
                </li>
                <li className="py-3">
                  <Link
                    href="/user/recent-transactions"
                    className="fw-medium"
                    onClick={closeSidebar} // Close sidebar when link is clicked
                  >
                    <i className="fa-solid fa-wallet me-2 theme-color" />
                    Order History
                  </Link>
                </li>
                <li className="py-3">
                  <Link
                    href="/user/settings"
                    className="fw-medium"
                    onClick={closeSidebar} // Close sidebar when link is clicked
                  >
                    <i className="fa-solid fa-gear me-2 theme-color" />
                    Password Settings
                  </Link>
                </li>
                <li className="py-3">
                  <Link
                    href="/user/help-support"
                    className="fw-medium"
                    onClick={closeSidebar} // Close sidebar when link is clicked
                  >
                    <i className="fa-solid fa-question-circle me-2 theme-color" />
                    Help & Support
                  </Link>
                </li>
                <li className="py-3 pb-0" onClick={logout}>
                  <a
                    href={`${config.API_URL}/auth/logout`}
                    className="fw-medium"
                    onClick={closeSidebar} // Close sidebar when link is clicked
                  >
                    <i className="fa fa-sign-out me-2 theme-color" />
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSideBar;
