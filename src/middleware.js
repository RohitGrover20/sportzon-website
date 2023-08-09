import { NextResponse } from "next/server";
import verifySession from "./libs/verifySession";


export async function middleware(req, res) {
    const path = req.nextUrl.pathname;
    const sessionId = req.cookies.get("sessionId")?.value
    const sig = req.cookies.get("sessionId.sig")?.value
    const options = {
        method: "GET",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
            "Cookie": `sessionId=${sessionId};sessionId.sig=${sig};`
        },
        cache: "no-store",
    };

    const verify = await verifySession(options)
    if ((verify && verify.code == "unauthorised") && (path !== "/login") && !path.startsWith("/assets") && path.startsWith("/user")) {
        return NextResponse.redirect(new URL("/login", req.url))
    }
    if ((verify && verify.code == "authorised") && (path == '/login' || path == '/register')) {
        return NextResponse.redirect(new URL('/', req.url))
    }
}

// export const config = {
//     matcher: [
//         /*
//          * Match all request paths except for the ones starting with:
//          * - api (API routes)
//          * - _next/static (static files)
//          * - _next/image (image optimization files)
//          * - favicon.ico (favicon file)
//          */
//         '/((?!api|_next/static|_next/image|favicon.ico|assets).*)', '/venues'
//     ],
// }