// import Link from "next/link";
// import React, { useContext  , useEffect , useRef , useState} from "react";
// import UserMenu from "./UserMenu";
// import { UserContext } from "../../../context/context";
// // import GeoLocation from "./GeoLocation";

// function Menu() {
//   const user = useContext(UserContext);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const navbarRef = useRef(null);

//   useEffect(() => {
//     const handleMenuClose = () => {
//       setIsMobileMenuOpen(false);
//     };

//     // Listen for Bootstrap collapse events
//     const navbar = navbarRef.current;
//     if (navbar) {
//       navbar.addEventListener("hidden.bs.collapse", handleMenuClose);
//     }

//     return () => {
//       if (navbar) {
//         navbar.removeEventListener("hidden.bs.collapse", handleMenuClose);
//       }
//     };
//   }, []);

//   // Close the menu when a link is clicked (for mobile view)
//   const handleLinkClick = () => {
//     setIsMobileMenuOpen(false);
//   };
//   return (
//     <div className="nav-menus-wrapper" style={{ transitionProperty: "none" }}       ref={navbarRef}
// >
//       <ul className="nav-menu nav-menu-social align-to-right">
//         {/* <GeoLocation /> */}
//         {user && user.code == "authorised" ? (
//           <UserMenu user={user} />
//         ) : (
//           <>
//             <li className="list-buttons ms-2">
//               <Link
//                 href=""
//                 data-bs-toggle="modal"
//                 data-bs-target="#login"
//                 style={{ background: "none", color: "orange" }}
//               >
//                 <div className="me-1">
//                   <img
//                     src="/assets/img/Login-icon.png"
//                     width="16"
//                     height="17"
//                     alt="login"
//                     className="text-orange"
//                   ></img>
//                 </div>
//                 <span className="text-orange fs-6"> LogIn</span>
//               </Link>
//             </li>
//             <li
//               className="list-buttons d-inline-block align-middle"
//               style={{ height: "40px" }}
//             >
//               <div
//                 className="bg-white"
//                 style={{
//                   width: "2px",
//                   height: "100%",
//                   display: "inline-block",
//                   verticalAlign: "middle",
//                 }}
//               ></div>
//             </li>
//             <li className="list-buttons">
//               <Link
//                 href="/register"
//                 style={{ background: "none", color: "orange" }}
//               >
//                 <div className="me-1">
//                   <img
//                     src="/assets/img/SignUp-icon.png"
//                     width="18"
//                     height="17"
//                     alt="signup"
//                   ></img>
//                 </div>
//                 <span className="text-orange fs-6"> SignUp </span>
//               </Link>
//             </li>
//           </>
//         )}
//       </ul>
//       <ul className="nav-menu  align-to-right">
//         {/* <li>
//           <Link href="/">Home</Link>
//         </li> */}
//         <li>
//           <a href="">
//             Bookings
//             <span className="submenu-indicator" />
//           </a>
//           <ul className="nav-dropdown nav-submenu">
//             <li>
//               <Link href="/venues">Venue Booking</Link>
//             </li>
//             <li>
//               <Link href="/events">Events Booking</Link>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <Link href="/classes" onClick={handleLinkClick}>Classes</Link>
//         </li>
//         <li>
//           <a href="">
//             Our Offerings
//             <span className="submenu-indicator" />
//           </a>
//           <ul className="nav-dropdown nav-submenu">
//             <li>
//               <Link href="/offering-for-schools">For Schools</Link>
//             </li>
//             <li>
//               <Link href="/offering-for-corporates">For Corporates</Link>
//             </li>
//           </ul>
//         </li>
//         {/* <li>
//           <Link href="/contact-us">Contact Us</Link>
//         </li> */}
//         {/* <li>
//           <Link href="/learning-section">Sports Learning Zone</Link>
//         </li> */}
//       </ul>
//     </div>
//   );
// }

// export default Menu;

// Example with corrected state update

// import React, { useContext, useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import UserMenu from "./UserMenu";
// import { UserContext } from "../../../context/context";

// function Menu() {
//   const user = useContext(UserContext);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isWrapperClosed, setIsWrapperClosed] = useState(false);
//   const navbarRef = useRef(null);

//   useEffect(() => {
//     const handleMenuClose = () => {
//       setIsMobileMenuOpen(false);
//       setIsWrapperClosed(true); // Set the wrapper closed state when menu closes
//     };

//     // Listen for Bootstrap collapse events
//     const navbar = navbarRef.current;
//     if (navbar) {
//       navbar.addEventListener("hidden.bs.collapse", handleMenuClose);
//     }

