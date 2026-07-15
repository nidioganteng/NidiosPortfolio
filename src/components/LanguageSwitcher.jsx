import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

const languages = [
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "id", label: "ID", flag: "🇮🇩" },
];

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const current = languages.find((l) => l.code === lang);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-1.5 hover:opacity-70 transition-opacity cursor-pointer"
      >
        <span className="text-lg leading-none">{current.flag}</span>
        <span className="text-sm font-semibold text-neutral-300">{current.label}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-28 rounded-xl border border-white/10 bg-navy shadow-xl overflow-hidden z-50"
          >
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => { setLang(l.code); setIsOpen(false); }}
                className={`flex items-center gap-3 w-full px-4 py-3 text-sm transition-colors cursor-pointer hover:bg-white/10 ${
                  lang === l.code ? "text-white font-semibold" : "text-neutral-400"
                }`}
              >
                <span className="text-lg leading-none">{l.flag}</span>
                <span>{l.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
