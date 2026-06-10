'use client'

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  Fragment,
} from 'react'

export type Lang = 'it' | 'en'

type Dict = typeof translations

const LanguageContext = createContext<{
  lang: Lang
  setLang: (l: Lang) => void
  t: Dict['en']
}>({
  lang: 'en',
  setLang: () => {},
  t: {} as Dict['en'],
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('it')
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

/**
 * Renders a string while strictly italicizing every occurrence of the
 * scientific names "Caenorhabditis elegans" and "C. elegans".
 */
export function Sci({ children }: { children: string }) {
  const pattern = /(Caenorhabditis elegans|C\. elegans)/g
  const parts = children.split(pattern)
  return (
    <>
      {parts.map((part, i) =>
        pattern.test(part) ? (
          <em key={i}>{part}</em>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  )
}

export const translations = {
  it: {
    nav: {
      services: 'Servizi',
      model: 'Il Modello',
      about: 'Chi Siamo',
      network: 'Network',
      contact: 'Contattaci',
    },
    hero: {
      badge: 'Validazione Scientifica Indipendente',
      title:
        'Colmiamo il divario tra la ricerca accademica e il mondo produttivo',
      subtitle:
        'Offriamo validazione scientifica indipendente per aziende agro-alimentari, nutraceutiche, farmaceutiche e cosmetiche — e collaboriamo con i gruppi di ricerca accademici per trasformare metodologie rigorose in prove credibili sulle proprietà di longevità e healthy-aging dei vostri prodotti.',
      ctaPrimary: 'Richiedi una Consulenza',
      ctaSecondary: 'Esplora il Modello',
      stats: [
        { stat: '5', label: 'Settori serviti' },
        { stat: '100%', label: 'Risultati indipendenti' },
        { stat: 'UMG', label: 'Laboratori universitari' },
      ],
      caption:
        'Caenorhabditis elegans — il nostro modello per una scienza della longevità misurabile.',
    },
    value: {
      eyebrow: "L'Innovazione",
      title:
        'Scienza accademica di alto livello, al servizio del mercato e della ricerca',
      subtitle:
        'Colmiamo il divario tra la ricerca accademica e il mondo produttivo — aiutando aziende e gruppi di ricerca a ottenere prove scientifiche realmente indipendenti sulle proprietà di longevità e healthy-aging.',
      points: [
        {
          title: 'Metodologia di Livello Accademico',
          body: 'Trasferiamo protocolli di ricerca universitari validati direttamente in ambito applicativo, conferendo ai vostri prodotti il rigore della scienza peer-reviewed.',
        },
        {
          title: 'Dalla Ricerca al Mercato',
          body: 'Molte aziende non dispongono delle competenze biologiche interne per sostanziare i claim sulla salute. Diventiamo il vostro braccio scientifico indipendente, dal disegno dello studio alla reportistica.',
        },
        {
          title: 'Prove Indipendenti e Credibili',
          body: 'La validazione di terza parte costruisce fiducia con enti regolatori, distributori, consumatori e revisori scientifici — sostenendo i claim anti-aging con dati riproducibili.',
        },
      ],
    },
    methodology: {
      eyebrow: 'La Nostra Metodologia',
      title: 'Il modello animale gold-standard: Caenorhabditis elegans',
      body: 'Il nematode microscopico C. elegans è uno dei modelli più potenti ed eticamente sostenibili nella ricerca sull’invecchiamento. Con un sistema nervoso completamente mappato, un corpo trasparente e una genetica profondamente conservata, ci permette di osservare direttamente la biologia dell’invecchiamento — e di tradurre i risultati nella salute umana con affidabilità.',
      statBody: 'dei geni umani associati a malattie ha un omologo in C. elegans.',
      capabilities: [
        {
          title: 'Durata e Qualità della Vita',
          body: 'Quantifichiamo come un composto estende la sopravvivenza e ritarda il declino legato all’età lungo l’intero ciclo vitale.',
        },
        {
          title: 'Salute Neuromuscolare',
          body: 'Misuriamo mobilità, coordinazione e integrità neuronale come marcatori diretti dell’invecchiamento funzionale.',
        },
        {
          title: 'Resistenza allo Stress',
          body: 'Valutiamo la resilienza a stress ossidativi, termici e metabolici rilevanti per l’invecchiamento cellulare.',
        },
        {
          title: 'Dati Rapidi e Riproducibili',
          body: 'Un ciclo vitale breve e una biologia conservata forniscono risultati statisticamente robusti in settimane, non anni.',
        },
      ],
    },
    sectors: {
      eyebrow: 'Settori Target',
      title: 'Servizi di validazione per industria e ricerca',
      subtitle:
        'Ovunque un prodotto o un progetto faccia un claim di salute, longevità o sicurezza, forniamo la scienza indipendente per sostenerlo.',
      items: [
        {
          name: 'Agro-alimentare',
          body: 'Validazione di ingredienti funzionali e composti bioattivi in alimenti e bevande.',
        },
        {
          name: 'Nutraceutica',
          body: 'Sostanziamo i claim di integratori e formule per la longevità con dati biologici riproducibili.',
        },
        {
          name: 'Farmaceutica',
          body: 'Acceleriamo lo screening preliminare di molecole candidate per i pathway dell’invecchiamento e delle malattie.',
        },
        {
          name: 'Cosmetica',
          body: 'Evidenziamo i claim anti-aging e protettivi per attivi skincare e cosmeceutici.',
        },
        {
          name: 'Ambientale',
          body: 'Valutiamo l’impatto biologico e la sicurezza di composti ed esposizioni ambientali.',
        },
        {
          name: 'Partnership Accademica',
          body: 'Invitiamo i gruppi di ricerca a collaborare: accesso a protocolli di validazione high-throughput, validazione di ceppi custom e bandi di ricerca co-progettati.',
        },
      ],
    },
    team: {
      eyebrow: 'Il Team',
      title: 'Eccellenza scientifica alla guida',
      subtitle:
        'La nostra leadership unisce profonda esperienza di laboratorio a competenze internazionali di ricerca e strategia.',
      members: [
        {
          name: 'Prof.ssa Laura Berliocchi',
          role: 'Direzione Strategica e Scientifica',
          bio: 'Visione strategica, supervisione scientifica, nuove partnerships, partecipazione bandi finanziamento, contatto potenziali investitori.',
        },
        {
          name: 'Dott.ssa Emanuela Grillo',
          role: 'R&S — Area Operativa — Laboratorio',
          bio: 'Sviluppo sperimentale, assays e validazione protocolli su C. elegans. Gestione strumentazione, analisi e processi tecnico-scientifici.',
        },
      ],
    },
    network: {
      eyebrow: 'Network Strategico',
      title: "Radicati nell'accademia, connessi a livello internazionale",
      subtitle:
        'I nostri laboratori sono ospitati presso l’Università Magna Graecia di Catanzaro, con advisor scientifici provenienti da istituzioni di ricerca europee di primo piano.',
      partners: [
        {
          name: 'Università Magna Graecia di Catanzaro',
          short: 'UMG · Italia',
          role: 'Istituzione ospitante dei nostri laboratori di ricerca',
        },
        {
          name: 'DZNE Bonn',
          short: 'Germania',
          role: 'Advisory scientifico internazionale in neurodegenerazione',
        },
        {
          name: 'Università di Copenhagen',
          short: 'Danimarca',
          role: 'Advisory scientifico internazionale in biologia dell’invecchiamento',
        },
      ],
    },
    contact: {
      eyebrow: 'Contattaci',
      title: 'Richiedi validazione scientifica per i tuoi progetti',
      subtitle:
        'Raccontaci del tuo prodotto o della tua ricerca e dei claim da sostanziare. Il nostro team scientifico risponderà con una proposta di validazione su misura.',
      emailLabel: 'Email',
      labLabel: 'Laboratori',
      labValue: 'Università Magna Graecia, Catanzaro, Italia',
      fields: {
        name: 'Nome',
        org: 'Organizzazione',
        orgType: 'Tipo di Organizzazione',
        orgTypePlaceholder: 'Seleziona una tipologia',
        orgCompany: 'Azienda / Company',
        orgResearch: 'Ente di Ricerca - Università / Research Institute - Academy',
        email: 'Email',
        sector: 'Settore di Interesse',
        sectorPlaceholder: 'Seleziona un settore',
        message: 'Messaggio',
      },
      sectorOptions: [
        'Agro-alimentare',
        'Nutraceutica',
        'Farmaceutica',
        'Cosmetica',
        'Ambientale',
        'Partnership Accademica',
        'Altro',
      ],
      submit: 'Richiedi una Consulenza',
      successTitle: 'Grazie — messaggio ricevuto',
      successBody:
        'Il nostro team scientifico ti ricontatterà a breve per discutere le tue esigenze di validazione.',
    },
    footer: {
      tagline:
        'Validazione scientifica indipendente per la longevità — colmiamo il divario tra ricerca accademica e mondo produttivo con modelli Caenorhabditis elegans.',
      navigate: 'Naviga',
      legal: 'Note Legali',
      legalLinks: ['Privacy Policy', 'Note Legali', 'Termini di Servizio'],
      rights: 'Tutti i diritti riservati.',
    },
  },
  en: {
    nav: {
      services: 'Services',
      model: 'The Model',
      about: 'About Us',
      network: 'Network',
      contact: 'Contact Us',
    },
    hero: {
      badge: 'Independent Scientific Validation',
      title: 'Bridging the gap between academic research and the production world',
      subtitle:
        'We deliver independent scientific validation for agro-food, nutraceutical, pharmaceutical, and cosmetic companies — and we partner with academic research groups to turn rigorous methodology into credible proof for your health-span and anti-aging claims.',
      ctaPrimary: 'Request a Consultation',
      ctaSecondary: 'Explore the Model',
      stats: [
        { stat: '5', label: 'Industries served' },
        { stat: '100%', label: 'Independent results' },
        { stat: 'UMG', label: 'University-hosted labs' },
      ],
      caption:
        'Caenorhabditis elegans — our model for measurable longevity science.',
    },
    value: {
      eyebrow: 'The Innovation',
      title: 'Powerful academic science, delivered for industry and research',
      subtitle:
        'We bridge the gap between academic research and the production world — helping companies and research groups obtain truly independent scientific proof for their longevity and health-span claims.',
      points: [
        {
          title: 'Academic-Grade Methodology',
          body: 'We transfer validated university research protocols directly into an applied setting, giving your products the rigor of peer-reviewed science.',
        },
        {
          title: 'Closing the Research-to-Market Gap',
          body: 'Most companies lack the in-house biology to substantiate health claims. We become your independent scientific arm, from study design to reporting.',
        },
        {
          title: 'Independent, Credible Proof',
          body: 'Third-party validation builds trust with regulators, retailers, consumers, and scientific reviewers — supporting anti-aging and health-span claims with reproducible data.',
        },
      ],
    },
    methodology: {
      eyebrow: 'Our Core Methodology',
      title: 'The gold-standard animal model: Caenorhabditis elegans',
      body: 'The microscopic nematode C. elegans is one of the most powerful and ethically sound models in aging research. With a fully mapped nervous system, a transparent body, and deeply conserved genetics, it lets us observe the biology of aging directly — and translate findings to human health-span with confidence.',
      statBody: 'of human disease genes have a counterpart in C. elegans.',
      capabilities: [
        {
          title: 'Lifespan & Healthspan',
          body: 'Quantify how a compound extends survival and delays age-related decline across the full life cycle.',
        },
        {
          title: 'Neuromuscular Health',
          body: 'Measure mobility, coordination, and neuronal integrity as direct markers of functional aging.',
        },
        {
          title: 'Stress Resistance',
          body: 'Assess resilience to oxidative, thermal, and metabolic stress relevant to cellular aging.',
        },
        {
          title: 'Rapid, Reproducible Data',
          body: 'A short life cycle and conserved biology deliver statistically robust results in weeks, not years.',
        },
      ],
    },
    sectors: {
      eyebrow: 'Target Sectors',
      title: 'Validation services for industry and research',
      subtitle:
        'Wherever a product or project makes a health, longevity, or safety claim, we provide the independent science to support it.',
      items: [
        {
          name: 'Agro-food',
          body: 'Validate functional ingredients and bioactive compounds in food and beverage products.',
        },
        {
          name: 'Nutraceuticals',
          body: 'Substantiate supplement and longevity-formula claims with reproducible biological data.',
        },
        {
          name: 'Pharmaceuticals',
          body: 'Accelerate early-stage screening of candidate molecules for aging and disease pathways.',
        },
        {
          name: 'Cosmetics',
          body: 'Evidence anti-aging and protective claims for skincare and cosmeceutical actives.',
        },
        {
          name: 'Environmental',
          body: 'Assess the biological impact and safety of compounds and environmental exposures.',
        },
        {
          name: 'Academic Partnership',
          body: 'We invite research groups to collaborate: access to high-throughput validation protocols, custom strain validation, and co-designed research grants.',
        },
      ],
    },
    team: {
      eyebrow: 'The Team',
      title: 'Scientific excellence at the helm',
      subtitle:
        'Our leadership combines deep laboratory expertise with international research and strategic experience.',
      members: [
        {
          name: 'Prof. Laura Berliocchi',
          role: 'Strategic & Scientific Direction',
          bio: 'Strategic vision, scientific supervision, new partnerships, participation in funding calls, contact with potential investors.',
        },
        {
          name: 'Dr. Emanuela Grillo',
          role: 'R&D — Operations — Laboratory',
          bio: 'Experimental development, assays and validation of protocols on C. elegans. Instrumentation management, analysis, and technical-scientific processes.',
        },
      ],
    },
    network: {
      eyebrow: 'Strategic Network',
      title: 'Rooted in academia, connected internationally',
      subtitle:
        'Our laboratories are hosted within the Magna Graecia University of Catanzaro, with scientific advisors from leading European research institutions.',
      partners: [
        {
          name: 'Magna Graecia University of Catanzaro',
          short: 'UMG · Italy',
          role: 'Host institution for our research laboratories',
        },
        {
          name: 'DZNE Bonn',
          short: 'Germany',
          role: 'International scientific advisory in neurodegeneration',
        },
        {
          name: 'University of Copenhagen',
          short: 'Denmark',
          role: 'International scientific advisory in aging biology',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact Us',
      title: 'Request scientific validation for your projects',
      subtitle:
        'Tell us about your product or research and the claims you need to substantiate. Our scientific team will respond with a tailored validation proposal.',
      emailLabel: 'Email',
      labLabel: 'Laboratories',
      labValue: 'Magna Graecia University, Catanzaro, Italy',
      fields: {
        name: 'Name',
        org: 'Organization',
        orgType: 'Organization Type',
        orgTypePlaceholder: 'Select a type',
        orgCompany: 'Azienda / Company',
        orgResearch: 'Ente di Ricerca - Università / Research Institute - Academy',
        email: 'Email',
        sector: 'Sector of Interest',
        sectorPlaceholder: 'Select a sector',
        message: 'Message',
      },
      sectorOptions: [
        'Agro-food',
        'Nutraceuticals',
        'Pharmaceuticals',
        'Cosmetics',
        'Environmental',
        'Academic Partnership',
        'Other',
      ],
      submit: 'Request a Consultation',
      successTitle: 'Thank you — message received',
      successBody:
        'Our scientific team will get back to you shortly to discuss your validation needs.',
    },
    footer: {
      tagline:
        'Independent scientific validation for healthy aging — bridging academic research and the production world with Caenorhabditis elegans models.',
      navigate: 'Navigate',
      legal: 'Legal',
      legalLinks: ['Privacy Policy', 'Legal Notes', 'Terms of Service'],
      rights: 'All rights reserved.',
    },
  },
} as const
