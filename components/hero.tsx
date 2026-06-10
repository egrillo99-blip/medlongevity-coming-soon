'use client'

import Image from 'next/image'
import { ArrowRight, FlaskConical } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage, Sci } from '@/lib/i18n'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      <div className="absolute inset-0 -z-0">
        <Image
          src="/hero-network.png"
          alt=""
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-28">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent">
            <FlaskConical className="size-3.5" />
            {t.hero.badge}
          </span>

          <h1 className="mt-6 text-balance font-heading text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/75">
            <Sci>{t.hero.subtitle}</Sci>
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a href="#contact">
                {t.hero.ctaPrimary}
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href="#model">{t.hero.ctaSecondary}</a>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-8">
            {t.hero.stats.map((item) => (
              <div key={item.label}>
                <dt className="font-heading text-2xl font-bold text-accent">
                  {item.stat}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-primary-foreground/65">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-2xl border border-primary-foreground/15 shadow-2xl">
            <Image
              src="/celegans-micro.png"
              alt="Fluorescence microscopy view of Caenorhabditis elegans used in longevity assays"
              width={640}
              height={720}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-5">
              <p className="text-sm font-medium text-primary-foreground">
                <Sci>{t.hero.caption}</Sci>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
