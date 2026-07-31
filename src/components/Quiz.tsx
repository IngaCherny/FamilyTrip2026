import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, RotateCcw } from "lucide-react";
import Section from "./Section";
import { QUIZ } from "../data/quiz";

export default function Quiz() {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = QUIZ[i];
  const last = i === QUIZ.length - 1;

  const pick = (idx: number) => {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === q.answer) setScore((s) => s + 1);
  };
  const next = () => {
    if (last) {
      setDone(true);
      return;
    }
    setI((n) => n + 1);
    setPicked(null);
  };
  const restart = () => {
    setI(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  };

  return (
    <Section id="quiz" kicker="For the kids" title="Trip Quiz" intro="Nine quick questions about the places we're visiting. How many can you get?">
      <div className="mx-auto max-w-2xl">
        {done ? (
          <div className="card-paper p-8 text-center">
            <p className="text-5xl">{score >= 7 ? "🏆" : score >= 4 ? "🎉" : "🙂"}</p>
            <h3 className="mt-3 font-serif text-2xl font-bold text-stone-900">
              {score} / {QUIZ.length}
            </h3>
            <p className="mt-1 text-stone-600">
              {score >= 7 ? "Alpine expert!" : score >= 4 ? "Nicely done!" : "Great try — play again!"}
            </p>
            <button
              onClick={restart}
              className="tap mt-5 inline-flex items-center gap-2 rounded-xl bg-glacier-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-glacier-700"
            >
              <RotateCcw size={16} /> Play again
            </button>
          </div>
        ) : (
          <div className="card-paper p-5 sm:p-6">
            <div className="mb-3 flex items-center justify-between text-xs font-semibold text-stone-400">
              <span>
                Question {i + 1} of {QUIZ.length}
              </span>
              <span>Score {score}</span>
            </div>
            <div className="mb-1 h-1.5 overflow-hidden rounded-full bg-stone-100">
              <div className="h-full rounded-full bg-glacier-500 transition-all" style={{ width: `${((i + 1) / QUIZ.length) * 100}%` }} />
            </div>

            <h3 className="mt-4 font-serif text-xl font-bold leading-snug text-stone-900">
              <span className="me-2">{q.emoji}</span>
              {q.q}
            </h3>

            <div className="mt-4 space-y-2">
              {q.options.map((opt, idx) => {
                const isAnswer = idx === q.answer;
                const isPicked = idx === picked;
                const state =
                  picked === null
                    ? "idle"
                    : isAnswer
                    ? "right"
                    : isPicked
                    ? "wrong"
                    : "dim";
                return (
                  <button
                    key={opt}
                    onClick={() => pick(idx)}
                    disabled={picked !== null}
                    className={`tap flex w-full items-center justify-between gap-2 rounded-xl px-4 py-3 text-start text-sm font-medium ring-1 transition-colors ${
                      state === "idle"
                        ? "bg-white text-stone-700 ring-stone-200 hover:bg-stone-50"
                        : state === "right"
                        ? "bg-meadow-100 text-meadow-700 ring-meadow-300"
                        : state === "wrong"
                        ? "bg-sunset-200/60 text-stone-800 ring-sunset-300"
                        : "bg-white text-stone-400 ring-stone-100"
                    }`}
                  >
                    <span>{opt}</span>
                    {state === "right" && <Check size={16} className="shrink-0" />}
                    {state === "wrong" && <X size={16} className="shrink-0" />}
                  </button>
                );
              })}
            </div>

            <AnimatePresence initial={false}>
              {picked !== null && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 rounded-xl bg-glacier-50 p-3 text-sm text-glacier-800 ring-1 ring-glacier-100">
                    <span className="font-semibold">{picked === q.answer ? "Correct! " : "Good try. "}</span>
                    {q.fact}
                  </p>
                  <button
                    onClick={next}
                    className="tap mt-4 w-full rounded-xl bg-glacier-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-glacier-700"
                  >
                    {last ? "See my score" : "Next question"}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </Section>
  );
}
