import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, phone, service, details } = body;

    // Log the submission to the server logs
    console.log("=== NEW SURVEY REQUEST ===");
    console.log(`Name: ${name}`);
    console.log(`Company: ${company || "N/A"}`);
    console.log(`Phone: ${phone}`);
    console.log(`Service Required: ${service}`);
    console.log(`Project Details: ${details}`);
    console.log("==========================");

    return NextResponse.json({ success: true, message: "Survey logged successfully" });
  } catch (error) {
    console.error("Survey submission error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
