import "server-only";
import { cookies } from "next/headers";

export async function createSession(tocken: {
  accessToken: string;
  refreshToken: string;
}) {
  const accessExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const refreshExpiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  const cookieStore = await cookies();
  cookieStore.set("accessToken", tocken.accessToken, {
    httpOnly: true,
    secure: true,
    expires: accessExpiresAt,
    sameSite: "lax",
    path: "/",
  });
  cookieStore.set("refreshToken", tocken.refreshToken, {
    httpOnly: true,
    secure: true,
    expires: refreshExpiresAt,
    sameSite: "lax",
    path: "/",
  });
}
