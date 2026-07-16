import SectionHeading from './section-heading'

const people = [
  { name: 'Craig Tiley', role: 'CEO Tennis Australia & Australian Open', img: '/pro-1.png' },
  { name: 'Stephen Farrow', role: 'Director - Tournament, Players & International Relations', img: '/pro-2.png' },
  { name: 'Cameron Pearson', role: 'Head Major Events - Tennis Australia', img: '/pro-3.png' },
]

export default function Professionals() {
  return (
    <section id="coaches" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Meet our professionals"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          action={
            <a
              href="#coaches"
              className="inline-block rounded-full bg-ssa-green px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              View All
            </a>
          }
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {people.map((p) => (
            <div key={p.name}>
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img
                  src={p.img || "/placeholder.svg"}
                  alt={p.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                {p.name}
              </h3>
              <p className="mt-1 text-sm italic text-muted-foreground">{p.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
