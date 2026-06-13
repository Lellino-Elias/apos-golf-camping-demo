import type { CampsiteConfig } from "../types";

const IMG = "/campsites/apos-golf";

const aposGolf: CampsiteConfig = {
  name: "APOS Golfacademy & Shop",
  shortName: "APOS",
  slug: "apos-golf",
  ort: "Velden am Wörthersee",
  region: "Kärnten",
  brandKind: "Wohnmobil-Stellplatz",
  regionLong: "Wörthersee · Kärnten · Österreich",

  heroVariant: "center",

  claim: "Mit dem Wohnmobil mitten in Velden am Wörthersee",
  claimEmphasis: "mitten in Velden",
  emailDetail: "euer Stellplatz direkt neben der Driving Range",
  intro:
    "Großzügiger Wohnmobil-Stellplatz direkt an der APOS Golfacademy — fünf Gehminuten ins Ortszentrum und zum Wörthersee, voll erschlossen, und die Golfanlage nutzt du gleich mit.",

  logo: { src: `${IMG}/logo.png`, alt: "APOS Golf Shop & Academy Logo" },

  statement: {
    text: "Hier stellst du nicht nur ab — die Golfanlage liegt direkt vor dem Vorzelt.",
    emphasis: "vor dem Vorzelt",
  },

  // Image-arm: nur ehrlich belegte Fotos vorhanden → BrandStatement bleibt leer (blendet aus).
  pillars: [],

  usps: [
    "Golfanlage inklusive",
    "6 × 10 m Stellplatz",
    "3 Minuten zum Strand",
    "Strom, Wasser & WLAN",
    "Komplette Ver- & Entsorgung",
    "Hunde willkommen",
  ],

  trust: {
    heading: "Hier parkst du nicht nur, du spielst",
    headingEmphasis: "du spielst",
    intro:
      "An der APOS Golfacademy stellst du dein Wohnmobil zentral in Velden ab — voll erschlossen, fünf Minuten von Ortskern und Seebad, und mit freier Nutzung der Golfanlage gleich nebenan.",
  },

  awards: [],

  hero: {
    aerial: {
      src: `${IMG}/hero-stellplatz.webp`,
      alt: "Gruppe von Golferinnen und Golfern auf der Anlage der APOS Golfacademy in Velden, mit Alpenhügeln im Hintergrund",
    },
  },

  camping: {
    heading: "Der Stellplatz an der Golfacademy",
    intro:
      "Ein großzügiger, voll erschlossener Platz für dein Wohnmobil — mit allem für einen unkomplizierten Stopp und der Golfanlage direkt vor der Tür.",
    features: [
      {
        title: "Golfanlage inklusive",
        text:
          "Die Nutzung der Anlage ist im Preis dabei — inklusive einem Leihschläger und 24 Übungsbällen pro Person und Tag. Einfach kommen und abschlagen.",
        image: {
          src: `${IMG}/golf-anlage.webp`,
          alt: "Einfahrt zur Driving Range der APOS Golfacademy in Velden mit APOS-Bannern und gepflegtem Übungsgelände im Hintergrund",
        },
      },
      {
        title: "Range rund um die Uhr",
        text:
          "Die Driving Range ist rund um die Uhr geöffnet — mit Beleuchtung auch am Abend. Zusätzliche Übungsrunden gibt es am Automaten für € 2,50 / 24 Bälle, zu jeder Tages- und Nachtzeit.",
        image: {
          src: `${IMG}/lage-velden.webp`,
          alt: "Svetlana Hermann auf der Driving Range der APOS Golfacademy in Velden mit Bergpanorama",
        },
      },
      {
        title: "Persönlich betreut",
        text:
          "Armin Posratschnig und sein Team sind vor Ort — Check-in im Shop, Zahlung in bar, und bei Fragen ist immer jemand für dich da.",
        image: {
          src: `${IMG}/armin-posratschnig.webp`,
          alt: "Armin Posratschnig, Gastgeber der APOS Golfacademy",
        },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg nach Velden",
    modes: [
      {
        title: "Mit dem Wohnmobil",
        text:
          "Über die A2 Südautobahn bis Abfahrt Velden, dann der Klagenfurter Straße folgen. Anfahrt und Einfahrt sind rund um die Uhr möglich — eine Reservierung ist nicht nötig.",
      },
      {
        title: "Mit der Bahn",
        text:
          "Bahnhof Velden am Wörthersee, von dort sind es nur wenige Minuten zum Platz. Ortskern, Strand und Seepromenade liegen rund fünf Gehminuten entfernt.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Platz",
    headingEmphasis: "Eindrücke",
    intro: "Ein paar Bilder von der Anlage und der Lage in Velden.",
    tag: "Velden am Wörthersee",
    images: [],
  },

  booking: {
    heading: "Stell dein Wohnmobil ab",
    headingEmphasis: "Wohnmobil",
    intro:
      "Keine Reservierung nötig — Anfahrt rund um die Uhr, Plätze nach dem Prinzip first come, first served. Hier siehst du, was dich erwartet.",
    pricesArePlaceholder: false,
    priceNote:
      "€ 25 Basispreis Wohnmobil inkl. 2 Personen, max. 24 h · € 3 je weitere Person · Wohnwagen-Gespann € 35 = € 25 Anhänger + € 10 Zugfahrzeug · zzgl. € 2,70 Ortstaxe/Person/Nacht · Strom € 1/kWh · Zahlung bar",
    highlight: {
      title: "Golf inklusive",
      text:
        "Nutzung der Golfanlage mit 1 Leihschläger und 24 Übungsbällen pro Person und Tag — im Stellplatz-Preis enthalten.",
    },
    categories: [
      { id: "stellplatz", label: "Wohnmobil", perNight: 25, perExtraGuest: 3 },
      { id: "gespann", label: "Wohnwagen-Gespann", perNight: 35, perExtraGuest: 3 },
    ],
  },

  kontakt: {
    tel: "+43 664 4618281",
    telHref: "tel:+436644618281",
    mail: "office@apos-golf.com",
    facebook: "https://www.facebook.com/aposgolf",
    adresse: "Klagenfurter Straße 33 · 9220 Velden am Wörthersee · Kärnten",
    coords: { lat: 46.61956, lng: 14.05424 },
  },

  languages: ["DE"],

  nav: [
    { label: "Stellplatz", href: "#camping" },
    { label: "Preise", href: "#booking" },
    { label: "Anreise & Lage", href: "#anreise" },
  ],
};

export default aposGolf;
