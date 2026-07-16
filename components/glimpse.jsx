import SectionHeading from './section-heading'

export default function Glimpse() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="A Glimpse of Excellence"
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

        <div className="mt-12 grid gap-6 md:grid-cols-5">
          <div className="overflow-hidden rounded-2xl md:col-span-2">
            <img
              src="/glimpse-bw.png"
              alt="Black and white photo of a tennis player mid swing"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl md:col-span-3">
            <img
              src="/aerial-courts.png"
              alt="Aerial view of the tennis courts complex"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
