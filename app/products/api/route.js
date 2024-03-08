import data from "../../data/db.json";

console.log(data);

export async function GET() {
  return Response.json(data);
}
