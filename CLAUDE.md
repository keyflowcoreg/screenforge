@AGENTS.md

# ScreenForge

AI-powered App Store & Play Store screenshot generator. Upload raw screenshots, get professional marketing images with device frames, headlines, and gradient backgrounds.

## Stack
- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4, dark theme, accent rose-500
- **Animation**: Framer Motion
- **Payments**: x402 protocol (USDC on Base), $19/set

## Structure
```
app/
  layout.tsx          # Root layout, Inter font, dark theme, full SEO
  page.tsx            # Landing page (client component)
  globals.css         # Tailwind v4, dark theme vars
  api/generate/
    route.ts          # x402-protected POST endpoint ($19)
  success/
    page.tsx          # Post-purchase page with file list
components/
  x402/               # Shared x402 checkout components
    X402Checkout.tsx   # Payment modal component
    PaymentSuccess.tsx # Success state with animation
    index.ts           # Barrel exports
```

## Key Decisions
- Payment: $19 one-time via x402 USDC on Base network
- Wallet: 0xCc97e4579eeE0281947F15B027f8Cad022933d7e
- Includes: Up to 10 screenshots, iPhone + iPad frames, all App Store sizes, Play Store format
- Style presets: gradient, minimal, dark, colorful

## Dev Commands
```bash
pnpm dev      # Start dev server
pnpm build    # Production build
pnpm start    # Start production server
```
