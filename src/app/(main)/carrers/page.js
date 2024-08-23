// // import { getClasses } from "@/libs/fetchData";
// // import ClassList from "./ClassList";

// export const revalidate = 10;

// async function Carrers() {
//   // const classData = await getClasses();
//   // const classes = classData?.data;
//   return (
//     <>
//       <section className="mt-0 pt-2">
//         <div className="container">
//           {/* Banner Section */}
//           <div className="row banner-section align-items-center my-5">
//             <div className="col-lg-6">
//               <div className="banner-content">
//                 <h5>CARRERS AT SPORTZON</h5>
//                 <h1 className="text-black">Work With Us</h1>
//                 <p className="fs-4 text-black">
//                   Explore remote-friendly, flexible opportunities and join our
//                   mission to make work life simpler, more pleasant and more
//                   productive.
//                 </p>
//                 <div className=" mt-5">
//                   {/* <Link href={`/venues/${search?.keyword}`}> */}
//                   <button
//                     type="submit"
//                     className="btn btn-orange text-white text-uppercase fw-bold"
//                   >
//                     View Careers
//                   </button>
//                   {/* </Link> */}
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="banner-image">
//                 <img
//                   src="/assets/img/carrers-img.jpg"
//                   alt="Careers Banner"
//                   className="img-fluid rounded-3"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section style={{background:"#ececf3"}}>
//       <div>
//           <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//             <div className="row justify-content-center gy-xl-5 gy-lg-4 gy-5 gx-xl-5 gx-lg-4 gx-3">
//               <h2 className="text-center">Are you ready to Join Our Team?</h2>
//             </div>
//           </div>
//           </div>
//       </section>
//       <div className="clearfix"></div>
//     </>
//   );
// }

// export default Carrers;



// import { getClasses } from "@/libs/fetchData";
// import ClassList from "./ClassList";

export const revalidate = 10;

const jobData = [
  { title: "Software Engineer", type: "SPORTZON | Full Time", location: "Ghaziabad, Uttar Pradesh, India" },
  { title: "Product Manager", type: "SPORTZON | Contract Basis", location: "Ghaziabad, Uttar Pradesh, India" },
  { title: "UI/UX Designer", type: "SPORTZON | Full Time", location: "Ghaziabad, Uttar Pradesh, India" },
  { title: "Data Scientist", type: "SPORTZON | Contract Basis", location: "Ghaziabad, Uttar Pradesh, India" },
  { title: "QA Tester", type: "SPORTZON | Full Time", location: "Ghaziabad, Uttar Pradesh, India" },
  { title: "Marketing Specialist", type: "SPORTZON | Contract Basis", location: "Ghaziabad, Uttar Pradesh, India" },
];


const JobCard = ({ title, type, location }) => (
  <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
    <div className="card h-100">
      <div className="card-body m-4">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{type}</p>
        <p className="card-text"><strong>Location:</strong> {location}</p>
        <a href="#apply" className="btn btn-orange">Apply Now</a>
      </div>
    </div>
  </div>
);


async function Carrers() {
  return (
    <>
      <section className="mt-0 pt-2">
        <div className="container">
          {/* Banner Section */}
          <div className="row banner-section align-items-center my-5">
            <div className="col-lg-6">
              <div className="banner-content">
                <h5>CARRERS AT SPORTZON</h5>
                <h1 className="text-black">Work With Us</h1>
                <p className="fs-4 text-black">
                  Explore remote-friendly, flexible opportunities and join our
                  mission to make work life simpler, more pleasant and more
                  productive.
                </p>
                <div className="mt-5">
                  <button
                    type="submit"
                    className="btn btn-orange text-white text-uppercase fw-bold"
                  >
                    View Careers
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-image">
                <img
                  src="/assets/img/carrers-img.jpg"
                  alt="Careers Banner"
                  className="img-fluid rounded-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section style={{ background: "#ececf3" }}>
        <div className="container">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="row justify-content-center gy-xl-5 gy-lg-4 gy-5 gx-xl-5 gx-lg-4 gx-3">
              <h2 className="text-center text-black">Are you ready to join our team?</h2>
              {jobData.map((job, index) => (
                <JobCard key={index} title={job?.title} type={job?.type} location ={job?.location} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <div className="clearfix"></div>
    </>
  );
}

export default Carrers;
