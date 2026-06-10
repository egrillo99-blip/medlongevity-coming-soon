'use client'

import { SiteLogo } from '@/components/site-logo'
import { useLanguage, Sci } from '@/lib/i18n'

export function Footer() {
  const { t } = useLanguage()

  const footerLinks = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.model, href: '#model' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.network, href: '#network' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <SiteLogo />
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
              <Sci>{t.footer.tagline}</Sci>
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <nav aria-label="Footer">
              <h3 className="text-sm font-semibold text-primary">
                {t.footer.navigate}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h3 className="text-sm font-semibold text-primary">
                {t.footer.legal}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {t.footer.legalLinks.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 MedLongevity Biotech Srls. {t.footer.rights}
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 9.5H5.67V18h2.67V9.5zM7 5.88a1.55 1.55 0 1 0 0 3.1 1.55 1.55 0 0 0 0-3.1zM18.34 18v-4.67c0-2.3-1.23-3.37-2.87-3.37-1.32 0-1.92.73-2.25 1.24V9.5h-2.67V18h2.67v-4.5c0-.94.18-1.86 1.34-1.86 1.15 0 1.16 1.08 1.16 1.92V18h2.62z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="X"
              className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
