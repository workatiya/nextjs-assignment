'use client'

import { useState } from 'react'

const tabs = ['About Us', 'Coaches', 'Vision', 'Mission']

const stats = [
  { value: '20', label: 'courts' },
  { value: '12', label: 'coaches' },
  { value: '17', label: 'years' },
  { value: '10', label: 'clubs' },
]

const content = {
  'About Us':
    'To be the first venue in the world to have 60 multi surface courts at one location and establish first one stop tennis academy in the Asia Pacific producing grand slam champions.',
  Coaches:
    'A world-class coaching team of 12 professionals dedicated to developing players at every level, from first-timers to grand slam aspirants.',
  Vision:
    'To create an environment ideal for building craft and to be recognized as the best tennis performance centre in the world.',
  Mission:
    'Adopt, nurture and deliver champions through elite facilities, proven programs and a genuine passion for the game of tennis.',
}

const images = [
  { src: '/about-highfive.png', alt: 'Two players celebrating on a clay court', span: 'row-span-2 col-span-2' },
  { src: '/about-kids.png', alt: 'Young players at the net', span: '' },
  { src: '/about-action.png', alt: 'Male player in action', span: '' },
  { src: '/about-female.png', alt: 'Female player ready to hit', span: 'col-span-2' },
]

export default function AboutSection() {
  const [active, setActive] = useState('About Us')

  return (
    <section id="about" className="relative overflow-hidden  bg-white py-20">
      {/* Big A watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-24 select-none font-heading text-[22rem] font-extrabold leading-none text-ssa-green/10"
      >
        A
      </span>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="font-heading text-2xl font-medium leading-snug text-black text-balance md:text-3xl">
          To be the first venue in the world to have{' '}
          <span className="text-ssa-green">60 multi surface courts</span> at one location
          and establish first one stop tennis academy in the Asia Pacific producing grand
          slam champions.
        </h2>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              className={`relative pb-2 font-heading text-lg font-medium transition-colors ${
                active === tab ? 'text-black' : 'text-muted-foreground hover:text-black'
              }`}
            >
              {tab}
              {active === tab && (
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-ssa-green" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-14 grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <div className="mb-4 flex items-start gap-1">
            <h3 className="font-heading text-3xl font-bold text-black">{active}</h3>
            <span className="mt-1 size-2 rounded-full bg-ssa-green" />
          </div>
          <p className="max-w-md leading-relaxed text-muted-foreground">{content[active]}</p>

          <div className="mt-10 grid grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-3xl font-bold text-ssa-green">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          <a
            href="#register"
            className="mt-10 inline-block rounded-full bg-ssa-green px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Read More
          </a>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          {images.map((img) => (
            <div key={img.src} className={`overflow-hidden rounded-xl ${img.span}`}>
              <img
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
