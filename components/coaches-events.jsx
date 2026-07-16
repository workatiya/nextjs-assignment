import { ArrowRight } from 'lucide-react'

function Banner({ id, title, dark, children }) {
  return (
    <div
      className={`relative flex min-h-[280px] flex-col justify-center overflow-hidden px-8 py-12 md:px-16 ${
        dark ? 'bg-ssa-dark' : 'bg-ssa-green'
      }`}
    >
      {children}
      <div className="relative z-10 max-w-sm">
        <div className="flex items-start gap-1">
          <h3 className="font-heading text-3xl font-bold text-white md:text-4xl">{title}</h3>
          <span className="mt-1 size-2 rounded-full bg-white" />
        </div>
        <p className="mt-4 leading-relaxed text-white/80">
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
        </p>
        <a
          href={`#${id}`}
          className="mt-6 inline-flex items-center gap-3 text-sm font-medium text-white"
        >
          Read More
          <ArrowRight className="size-4" />
        </a>
      </div>
    </div>
  )
}

export default function CoachesEvents() {
  return (
    <section id="events" className="grid md:grid-cols-2">
      <Banner id="coaches" title="Our Coaches" dark>
        <img
          src="/coaches-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
      </Banner>
      <Banner id="events" title="Events" />
    </section>
  )
}
