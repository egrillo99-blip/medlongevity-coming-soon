'use client'

import { Building2, GraduationCap, Globe2 } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

const icons = [Building2, GraduationCap, Globe2]

export function Network() {
  const { t } = useLanguage()

  return (
    <section id="network" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            {t.network.eyebrow}
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {t.network.title}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.network.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {t.network.partners.map((p, i) => {
            const Icon = icons[i]
            return (
              <div
                key={p.name}
                className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center"
              >
                <span className="flex size-14 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                  <Icon className="size-7" />
                </span>
                <p className="mt-5 font-heading text-lg font-semibold leading-tight text-primary">
                  {p.name}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent">
                  {p.short}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.role}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
