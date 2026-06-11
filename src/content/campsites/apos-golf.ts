import type { CampsiteConfig } from "../types";

/**
 * APOS Golfacademy & Shop — Wohnmobil-Stellplatz, Velden am Wörthersee, Kärnten.
 * Alle Texte/Fakten belegt aus apos-golf.com (Stand-Scrape 2026-06, Google-Translate-Scrape).
 * Bilder = ausschließlich eigene, provenienzgebundene APOS-Bilder in /public/campsites/apos-golf/.
 * Pillar 3 nutzt bewusst die echte Alpe-Adria-Golf-Card-Grafik (apos-golf.com/golfplaetze, APOS ist
 * Partner) + belegten Text — das ursprüngliche „golf-kurse“-Bild war ein generisches Stockfoto
 * (springende Leute, mediterranes Resort) und wurde ersetzt; es gibt kein großes, echtes Kursfoto
 * in der Library (das einzige echte Gruppen-/Platzfoto ist das Hero).
 *
 * EHRLICH: Dies ist KEIN klassischer Campingplatz, sondern ein Wohnmobil-STELLPLATZ an einer
 * Golfanlage (max. 24 h, First-Come, keine Reservierung, Barzahlung). Durchgehend als
 * "Wohnmobil-Stellplatz" geframt. KEIN `see`-Feld — der Platz liegt an der Klagenfurter Straße,
 * NICHT am Ufer (3 Gehmin. zum Strandbad Wrann, 5 Min. ins Zentrum). Preise real aus /stellplatz.
 * Keine eigenen Unterkünfte (Apartments sind extern, sunandsee.at → bewusst nicht geführt) →
 * `mobilheime` weggelassen. Zu wenige verschiedene Eigenfotos → Galerie ehrlich leer.
 */
const IMG = "/campsites/apos-golf";

