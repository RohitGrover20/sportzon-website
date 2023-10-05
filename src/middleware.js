import { NextResponse } from "next/server";
import verifySession from "./libs/verifySession";

export async function middleware(req) {
  const path = req.nextUrl.pathname;
  const sessionId = req.cookies.get("sessionToken")?.value;
  const sig = req.cookies.get("sessionToken.sig")?.value;
  const options = {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Cookie: `sessionToken=${sessionId};sessionToken.sig=${sig};`,
    },
    // cache: "no-store",
  };

  const verify = await verifySession(options);

  if (verify && verify.code == "unauthorised") {
    if (
      // path !== "/login" &&
      // !path.startsWith("/assets") &&
      path.startsWith("/user")
    ) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    // return NextResponse.redirect("/login");
  }
  if (
    verify &&
    verify.code == "authorised" &&
    (path == "/login" || path == "/register")
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}
