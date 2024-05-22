import Script from 'next/script'
import React from 'react'

import { disableReactDevTools } from '@fvilers/disable-react-devtools';
// import App from './App';

export const metadata = {
    title: 'Sportzon',
    description: 'Developed by Citiskape Pvt. ltd.',
}
function RootLayout({ children }) {
    if (process.env.NODE_ENV) {
        disableReactDevTools();
      }
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/x-icon" href="/assets/img/logo/fav-color.png" />
                <link href="/assets/css/styles.css" rel="stylesheet" />
            </head>
            <body>
                <div id="main-wrapper">
                    {/* <div className="clearfix"></div> */}
                    <div className="d-lg-flex position-relative h-100">
                        <a
                            className="circle bg-white text-primary border square--40 position-absolute top-0 end-0 mt-3 me-3"
                            href="/"
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            aria-label="Back to home"
                            data-bs-original-title="Back to home"
                        >
                            <i className="fa-solid fa-house-user" />
                        </a>
                        {/* Signup Form */}
                        <div className="d-flex flex-column align-items-center w-50 h-100 px-4 px-md-5 py-0">
                            <div className="w-100 mt-auto py-4 px-xl-4 px-lg-3">
                                <div className="d-flex mb-3">
                                    <img
                                        src="assets/img/logo/fav-color.png"
                                        className="img-fluid"
                                        width={70}
                                        alt="logo"
                                    />
                                </div>
                                {children}
                            </div>
                        </div>
                        <div
                            className="w-50 bg-cover bg-repeat-0 bg-position-center"
                            style={{ backgroundImage: "url(assets/img/banner.jpg)" }}
                        />
                    </div>
                </div>
                <Script strategy={"beforeInteractive"} src="/assets/js/jquery.min.js?layout=auth"></Script>
                <Script strategy={"beforeInteractive"} src="/assets/js/bootstrap.min.js?layout=auth"></Script>
            </body>
        </html >
    )
}

export default RootLayout