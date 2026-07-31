export interface QuizQuestion {
  q: string;
  options: string[];
  /** Index into options of the correct answer. */
  answer: number;
  /** A fun fact revealed after answering. */
  fact: string;
  emoji: string;
}

/** A light, kid-friendly quiz about the places on the trip. */
export const QUIZ: QuizQuestion[] = [
  {
    emoji: "🧊",
    q: "Ötzi the Iceman was found frozen in the Alps. How old is he?",
    options: ["About 500 years", "About 5,300 years", "About 100 years"],
    answer: 1,
    fact: "Ötzi lived around 3,300 BC — over 5,300 years ago! You can meet a copy of him at Ötzi-Dorf.",
  },
  {
    emoji: "🦕",
    q: "Triassic Park sits on a mountain that was once…",
    options: ["A coral reef under the sea", "A volcano", "A desert"],
    answer: 0,
    fact: "The Steinplatte was a tropical coral reef about 200 million years ago. Now it's a dinosaur park in the sky!",
  },
  {
    emoji: "💧",
    q: "The Stuibenfall is Tyrol's biggest what?",
    options: ["Lake", "Waterfall", "Cave"],
    answer: 1,
    fact: "It's the largest waterfall in the Ötztal, dropping about 159 metres. A stairway with 700+ steps climbs beside it.",
  },
  {
    emoji: "🏰",
    q: "What is the Gilfenklamm gorge near Sterzing made of?",
    options: ["White marble", "Black lava", "Red brick"],
    answer: 0,
    fact: "It's the only gorge in the world carved through pure white marble — the rock almost glows.",
  },
  {
    emoji: "🚡",
    q: "How do you get up to the Fichtenschloss spruce castle on the Rosenalm?",
    options: ["A rocket", "A gondola (cable car)", "A submarine"],
    answer: 1,
    fact: "You ride the Rosenalmbahn gondola up the mountain, then the giant wooden castle is right at the top.",
  },
  {
    emoji: "🍎",
    q: "South Tyrol's Val Venosta / Puster valleys are famous for growing…",
    options: ["Bananas", "Apples", "Pineapples"],
    answer: 1,
    fact: "South Tyrol grows about 10% of all of Europe's apples — that's why there's a whole Apple Trail to walk!",
  },
  {
    emoji: "🏔️",
    q: "The pale, jagged mountains of South Tyrol are called the…",
    options: ["Dolomites", "Himalayas", "Andes"],
    answer: 0,
    fact: "The Dolomites are a UNESCO World Heritage site and turn pink at sunset — locals call it 'enrosadira'.",
  },
  {
    emoji: "🗣️",
    q: "In South Tyrol, most people speak two languages. Which two?",
    options: ["German & Italian", "French & Spanish", "English & Greek"],
    answer: 0,
    fact: "South Tyrol is in Italy but most people speak German too — signs are in both languages everywhere.",
  },
  {
    emoji: "🚨",
    q: "Which emergency number works in Austria, Italy AND Germany?",
    options: ["911", "112", "999"],
    answer: 1,
    fact: "112 reaches emergency services across the whole of Europe. Good to remember on the trip!",
  },
];
