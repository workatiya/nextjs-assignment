import { Flag } from 'lucide-react'

const places = [
  { name: 'Hunter Valley Golf And Country Club', dist: '220m' },
  { name: 'Rydges Resort Hunter Valley', dist: '550m' },
  { name: 'Cessnock Airport', dist: '1.7km' },
  { name: 'Cessnock CBD', dist: '7km' },
  { name: 'Nulkaba Public School', dist: '4.8km' },
  { name: 'Cessnock Hospital', dist: '7.3km' },
  { name: 'Mcdonalds, KFC, Oporto', dist: '7km' },
]

export default function Launching() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto grid max-w-7xl items-stretch gap-0 px-6 lg:grid-cols-2">
        {/* Info card */}
        <div className="rounded-l-3xl bg-gradient-to-br from-ssa-dark to-ssa-dark-2 p-8 text-white md:p-12">
          <p className="text-sm font-medium tracking-[0.2em] text-white/80">LAUNCHING</p>
          <h2 className="mt-3 font-heading text-3xl font-bold leading-tight md:text-4xl">
            Signature Slam Academy
            <br />
            Hunter Valley
          </h2>
          <p className="mt-4 font-heading text-xl font-medium text-white/90">
            SSA Connectivity
          </p>

          <ul className="mt-8 space-y-5">
            {places.map((p) => (
              <li key={p.name} className="flex items-center gap-3">
                <Flag className="size-4 shrink-0 text-white/80" />
                <span className="text-sm font-medium">{p.name}</span>
                <span className="mx-2 flex-1 border-t border-dashed border-white/40" />
                <span className="text-sm text-white/80">{p.dist}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="relative min-h-[320px] overflow-hidden rounded-r-3xl">
          <img
            src="/connectivity.png"
            alt="Aerial view of the Hunter Valley resort and golf course"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute bottom-4 right-6 flex gap-2">
            <span className="size-2 rounded-full bg-white" />
            <span className="size-2 rounded-full bg-white/50" />
            <span className="size-2 rounded-full bg-white/50" />
          </div>
        </div>
      </div>
    </section>
  )
}
