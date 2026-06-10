'use client'

import { Microscope, Scale, ShieldCheck } from 'lucide-react'
import { useLanguage, Sci } from '@/lib/i18n'

const icons = [Microscope, Scale, ShieldCheck]

export function ValueProp() {
  const { t } = useLanguage()

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            {t.value.eyebrow}
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {t.value.title}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.value.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.value.points.map((point, i) => {
            const Icon = icons[i]
            return (
              <div
                key={point.title}
                className="rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-lg"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold text-primary">
                  {point.title}
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  <Sci>{point.body}</Sci>
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
