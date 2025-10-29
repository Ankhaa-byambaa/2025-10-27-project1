import { NextResponse } from "next/server";

export const GET = async () => {
  console.log("Hello from gemini");
  return NextResponse.json({ message: "It's working" });
};
