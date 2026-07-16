import { Play } from 'lucide-react'

const facilities = [
  {
    title: 'Tennis',
    img: '/facility-tennis.png',
    tags: ['9 Clay Courts', '4 Hard Courts'],
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    title: 'Accommodation',
    img: '/facility-accommodation.png',
    tags: ['5 Star Hotel'],
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    title: 'Fitness',
    img: '/facility-fitness.png',
    tags: ['Gym', 'Fitness Room'],
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    title: 'Recovery',
    img: '/facility-recovery.png',
    tags: ['Spa', 'Pool', 'Massage'],
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
]

function FacilityCard({ item }) {
  return (
    <div>
      <div className="group relative h-[260px] overflow-hidden rounded-xl">        
        <img
          src={item.img || "/placeholder.svg"}
          alt={item.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/20">
          <span className="flex size-12 items-center justify-center rounded-full bg-white text-foreground transition-transform group-hover:scale-110">
            <Play className="size-5 translate-x-0.5 fill-current" />
          </span>
        </div>
      </div>
      <h3 className="mt-5 font-heading text-2xl font-bold text-white">{item.title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-ssa-green px-3 py-1 text-xs font-medium text-primary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white/70">{item.text}</p>
    </div>
  )
}
export default function Facilities() {
  return (
    <section id="facilities" className="bg-white pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-start gap-1">
          <h2 className="font-heading text-3xl font-bold text-black md:text-4xl">
            Facilities
          </h2>
          <span className="mt-1.5 size-2 rounded-full bg-ssa-green" />
        </div>
        <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
        </p>
      </div>

    <div className="mt-10 bg-[#2F5E37] py-20">
  <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-16 px-6 md:grid-cols-3">
    {/* Row 1 */}
    <div>
      <FacilityCard item={facilities[0]} />
    </div>

    <div>
      <FacilityCard item={facilities[1]} />
    </div>

    <div className="hidden md:block"></div>

    {/* Row 2 */}
    <div className="hidden md:block"></div>

    <div>
      <FacilityCard item={facilities[2]} />
    </div>

    <div>
      <FacilityCard item={facilities[3]} />
    </div>
  </div>
</div>
    </section>
  )
}
