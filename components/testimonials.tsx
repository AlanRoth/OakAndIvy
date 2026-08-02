import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna. Aliqua enim.',
    name: 'Sarah M.',
    detail: 'Mum of two, full-time care',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore. Magna elit.',
    name: 'James & Priya T.',
    detail: 'Parents of a toddler',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore. Magna aliqua si.',
    name: 'Emily R.',
    detail: 'New mum, infant support',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-muted py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-olive">
            Testimonials
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-primary text-balance md:text-4xl">
            Loved by families like yours
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col gap-4 rounded-xl bg-card p-6"
            >
              <div className="flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-card-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto">
                <p className="font-semibold text-plum">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
