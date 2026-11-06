import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {
  const target = request.nextUrl.searchParams.get("url");
  return fetch(target!);
}
