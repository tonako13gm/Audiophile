import { cookies } from "next/headers";

export async function GET() {

    const cookieStore = await cookies();
    cookieStore.set("resultsPerPage", "20");

    console.log(cookieStore.get("resultsPerPage"))

    return new Response("<h1>Profile API data</h1>")
}