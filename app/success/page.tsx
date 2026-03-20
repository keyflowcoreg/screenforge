'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { EcosystemFooter } from '@/components/EcosystemFooter'

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        {/* Animated checkmark */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
          className="mx-auto w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center mb-8"
        >
          <motion.svg
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </motion.svg>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <h1 className="text-3xl font-bold text-white mb-4">Payment Verified!</h1>
          <p className="text-lg text-zinc-400 mb-2">Thank you for purchasing ScreenForge Screenshot Set.</p>
          <p className="text-sm text-zinc-500 mb-8">Your access has been activated. Check your email for confirmation.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="space-y-4">
          {/* What you get */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-left">
            <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-4">What&apos;s included</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <svg className="w-5 h-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Up to 10 professional screenshots per set
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <svg className="w-5 h-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                iPhone and iPad device frames included
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <svg className="w-5 h-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                All App Store sizes (6.7", 6.1", 12.9" iPad)
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <svg className="w-5 h-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Google Play Store format included
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <svg className="w-5 h-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Custom headlines and gradient backgrounds
              </li>
            </ul>
          </div>

          {/* Next steps */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-left">
            <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-4">Next steps</h3>
            <ol className="space-y-2 text-sm text-zinc-300 list-decimal list-inside">
              <li>Download your screenshot set ZIP</li>
              <li>Review images for each device size and store format</li>
              <li>Upload to App Store Connect and Google Play Console</li>
              <li>Submit your app update with the new screenshots</li>
            </ol>
          </div>

          <div className="flex gap-3 justify-center pt-4">
            <Link href="/" className="rounded-xl bg-white text-black px-6 py-3 font-semibold text-sm hover:bg-zinc-200 transition-colors">
              Back to ScreenForge
            </Link>
            <Link href="/contact" className="rounded-xl border border-zinc-700 text-zinc-300 px-6 py-3 font-semibold text-sm hover:border-zinc-500 transition-colors">
              Need help?
            </Link>
          </div>
        </motion.div>

        {/* Social share */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-12">
          <p className="text-sm text-zinc-500 mb-3">Share your purchase</p>
          <div className="flex justify-center gap-3">
            <a href="https://twitter.com/intent/tweet?text=Just%20created%20App%20Store%20screenshots%20with%20ScreenForge!%20Professional%20marketing%20images%20in%20minutes.&url=https://screenforge-ten.vercel.app" target="_blank" rel="noopener" className="rounded-lg border border-zinc-700 px-4 py-2 text-xs text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors">Share on X</a>
            <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://screenforge-ten.vercel.app" target="_blank" rel="noopener" className="rounded-lg border border-zinc-700 px-4 py-2 text-xs text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors">Share on LinkedIn</a>
          </div>
        </motion.div>
      </div>

      <EcosystemFooter currentProduct="ScreenForge" />
    </div>
  )
}
