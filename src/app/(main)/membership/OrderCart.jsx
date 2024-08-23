// import React, { useContext, useState } from "react";
// import config from "@/config";
// import { UserContext } from "../../../../context/context";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const OrderCart = ({ data }) => {
//   // if(true){
//   //   toast.success("success", {
//   //     position: "top-right",
//   //     autoClose: 2000,
//   //     onClose: () => {
//   //       window.location.replace("/user/my-bookings");
//   //     },
//   //   });
//   // }
//   const [loader, setLoader] = useState(false);
//   const context = useContext(UserContext);
//   const user = context && context;
//   const discount = 0;
//   const gst = data?.price * 0.18;

//   // Function to calculate the end date based on the plan's extension feature
//   const calculateEndDate = (startDate, extensionInDays) => {
//     const endDate = new Date(startDate);
//     endDate.setDate(endDate.getDate() + 365 + extensionInDays); // Adding 365 days for a yearly plan and the extension
//     return endDate;
//   };

//   const submitDetails = async (e) => {
//     e.preventDefault();
//     setLoader(true);
//     if (user && user.code == "unauthorised") {
//       window.location.replace("/login");
//     } else {
//       const startDate = new Date();

//       // Assuming data contains an `extensionInDays` field
//       const extensionInDays = data?.extensionInDays || 0;
//       const endDate = calculateEndDate(startDate, extensionInDays);
//       const _data = {
//         amount: data?.price * 100,
//         subTotalAmount: data?.price - gst,
//         gst: gst,
//         planName: data?.planName,
//         discount: 0,
//         userDetails: user,
//         startDate: startDate.toISOString(),
//         endDate: endDate.toISOString(),
//       };
//       axios
//         .post(`${config.API_URL}/landing/payments/orders`, _data, {
//           withCredentials: true,
//         })
//         .then((res) => {
//           if (res?.data && res?.data?.code == "duplicate") {
//             toast.warning(res?.data && res?.data && res?.data?.message, {
//               position: "top-right",
//               autoClose: 2000,
//               onClose: () => {
//                 setLoader(false);
//                 const closeBtn =
//                   document && document.getElementById("registrationClose");
//                 closeBtn.click();
//               },
//             });
//           } else {
//             handleOpenRazorpay({
//               ...res.data.data,
//               _data,
//               user,
//             });
//           }
//         })
//         .catch((err) => {
//           setLoader(false);
//           console.log(err);
//         });
//     }
//   };

//   const handleOpenRazorpay = (data) => {
//     var options = {
//       key: "rzp_test_1KAe5ngzKfHbdN", // Enter the Key ID generated from the Dashboard
//       //   Key: "rzp_live_gk7iMvPaNzkvr2",
//       amount: Number(data.amount), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//       currency: data?.currency,
//       name: "Sportzon",
//       description:
//         "Description of the purchase item shown on the Checkout form. It should start with an alphanumeric character.",
//       image: "http://localhost:8080/assets/img/Sportzon-EIcon.png",
//       order_id: data?.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//       // "callback_url": "",
//       prefill: {
//         name: data?.user?.data?.firstName && data.user?.data?.firstName,
//         email: data?.user?.data?.email && data?.user?.data?.email,
//         contact: data?.user?.data?.mobile && data?.user?.data?.mobile,
//       },
//       notes: {
//         address: "Razorpay Corporate Office",
//       },
//       theme: {
//         color: "#ff611a",
//       },
//       handler: function (response) {
//         axios
//           .post(
//             `${config.API_URL}/landing/subscription/process`,
//             { response: response, data: data?._data },
//             { withCredentials: true }
//           )
//           .then((res) => {
//             toast.success(res.data && res.data && res.data.message, {
//               position: "top-right",
//               autoClose: 2000,
//               onClose: () => {
//                 window.location.replace("/user/my-subscription");
//               },
//             });
//           })
//           .catch((err) => {
//             setLoader(false);
//             console.log(err);
//           });
//       },
//     };
//     var rzp = new window.Razorpay(options);
//     rzp.on("payment.failed", function (response) {
//       axios
//         .post(
//           `${config.API_URL}/landing/payments/failed-payment`,
//           {
//             order_id: response.error.metadata.order_id,
//             payment_id: response.error.metadata.payment_id,
//             status: "failed",
//           },
//           { withCredentials: true }
//         )
//         .then(() => {
//           alert(response.error.description);
//         })
//         .catch((err) => {
//           console.log(err);
//         });

