//! CLERK AUTH
import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ["/api/uploadthing", "/"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

//! SUPABASE AUTH
// import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
// import { NextResponse } from "next/server";

// import type { NextRequest } from "next/server";
// import type { Database } from "@/lib/database.types";

// export async function middleware(req: NextRequest) {
//   const res = NextResponse.next();

//   // Create a Supabase client configured to use cookies
//   const supabase = createMiddlewareClient<Database>({ req, res });

//   // Refresh session if expired - required for Server Components
//   await supabase.auth.getSession();

//   return res;
// }

// // Ensure the middleware is only called for relevant paths.
// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     "/((?!_next/static|_next/image|favicon.ico).*)",
//   ],
// };
