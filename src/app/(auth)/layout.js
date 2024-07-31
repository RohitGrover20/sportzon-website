import Script from "next/script";
import React from "react";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

export const metadata = {
  title: "Sportzon",
  description: "Developed by Citiskape Pvt. ltd.",
};
function RootLayout({ children }) {
  if (process.env.NODE_ENV !== "development") {
    disableReactDevTools();
  }
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/x-icon"
          href="/assets/img/Sportzon-EIcon.png"
        />
        <link href="/assets/css/styles.css" rel="stylesheet" />
      </head>
      <body>
        <div id="main-wrapper">
          <div className="d-lg-flex position-relative min-vh-100 justify-content-center align-items-center">
            <div
              className="position-absolute "
              style={{
                backgroundImage: "url(/assets/img/auth-bg-img.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width:"100%",
                height:"100%"
              }}
            />
            {/* Signup Form */}
            <div className="w-50 px-4 px-md-5 py-0 position-relative ms-auto mb-5">
              <div
                className="bg-white p-4 mt-5"
                style={{ borderRadius: "35px" }}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
        <Script
          strategy={"beforeInteractive"}
          src="/assets/js/jquery.min.js?layout=auth"
        ></Script>
        <Script
          strategy={"beforeInteractive"}
          src="/assets/js/bootstrap.min.js?layout=auth"
        ></Script>
      </body>
    </html>
  );
}

export default RootLayout;
