"use client";
import { useEffect } from "react";
export default function Error({ error }) {
  useEffect(() => {
    console.error(error , "error");
  }, [error]);
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 py-xl-5 py-4 text-center">
            <h1 className="extra-ft">
              5<span className="text-primary">0</span>0
            </h1>
            <h5 className="display-5 font--bold mb-4">Internal Server Error</h5>
            <p className="fs-5 pb-4 mb-0 mb-sm-2 mb-4">
              The server encountered an unexpected condition that prevented it
              from fulfilling the request.
            </p>
            <a className="btn btn-lg btn-primary rounded-3 px-5" href="/">
              Go to Homepage
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
