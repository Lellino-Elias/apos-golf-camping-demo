import type { CampsiteConfig } from "../types";

/**
 * APOS Golfacademy & Shop — Wohnmobil-Stellplatz, Velden am Wörthersee, Kärnten.
 * Alle Texte/Fakten belegt aus apos-golf.com (Stand-Scrape 2026-06, Quelle war
 * per Google-Translate ins Englische übersetzt — hier ehrlich zurück ins Deutsche).
 * Bilder = ausschließlich eigene APOS-Fotos in /public/campsites/apos-golf/.
 *
 * EHRLICH:
 * - Dies ist KEIN klassischer Campingplatz, sondern ein Wohnmobil-STELLPLATZ an
 *   einer Golfanlage: max. 24 h, First-Come (keine Reservierung), Barzahlung.
 * - NICHT "am See": der Platz liegt an der Klagenfurter Straße; Strandbad Wrann
 *   ~3 Gehminuten, Zentrum ~5 Min, Seepromenade 0,8 km → daher KEIN `see`-Feld,
 *   nur ehrliche Gehzeiten im Text.
 * - Galerie hat zu wenige eindeutig belegbare Eigenfotos → images: [] (Sektion
 *   blendet sich ehrlich aus).
 * - Keine eindeutige Auszeichnung → awards bleibt leer (ÖGV-/PGA-Zertifizierung
 *   nur als Vertrauenstext, kein "Award").
 */
const IMG = "/campsites/apos-golf";

