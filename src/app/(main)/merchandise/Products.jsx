import React from "react";
import Link from "next/link";
import { getMerchandise } from "@/libs/fetchData";
async function Products() {
  const productsData = await getMerchandise();

  return (
    <>
      <section className="p-5">
        <h3 className="mb-4 text-dark">Featured Products</h3>
        <div className="row">
          {productsData?.data?.map((product) => (
            <div key={product?.slug} className="col-md-3 col-sm-6 mb-4">
              <Link href={`/merchandise/${product?.slug}`} passHref>
                <div
                  className="card h-100 zoom-on-hover"
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className="card-img-wrapper overflow-hidden"
                    style={{ height: "300px" }}
                  >
                    <img
                      src={product?.gallery[0]}
                      alt={product?.name}
                      className="card-img-top img-fluid h-100 w-100 object-fit-cover"
                    />
                  </div>
                  <div className="card-body">
                    <h6 className="text-dark display-7">{product?.name}</h6>
                    <p className="display-7 text-dark">Rs. {product?.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default Products;
