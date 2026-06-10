'use client'

import { useState } from 'react'
import { CheckCircle2, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/i18n'

export function ContactForm() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const f = t.contact.fields

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            {t.contact.eyebrow}
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-primary-foreground/75">
            {t.contact.subtitle}
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-3.5">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary-foreground/10 text-accent">
                <Mail className="size-5" />
              </span>
              <div>
                <p className="text-sm text-primary-foreground/60">
                  {t.contact.emailLabel}
                </p>
                <p className="font-medium">hello@medlongevity.bio</p>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary-foreground/10 text-accent">
                <MapPin className="size-5" />
              </span>
              <div>
                <p className="text-sm text-primary-foreground/60">
                  {t.contact.labLabel}
                </p>
                <p className="font-medium">{t.contact.labValue}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 sm:p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <CheckCircle2 className="size-12 text-accent" />
              <h3 className="mt-4 font-heading text-xl font-semibold">
                {t.contact.successTitle}
              </h3>
              <p className="mt-2 max-w-sm text-primary-foreground/70">
                {t.contact.successBody}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label={f.name} htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className={inputClass}
                  />
                </Field>
                <Field label={f.org} htmlFor="org">
                  <input
                    id="org"
                    name="org"
                    type="text"
                    required
                    autoComplete="organization"
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field label={f.orgType} htmlFor="orgType">
                <select
                  id="orgType"
                  name="orgType"
                  required
                  defaultValue=""
                  className={`${inputClass} appearance-none`}
                >
                  <option value="" disabled>
                    {f.orgTypePlaceholder}
                  </option>
                  <option value="company" className="text-primary">
                    {f.orgCompany}
                  </option>
                  <option value="research" className="text-primary">
                    {f.orgResearch}
                  </option>
                </select>
              </Field>

              <Field label={f.email} htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputClass}
                />
              </Field>

              <Field label={f.sector} htmlFor="sector">
                <select
                  id="sector"
                  name="sector"
                  required
                  defaultValue=""
                  className={`${inputClass} appearance-none`}
                >
                  <option value="" disabled>
                    {f.sectorPlaceholder}
                  </option>
                  {t.contact.sectorOptions.map((s) => (
                    <option key={s} value={s} className="text-primary">
                      {s}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label={f.message} htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className={`${inputClass} resize-none`}
                />
              </Field>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {t.contact.submit}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

const inputClass =
  'w-full rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 px-3.5 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent'

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-primary-foreground/85"
      >
        {label}
      </label>
      {children}
    </div>
  )
}
