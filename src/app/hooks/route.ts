// import { cookies } from "next/headers";

// export async function GET() {

//     const cookieStore = await cookies();
//     cookieStore.set("resultsPerPage", "20");

//     console.log(cookieStore.get("resultsPerPage"))

//     return new Response("")
// }


export const dynamic = "force-static";
export const revalidate = 10;
import { promises as fs } from 'fs';

export async function GET() {

  // This data would typically come from a database
  const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8')

  return Response.json(file);
}
