import { useEffect, useRef, useState } from "react";
import { Volume2, Square } from "lucide-react";

/**
 * A tiny "read aloud" button using the browser's built-in speech synthesis —
 * no API, no network, works offline. `lang` is a BCP-47 tag (de-AT, it-IT…).
 */
export default function ListenButton({
  text,
  lang = "en-GB",
  label,
  className,
}: {
  text: string;
  lang?: string;
  label?: string;
  className?: string;
}) {
  const [speaking, setSpeaking] = useState(false);
  const [supported, setSupported] = useState(true);
  const uRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    setSupported(typeof window !== "undefined" && "speechSynthesis" in window);
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, []);

  if (!supported) return null;

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const synth = window.speechSynthesis;
    if (speaking) {
      synth.cancel();
      setSpeaking(false);
      return;
    }
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = 0.95;
    const match = synth.getVoices().find((v) => v.lang.toLowerCase().startsWith(lang.slice(0, 2).toLowerCase()));
    if (match) u.voice = match;
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    uRef.current = u;
    setSpeaking(true);
    synth.speak(u);
  };

  return (
    <button
      onClick={toggle}
      aria-label={speaking ? "Stop" : label ?? "Listen"}
      className={`tap inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
        speaking ? "bg-glacier-600 text-white" : "bg-white/80 text-glacier-700 ring-1 ring-stone-200 hover:bg-white"
      } ${className ?? ""}`}
    >
      {speaking ? <Square size={12} /> : <Volume2 size={13} />}
      {label && <span>{label}</span>}
    </button>
  );
}
