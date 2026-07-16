import { ArrowRight } from 'lucide-react'
import SectionHeading from './section-heading'

const features = [
  'First venue in the world',
  'First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium',
  'First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location',
  'First tennis academy in the world to have capabilities to stage WTA & ATP events too',
  'First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium, 5 Star Hunter Valley resort and airport all in 500 meters radius',
  'First one stop tennis academy in Asia Pacific',
]

function FeatureList() {
  return (
    <ul className="space-y-6">
      {features.map((feature, i) => (
        <li key={i} className="flex gap-4">
          <ArrowRight className="mt-1 size-5 shrink-0 text-ssa-green" />
          <p className="leading-relaxed text-black">{feature}</p>
        </li>
      ))}
    </ul>
  )
}

export default function KeyFeatures() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Key Features"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          action={
            <a
              href="#register"
              className="inline-block rounded-full bg-ssa-green px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Register Now
            </a>
          }
        />

        <div className="mt-14 grid gap-x-16 gap-y-2 md:grid-cols-2">
          <FeatureList />
          <div className="hidden md:block">
            <FeatureList />
          </div>
        </div>
      </div>
    </section>
  )
}
