import { InferenceClient } from "@huggingface/inference";
import { NextRequest, NextResponse } from "next/server";
const hf = new InferenceClient(process.env.HF_TOKEN || "");

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    if (!url) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }
    const text = (await hf.textToImage({
      model: "lightonai/LightOnOCR-1B-1025",
      inputs: `${url}`,
    })) as unknown as Blob;
    const buffer = await text.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");
    return NextResponse.json({
      text: `${base64}`,
    });
  } catch (error) {
    console.error("Error generating image:", error);
    return NextResponse.json(
      { error: "Failed to generate image" },
      { status: 500 }
    );
  }
}
