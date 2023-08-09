import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'

function UserMenu(props) {
    // const path = usePathname();
    const user = props && props.user && props.user.data;
    return (
        <li>
            <img className="avatar w-10 me-4" src={user ? user.profile : "/assets/img/userplaceholder.png"} alt="profile"></img>
            <ul className="nav-dropdown nav-submenu position-absolute right-0 mt-1">
                <li><Link href="/user/profile"><i className="fa fa-user me-3"></i>Profile</Link></li>
                <li><Link href="/user/settings"><i className="fa fa-cog me-3"></i>Settings</Link></li>
                <li><Link href="/user/help-support"><i className="fa-solid fa-question-circle me-3" />Help & Support</Link></li>
                <li><Link href="http://localhost:9000/auth/logout"><i className="fa fa-sign-out me-3"></i>Logout</Link></li>
            </ul>
        </li>
    )
}

export default UserMenu