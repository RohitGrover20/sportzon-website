import MembershipPlans from "./MembershipPlans";
import { getSubscriptionPlan } from "@/libs/fetchData";
export const revalidate = 10;

async function Membership() {
  const subscriptionData = await getSubscriptionPlan();
  const planData = subscriptionData?.data;
  return (
    <>
      <section className="mt-0 pt-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10 col-md-12 col-sm-12 mb-4">
              <div className="sec-heading center">
                <p className="text-orange mt-3 fs-1 fw-bold">
                  Exclusive Membership Plans
                </p>
                <p className="text-dark mt-2">
                  Discover a range of membership options designed to suit every
                  need. Enjoy unparalleled access, exclusive benefits, and a
                  top-tier sports experience tailored just for you.
                </p>
                <p
                  className="bg-light text-center p-2 rounded mt-3"
                  style={{
                    color: "#ff5722",
                    fontWeight: "bold",
                    border: "1px solid #ff5722",
                    maxWidth: "250px",
                    margin: "0 auto",
                  }}
                >
                  ** 1 CREDIT COIN = 1 RUPEE **
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="row justify-content-center gy-xl-5 gy-lg-4 gy-5 gx-xl-5 gx-lg-4 gx-3">
              <MembershipPlans data={planData} />
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix"></div>
    </>
  );
}

export default Membership;
