import React from "react";
import Image from "next/image";
import Link from "next/link";
const NoDataFound = ({ data, page }) => {
  return (
    <div
      className="text-center card p-4 justify-content-center no-data-mobile"
      style={{
        width: data === "profile" ? "auto" : "60%",
        height: "60%",
        borderRadius: "40px",
        backgroundImage:
          data === "profile" ? "url('/assets/img/stadium-bg.png')" : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {data === "profile" ? (
        <>
          <p className="text-dark">
            ✨ <strong className="fs-4">Why wait?</strong>{" "}
            <span className="fs-5">
              Explore and book now to enjoy all the benefits we have in store.
            </span>
          </p>
          <p className="fs-5 text-dark">
            🔍 <strong>See what's new and secure your spot today!</strong>
          </p>
          {page && page == "venues" && (
            <Link href={`/venues`} className="me-2">
              <button className="btn btn-md btn-orange text-white">
                Book Venue Now
              </button>
            </Link>
          )}
          {page && page == "events" && (
            <Link href={`/events`} className="me-2">
              <button className="btn btn-md btn-orange text-white">
                Book Event Now
              </button>
            </Link>
          )}
          {page && page == "classes" && (
            <Link href={`/classes`} className="me-2">
              <button className="btn btn-md btn-orange text-white">
                Join Class Now
              </button>
            </Link>
          )}
        </>
      ) : (
        <>
          <h5 className="mt-4 text-dark">Great things on the way !</h5>
          <p className="fs-6 text-dark m-0 p-0">
            Exciting opportunities are just around the corner!
            <br />
            🌟 <strong>Stay tuned</strong> and check back soon for updates.
            We're working hard to bring you new content!
          </p>
          <div className="d-flex justify-content-center">
            <Image
              src="/assets/img/NODATA-IMG.jpg"
              width={500}
              height={450}
              alt="Placeholder Image"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default NoDataFound;
