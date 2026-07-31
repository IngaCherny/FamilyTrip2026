export interface Phrase {
  /** Meaning in English. */
  en: string;
  /** Meaning in Hebrew. */
  he: string;
  de: string;
  it: string;
}

export interface PhraseGroup {
  group: string;
  groupHe: string;
  emoji: string;
  items: Phrase[];
}

/** A small, kid-friendly phrasebook for the German (Austria/South Tyrol) and Italian legs. */
export const PHRASES: PhraseGroup[] = [
  {
    group: "The basics",
    groupHe: "בסיסי",
    emoji: "👋",
    items: [
      { en: "Hello (Austria)", he: "שלום (אוסטריה)", de: "Grüß Gott", it: "Ciao" },
      { en: "Hi / bye (casual)", he: "היי / ביי", de: "Hallo / Servus", it: "Ciao" },
      { en: "Good morning", he: "בוקר טוב", de: "Guten Morgen", it: "Buongiorno" },
      { en: "Please", he: "בבקשה", de: "Bitte", it: "Per favore" },
      { en: "Thank you", he: "תודה", de: "Danke", it: "Grazie" },
      { en: "Yes / No", he: "כן / לא", de: "Ja / Nein", it: "Sì / No" },
      { en: "Excuse me", he: "סליחה", de: "Entschuldigung", it: "Scusi" },
      { en: "Do you speak English?", he: "אתם מדברים אנגלית?", de: "Sprechen Sie Englisch?", it: "Parla inglese?" },
    ],
  },
  {
    group: "Food & drink",
    groupHe: "אוכל ושתייה",
    emoji: "🥨",
    items: [
      { en: "A table for five, please", he: "שולחן לחמישה, בבקשה", de: "Einen Tisch für fünf, bitte", it: "Un tavolo per cinque, per favore" },
      { en: "The menu, please", he: "התפריט, בבקשה", de: "Die Speisekarte, bitte", it: "Il menù, per favore" },
      { en: "Water (still / sparkling)", he: "מים (רגילים / מוגזים)", de: "Wasser (still / mit Kohlensäure)", it: "Acqua (naturale / frizzante)" },
      { en: "An ice cream, please", he: "גלידה, בבקשה", de: "Ein Eis, bitte", it: "Un gelato, per favore" },
      { en: "The bill, please", he: "החשבון, בבקשה", de: "Die Rechnung, bitte", it: "Il conto, per favore" },
      { en: "It was delicious!", he: "היה טעים!", de: "Es war köstlich!", it: "Era delizioso!" },
    ],
  },
  {
    group: "With the kids",
    groupHe: "עם הילדים",
    emoji: "🧒",
    items: [
      { en: "Where is the playground?", he: "איפה הגן שעשועים?", de: "Wo ist der Spielplatz?", it: "Dov'è il parco giochi?" },
      { en: "Where is the toilet?", he: "איפה השירותים?", de: "Wo ist die Toilette?", it: "Dov'è il bagno?" },
      { en: "Do you have a high chair?", he: "יש לכם כיסא תינוק?", de: "Haben Sie einen Hochstuhl?", it: "Avete un seggiolone?" },
      { en: "Is it suitable for children?", he: "זה מתאים לילדים?", de: "Ist das für Kinder geeignet?", it: "È adatto ai bambini?" },
      { en: "We need a stroller ramp", he: "אנחנו צריכים גישה לעגלה", de: "Wir brauchen einen Zugang für den Kinderwagen", it: "Ci serve un accesso per il passeggino" },
    ],
  },
  {
    group: "Out & about",
    groupHe: "בחוץ",
    emoji: "🧭",
    items: [
      { en: "Where is…?", he: "איפה…?", de: "Wo ist…?", it: "Dov'è…?" },
      { en: "How much is it?", he: "כמה זה עולה?", de: "Wie viel kostet das?", it: "Quanto costa?" },
      { en: "Two adults, three children", he: "שני מבוגרים, שלושה ילדים", de: "Zwei Erwachsene, drei Kinder", it: "Due adulti, tre bambini" },
      { en: "Is the cable car open?", he: "הרכבל פתוח?", de: "Ist die Seilbahn geöffnet?", it: "La funivia è aperta?" },
      { en: "When does it close?", he: "מתי זה נסגר?", de: "Wann schließt es?", it: "Quando chiude?" },
    ],
  },
  {
    group: "If you need help",
    groupHe: "אם צריך עזרה",
    emoji: "🆘",
    items: [
      { en: "Can you help me?", he: "אפשר עזרה?", de: "Können Sie mir helfen?", it: "Può aiutarmi?" },
      { en: "Call a doctor, please", he: "תקראו לרופא, בבקשה", de: "Rufen Sie einen Arzt, bitte", it: "Chiami un medico, per favore" },
      { en: "Where is the pharmacy?", he: "איפה בית המרקחת?", de: "Wo ist die Apotheke?", it: "Dov'è la farmacia?" },
      { en: "Emergency (everywhere): 112", he: "חירום (בכל מקום): 112", de: "Notruf: 112", it: "Emergenze: 112" },
    ],
  },
];