//       alert(response.error.metadata.payment_id);
//     });
//     rzp.open();
//   };
//   return (
//     <>
//       {/* <ToastContainer /> */}
//       <ToastContainer />
//       <div className="row">
//         <h2>Payment Breakdown Details :</h2>
//         <div className="col">
//           <h4>{data?.planName} (Yearly)</h4>
//           <div
//             className="card shadow"
//             style={{ maxWidth: "700px", borderRadius: "10px" }}
//           >
//             <div className="card-body theme-color">
//               <h5 className="card-title theme-color">Redeem Credits</h5>
//               <label htmlFor="creditsInput" className="form-label">
//                 Enter Credits to Redeem
//               </label>
//               <div className="mb-3 d-flex">
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="creditsInput"
//                   value={"0"}
//                   // onChange={handleCreditChange}
//                   // max={maxRedeemableCredits}
//                 />
//                 <div className="text-center">
//                   <button className="btn btn-danger btn-lg">
//                     Redeem Credits
//                   </button>
//                 </div>
//               </div>
//               <p>
//                 You have <strong>{0}</strong> Credits
//               </p>
//               <p>
//                 You can redeem maximum <strong>{0}</strong> credits (100% of
//                 gross amount) in this order
//               </p>
//               <p>1 Credit Point = 1 INR</p>
//             </div>
//           </div>
//         </div>
//         <div className="col">
//           <div
//             className="card shadow-sm border-0"
//             style={{ backdropFilter: "blur(10px)", borderRadius: "10px" }}
//           >
//             <div className="card-body theme-bg text-white p-3">
//               <h3 className="card-title text-center mb-4">Order Summary</h3>
//               <ul className="list-unstyled mb-4 fs-4 fw-bold m-4">
//                 <li className="d-flex justify-content-between mb-2">
//                   <span>Gross Amount:</span>
//                   <span>INR {data?.price?.toFixed(2)}</span>
//                 </li>
//                 <li className="d-flex justify-content-between mb-2">
//                   <span>Discount (0%):</span>
//                   <span>- INR {discount?.toFixed(2)}</span>
//                 </li>
//                 <li className="d-flex justify-content-between mb-2">
//                   <span>Subtotal Amount:</span>
//                   <span>INR {(data?.price - gst).toFixed(2)}</span>
//                 </li>
//                 <li className="d-flex justify-content-between mb-2">
//                   <span>Gst/Tax (18%):</span>
//                   <span>INR {gst.toFixed(2)}</span>
//                 </li>
//                 <li className="d-flex justify-content-between mb-2 fw-bold">
//                   <span>Total:</span>
//                   <span>INR {data?.price.toFixed(2)}</span>
//                 </li>
//               </ul>
//               <button
//                 type="submit"
//                 onClick={(e) => submitDetails(e)}
//                 className="btn btn-success w-100"
//               >
//                 Make Payment
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default OrderCart;



