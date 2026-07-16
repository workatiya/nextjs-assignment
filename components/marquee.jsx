const words = ['ADOPT', 'NURTURE', 'DELIVER']

function MarqueeGroup() {
  return (
    <div className="flex shrink-0 items-center">
      {Array.from({ length: 6 }).map((_, i) => {
        const word = words[i % words.length]
        const outlined = i % 2 === 1
        return (
          <div key={i} className="flex items-center">
            <span
              className={`font-heading text-4xl font-extrabold tracking-tight md:text-6xl ${
                outlined ? 'text-outline-green' : 'text-ssa-green'
              }`}
            >
              {word}
            </span>
            <span className="mx-8 text-ssa-green">&middot;</span>
          </div>
        )
      })}
    </div>
  )
}

export default function Marquee() {
  return (
    <section className="overflow-hidden bg-white py-10" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </section>
  )
}
