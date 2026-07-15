import { FlipWords } from "./FlipWords.jsx"
import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"

const HeroText = () => {
  const { t } = useLanguage();

  return (
    <div className="z-10 flex flex-col min-h-screen text-center md:text-left justify-start md:justify-center pt-52 md:pt-0">
      <div className="flex flex-col c-space">
        {/* Desktop View */}
        <div className="hidden md:flex flex-col space-y-4">
          <motion.h1
            className="text-6xl font-medium"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t.hero.greeting}
          </motion.h1>

          <motion.p
            className="text-7xl font-medium text-neutral-300"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t.hero.taglineDesktop.split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <FlipWords key={t.hero.roles.join()} words={t.hero.roles} className="text-4xl font-bold text-white" />
          </motion.div>
        </div>

        {/* Mobile View */}
        <div className="flex flex-col items-center text-center px-4 space-y-6 md:hidden">
          <motion.p
            className="text-4xl font-medium"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t.hero.greeting}
          </motion.p>

          <motion.p
            className="text-4xl font-black text-neutral-300 leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t.hero.taglineMobile.split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <FlipWords key={t.hero.roles.join()} words={t.hero.roles} className="text-2xl font-bold text-white" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HeroText
