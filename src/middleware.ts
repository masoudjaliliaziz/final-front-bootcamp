import { NextRequest, NextResponse } from "next/server";

import { cookies } from "next/headers";
import { createSession } from "./lib/session";

// 1. Specify protected and public routes
const protectedRoutes = "/dashboard";
const publicRoutes = "/";

export default async function middleware(req: NextRequest) {
  // 2. Check if the current  route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = path.startsWith(protectedRoutes);
  const isPublicRoute = path.includes(publicRoutes);

  // 3. Decrypt the session from the cookie
  const accessToken = (await cookies()).get("accessToken")?.value;
  const refreshToken = (await cookies()).get("refreshToken")?.value;

  const isLogin = accessToken && refreshToken;
  const isLogout = !accessToken && !refreshToken;
  const needToRefresh = !accessToken && refreshToken;

  // 4. Redirect to /login if the user is not authenticated

  if (needToRefresh) {
    try {
      const res = await fetch("http://localhost:8000/auth/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refreshToken: refreshToken,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      createSession(data);
    } catch (error) {
      console.error("Error refreshing token:", error);
    }
  }

  if (isProtectedRoute && isLogout) {
    return NextResponse.redirect(new URL("auth/login", req.nextUrl));
  }

  // 5. Redirect to /dashboard if the user is authenticated
  if (path === "/" && isLogin) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
