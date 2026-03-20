"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { PayNow } from "@/components/paynow";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const STEPS = [
  {
    num: "01",
    title: "Upload Screenshots",
    desc: "Drop 3-10 raw screenshots from your app. PNG, JPG, or WebP.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Choose Style",
    desc: "Pick from gradient, minimal, dark, or colorful presets. Add your headline text.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Download Ready Images",
    desc: "Get App Store + Play Store images with device frames, perfectly sized.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
    ),
  },
];

const STYLES = [
  {
    name: "Gradient",
    bg: "from-rose-500 via-purple-500 to-indigo-500",
    desc: "Bold gradients",
  },
  {
    name: "Minimal",
    bg: "from-gray-100 to-white",
    desc: "Clean & simple",
    dark: false,
  },
  {
    name: "Dark",
    bg: "from-gray-900 to-black",
    desc: "Sleek & modern",
  },
  {
    name: "Colorful",
    bg: "from-amber-400 via-rose-400 to-violet-500",
    desc: "Eye-catching",
  },
];

const FORMATS = [
  { device: 'iPhone 6.7"', size: "1290 x 2796", use: "App Store" },
  { device: 'iPhone 6.1"', size: "1179 x 2556", use: "App Store" },
  { device: 'iPad 12.9"', size: "2048 x 2732", use: "App Store" },
  { device: "Play Store", size: "1080 x 1920", use: "Google Play" },
];

const CROSS_SELL = [
  {
    name: "PromptForge",
    desc: "500+ production-grade AI prompts",
    price: "$19",
    href: "https://promptforge.app",
  },
  {
    name: "PageForge",
    desc: "AI landing pages in 60 seconds",
    price: "$49/mo",
    href: "https://pageforge.dev",
  },
  {
    name: "Veloce Kit",
    desc: "Ship your first AI product in 48h",
    price: "$247",
    href: "https://velocekit.com",
  },
];

