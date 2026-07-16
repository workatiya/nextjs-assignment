import { ChevronLeft, ChevronDown } from 'lucide-react'

function SideWidget({ label, children }) {
  return (
    <div className="pointer-events-auto">
      <div className="mb-2 flex items-center justify-end gap-2 text-xs font-semibold tracking-widest text-white/90">
        <ChevronLeft className="size-3" />
        <ChevronLeft className="-ml-3 size-3" />
        {label}
      </div>
      {children}
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <img
        src="/hero-courts.png"
        alt="Aerial view of the SSA Hunter Valley tennis courts at sunset"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ssa-dark/70 via-ssa-dark/40 to-ssa-green/40" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-medium tracking-[0.35em] text-white/90">
          SSA HUNTER VALLEY
        </p>
        <h1 className="font-heading text-4xl font-bold uppercase leading-tight text-white text-balance sm:text-5xl md:text-6xl lg:text-7xl">
          Grow Your Game
          <br />
          With The{' '}
          <span className="relative inline-block">
            Professionals
            <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-ssa-green" />
          </span>
        </h1>

        <div className="mt-8 flex items-center gap-4 text-sm font-medium tracking-[0.3em] text-white sm:text-base">
          <span>ADOPT</span>
          <span className="size-1.5 rounded-full bg-ssa-green" />
          <span>NURTURE</span>
          <span className="size-1.5 rounded-full bg-ssa-green" />
          <span>DELIVER</span>
        </div>

        <a
          href="#register"
          className="mt-10 rounded-full bg-ssa-green px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
        >
          Register Now
        </a>
      </div>

      {/* Right side widgets */}
      <div className="pointer-events-none absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-end gap-6 pr-4 lg:flex">
        <SideWidget label="WEATHER">
          <div className="flex items-center gap-4 rounded-l-2xl bg-ssa-green/90 px-6 py-4 text-white">
            <span className="font-heading text-4xl font-bold">
              19<span className="text-xl align-top">°C</span>
            </span>
            <div className="text-left">
              <p className="text-sm font-semibold">Hunter Valley</p>
              <p className="text-xs text-white/80">Weather</p>
              <p className="text-xs text-white/80">Saturday, 8 pm</p>
            </div>
          </div>
        </SideWidget>
        <SideWidget label="ONGOING MATCHES">
          <div className="h-1 w-40 rounded-l-full bg-white/40" />
        </SideWidget>
        <SideWidget label="SCORE">
          <div className="h-1 w-40 rounded-l-full bg-white/40" />
        </SideWidget>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/80">
        <ChevronDown className="size-6" />
      </div>
    </section>
  )
}
