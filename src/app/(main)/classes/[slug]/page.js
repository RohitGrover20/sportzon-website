import { getClassBySlug } from "@/libs/fetchData";
import React from "react";
import Information from "./Information";
import BreadCrumb from "@/components/BreadCrumb";
import Registration from "./Registration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rating from "@/components/Rating";
import Link from "next/link";
export const revalidate = 10;
import Share from "@/components/Share";
import RatingCard from "@/components/RatingCard";
async function ClassDetails({ params }) {
  const slug = params?.slug;
  const classData = await getClassBySlug(slug);
  const data = classData?.data;
  return (
    <div>
      <ToastContainer />
      <BreadCrumb
        data={[
          { title: "Classes", link: "/classes" },
          { title: data?.title, link: `/classes/${params.slug}` },
        ]}
      />
      <section
        className="bg-cover py-5 class-top-section"
        style={{ background: "#F2F2F2" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-12">
              <h1 className="mb-0 text-orange" style={{ fontSize: "30px" }}>
                {data?.title}
              </h1>
              <div className="d-flex align-items-center">
                <div className="d-inline-flex align-items-center me-3">
                  <span className="theme-color">
                    <i className="fa-solid fa-location-dot opacity-75 me-1 theme-color" />
                    {data?.city}, {data?.state}
                  </span>
                </div>
              </div>
              <div className="d-inline-flex align-items-center jbs-kioyer-groups text-lg me-2 mt-2">
                <Rating rating={data?.rating} />
              </div>
              <div>
                <div className="jbs-blox-footer d-flex align-items-center justify-content-between">
                  <div className="blox-first-footer">
                    <div className="ftr-share-block">
                      <ul className="p-0 d-flex align-items-center colored-list">
                        <Share />
                        <RatingCard type="Class" class={data?._id} />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-3 class-top">
                <div style={{ width: "50%" }} className="class-banner">
                  <img
                    className="img-fluid rounded"
                    src={data?.banner}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "300px",
                    }}
                  />
                </div>
                <div className="justify-content-end mb-3">
                  <h6 className="text-orange mt-2">Coaches:</h6>
                  <div className="d-flex flex-row">
                    {data?.coaches?.map((item, index) => (
                      <div className="mb-3" key={index}>
                        <div className="card border-0 shadow-sm class-coach">
                          <div>
                            <img
                              src="/assets/img/userplaceholder.png"
                              className="card-img-top rounded"
                              alt="Coach"
                              height="150px"
                            />
                          </div>
                          <div className="card-body text-center">
                            <h6 className="card-title text-orange">
                              {item?.label}
                            </h6>
                            <Link href={`/coaches/${item?.value}`}>
                              <button className="btn btn-orange">
                                <i className="fa fa-user me-2" /> Profile
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 class-section" style={{ background: "#F2F2F2" }}>
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