export default function LandingPage() {
  const router = useRouter();
  const [activeStyle, setActiveStyle] = useState(0);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-rose-500/8 blur-[120px]" />
        <div className="absolute -bottom-40 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/6 blur-[100px]" />
      </div>

      {/* Nav */}
      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500/15">
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
          </div>
          <span className="text-lg font-bold text-white">ScreenForge</span>
        </div>
        <a
          href="#pricing"
          className="rounded-full bg-rose-500/10 px-4 py-2 text-sm font-medium text-rose-400 transition-colors hover:bg-rose-500/20"
        >
          Get Started
        </a>
      </nav>

      {/* Hero */}
      <motion.section
        className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-20 text-center"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/5 px-4 py-1.5 text-sm text-rose-300"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
          AI-powered screenshot generator
        </motion.div>

        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Your app deserves better
          <br />
          screenshots.{" "}
          <span className="bg-gradient-to-r from-rose-400 to-rose-500 bg-clip-text text-transparent">
            Get them in 30 seconds.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-[#94a3b8]"
        >
          Upload raw screenshots &rarr; AI adds device frames, headlines,
          gradients &rarr; Download App Store-ready images
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-rose-500/25 transition-all hover:bg-rose-600 hover:shadow-rose-500/40"
          >
            Generate Screenshots
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </motion.section>

      {/* Before / After Preview */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-[#1e293b] bg-[#0f172a]/60 backdrop-blur"
        >
          <div className="grid md:grid-cols-2">
            {/* Before */}
            <div className="border-b border-[#1e293b] p-8 md:border-b-0 md:border-r">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                BEFORE
              </div>
              <div className="flex items-center justify-center rounded-xl bg-[#0A0A0F] p-6">
                {/* Mock raw screenshot */}
                <div className="w-48 rounded-lg border border-[#1e293b] bg-[#111827] p-2">
                  <div className="mb-2 h-3 w-16 rounded bg-[#1e293b]" />
                  <div className="mb-2 h-20 rounded bg-[#1e293b]/60" />
                  <div className="mb-1 h-2 w-full rounded bg-[#1e293b]/40" />
                  <div className="mb-1 h-2 w-3/4 rounded bg-[#1e293b]/40" />
                  <div className="mb-3 h-2 w-1/2 rounded bg-[#1e293b]/40" />
                  <div className="flex gap-2">
                    <div className="h-6 w-16 rounded bg-[#1e293b]/50" />
                    <div className="h-6 w-16 rounded bg-[#1e293b]/30" />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-[#64748b]">
                Raw screenshot &mdash; no context, no appeal
              </p>
            </div>

            {/* After */}
            <div className="p-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                AFTER
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-rose-500/20 via-purple-500/10 to-indigo-500/20 p-6">
                {/* Mock polished screenshot */}
                <div className="relative">
                  {/* Device frame */}
                  <div className="w-48 rounded-2xl border-2 border-[#374151] bg-[#111827] p-1.5 shadow-xl shadow-black/50">
                    {/* Notch */}
                    <div className="mx-auto mb-1 h-3 w-16 rounded-full bg-[#1e293b]" />
                    <div className="overflow-hidden rounded-xl bg-[#0f172a]">
                      <div className="p-2">
                        <div className="mb-2 h-3 w-16 rounded bg-rose-500/30" />
                        <div className="mb-2 h-20 rounded bg-gradient-to-br from-rose-500/20 to-purple-500/20" />
                        <div className="mb-1 h-2 w-full rounded bg-[#1e293b]/50" />
                        <div className="mb-1 h-2 w-3/4 rounded bg-[#1e293b]/40" />
                        <div className="mb-3 h-2 w-1/2 rounded bg-[#1e293b]/30" />
                        <div className="flex gap-2">
                          <div className="h-6 w-16 rounded bg-rose-500/30" />
                          <div className="h-6 w-16 rounded bg-[#1e293b]/40" />
                        </div>
                      </div>
                    </div>
                    {/* Home bar */}
                    <div className="mx-auto mt-1.5 h-1 w-12 rounded-full bg-[#374151]" />
                  </div>
                  {/* Headline overlay */}
                  <div className="absolute -right-12 -top-4 rounded-lg bg-rose-500/90 px-3 py-1.5 text-[10px] font-bold text-white shadow-lg">
                    Track Everything
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-[#64748b]">
                Device frame + headline + gradient background
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
            How it works
          </h2>
          <p className="text-[#94a3b8]">
            Three steps. Thirty seconds. Professional results.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative rounded-2xl border border-[#1e293b] bg-[#0f172a]/40 p-6 transition-colors hover:border-rose-500/30 hover:bg-[#0f172a]/70"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400 transition-colors group-hover:bg-rose-500/20">
                  {step.icon}
                </div>
                <span className="text-xs font-bold tracking-wider text-rose-500/40">
                  STEP {step.num}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#94a3b8]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Style Picker */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
            Choose your style
          </h2>
          <p className="text-[#94a3b8]">
            Four professionally designed presets. Pick one and customize.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {STYLES.map((style, i) => (
            <motion.button
              key={style.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              onClick={() => setActiveStyle(i)}
              className={`group relative overflow-hidden rounded-xl border p-4 text-left transition-all ${
                activeStyle === i
                  ? "border-rose-500/50 bg-rose-500/5"
                  : "border-[#1e293b] bg-[#0f172a]/40 hover:border-[#334155]"
              }`}
            >
              <div
                className={`mb-3 h-24 rounded-lg bg-gradient-to-br ${style.bg}`}
              />
              <div
                className={`text-sm font-semibold ${activeStyle === i ? "text-rose-400" : "text-white"}`}
              >
                {style.name}
              </div>
              <div className="text-xs text-[#64748b]">{style.desc}</div>
              {activeStyle === i && (
                <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500">
                  <svg
                    className="h-3 w-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Formats */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
            Every format you need
          </h2>
          <p className="text-[#94a3b8]">
            All required App Store and Play Store sizes, pixel-perfect.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {FORMATS.map((fmt, i) => (
            <motion.div
              key={fmt.device}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-[#1e293b] bg-[#0f172a]/40 p-4 text-center"
            >
              <div className="mb-2 text-sm font-semibold text-white">
                {fmt.device}
              </div>
              <div className="mb-1 font-mono text-xs text-[#64748b]">
                {fmt.size}
              </div>
              <div className="inline-block rounded-full bg-rose-500/10 px-2 py-0.5 text-[10px] font-medium text-rose-400">
                {fmt.use}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 mx-auto max-w-3xl px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-rose-500/20 bg-gradient-to-b from-rose-500/5 to-transparent"
        >
          <div className="border-b border-[#1e293b] bg-[#0f172a]/60 px-8 py-6 text-center">
            <h2 className="mb-1 text-3xl font-bold text-white">
              Professional Screenshot Set
            </h2>
            <p className="text-[#94a3b8]">
              Everything you need for App Store and Play Store
            </p>
          </div>

          <div className="p-8">
            <div className="mb-8 text-center">
              <div className="mb-2 flex items-baseline justify-center gap-1">
                <span className="text-5xl font-extrabold text-white">$19</span>
                <span className="text-lg text-[#64748b]">USDC</span>
              </div>
              <p className="text-sm text-[#64748b]">One-time payment. No subscription.</p>
            </div>

            <ul className="mb-8 space-y-3">
              {[
                "Up to 10 screenshots per set",
                "2 device frames (iPhone + iPad)",
                "All required App Store sizes",
                "Play Store format included",
                "4 style presets (gradient, minimal, dark, colorful)",
                "Custom headline text on each screenshot",
                "High-res PNG downloads",
                "Commercial license included",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-[#cbd5e1]">{item}</span>
                </li>
              ))}
            </ul>

            <PayNow
              productName="ScreenForge Screenshot Set"
              price={19}
              description="Professional App Store & Play Store screenshot set"
              onSuccess={() => router.push('/success')}
              accentColor="#f43f5e"
            />

            <p className="mt-4 text-center text-xs text-[#475569]">
              Card, Apple Pay, or USDC on Base. Instant delivery.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Cross-sell */}
      <section className="relative z-10 border-t border-[#1e293b] bg-[#0f172a]/30">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[#64748b]">
              From the makers of ScreenForge
            </p>
            <h3 className="text-2xl font-bold text-white">
              More tools to ship faster
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {CROSS_SELL.map((product) => (
              <a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-[#1e293b] bg-[#0f172a]/40 p-5 transition-colors hover:border-rose-500/20 hover:bg-[#0f172a]/70"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors">
                    {product.name}
                  </span>
                  <span className="rounded-full bg-rose-500/10 px-2.5 py-0.5 text-xs font-semibold text-rose-400">
                    {product.price}
                  </span>
                </div>
                <p className="text-sm text-[#94a3b8]">{product.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#1e293b] py-8">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm text-[#475569]">
            &copy; {new Date().getFullYear()} ScreenForge. Built for indie developers who ship.
          </p>
        </div>
      </footer>
    </div>
  );
}
