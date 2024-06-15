import Link from "next/link";
import React, { useContext } from "react";
import UserMenu from "./UserMenu";
import { UserContext } from "../../../context/context";
// import GeoLocation from "./GeoLocation";

function Menu() {
  const user = useContext(UserContext);
  return (
    <div className="nav-menus-wrapper" style={{ transitionProperty: "none" }}>
      <ul className="nav-menu nav-menu-social align-to-right">
        {/* <GeoLocation /> */}
        {user && user.code == "authorised" ? (
          <UserMenu user={user} />
        ) : (
          <>
            <li className="list-buttons ms-2">
              <Link
                href=""
                className="bg-orange"
                data-bs-toggle="modal"
                data-bs-target="#login"
              >
                <div className="me-1">
                  <img
                    src="/assets/img/Login-icon.png"
                    width="16"
                    height="17"
                  ></img>
                </div>
                Login
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
              <Link href="/register" className="bg-orange">
              <div className="me-1">
                  <img
                    src="/assets/img/SignUp-icon.png"
                    width="18"
                    height="17"
                  ></img>
                </div>
                SignUp
              </Link>
            </li>
          </>
        )}
      </ul>
      <ul className="nav-menu  align-to-right">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <a href="">
            Bookings
            <span className="submenu-indicator" />
          </a>
          <ul className="nav-dropdown nav-submenu">
            <li>
              <Link href="/venues">Venue Booking</Link>
            </li>
            <li>
              <Link href="/events">Events Booking</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/classes">Classes</Link>
        </li>
        <li>
          <a href="">
            Our Offerings
            <span className="submenu-indicator" />
          </a>
          <ul className="nav-dropdown nav-submenu">
            <li>
              <Link href="/offering-for-schools">For Schools</Link>
            </li>
            <li>
              <Link href="/offering-for-corporates">For Corporates</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link href="/learning-section">Sports Learning Zone</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
