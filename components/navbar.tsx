'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SiteLogo } from '@/components/site-logo'
import { useLanguage } from '@/lib/i18n'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  const navLinks = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.model, href: '#model' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.network, href: '#network' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" aria-label="MedLongevity Biotech home">
          <SiteLogo />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangToggle lang={lang} setLang={setLang} />
          <div className="hidden md:block">
            <Button asChild className="rounded-full">
              <a href="#contact">{t.nav.contact}</a>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-md text-primary md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-2 rounded-full">
              <a href="#contact" onClick={() => setOpen(false)}>
                {t.nav.contact}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

function LangToggle({
  lang,
  setLang,
}: {
  lang: 'it' | 'en'
  setLang: (l: 'it' | 'en') => void
}) {
  return (
    <div
      className="inline-flex items-center rounded-full border border-border bg-secondary p-0.5"
      role="group"
      aria-label="Language switcher"
    >
      {(['it', 'en'] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
            lang === l
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-primary'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
