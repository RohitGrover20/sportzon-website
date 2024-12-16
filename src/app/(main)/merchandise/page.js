import React from "react";
import Image from "next/image";
import Newsletter from "@/components/Newsletter";
import Products from "./Products";

const promises = [
  {
    title: "Premium Quality",
    description: "We ensure the highest quality in all our products.",
    icon: "fa-gem",
    color: "#FFD700", // Gold color
  },
  {
    title: "Pre-Shrunk Products",
    description: "Our products are pre-shrunk to maintain size and shape.",
    icon: "fa-compress-alt",
    color: "#32CD32", // Lime green color
  },
  {
    title: "100% Authentic",
    description: "All our products are 100% authentic.",
    icon: "fa-certificate",
    color: "#FF4500", // Orange-red color
  },
  {
    title: "Easy Returns Policy",
    description: "We offer an easy returns policy for customer satisfaction.",
    icon: "fa-exchange-alt",
    color: "#1E90FF", // Dodger blue color
  },
];

const Merchandise = () => {
  return (
    <div className="position-relative">
      <div className="position-relative w-100">
        <Image
          src="/assets/img/merchandise-banner.jpg"
          layout="responsive"
          width={1800}
          height={1000}
          alt="Merchandise Background"
        />
      </div>

      <Products />

      {/* Our Promises Section */}
      <section className="p-4 bg-light">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card">
              <h4 className="mb-4 mt-4 text-center text-black">Our Promises</h4>
              <div className="card-body">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                  {promises.map((promise, index) => (
                    <div key={index} className="col text-center">
                      <i
                        className={`fas ${promise?.icon} fs-1`}
                        style={{ color: promise?.color }}
                      ></i>
                      <h6 className="mt-2 mb-1 text-black">{promise?.title}</h6>
                      <p className="mb-0">{promise?.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Merchandise;
