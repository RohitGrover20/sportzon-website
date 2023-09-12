import "./globals.css";
import Script from "next/script";
import Footer from "@/components/Footer";
import HeaderOne from "@/components/HeaderOne";
import Context from "../../../context/context";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import Error from "./error";
import { ErrorBoundary } from "react-error-boundary";
// const poppins = Poppins({ subsets: ['latin'], weight: ["400"] })

export const metadata = {
  title: "Sportzon",
  description: "Developed by Rahul Arya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="icon"
          type="image/x-icon"
          href="/assets/img/logo/fav-color.png"
        />
        <link href="/assets/css/styles.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        {/* <Script strategy={"beforeInteractive"} src="/assets/js/jquery.min.js"></Script> */}
        {/* <Script strategy={"beforeInteractive"} src="/assets/js/bootstrap.min.js"></Script> */}
        <Script
          strategy={"beforeInteractive"}
          src="https://checkout.razorpay.com/v1/checkout.js"
        ></Script>

        <Script
          strategy="beforeInteractive"
          src="/assets/js/jquery.min.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/assets/js/popper.min.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/assets/js/bootstrap.min.js"
        ></Script>

        {/* <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"
          integrity="sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></Script>

        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.11.8/umd/popper.min.js"
          integrity="sha512-TPh2Oxlg1zp+kz3nFA0C5vVC6leG/6mm1z9+mA81MI5eaUVqasPLO8Cuk4gMF4gUfP5etR73rgU/8PNMsSesoQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></Script>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.1/js/bootstrap.min.js"
          integrity="sha512-fHY2UiQlipUq0dEabSM4s+phmn+bcxSYzXP4vAXItBvBHU7zAM/mkhCZjtBEIJexhOMzZbgFlPLuErlJF2b+0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></Script> */}
      </head>
      <body>
        <Suspense fallback={<Loading />}>
          <ErrorBoundary fallback={<Error />}>
            <Context>
              <div id="main-wrapper">
                <HeaderOne />
                <div className="clearfix"></div>
                {children}
              </div>
              <Footer />
            </Context>
          </ErrorBoundary>
        </Suspense>
      </body>

      {/* <Script strategy="beforeInteractive" src="/assets/js/bootstrap-select.min.js"></Script> */}
      {/* <Script strategy="beforeInteractive" src="/assets/js/rangeslider.js"></Script> */}
      {/* <Script strategy="beforeInteractive" src="/assets/js/counterup.min.js"></Script> */}
      {/* <Script strategy="beforeInteractive" src="/assets/js/imagesloaded.pkgd.min.js"></Script> */}
      {/* <Script strategy="beforeInteractive" src="/assets/js/shuffle.min.js"></Script> */}
      {/* <Script strategy="beforeInteractive" src="/assets/js/custom.js"></Script> */}
    </html>
  );
}
