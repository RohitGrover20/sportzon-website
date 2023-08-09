"use client"
import config from '@/config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'

function ProfileSideBar(props) {
    const path = usePathname();
    var loadScript = function (src) {
        var tag = window.document.createElement("script");
        tag.async = false;
        tag.src = src;
        window.document.getElementsByTagName("body")[0].appendChild(tag);
        window.document.getElementsByTagName("body")[0].removeChild(tag);
    };
    useEffect(() => {
        // loadScript("/assets/js/slick.js");
        loadScript("/assets/js/custom.js");
    }, [path]);
    const user = props && props.user && props.user.data;
    return (
        <div className="col-xl-3 col-lg-4">
            <button type="button" className="d-lg-none btn btn-md btn-primary w-100 rounded-0 fixed-bottom" data-bs-toggle="offcanvas" data-bs-target="#Sidebaruser"><i className="fa-solid fa-filter me-2"></i>Dashboard Navigation</button>
            <div
                className="offcanvas-lg offcanvas-start"
                data-bs-scroll="true"
                data-bs-backdrop="false"
                id="Sidebaruser"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title">Filters</h5>
                    <button className="btn-close" type="button" data-bs-dismiss="offcanvas" data-bs-target="#Sidebaruser"></button>
                </div>
                <div className="offcanvas-body pt-0 pe-lg-4">
                    <div className="position-relative px-lg-4 py-lg-5 rounded-4 bg-white shadow-lg">
                        <div className="user-prfl text-center mx-auto">
                            <div className="position-relative mb-2">
                                <img
                                    src={user && user.profile ? user.profile : "/assets/img/userplaceholder.png"}
                                    className="img-fluid circle"
                                    width={120}
                                    alt="img"
                                />
                            </div>
                            <div className="user-caps">
                                <h5 className="mb-0">{user && user.firstName} {user && user.lastName}</h5>
                                <p className="m-0 text-muted">{user && user.email}</p>
                            </div>
                        </div>
                        <div className="user-prfl-nav mt-4">
                            <ul className="no-ul-list">
                                <li className="py-3">
                                    <Link
                                        href="/user/profile"
                                        className="fw-medium active text-primary"
                                    >
                                        <i className="fa-solid fa-user me-2" />
                                        Personal Information
                                    </Link>
                                </li>
                                <li className="py-3">
                                    <Link href="/user/my-bookings" className="fw-medium">
                                        <i className="fa-solid fa-id-card me-2" />
                                        My Bookings
                                    </Link>
                                </li>
                                <li className="py-3">
                                    <Link href="/user/recent-transactions" className="fw-medium">
                                        <i className="fa-solid fa-wallet me-2" />
                                        Recent Transactions
                                    </Link>
                                </li>
                                <li className="py-3">
                                    <Link href="/user/my-subscription" className="fw-medium">
                                        <i className="fa-solid fa-basket-shopping me-2" />
                                        My Subscription
                                    </Link>
                                </li>
                                <li className="py-3">
                                    <Link href="/user/settings" className="fw-medium">
                                        <i className="fa-solid fa-gear me-2" />
                                        Settings
                                    </Link>
                                </li>
                                <li className="py-3">
                                    <Link href="/user/help-support" className="fw-medium">
                                        <i className="fa-solid fa-question-circle me-2" />
                                        Help & Support
                                    </Link>
                                </li>
                                <li className="py-3 pb-0">
                                    <a href={`${config.API_URL}/auth/logout`} className="fw-medium">
                                        <i className="fa fa-sign-out me-2" />
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default ProfileSideBar