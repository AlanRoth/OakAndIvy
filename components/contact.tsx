'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRef } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formRef.current) return

    const formData = new FormData(formRef.current)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
        formRef.current.reset()
      } else {
        console.error(result)
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-olive">
            Get in touch
          </p>
          <h2 className="font-serif text-3xl font-semibold text-primary text-balance md:text-4xl">
            Let&apos;s find the right care for your family
          </h2>
          <p className="leading-relaxed text-muted-foreground text-pretty">
            Tell us a little about your family and what you&apos;re looking
            for. We&apos;ll get back to you within one business day to arrange
            a free, no-obligation consultation.
          </p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary">
                <Phone className="h-4 w-4 text-primary-foreground" aria-hidden="true" />
              </span>
              <a href="tel:+15551234567" className="text-sm font-medium text-foreground hover:text-accent">
                (555) 123-4567
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary">
                <Mail className="h-4 w-4 text-primary-foreground" aria-hidden="true" />
              </span>
              <a
                href="mailto:hello@oakandivychildcare.com"
                className="text-sm font-medium text-foreground hover:text-accent"
              >
                hello@oakandivychildcare.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary">
                <MapPin className="h-4 w-4 text-primary-foreground" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-foreground">
                Serving families across the greater metro area
              </span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl bg-card p-6 md:p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 py-10 text-center">
              <h3 className="font-serif text-2xl font-semibold text-primary">
                Thank you!
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We&apos;ve received your message and will be in touch within
                one business day.
              </p>
            </div>
          ) : (
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="flex flex-col gap-4"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="access_key" value="f5292234-2edd-48f1-aa6b-10a76d298139"/>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring"
                    placeholder="Jane Smith"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="care-type" className="text-sm font-medium text-foreground">
                  Type of care
                </label>
                <select
                  id="care-type"
                  name="care-type"
                  className="h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-ring"
                  defaultValue="full-time"
                >
                  <option value="full-time">Full-time nanny care</option>
                  <option value="part-time">Part-time / after school</option>
                  <option value="occasional">Evening &amp; weekend sitting</option>
                  <option value="newborn">Newborn &amp; infant support</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Tell us about your family
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring"
                  placeholder="Ages of your children, your schedule, and anything else we should know"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
