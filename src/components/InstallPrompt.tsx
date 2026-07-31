import { useEffect, useState } from "react";
import { Download, X, Share } from "lucide-react";
import { useLang } from "../lib/i18n";

const DISMISS_KEY = "alpine2026.installDismissed";

interface BIPEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallPrompt() {
  const { t } = useLang();
  const [deferred, setDeferred] = useState<BIPEvent | null>(null);
  const [show, setShow] = useState(false);
  const [iosHint, setIosHint] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(DISMISS_KEY)) return;
    } catch {
      /* ignore */
    }
    // Already installed → nothing to prompt.
    const standalone =
      window.matchMedia?.("(display-mode: standalone)").matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;
    if (standalone) return;

    const isIOS = /iphone|ipad|ipod/i.test(window.navigator.userAgent);
    if (isIOS) {
      setIosHint(true);
      setShow(true);
      return;
    }

    const onBIP = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BIPEvent);
      setShow(true);
    };
    window.addEventListener("beforeinstallprompt", onBIP);
    return () => window.removeEventListener("beforeinstallprompt", onBIP);
  }, []);

  const dismiss = () => {
    setShow(false);
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  const install = async () => {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice;
    dismiss();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-3 bottom-24 z-50 md:inset-x-auto md:right-4 md:bottom-4 md:max-w-sm">
      <div className="glass flex items-start gap-3 rounded-2xl p-3.5">
        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-glacier-600 text-white">
          <Download size={18} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold text-stone-900">{t("install.title")}</p>
          <p className="mt-0.5 text-xs text-stone-600">{t("install.body")}</p>
          {iosHint ? (
            <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-glacier-700">
              <Share size={14} /> {t("install.ios")}
            </p>
          ) : (
            <button
              onClick={install}
              className="tap mt-2 rounded-lg bg-glacier-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-glacier-700"
            >
              {t("install.button")}
            </button>
          )}
        </div>
        <button onClick={dismiss} aria-label={t("common.close")} className="tap -mt-1 -me-1 shrink-0 text-stone-400 hover:text-stone-600">
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