export const aposGolf: CampsiteConfig = {
  name: "APOS Golfacademy & Shop",
  shortName: "APOS Golf",
  slug: "apos-golf",
  ort: "Velden am Wörthersee",
  region: "Kärnten",
  brandKind: "Wohnmobil-Stellplatz",
  // Kein `see`: der Stellplatz liegt nicht am Ufer, nur wenige Gehminuten entfernt.
  regionLong: "Velden am Wörthersee · Kärnten · Österreich",

  claim: "Dein Wohnmobil-Stellplatz an der Golfanlage in Velden am Wörthersee",
  claimEmphasis: "an der Golfanlage",
  intro:
    "Stell dein Wohnmobil direkt an der APOS Golfacademy ab — fünf Gehminuten ins Zentrum von Velden, drei zum Strandbad Wrann am Wörthersee. Die Golfanlage nutzt du gleich mit.",

  logo: { src: `${IMG}/apos-logo.png`, alt: "APOS Golfacademy & Shop Logo" },

  statement: {
    text: "Bei uns parkst du nicht irgendwo — du stehst mitten in der Golfanlage, nur wenige Gehminuten von Velden und dem Wörthersee.",
    emphasis: "mitten in der Golfanlage",
  },

  pillars: [
    {
      title: "Velden & der Wörthersee",
      text: "Zentrum von Velden in 5 Gehminuten, Strandbad Wrann in 3 — Seepromenade, Casino und der türkise Wörthersee gleich um die Ecke.",
      image: { src: `${IMG}/pillar-woerthersee.webp`, alt: "Blick über Velden und den türkisen Wörthersee mit den Karawanken" },
    },
    {
      title: "Golf gleich inklusive",
      text: "Die Nutzung der Golfanlage ist im Stellplatzpreis enthalten — inkl. 1 Leihschläger und 24 Übungsbällen pro Person und Tag.",
      image: { src: `${IMG}/pillar-golf-inklusive.webp`, alt: "Golfer beim Abschlag auf der Anlage der APOS Golfacademy" },
    },
    {
      title: "Jeder ist willkommen",
      text: "Keine Mitgliedschaft nötig: Hier macht man die ersten Schritte im Golf — leger gekleidet, mit oder ohne Unterricht, Ausrüstung zum Leihen.",
      image: { src: `${IMG}/pillar-jeder-willkommen.webp`, alt: "Golfunterricht auf der Driving Range der APOS Golfacademy" },
    },
  ],

  usps: [
    "Golfanlage-Nutzung inklusive",
    "1 Leihschläger & 24 Bälle p. P./Tag",
    "Gratis WLAN, WC & Wasser",
    "Ver-/Entsorgung grau & schwarz",
    "Keine Reservierung – First-Come",
    "3 Min. zum Strandbad Wrann",
  ],

  trust: {
    heading: "Worauf du dich am APOS-Stellplatz verlassen kannst",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführt von Armin Posratschnig und seinem Team. Klare Preise, Anreise rund um die Uhr und eine ÖGV-zertifizierte Golfanlage mit PGA-Professionals gleich nebenan — ehrlich und unkompliziert. Bezahlt wird in bar.",
  },

  // Keine eindeutig belegbare Auszeichnung auf der Quelle → ehrlich leer.
  awards: [],

  // Quelle nennt keine festen Saisonmonate; "Anreise und Parken jederzeit
  // möglich" (24 h, ganzjährig) — bei Frost kein Wasser/keine Dusche (im Text/Report vermerkt).
  saison: { von: "Ganzjährig", bis: "rund um die Uhr" },

  hero: {
    aerial: {
      src: `${IMG}/hero-golfanlage.webp`,
      alt: "Golfanlage der APOS Golfacademy vor der Bergkulisse bei Velden am Wörthersee",
    },
  },

  camping: {
    heading: "Der Stellplatz",
    intro:
      "Ein großzügiger, ebener Stellplatz (6 × 10 m) direkt an der APOS Golfacademy — Anreise und Parken rund um die Uhr, ganz ohne Reservierung. Es gilt das First-Come-Prinzip, Aufenthalt bis 24 Stunden.",
    features: [
      {
        title: "Wohnmobile an der Golfanlage",
        text: "Dein Stellplatz liegt unmittelbar an der Anlage — ebener Untergrund, viel Wiese ringsum und rund um die Uhr erreichbar.",
        image: { src: `${IMG}/stellplatz-wohnmobile.webp`, alt: "Wohnmobile auf dem Stellplatz an der APOS Golfacademy" },
      },
      {
        title: "Zufahrt & First-Come",
        text: "Anreise und Parken sind jederzeit möglich — keine Reservierung, es gilt das First-Come-Prinzip. Bezahlung in bar.",
        image: { src: `${IMG}/stellplatz-zufahrt.webp`, alt: "Zufahrt zur APOS Golfacademy an der Klagenfurter Straße in Velden" },
      },
      {
        title: "Ver- & Entsorgung",
        text: "Frischwasser, Entsorgung von Grau- und Schwarzwasser, Strom (€ 1/kWh), Damen-/Herren-WC, Dusche und gratis WLAN — alles vor Ort.",
        image: { src: `${IMG}/ver-entsorgung.webp`, alt: "Hinweisschild zur Ver- und Entsorgungsstation für Wohnmobile" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Golf, Shop & Custom Fit",
    intro:
      "Bei uns ist jeder willkommen — eine Mitgliedschaft brauchst du nicht. Vom ersten Schnupperkurs bis zum lasergenauen Custom Fit: alles direkt an deinem Stellplatz.",
    items: [
      {
        title: "Custom Fit mit Flight Scope",
        text: "Jede Landeentfernung wird per Lasertechnik gemessen — für 100 % Kontrolle über dein Übungsergebnis und das passende Schlägerset.",
        image: { src: `${IMG}/custom-fit.webp`, alt: "Flight-Scope-Schlaganalyse mit Ballflugkurve auf dem Bildschirm" },
      },
      {
        title: "Profi-Golfshop & Bistro",
        text: "Der Profi-Golfshop führt Schläger, Mode und Technik von Top-Marken; nebenan lädt das Bistro mit Außenbereich zum Verweilen.",
        image: { src: `${IMG}/pro-shop.webp`, alt: "Innenraum des Profi-Golfshops der APOS Golfacademy mit Schlägern" },
      },
      {
        title: "Driving Range & Übungsgelände",
        text: "25 feste Abschlagplätze (4 überdacht), Rasenabschläge, Putting- und Pitching-Green, Bunker und Par-3 — die Range ist 24 h geöffnet, abends beleuchtet.",
        image: { src: `${IMG}/driving-range.webp`, alt: "Driving Range und Übungsgelände der APOS Golfacademy in Velden" },
      },
    ],
  },

  anreise: {
    heading: "So findest du uns",
    modes: [
      {
        title: "Mit dem Wohnmobil",
        text: "Klagenfurter Straße 33, A-9220 Velden am Wörthersee. GPS 46°37′13″N 14°03′20″E.",
      },
      {
        title: "Lage & Gehzeiten",
        text: "Zentrum 5 Minuten, Strandbad Wrann 3 Minuten, Seepromenade 0,8 km, Casino 0,8 km, Touristinfo 1 km — alles bequem zu Fuß.",
      },
      {
        title: "Anreise rund um die Uhr",
        text: "Anreise und Parken sind jederzeit möglich. Keine Reservierung — es gilt das First-Come-Prinzip, Aufenthalt bis 24 Stunden, Zahlung in bar.",
      },
    ],
  },

  // Zu wenige eindeutig belegbare Eigenfotos für das 4er-Bento → ehrlich leer,
  // die Galerie-Sektion blendet sich dadurch automatisch aus.
  galerie: {
    heading: "Eindrücke",
    headingEmphasis: "Eindrücke",
    intro: "Eindrücke vom Stellplatz und der Golfanlage in Velden am Wörthersee.",
    tag: "Velden am Wörthersee",
    images: [],
  },

  booking: {
    heading: "Stellplatz anfragen",
    intro:
      "Reservieren ist nicht nötig: Es gilt das First-Come-Prinzip, Anreise rund um die Uhr, Aufenthalt bis 24 Stunden. Schreib uns einfach bei Fragen — Armin Posratschnig meldet sich persönlich.",
    pricesArePlaceholder: false,
    priceNote:
      "Grundpreis Wohnmobil/24 h inkl. 2 Personen · € 3 je weitere Person (Kinder bis 8 J. frei) · zzgl. € 2,70 Ortstaxe p. P./Nacht (Kinder bis 16 J. frei) · Strom € 1/kWh · Dusche € 2,50/3 Min · Barzahlung · Wohnwagen-Gespann € 35 = € 25 Anhänger (am Stellplatz) + € 10 Zugfahrzeug (Parkplatz der Anlage)",
    highlight: {
      title: "Golfanlage inklusive",
      text: "Im Stellplatzpreis enthalten: Nutzung der Golfanlage inkl. 1 Leihschläger und 24 Übungsbällen pro Person und Tag.",
    },
    categories: [
      // Reale Stellplatz-Preise APOS 2026 (Quelle: apos-golf.com/stellplatz).
      // perNight = Grundpreis 24 h für 2 Personen; perExtraGuest = € 3 je weitere Person.
      { id: "wohnmobil", label: "Wohnmobil 24 h", perNight: 25, perExtraGuest: 3 },
      // Gespann = € 25 Anhänger/Stellplatz + € 10 Zugfahrzeug (Parkplatz der Anlage) = € 35.
      { id: "gespann", label: "Wohnwagen-Gespann", perNight: 35, perExtraGuest: 3 },
    ],
  },

  kontakt: {
    tel: "+43 664 4618281",
    telHref: "tel:+436644618281",
    mail: "office@apos-golf.com",
    facebook: "https://www.facebook.com/aposgolf",
    adresse: "Klagenfurter Straße 33 · 9220 Velden am Wörthersee · Kärnten",
    // Explizite Koordinaten aus der Quelle (Street-View-Link apos-golf.com).
    coords: { lat: 46.6195288, lng: 14.0545774 },
  },

  languages: ["DE"],

  nav: [
    {
      label: "Stellplatz",
      href: "#camping",
      children: [
        { label: "Der Stellplatz", href: "#camping" },
        { label: "Ver- & Entsorgung", href: "#camping" },
        { label: "Preise", href: "#booking" },
      ],
    },
    {
      label: "Golf",
      href: "#aktivitaeten",
      children: [
        { label: "Custom Fit", href: "#aktivitaeten" },
        { label: "Profi-Golfshop", href: "#aktivitaeten" },
        { label: "Driving Range", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Lage",
      href: "#anreise",
      children: [
        { label: "Velden am Wörthersee", href: "#anreise" },
        { label: "Gehzeiten", href: "#anreise" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
    {
      label: "Preise & Kontakt",
      href: "#booking",
      children: [
        { label: "Stellplatz-Preise", href: "#booking" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default aposGolf;
