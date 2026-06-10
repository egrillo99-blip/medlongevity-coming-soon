'use client'

import { Wheat, Pill, FlaskRound, Sparkles, Leaf, GraduationCap } from 'lucide-react'
import { useLanguage, Sci } from '@/lib/i18n'

const icons = [Wheat, Pill, FlaskRound, Sparkles, Leaf, GraduationCap]

export function Sectors() {
  const { t } = useLanguage()

  return (
    <section id="services" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            {t.sectors.eyebrow}
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {t.sectors.title}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.sectors.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.sectors.items.map((sector, i) => {
            const Icon = icons[i]
            const isAcademic = i === t.sectors.items.length - 1
            return (
              <div
                key={sector.name}
                className={`group rounded-2xl border p-7 transition-colors ${
                  isAcademic
                    ? 'border-accent/50 bg-accent/5 hover:border-accent'
                    : 'border-border bg-card hover:border-accent/60'
                }`}
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold text-primary">
                  {sector.name}
                </h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  <Sci>{sector.body}</Sci>
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
