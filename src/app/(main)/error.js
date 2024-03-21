"use client"; // Error components must be Client Components
import { useEffect } from "react";
export default function Error({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error , "error");
  }, [error]);
  // Inside your ErrorBoundary component

  return (
    <section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-8 py-xl-5 py-4 text-center">
            <h1 class="extra-ft">
              5<span class="text-primary">0</span>0
            </h1>
            <h5 class="display-5 font--bold mb-4">Internal Server Error</h5>
            <p class="fs-5 pb-4 mb-0 mb-sm-2 mb-4">
              The server encountered an unexpected condition that prevented it
              from fulfilling the request.
            </p>
            <a class="btn btn-lg btn-primary rounded-3 px-5" href="/">
              Go to Homepage
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
