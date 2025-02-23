import { cookies } from "next/headers";
import { ICity, PaginatedResultApi } from "./types";

export async function getCities(): Promise<PaginatedResultApi<ICity>> {
  try {
    const cookieStore = await cookies();
    const tocken = cookieStore.get("accessToken")?.value; // گرفتن مقدار توکن
    // if (!tocken) {
    //   console.error("❌ No token found in cookies");
    //   return null;
    // }
    const response = await fetch(`${process.env.BASE_ADMIN_URL}/cities `, {
      next: {
        tags: ["cities"],
      },
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tocken}`,
      },
    });

    const data = await response.json();
    return data;
    // console.log("✅ Data:", data);
  } catch (error) {
    console.error("❌ Error:", error);
  }
}
