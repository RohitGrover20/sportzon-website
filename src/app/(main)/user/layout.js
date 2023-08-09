import ProfileSideBar from '@/components/ProfileSideBar'
import React from 'react'
import verifySession from '@/libs/verifySession'
import { cookies } from "next/headers"
import Script from 'next/script'

async function RootLayout({ children }) {
    const sessionId = cookies().get("sessionId")?.value
    const sig = cookies().get("sessionId.sig")?.value
    const options = {
        method: "GET",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
            "Cookie": `sessionId=${sessionId};sessionId.sig=${sig};`
        },
        cache: "no-store",
    };
    const user = await verifySession(options);
    return (
        <section className='gray-simple'>
            <div className="container">
                <div className="row justify-content-between">
                    <ProfileSideBar user={user} />
                    <div className="col-xl-9 col-lg-8">
                        {children}
                    </div>
                </div>
            </div>
            {/* <Script strategy={"beforeInteractive"} src="/assets/js/jquery.min.js?layout=main"></Script>
            <Script strategy={"beforeInteractive"} src="/assets/js/bootstrap.min.js?layout=main"></Script> */}
        </section>
    )
}


export default RootLayout