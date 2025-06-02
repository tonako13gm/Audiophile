import data from './file.json'
import { NextRequest } from 'next/server';
import { cookies } from "next/headers";


export async function GET(request: NextRequest) {

    const cookieStore = await cookies();
    cookieStore.set("resultsPerPage", "20");
    console.log(cookieStore.get("resultsPerPage"));

    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredComments = query
        ? data.filter((data) => data.category.includes(query))
        : data;
    return Response.json(filteredComments);
}
