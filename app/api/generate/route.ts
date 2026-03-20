import { NextRequest, NextResponse } from "next/server";
import { withX402 } from "x402-next";

const handler = async (request: NextRequest) => {
  // In production, this would:
  // 1. Accept uploaded screenshots from the request body
  // 2. Process them with AI to add device frames, text, gradients
  // 3. Generate all required App Store & Play Store sizes
  // 4. Return a download URL for the processed set

  const setId = `sf_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

  return NextResponse.json({
    success: true,
    setId,
    transactionId: request.headers.get("X-Payment-Token") || "demo",
    message: "Screenshot set generated successfully",
    files: [
      { name: "iphone-6.7-01.png", size: "1290x2796", format: "App Store" },
      { name: "iphone-6.7-02.png", size: "1290x2796", format: "App Store" },
      { name: "iphone-6.1-01.png", size: "1179x2556", format: "App Store" },
      { name: "iphone-6.1-02.png", size: "1179x2556", format: "App Store" },
      { name: "ipad-12.9-01.png", size: "2048x2732", format: "App Store" },
      { name: "ipad-12.9-02.png", size: "2048x2732", format: "App Store" },
      { name: "play-store-01.png", size: "1080x1920", format: "Google Play" },
      { name: "play-store-02.png", size: "1080x1920", format: "Google Play" },
    ],
    downloadUrl: `/api/download/${setId}`,
  });
};

export const POST = withX402(
  handler,
  "0xCc97e4579eeE0281947F15B027f8Cad022933d7e",
  {
    price: "$19",
    network: "base",
    config: {
      description: "ScreenForge — Professional Screenshot Set",
    },
  }
);
