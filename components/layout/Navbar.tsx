"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "tel:+85231119771", label: "致電 3111 9771" },
  { href: "#contact", label: "聯絡我們" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rose-400/40 bg-gradient-to-r from-pink-300 via-rose-300 to-pink-300 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-4 sm:h-16 sm:gap-4 sm:px-6">
        <Link
          href="/"
          className="min-w-0 shrink font-serif text-lg font-semibold leading-snug tracking-tight text-rose-950 sm:text-xl md:text-2xl"
          onClick={() => setOpen(false)}
        >
          永諾意僱傭中心
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="主選單">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base font-medium text-rose-950/90 transition-colors hover:text-rose-950 hover:underline md:text-lg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-rose-500/40 bg-white/50 text-rose-950 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">選單</span>
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-rose-400/35 bg-pink-200/95 md:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="flex flex-col gap-1 px-4 py-3" aria-label="手機選單">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2.5 text-base font-medium text-rose-950 hover:bg-white/40"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
