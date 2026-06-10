'use client'

import Image from 'next/image'
import { useLanguage, Sci } from '@/lib/i18n'

const images = ['/founder-laura.png', '/founder-emanuela.png']

export function Team() {
  const { t } = useLanguage()

  return (
    <section id="about" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            {t.team.eyebrow}
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {t.team.title}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.team.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
          {t.team.members.map((f, i) => (
            <div
              key={f.name}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={images[i] || '/placeholder.svg'}
                  alt={`Portrait of ${f.name}`}
                  width={520}
                  height={390}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-primary">
                  {f.name}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-accent">
                  {f.role}
                </p>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  <Sci>{f.bio}</Sci>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