//     return () => {
//       if (navbar) {
//         navbar.removeEventListener("hidden.bs.collapse", handleMenuClose);
//       }
//     };
//   }, []);

//   // Close the menu and toggle wrapper class
//   const handleLinkClick = () => {
//     setIsMobileMenuOpen(false);
//     setIsWrapperClosed((prevState) => !prevState); // Toggle the wrapper class state
//   };

//   return (
//     <div
//       id="navbarNav"
//       className={`nav-menus-wrapper ${isWrapperClosed ? "closed" : ""}`}
//       style={{ transitionProperty: "none" }}
//       ref={navbarRef}
//     >
//       <ul className="nav-menu nav-menu-social align-to-right">
//         {/* Conditional rendering based on user context */}
//         {user && user.code === "authorised" ? (
//           <UserMenu user={user} />
//         ) : (
//           <>
//             <li className="list-buttons ms-2">
//               <Link
//                 href=""
//                 data-bs-toggle="modal"
//                 data-bs-target="#login"
//                 style={{ background: "none", color: "orange" }}
//               >
//                 <div className="me-1">
//                   <img
//                     src="/assets/img/Login-icon.png"
//                     width="16"
//                     height="17"
//                     alt="login"
//                     className="text-orange"
//                   />
//                 </div>
//                 <span className="text-orange fs-6"> LogIn</span>
//               </Link>
//             </li>
//             <li
//               className="list-buttons d-inline-block align-middle"
//               style={{ height: "40px" }}
//             >
//               <div
//                 className="bg-white"
//                 style={{
//                   width: "2px",
//                   height: "100%",
//                   display: "inline-block",
//                   verticalAlign: "middle",
//                 }}
//               ></div>
//             </li>
//             <li className="list-buttons">
//               <Link
//                 href="/register"
//                 style={{ background: "none", color: "orange" }}
//               >
//                 <div className="me-1">
//                   <img
//                     src="/assets/img/SignUp-icon.png"
//                     width="18"
//                     height="17"
//                     alt="signup"
//                   />
//                 </div>
//                 <span className="text-orange fs-6"> SignUp </span>
//               </Link>
//             </li>
//           </>
//         )}
//       </ul>
//       <ul className="nav-menu align-to-right">
//         <li>
//           <a href="" >
//             Bookings
//             <span className="submenu-indicator" />
//           </a>
//           <ul className="nav-dropdown nav-submenu">
//             <li>
//               <Link href="/venues" onClick={handleLinkClick}>
//                 Venue Booking
//               </Link>
//             </li>
//             <li>
//               <Link href="/events" onClick={handleLinkClick}>
//                 Events Booking
//               </Link>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <Link href="/classes" onClick={handleLinkClick}>
//             Classes
//           </Link>
//         </li>
//         <li>
//           <a href="">
//           Our Offerings
//             <span className="submenu-indicator" />
//           </a>
//           <ul className="nav-dropdown nav-submenu">
//             <li>
//               <Link href="/offering-for-schools" onClick={handleLinkClick}>
//                 For Schools
//               </Link>
//             </li>
//             <li>
//               <Link href="/offering-for-corporates" onClick={handleLinkClick}>
//                 For Corporates
//               </Link>
//             </li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Menu;


import React, { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import UserMenu from "./UserMenu";
import { UserContext } from "../../../context/context";

function Menu() {
  const user = useContext(UserContext);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Close the menu and toggle wrapper class
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsWrapperClosed((prevState) => !prevState); // Toggle the wrapper class state
  };

  return (
    <div
      id="navbarNav"
      // className={`nav-menus-wrapper ${isMobileMenuOpen ? "open" : ""}`}
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
        <li className="nav-item dropdown " style={{margin:"14px"}}>
          <div
            className={`text-white nav-link dropdown-toggle ${openDropdown === "bookings" ? "active" : ""}`}
            role="button"
            onClick={() => toggleDropdown("bookings")}
            aria-expanded={openDropdown === "bookings" ? "true" : "false"}
          >
            Bookings
          </div>
          <ul className={`dropdown-menu ${openDropdown === "bookings" ? "show" : ""}`}>
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
        <li className="nav-item dropdown mobile-dropdown" style={{margin:"14px"}}>
          <div
            className={`text-white nav-link dropdown-toggle ${openDropdown === "offerings" ? "active" : ""}`}
            role="button"
            onClick={() => toggleDropdown("offerings")}
            aria-expanded={openDropdown === "offerings" ? "true" : "false"}
          >
            Our Offerings
          </div>
          <ul className={`dropdown-menu ${openDropdown === "offerings" ? "show" : ""}`}>
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
          <Link href="/membership" onClick={handleLinkClick} className="nav-link">
            Membership Plans
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
