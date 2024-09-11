import React, { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import UserMenu from "./UserMenu";
import { UserContext } from "../../../context/context";
import WalletModal from "@/app/(main)/credit-wallet/WalletModal";
import config from "@/config";
import axios from "axios";

function Menu() {
  const user = useContext(UserContext);
  const [subscriptionData , setSubscriptionData] = useState();
  const [isWrapperClosed, setIsWrapperClosed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleMenuClose = () => {
      setIsMobileMenuOpen(false);
      setIsWrapperClosed(true); // Set the wrapper closed state when menu closes
    };

    // Listen for Bootstrap collapse events
    const navbar = navbarRef.current;
    if (navbar) {
      navbar.addEventListener("hidden.bs.collapse", handleMenuClose);
    }

    return () => {
      if (navbar) {
        navbar.removeEventListener("hidden.bs.collapse", handleMenuClose);
      }
    };
  }, []);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Close the menu and toggle wrapper class
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsWrapperClosed((prevState) => !prevState); // Toggle the wrapper class state
  };


  useEffect(() => {
    axios
      .get(`${config.API_URL}/landing/subscription/mysubscriptions`, {
        withCredentials: true,
      })
      .then((result) => {
        setSubscriptionData(result?.data && result?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      id="navbarNav"
      className={`nav-menus-wrapper ${isWrapperClosed ? "closed" : ""}`}
      ref={navbarRef}
    >
      <ul className="nav-menu nav-menu-social align-to-right">
        {user && user.code === "authorised" ? (
          <UserMenu user={user} />
        ) : (
          <>
            <li className="list-buttons ms-2">
              <Link
                href=""
                data-bs-toggle="modal"
                data-bs-target="#login"
                style={{ background: "none", color: "orange" }}
              >
                <div className="me-1">
                  <img
                    src="/assets/img/Login-icon.png"
                    width="16"
                    height="17"
                    alt="login"
                    className="text-orange"
                  />
                </div>
                <span className="text-orange fs-6"> LogIn</span>
              </Link>
            </li>
            <li
              className="list-buttons d-inline-block align-middle"
              style={{ height: "40px" }}
            >
              <div
                className="bg-white"
                style={{
                  width: "2px",
                  height: "100%",
                  display: "inline-block",
                  verticalAlign: "middle",
                }}
              ></div>
            </li>
            <li className="list-buttons">
              <Link
                href="/register"
                style={{ background: "none", color: "orange" }}
              >
                <div className="me-1">
                  <img
                    src="/assets/img/SignUp-icon.png"
                    width="18"
                    height="17"
                    alt="signup"
                  />
                </div>
                <span className="text-orange fs-6"> SignUp </span>
              </Link>
            </li>
          </>
        )}
      </ul>
      <ul className="nav-menu align-to-right">
        <li className="nav-item dropdown " style={{ margin: "14px" }}>
          <div
            className={`text-white nav-link dropdown-toggle ${
              openDropdown === "bookings" ? "active" : ""
            }`}
            role="button"
            onClick={() => toggleDropdown("bookings")}
            aria-expanded={openDropdown === "bookings" ? "true" : "false"}
          >
            Bookings
          </div>
          <ul
            className={`dropdown-menu ${
              openDropdown === "bookings" ? "show" : ""
            }`}
          >
            <li>
              <Link href="/venues">
                <div className="dropdown-item" onClick={handleLinkClick}>
                  Venue Booking
                </div>
              </Link>
            </li>
            <li>
              <Link href="/events">
                <div className="dropdown-item" onClick={handleLinkClick}>
                  Events Booking
                </div>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/classes" onClick={handleLinkClick} className="nav-link">
            Classes
          </Link>
        </li>
        <li
          className="nav-item dropdown mobile-dropdown"
          style={{ margin: "14px" }}
        >
          <div
            className={`text-white nav-link dropdown-toggle ${
              openDropdown === "offerings" ? "active" : ""
            }`}
            role="button"
            onClick={() => toggleDropdown("offerings")}
            aria-expanded={openDropdown === "offerings" ? "true" : "false"}
          >
            Our Offerings
          </div>
          <ul
            className={`dropdown-menu ${
              openDropdown === "offerings" ? "show" : ""
            }`}
          >
            <li>
              <Link href="/offering-for-schools">
                <div className="dropdown-item" onClick={handleLinkClick}>
                  For Schools
                </div>
              </Link>
            </li>
            <li>
              <Link href="/offering-for-corporates">
                <div className="dropdown-item" onClick={handleLinkClick}>
                  For Corporates
                </div>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            href="/membership"
            onClick={handleLinkClick}
            className="nav-link"
          >
            Membership Plans
          </Link>
        </li>
        {subscriptionData?.length>0 && 
        <li>
          {/* <Link
            href="user/credit-wallet"
            onClick={handleLinkClick}
            className="nav-link"
            title="Credit Wallet"
          > */}
           <Link
                href=""
                data-bs-toggle="modal"
                data-bs-target="#walletRecharge"
                style={{ background: "none", color: "orange" }}
              >
            <span className="credit-text ms-2">Credit Coins</span>
            <i className="fa-solid fa-wallet fs-5 text-orange"></i>
          </Link>
        </li>
}
      </ul>
      <div
        className="modal fade"
        id="walletRecharge"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="walletRechargemodal"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered login-pop-form modal-lg"
          role="document"
        >
          <div className="modal-content" id="loginmodal">
            <span
              className="mod-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              <i className="fas fa-close" />
            </span>
            <div className="modal-body">
              <div className="modal-login-form p-2">
                <WalletModal/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
