import Link from "next/link";
import React from "react";

function BreadCrumb(props) {
  const data = props && props.data;
  return (
    <div className="breadcrumb-wraps bg-orange py-3">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item font--medium">
                  {/* <a href="#">Home</a> */}
                  <Link href="/">Home</Link>
                </li>
                {data &&
                  data.map((item, index) => {
                    return (
                      <li
                        className="breadcrumb-item font--medium active text-white"
                        key={index}
                        aria-current="page"
                      >
                        <Link href={item.link} className="text-white">
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreadCrumb;
