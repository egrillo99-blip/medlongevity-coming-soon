'use client'

import Image from 'next/image'
import { Activity, Brain, ShieldHalf, Timer } from 'lucide-react'
import { useLanguage, Sci } from '@/lib/i18n'

const icons = [Timer, Brain, ShieldHalf, Activity]

export function Methodology() {
  const { t } = useLanguage()

  return (
    <section id="model" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
              <Image
                src="/lab-diagram.png"
                alt="Laboratory culture plates used for Caenorhabditis elegans longevity assays"
                width={680}
                height={520}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 max-w-[15rem] rounded-xl border border-border bg-card p-4 shadow-lg sm:right-6">
              <p className="font-heading text-3xl font-bold text-accent">
                ~70%
              </p>
              <p className="mt-1 text-sm leading-snug text-muted-foreground">
                <Sci>{t.methodology.statBody}</Sci>
              </p>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              {t.methodology.eyebrow}
            </span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              <Sci>{t.methodology.title}</Sci>
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              <Sci>{t.methodology.body}</Sci>
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {t.methodology.capabilities.map((cap, i) => {
                const Icon = icons[i]
                return (
                  <div key={cap.title} className="flex gap-3.5">
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-primary">
                        {cap.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {cap.body}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
