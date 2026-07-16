export default function SectionHeading({ title, description, action, className = '' }) {
  return (
    <div className={`flex flex-col gap-6 md:flex-row md:items-start md:justify-between ${className}`}>
      <div className="max-w-xl">
        <div className="flex items-start gap-1">
          <h2 className="font-heading text-3xl font-bold text-black md:text-4xl">
            {title}
          </h2>
          <span className="mt-1.5 size-2 shrink-0 rounded-full bg-ssa-green" />
        </div>
        {description && (
          <p className="mt-4 leading-relaxed text-muted-foreground">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
