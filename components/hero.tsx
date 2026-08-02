import { ShieldCheck, HeartHandshake, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

const highlights = [
  { icon: ShieldCheck, label: 'Fully vetted & DBS checked' },
  { icon: HeartHandshake, label: 'Warm, nurturing care' },
  { icon: Clock, label: 'Flexible scheduling' },
]

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-olive">
            Trusted nanny services
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-primary text-balance md:text-5xl">
            Care that helps your little ones grow strong
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Like the oak and the ivy, children flourish with steady support and
            gentle guidance. Our experienced nannies provide loving, reliable
            care in the comfort of your own home.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              render={<a href="#contact" />}
              nativeButton={false}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Book a Free Consultation
            </Button>
            <Button
              render={<a href="#services" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Explore Our Services
            </Button>
          </div>
          <ul className="mt-2 flex flex-col gap-3 sm:flex-row sm:gap-6">
            {highlights.map((item) => (
              <li key={item.label} className="flex items-center gap-2">
                <item.icon className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/images/hero-nanny.png"
            alt="A nanny reading a picture book with two young children in a cozy living room"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
