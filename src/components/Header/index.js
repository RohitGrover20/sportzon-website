import React from 'react'
import Menu from '../HeaderOne/Menu'

function Header() {
    return (
        <>
            <div className="header header-transparent change-logo">
                <div className="container">
                    <nav id="navigation" className="navigation navigation-landscape">
                        <div className="nav-header">
                            <a className="nav-brand static-logo" href="#">
                                <img src="assets/img/Sportzon-EIcon.png" className="logo w-50" alt="" />
                            </a>
                            <a className="nav-brand fixed-logo" href="#">
                                <img src="assets/img/Sportzon-EIcon.png" className="logo w-50" alt="" />
                            </a>
                            <div className="nav-toggle" />
                            <div className="mobile_nav">
                                <ul>
                                    <li>
                                        <a
                                            href="##"
                                            data-bs-toggle="modal"
                                            data-bs-target="#login"
                                            className="btn btn-orange"
                                        >
                                            <i className="fas fa-sign-in-alt me-2" />
                                            Log In
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Menu />
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header