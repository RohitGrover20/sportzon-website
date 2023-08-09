import './globals.css'
import { Poppins } from 'next/font/google'
import Script from 'next/script'
import Footer from '@/components/Footer'
import HeaderOne from '@/components/HeaderOne'
import Context from '../../../context/context'
// const poppins = Poppins({ subsets: ['latin'], weight: ["400"] })

export const metadata = {
  title: 'Sportzon',
  description: 'Developed by Rudra Arya',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/assets/img/logo/fav-color.png" />
        <link href="/assets/css/styles.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </head>
      <body>
        <Context>
          <div id="main-wrapper">
            <HeaderOne />
            <div className="clearfix"></div>
            {children}
          </div>
          <Footer />
        </Context>
        <Script strategy={"beforeInteractive"} src="/assets/js/jquery.min.js?layout=main"></Script>
        <Script strategy={"beforeInteractive"} src="/assets/js/bootstrap.min.js?layout=main"></Script>
        <Script strategy={"beforeInteractive"} src="https://checkout.razorpay.com/v1/checkout.js"></Script>

        {/* <Script defer src="assets/js/jquery.min.js"></Script>
        <Script defer src="assets/js/popper.min.js"></Script>
        <Script defer src="assets/js/bootstrap.min.js"></Script>
        <Script defer src="assets/js/bootstrap-select.min.js"></Script>
        <Script defer src="assets/js/rangeslider.js"></Script>
        <Script defer src="assets/js/counterup.min.js"></Script>
        <Script defer src="assets/js/imagesloaded.pkgd.min.js"></Script>
        <Script defer src="assets/js/shuffle.min.js"></Script>
      <Script defer src="assets/js/custom.js"></Script> */}
      </body>
    </html>
  )
}
