import { Sun, Moon, CalendarDays, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Sun,
    title: 'Full-Time Nanny Care',
    description:
      'Consistent weekday care with a dedicated nanny who becomes a trusted part of your family routine, from breakfast to bedtime stories.',
  },
  {
    icon: CalendarDays,
    title: 'Part-Time & After School',
    description:
      'Flexible mornings, afternoons, or school pick-ups. Homework help, healthy snacks, and enriching activities until you get home.',
  },
  {
    icon: Moon,
    title: 'Evening & Weekend Sitting',
    description:
      'Date nights, events, and weekend plans covered. Reliable occasional care from sitters your children already know and love.',
  },
  {
    icon: Sparkles,
    title: 'Newborn & Infant Support',
    description:
      'Specialist caregivers experienced with newborns, offering gentle routines, feeding support, and peace of mind for new parents.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-primary py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            What we offer
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-primary-foreground text-balance md:text-4xl">
            Care shaped around your family
          </h2>
          <p className="mt-4 leading-relaxed text-primary-foreground/80 text-pretty">
            Every family is different. We match you with caregivers who fit
            your schedule, your values, and your children&apos;s needs.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col gap-4 rounded-xl bg-card p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent">
                <service.icon className="h-5 w-5 text-accent-foreground" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-xl font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
