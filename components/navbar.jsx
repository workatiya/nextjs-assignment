'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['Home', 'About', 'Programs', 'Facilities', 'Coaches', 'Events']

function Logo({ dark = false }) {
  return (
    <div className="flex flex-col items-center leading-none">
      <span
        className={`font-heading text-2xl font-extrabold tracking-tight ${
          dark ? 'text-black' : 'text-black'
        }`}
      >
        SS<span className="text-ssa-green">A</span>
      </span>
      <span
        className={`mt-0.5 text-[7px] font-semibold tracking-[0.25em] ${
          dark ? 'text-gray-500' : 'text-gray-500'        }`}
      >
        ADOPT NURTURE DELIVER
      </span>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-white/90 transition-colors hover:text-ssa-green"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#register"
            className="rounded-full border border-white/40 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-foreground"
          >
            Login
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-white md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/90 md:hidden">
          <div className="p-6">
            <div className="mb-8 flex items-center justify-between">
              <Logo />
              <button onClick={() => setOpen(false)}>
                <X className="h-8 w-8 text-white" />
              </button>
            </div>

            <ul className="space-y-5">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="text-base font-semibold text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#register"
              onClick={() => setOpen(false)}
              className="mt-8 block rounded-full bg-ssa-green py-4 text-center text-xl font-semibold text-black"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </header>
  )
}