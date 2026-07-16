import SectionHeading from './section-heading'

const programs = [
  { title: 'Academy', tagline: 'Live and train with us', img: '/aerial-courts.png' },
  { title: 'Camps', tagline: 'Train like a pro with us', img: '/program-camps.png' },
  { title: 'Performance', tagline: 'Elevate your game with us', img: '/program-performance.png' },
]

export default function Programs() {
  return (
    <section id="programs" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Programs"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          action={
            <a
              href="#register"
              className="inline-block rounded-full bg-ssa-green px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Register Now
            </a>
          }
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {programs.map((p) => (
            <a
              key={p.title}
              href="#register"
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
            >
              <img
                src={p.img || "/placeholder.svg"}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                <h3 className="font-heading text-2xl font-bold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-white/85">{p.tagline}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
