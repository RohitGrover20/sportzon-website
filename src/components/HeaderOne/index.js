"use client";
import React, { useContext } from "react";
import Menu from "./Menu";
import Image from "next/image";
import LoginForm from "../Auth/LoginForm";
import { UserContext } from "../../../context/context";
import UserMenuMobile from "./UserMenuMobile";
import useScript from "@/hooks/useScript";
function HeaderOne() {
  const user = useContext(UserContext);

  useScript("/assets/js/slick.js");
  useScript("/assets/js/custom.js");
  // const path = usePathname();
  // var loadScript = function (src) {
  //   var tag = window.document.createElement("script");
  //   tag.async = false;
  //   tag.src = src;
  //   window.document.getElementsByTagName("body")[0].appendChild(tag);
  //   window.document.getElementsByTagName("body")[0].removeChild(tag);
  // };
  // useEffect(() => {
  //   console.log(path);
  //   loadScript("/assets/js/slick.js");
  //   loadScript("/assets/js/custom.js");
  // }, [path]);

  return (
    <div className="header change-logo">
      <div className="container">
        <nav id="navigation" className="navigation navigation-landscape">
          <div className="nav-header">
            <a className="nav-brand static-logo" href="/">
              <Image
                src="/assets/img/Logo-Header.png"
                width={200}
                height={50}
                alt="logo"
              ></Image>
            </a>
            <a className="nav-brand fixed-logo" href="/">
              <Image
                src="/assets/img/Logo-Header.png"
                width={110}
                height={50}
                alt="logo"
              ></Image>
            </a>
            <div className="nav-toggle" />
            <div className="mobile_nav">
              {user && user.code == "authorised" ? (
                <UserMenuMobile user={user} />
              ) : (
                <ul>
                  <li>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#login"
                      className="btn btn-orange"
                    >
                      <i className="fas fa-sign-in-alt me-2" />
                      Log In
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <Menu />
        </nav>
      </div>

      <div
        className="modal fade"
        id="login"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="loginmodal"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered login-pop-form modal-md"
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
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderOne;
