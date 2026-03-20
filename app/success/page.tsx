"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { PaymentSuccess } from "@/components/x402";

const MOCK_FILES = [
  { name: "iphone-6.7-01.png", size: "1290 x 2796", format: "App Store" },
  { name: "iphone-6.7-02.png", size: "1290 x 2796", format: "App Store" },
  { name: "iphone-6.1-01.png", size: "1179 x 2556", format: "App Store" },
  { name: "iphone-6.1-02.png", size: "1179 x 2556", format: "App Store" },
  { name: "ipad-12.9-01.png", size: "2048 x 2732", format: "App Store" },
  { name: "ipad-12.9-02.png", size: "2048 x 2732", format: "App Store" },
  { name: "play-store-01.png", size: "1080 x 1920", format: "Google Play" },
  { name: "play-store-02.png", size: "1080 x 1920", format: "Google Play" },
];

function SuccessContent() {
  const params = useSearchParams();
  const tx = params.get("tx") || "";
  const setId = params.get("set") || "";

  return (
    <PaymentSuccess
      productName="ScreenForge Screenshot Set"
      transactionId={tx}
      downloadUrl={setId ? `/api/download/${setId}` : undefined}
      returnUrl="/"
      returnLabel="Generate another set"
      accentColor="#f43f5e"
    >
      {/* File list preview */}
      <div className="rounded-xl border border-[#1e293b] bg-[#0f172a] p-4 text-left">
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#64748b]">
          Your Screenshots
        </h3>
        <div className="space-y-2">
          {MOCK_FILES.map((file) => (
            <div
              key={file.name}
              className="flex items-center justify-between rounded-lg bg-[#0A0A0F] px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-rose-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-xs text-white">{file.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-[#475569]">
                  {file.size}
                </span>
                <span className="rounded bg-rose-500/10 px-1.5 py-0.5 text-[9px] font-medium text-rose-400">
                  {file.format}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PaymentSuccess>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#0A0A0F]">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-rose-500 border-t-transparent" />
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
