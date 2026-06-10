export function SiteLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className="size-9 shrink-0"
      >
        {/* outer circle */}
        <circle
          cx="32"
          cy="32"
          r="30"
          stroke="var(--color-primary)"
          strokeWidth="2.5"
        />
        {/* olive tree canopy */}
        <g
          stroke="var(--color-accent)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <path d="M32 14c-5 0-9 3.6-9 8.2 0 1.2.3 2.3.8 3.3-2.4.6-4.2 2.7-4.2 5.2 0 3 2.6 5.5 5.8 5.5h13.2c3.2 0 5.8-2.5 5.8-5.5 0-2.5-1.8-4.6-4.2-5.2.5-1 .8-2.1.8-3.3C41 17.6 37 14 32 14Z" />
          {/* olive leaves accents */}
          <path d="M26 23.5c1.6-.7 3.4-.9 5-.4M38 23.5c-1.6-.7-3.4-.9-5-.4" />
        </g>
        {/* trunk */}
        <path
          d="M32 37v9"
          stroke="var(--color-primary)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {/* two sinusoidal waves = C. elegans */}
        <g
          stroke="var(--color-accent)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        >
          <path d="M19 49c2.2-3 4.3-3 6.5 0s4.3 3 6.5 0" />
          <path d="M32 52c2.2-3 4.3-3 6.5 0s4.3 3 6.5 0" />
        </g>
      </svg>
      <span className="font-heading text-lg font-bold leading-none tracking-tight text-primary">
        MedLongevity
        <span className="block text-[0.6rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Biotech
        </span>
      </span>
    </div>
  )
}
