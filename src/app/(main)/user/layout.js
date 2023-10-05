import ProfileSideBar from "@/components/ProfileSideBar";
import React from "react";
// import verifySession from "@/libs/verifySession";
// import { cookies } from "next/headers";
import { Suspense } from "react";
import Loading from "@/components/Loading";

async function RootLayout({ children }) {
  // const sessionId = cookies().get("sessionToken")?.value;
  // const sig = cookies().get("sessionToken.sig")?.value;
  // const options = {
  //   method: "GET",
  //   credentials: "include",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Cookie: `sessionToken=${sessionId};sessionToken.sig=${sig};`,
  //   },
  //   // cache: "no-store",
  // };
  // const user = await verifySession();
  return (
    <section className="gray-simple">
      <Suspense fallback={<Loading />}>
        <div className="container">
          <div className="row justify-content-between">
            <ProfileSideBar />
            <div className="col-xl-9 col-lg-8">{children}</div>
          </div>
        </div>
      </Suspense>
    </section>
  );
}

export default RootLayout;
