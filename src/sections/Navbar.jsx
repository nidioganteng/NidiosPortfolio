import React from 'react'
import { useState } from "react";
import { motion } from "motion/react";
import { asset } from "../utils/assets";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";

function Navigation({ t }) {
  return (
    <ul className="nav-ul">
      <li className="nav-li"><a className="nav-link" href="#home">{t.nav.home}</a></li>
      <li className="nav-li"><a className="nav-link" href="#about">{t.nav.about}</a></li>
      <li className="nav-li"><a className="nav-link" href="#projects">{t.nav.projects}</a></li>
      <li className="nav-li"><a className="nav-link" href="#contact">{t.nav.contact}</a></li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a href="/" className="text-xl font-bold transition-colors text-neutral-300 hover:text-white">
            Nidio's Portfolio
          </a>
          <div className="flex items-center gap-2 sm:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex cursor-pointer text-neutral-300 hover:text-white focus:outline-none"
            >
              <img
                src={isOpen ? asset("assets/close.svg") : asset("assets/menu.svg")}
                className="w-6 h-6"
                alt="toggle"
                width="24"
                height="24"
              />
            </button>
          </div>
          <nav className="hidden sm:flex items-center gap-6">
            <Navigation t={t} />
            <LanguageSwitcher />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 2, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation t={t} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
