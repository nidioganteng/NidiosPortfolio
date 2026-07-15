import { mySocials } from "../constants";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-10 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>{t.footer.terms}</p>
        <p>|</p>
        <p>{t.footer.privacy}</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index}>
            <img src={social.icon} className="w-5 h-5" alt={social.name} loading="lazy" width="24" height="24" />
          </a>
        ))}
      </div>
      <p>{t.footer.copyright}</p>
    </section>
  );
};

export default Footer;
