export async function GET() {
  return new Response("This is the route handler API");
}

export default GET;

// Note that if the route.js and the page.jsx are on the same folder directory level, the route will override the page
