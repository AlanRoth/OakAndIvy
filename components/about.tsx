import { CheckCircle2 } from 'lucide-react'

const values = [
  'Every caregiver is interviewed in person, reference-checked, and DBS certified',
  'Paediatric first aid trained, with ongoing professional development',
  'Play-based learning inspired by nature and the outdoors',
  'Clear communication with daily updates for parents',
]

const stats = [
  { value: '10+', label: 'Years of experience' },
  { value: '150+', label: 'Happy families' },
  { value: '100%', label: 'Vetted caregivers' },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="order-2 overflow-hidden rounded-2xl md:order-1">
          <img
            src="/images/about-outdoors.png"
            alt="A nanny and two children collecting leaves under an oak tree in a sunny park"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="order-1 flex flex-col gap-6 md:order-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-olive">
            About us
          </p>
          <h2 className="font-serif text-3xl font-semibold text-primary text-balance md:text-4xl">
            Rooted in trust, growing with your family
          </h2>
          <p className="leading-relaxed text-muted-foreground text-pretty">
            Oak &amp; Ivy Childcare was founded on a simple belief: children
            thrive when they feel safe, seen, and supported. Our small team of
            professional nannies brings warmth, patience, and genuine joy to
            every family we serve.
          </p>
          <ul className="flex flex-col gap-3">
            {values.map((value) => (
              <li key={value} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-foreground">{value}</span>
              </li>
            ))}
          </ul>
          <dl className="mt-2 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-muted p-4 text-center">
                <dt className="order-2 text-xs leading-snug text-muted-foreground">
                  {stat.label}
                </dt>
                <dd className="font-serif text-2xl font-semibold text-plum">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
