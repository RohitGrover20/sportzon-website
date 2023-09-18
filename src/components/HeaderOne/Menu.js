import Link from "next/link";
import React, { useContext } from "react";
import UserMenu from "./UserMenu";
import { UserContext } from "../../../context/context";
import GeoLocation from "./GeoLocation";

function Menu() {
  const user = useContext(UserContext);
  return (
    <div className="nav-menus-wrapper" style={{ transitionProperty: "none" }}>
      <ul className="nav-menu">
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
      </ul>
      <ul className="nav-menu nav-menu-social align-to-right">
        <GeoLocation />
        {user && user.code == "authorised" ? (
          <UserMenu user={user} />
        ) : (
          <>
            <li>
              <a href="" data-bs-toggle="modal" data-bs-target="#login">
                <i className="fas fa-sign-in-alt me-2" />
                Sign In
              </a>
            </li>
            <li className="list-buttons ms-2">
              <Link href="/register" className="bg-orange">
                Signup Free!
                <i className="fa-regular fa-circle-right ms-2" />
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Menu;
