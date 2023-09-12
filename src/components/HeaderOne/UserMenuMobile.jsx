import config from "@/config";
import Link from "next/link";
import React from "react";

function UserMenuMobile(props) {
  const user = props && props.user && props.user.data;
  return (
    <ul>
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
                user && user.profile
                  ? user.profile.includes("http")
                    ? user.profile
                    : config.API_URL + "/user/profile/" + user.profile
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
                <Link href={`${config.API_URL}/auth/logout`}>
                  <button type="button" className="btn btn-whites">
                    Logout
                  </button>
                </Link>
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
              <li>
                <Link href={`${config.API_URL}/auth/logout`}>
                  <i className="fa fa-sign-out me-3"></i>Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default UserMenuMobile;
