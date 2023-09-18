import { getClassBySlug } from "@/libs/fetchData";
import React from "react";
import Information from "./Information";
import BreadCrumb from "@/components/BreadCrumb";
import Registration from "./Registration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rating from "@/components/Rating";

async function ClassDetails({ params }) {
  const slug = params.slug;
  const { data } = await getClassBySlug(slug);

  return (
    <div>
      <ToastContainer />
      <BreadCrumb
        data={[
          { title: "Classes", link: "/classes" },
          { title: data?.title, link: `/classes/${params.slug}` },
        ]}
      />
      <section className="bg-cover gray-simple py-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-12">
              <h1 className="mb-0" style={{ fontSize: "30px" }}>
                {data?.title}
              </h1>
              <div className="d-flex align-items-center">
                <div className="d-inline-flex align-items-center me-3">
                  <span className="text-muted">
                    <i className="fa-solid fa-location-dot opacity-75 me-1" />
                    {data?.city}, {data?.state}
                  </span>
                </div>
                <div className="d-inline-flex align-items-center me-3">
                  <span className="text-muted">
                    <i className="fa-solid fa-bookmark opacity-75 me-1" />
                    Cricket
                  </span>
                </div>
              </div>
              {/* <div className="d-inline-flex align-items-center jbs-kioyer-groups text-sm me-2"> */}
              <Rating rating={data?.rating} />
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7">
              <Information data={data} />
            </div>

            <div className="col-lg-5 col-md-5">
              <Registration data={data} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClassDetails;