import React, { useContext, useState } from "react";
import config from "@/config";
import { UserContext } from "../../../../context/context";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderCart = ({ data }) => {
  debugger
  const [loader, setLoader] = useState(false);
  const context = useContext(UserContext);
  const user = context && context;
  const discount = 0;
  const gst = data?.price * 0.18;

  const calculateEndDate = () => {
    let endDate = new Date();
    let extensionDays = 0;
  
    // Log the data.features to inspect its content
    console.log("Features data:", data?.features);
  
    data?.features.forEach((feature) => {
      console.log("Processing feature:", feature);
  
      if (feature.details === "Extension") {
        const matched = feature.description.match(/\d+/); // Try to extract a number
  
        if (matched) {
          const days = parseInt(matched[0], 10); // Extract the number
          extensionDays += days;
          console.log("Found extension days:", days);
        } else {
          console.log("No days found in description:", feature.description);
        }
      }
    });
  
    // Log extension days
    console.log("Total Extension days:", extensionDays);
  
    const totalDaysToAdd = 365 + extensionDays;
    console.log("Total Days to Add:", totalDaysToAdd);
  
    if (!isNaN(totalDaysToAdd)) {
      const newDate = endDate.getDate() + totalDaysToAdd;
      console.log("New Date Value (before setting):", newDate);
      endDate.setDate(newDate);
      console.log("Updated endDate:", endDate);
    } else {
      console.error("Error: Invalid totalDaysToAdd value.");
    }
  
    return endDate;
  };
  
  

  const startDate = new Date();
  const endDate = calculateEndDate();

  const submitDetails = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (user && user.code === "unauthorised") {
      window.location.replace("/login");
    } else {
      const _data = {
        amount: data?.price * 100,
        subTotalAmount: data?.price - gst,
        gst: gst,
        planName: data?.planName,
        discount: 0,
        userDetails: user,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
      };

      axios
        .post(`${config.API_URL}/landing/payments/orders`, _data, {
          withCredentials: true,
        })
        .then((res) => {
          if (res?.data && res?.data?.code === "duplicate") {
            toast.warning(res?.data.message, {
              position: "top-right",
              autoClose: 2000,
              onClose: () => {
                setLoader(false);
                const closeBtn =
                  document && document.getElementById("registrationClose");
                closeBtn.click();
              },
            });
          } else {
            handleOpenRazorpay({
              ...res.data.data,
              _data,
              user,
            });
          }
        })
        .catch((err) => {
          setLoader(false);
          console.log(err);
        });
    }
  };

  const handleOpenRazorpay = (data) => {
    var options = {
      key: "rzp_test_1KAe5ngzKfHbdN", // Enter the Key ID generated from the Dashboard
      amount: Number(data.amount),
      currency: data?.currency,
      name: "Sportzon",
      description: "Purchase Description",
      image: "http://localhost:8080/assets/img/Sportzon-EIcon.png",
      order_id: data?.id,
      prefill: {
        name: data?.user?.data?.firstName,
        email: data?.user?.data?.email,
        contact: data?.user?.data?.mobile,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#ff611a",
      },
      handler: function (response) {
        axios
          .post(
            `${config.API_URL}/landing/subscription/process`,
            { response: response, data: data?._data },
            { withCredentials: true }
          )
          .then((res) => {
            toast.success(res.data.message, {
              position: "top-right",
              autoClose: 2000,
              onClose: () => {
                window.location.replace("/user/my-subscription");
              },
            });
          })
          .catch((err) => {
            setLoader(false);
            console.log(err);
          });
      },
    };
    var rzp = new window.Razorpay(options);
    rzp.on("payment.failed", function (response) {
      axios
        .post(
          `${config.API_URL}/landing/payments/failed-payment`,
          {
            order_id: response.error.metadata.order_id,
            payment_id: response.error.metadata.payment_id,
            status: "failed",
          },
          { withCredentials: true }
        )
        .then(() => {
          alert(response.error.description);
        })
        .catch((err) => {
          console.log(err);
        });

      alert(response.error.metadata.payment_id);
    });
    rzp.open();
  };

  return (
    <>
      <ToastContainer />
      <div className="row">
        <h2>Payment Breakdown Details :</h2>
        <div className="col">
          <h4>{data?.planName} (Yearly)</h4>
          <div
            className="card shadow"
            style={{ maxWidth: "700px", borderRadius: "10px" }}
          >
            <div className="card-body theme-color">
              <h5 className="card-title theme-color">Redeem Credits</h5>
              <label htmlFor="creditsInput" className="form-label">
                Enter Credits to Redeem
              </label>
              <div className="mb-3 d-flex">
                <input
                  type="number"
                  className="form-control"
                  id="creditsInput"
                  value={"0"}
                />
                <div className="text-center">
                  <button className="btn btn-danger btn-lg">
                    Redeem Credits
                  </button>
                </div>
              </div>
              <p>
                You have <strong>{0}</strong> Credits
              </p>
              <p>
                You can redeem maximum <strong>{0}</strong> credits (100% of
                gross amount) in this order
              </p>
              <p>1 Credit Point = 1 INR</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card shadow-sm border-0"
            style={{ backdropFilter: "blur(10px)", borderRadius: "10px" }}
          >
            <div className="card-body theme-bg text-white p-3">
              <h3 className="card-title text-center mb-4">Order Summary</h3>
              <ul className="list-unstyled mb-4 fs-4 fw-bold m-4">
                <li className="d-flex justify-content-between mb-2">
                  <span>Gross Amount:</span>
                  <span>INR {data?.price?.toFixed(2)}</span>
                </li>
                <li className="d-flex justify-content-between mb-2">
                  <span>Discount (0%):</span>
                  <span>- INR {discount?.toFixed(2)}</span>
                </li>
                <li className="d-flex justify-content-between mb-2">
                  <span>Subtotal Amount:</span>
                  <span>INR {(data?.price - gst).toFixed(2)}</span>
                </li>
                <li className="d-flex justify-content-between mb-2">
                  <span>Gst/Tax (18%):</span>
                  <span>INR {gst.toFixed(2)}</span>
                </li>
                <li className="d-flex justify-content-between mb-2 fw-bold">
                  <span>Total:</span>
                  <span>INR {data?.price.toFixed(2)}</span>
                </li>
              </ul>
              <button
                type="submit"
                onClick={(e) => submitDetails(e)}
                className="btn btn-success w-100"
              >
                Make Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderCart;