export const aposGolf: CampsiteConfig = {
  name: "APOS Golfacademy & Shop",
  shortName: "APOS",
  slug: "apos-golf",
  ort: "Velden am Wörthersee",
  region: "Kärnten",
  brandKind: "Wohnmobil-Stellplatz",
  regionLong: "Velden am Wörthersee · Kärnten · Österreich",

  claim: "Dein Wohnmobil-Stellplatz an der Golfanlage in Velden am Wörthersee",
  claimEmphasis: "an der Golfanlage",
  intro:
    "Geräumiger Wohnmobil-Stellplatz direkt an der Golfacademy von Armin Posratschnig — fünf Gehminuten ins Zentrum von Velden, drei Minuten zum Strandbad Wrann. Die Nutzung der Golfanlage inklusive Leihschläger und Übungsbällen ist im Preis schon dabei.",

  logo: { src: `${IMG}/apos-logo.webp`, alt: "APOS Golf Shop & Academy Logo" },

  statement: {
    text: "Mit dem Wohnmobil anreisen, parken und gleich aufs Grün — Golfen ist hier schon im Stellplatzpreis dabei.",
    emphasis: "schon im Stellplatzpreis dabei",
  },

  pillars: [
    {
      title: "Golf inklusive",
      text: "Im Stellplatzpreis enthalten: Nutzung der Golfanlage mit 1 Leihschläger und 24 Übungsbällen pro Person und Tag — geübt wird auf einer Driving Range, die abends sogar beleuchtet ist.",
      image: { src: `${IMG}/golf-lektion.webp`, alt: "Golferin auf der Driving Range der APOS Golfacademy in Velden am Wörthersee" },
    },
    {
      title: "Persönlich geführt seit 1993",
      text: "Gegründet von Armin Posratschnig, PGA Qualified Head Professional — über dreißig Jahre Golf-Leidenschaft fließen in Unterricht und Betrieb der Anlage. Der Gründer ist täglich vor Ort.",
      image: { src: `${IMG}/armin-pro.webp`, alt: "Armin Posratschnig, PGA Head Professional und Gründer der APOS Golfacademy" },
    },
    {
      title: "Partner der Alpe-Adria-Golf Card",
      text: "APOS ist Partner der Alpe-Adria-Golf Card: Mit ihr spielst du flexibel auf rund 20 Plätzen der Region — vom Einsteiger- bis zum Meisterplatz, wann und so oft du möchtest. Nicht genutzte Runden bleiben bis zum Ende der Folgesaison gültig.",
      image: { src: `${IMG}/golf-card.webp`, alt: "Alpe-Adria-Golf Card mit Golfer auf einem Platz am Wörthersee" },
    },
  ],

  usps: [
    "Golfnutzung inklusive",
    "1 Leihschläger & 24 Bälle/Person/Tag",
    "Driving Range – abends beleuchtet",
    "5 Min. ins Zentrum von Velden",
    "3 Min. zum Strandbad Wrann",
    "Strom, Frischwasser & V+E am Platz",
    "Gratis WC, Wasser & WLAN",
    "Hunde willkommen",
  ],

  trust: {
    heading: "Worauf du dich am APOS-Stellplatz verlassen kannst",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführt von Armin Posratschnig, PGA Qualified Head Professional und Gründer der APOS Golfacademy (seit 1993). Eine gepflegte Golfanlage mit Profi-Shop und Custom Fit, dazu ein geräumiger Wohnmobil-Stellplatz mitten in Velden — mit fairen, transparenten Preisen und Golfnutzung inklusive.",
  },

  // Keine eindeutige Auszeichnung auf der Quelle (PGA-Qualifikation & ÖGV sind Qualifikationen,
  // keine Awards) → ehrlich leer (Band zeigt nur USP-Pills).
  awards: [],

  // Quelle nennt keine festen Saisonmonate, aber "Anreise rund um die Uhr / jederzeit möglich"
  // + Frost-Hinweis → ganzjährig abgeleitet (Winterpause beim Kunden gegenchecken — siehe REPORT).
  saison: { von: "Jänner", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/hero-golfanlage.webp`, alt: "Golfgruppe auf der Anlage der APOS Golfacademy vor der Bergkulisse bei Velden am Wörthersee" },
  },

  camping: {
    heading: "Der Wohnmobil-Stellplatz",
    intro:
      "Eine großzügige Stellfläche von 6 × 10 Metern für maximal 24 Stunden, direkt an der Golfanlage. Eine Reservierung ist nicht möglich — Anreise rund um die Uhr nach dem First-Come-Prinzip.",
    features: [
      {
        title: "Anlage, Range & Versorgung",
        text: "Auf dem Gelände der Golfacademy: Driving Range, Frischwasser, Entsorgung von Grau- und Schwarzwasser, Müllplatz, Strom (€ 1/kWh) und Warmduschen (€ 2,50/3 Min) — alles direkt am Platz.",
        image: { src: `${IMG}/anlage-range.webp`, alt: "Gelände der APOS Golfacademy mit Driving Range und Versorgungsgebäude" },
      },
      {
        title: "Mitten an der Golfanlage",
        text: "Der Platz liegt direkt an der APOS Golfacademy an der Klagenfurter Straße — fünf Gehminuten ins Zentrum, drei Minuten zum Strandbad Wrann.",
        image: { src: `${IMG}/golf-zufahrt.webp`, alt: "Zufahrt zur APOS Golfacademy mit GOLF-Schild an der Klagenfurter Straße" },
      },
    ],
  },

  anreise: {
    heading: "So findest du uns",
    modes: [
      { title: "Adresse", text: "APOS Golfacademy & Shop, Klagenfurter Straße 33, 9220 Velden am Wörthersee. GPS: 46°37'13″N, 14°03'20″E." },
      { title: "Mit dem Auto", text: "Über die A2 Süd-Autobahn bis Velden, dann Richtung Ortszentrum an die Klagenfurter Straße — Anreise und Parken sind rund um die Uhr möglich." },
      { title: "Lage zu Fuß", text: "Fünf Gehminuten ins Zentrum und zu Geschäften, drei Minuten zum Strandbad Wrann, rund 0,8 km zur Seepromenade und zum Casino." },
    ],
  },

  galerie: {
    heading: "Golf, Stellplatz & Wörthersee",
    headingEmphasis: "Wörthersee",
    intro:
      "Ein paar Eindrücke von der APOS Golfacademy und dem Wohnmobil-Stellplatz in Velden am Wörthersee.",
    tag: "Velden am Wörthersee",
    // Zu wenige eindeutig belegbare, motivisch verschiedene Eigenfotos → Galerie blendet sich aus.
    images: [],
  },

  booking: {
    heading: "Stellplatz-Preise",
    intro:
      "Eine Reservierung ist nicht möglich — der Stellplatz wird nach dem First-Come-Prinzip vergeben (max. 24 Stunden, Anreise rund um die Uhr). Bei Fragen erreichst du Armin Posratschnig direkt.",
    pricesArePlaceholder: false,
    priceNote:
      "Grundpreis Wohnmobil € 25 für max. 24 h inkl. 2 Personen, € 3 je weitere Person (Kinder bis 8 frei). Zzgl. € 2,70 Ortstaxe pro Person/Nacht (Kinder bis 16 frei), Hund € 2/Tag. Extras: Strom € 1/kWh, Warmdusche € 2,50/3 Min. Wohnwagen-Gespann € 35 (€ 25 Anhänger + € 10 Zugfahrzeug). Zahlung bar.",
    highlight: {
      title: "Golf inklusive",
      text: "Im Stellplatzpreis enthalten: Nutzung der Golfanlage mit 1 Leihschläger und 24 Übungsbällen pro Person und Tag — dazu WC, Wasser und WLAN gratis.",
    },
    categories: [
      // Reale Preise aus apos-golf.com/stellplatz (Stand-Scrape 2026-06).
      { id: "wohnmobil", label: "Wohnmobil (max. 24 h)", perNight: 25, perExtraGuest: 3 },
      // Gespann € 35 = € 25 Anhänger + € 10 Zugfahrzeug (Arithmetik, offengelegt im priceNote).
      { id: "gespann", label: "Wohnwagen-Gespann", perNight: 35, perExtraGuest: 3 },
    ],
  },

  kontakt: {
    tel: "+43 664 4618281",
    telHref: "tel:+436644618281",
    mail: "office@apos-golf.com",
    facebook: "https://www.facebook.com/aposgolf",
    adresse: "Klagenfurter Straße 33 · 9220 Velden am Wörthersee · Kärnten",
    // Koordinaten explizit aus der Quelle (Street-View-Link auf apos-golf.com:
    // /maps/@46.6195288,14.0545774) — nicht erfunden.
    coords: { lat: 46.619469, lng: 14.0548 },
  },

  languages: ["DE"],

  nav: [
    {
      label: "Stellplatz",
      href: "#camping",
      children: [
        { label: "Der Stellplatz", href: "#camping" },
        { label: "Ver- & Entsorgung", href: "#camping" },
        { label: "Lage", href: "#anreise" },
      ],
    },
    {
      label: "Golf",
      href: "#booking",
      children: [
        { label: "Golf inklusive", href: "#booking" },
        { label: "Die Anlage", href: "#camping" },
        { label: "Profi-Shop & Custom Fit", href: "#camping" },
      ],
    },
    {
      label: "Preise",
      href: "#booking",
      children: [
        { label: "Stellplatz-Preise", href: "#booking" },
        { label: "Leistungen", href: "#booking" },
      ],
    },
    {
      label: "Kontakt",
      href: "#anreise",
      children: [
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default aposGolf;
