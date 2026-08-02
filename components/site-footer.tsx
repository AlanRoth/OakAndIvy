import { Leaf } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-plum py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 md:flex-row md:justify-between md:px-6">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent">
            <Leaf className="h-4 w-4 text-accent-foreground" aria-hidden="true" />
          </span>
          <span className="font-serif text-lg font-semibold text-plum-foreground">
            Oak &amp; Ivy Childcare
          </span>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <li>
              <a href="#services" className="text-sm text-plum-foreground/80 hover:text-plum-foreground">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="text-sm text-plum-foreground/80 hover:text-plum-foreground">
                About
              </a>
            </li>
            <li>
              <a href="#testimonials" className="text-sm text-plum-foreground/80 hover:text-plum-foreground">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sm text-plum-foreground/80 hover:text-plum-foreground">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <p className="text-xs text-plum-foreground/70">
          &copy; {new Date().getFullYear()}{' '}Oak &amp; Ivy Childcare. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
