import React from "react";
import Image from "next/image";
const NoDataFound = (data) => {
  return (
    <div
    className="text-center card p-4 justify-content-center"
    style={{
      width: data?.data == "profile" ? "auto" : "60%",
      height: "60%",
      borderRadius: "40px",
      backgroundImage: "url('/assets/img/stadium-bg.png')",
    }}
  >
       <h5 className="mt-4 text-dark">Great things are on the way!</h5>
       <p className="fs-7 mb-4 text-dark">Our team is hard at work to bring you exciting updates. Keep an eye out for what's coming!</p>
       <div style={{alignContent:"center"}}><Image src={"/assets/img/jersey-person.png"} width={200} height={200} alt="imga" ></Image>
        </div>
  </div>
  );
};

export default NoDataFound;


