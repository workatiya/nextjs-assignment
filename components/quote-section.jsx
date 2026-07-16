export default function QuoteSection() {
  return (
    <section className="bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Quote */}
        <blockquote className="max-w-5xl font-heading text-3xl font-bold leading-tight text-foreground md:text-5xl">
          " We have created an environment ideal for building craft. Our goal
          is to be recognized as the best tennis performance centre in the
          world. "
        </blockquote>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-border" />

        {/* Author */}
        <div className="mt-8">
          <p className="font-heading text-2xl font-semibold text-foreground">
            John Doe
          </p>
          <p className="mt-1 text-lg text-muted-foreground">
            Chairman
          </p>
        </div>
      </div>
    </section>
  )
}