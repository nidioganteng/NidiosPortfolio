import { useRef } from "react"
import Card from "../components/Card"
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Framework } from "../components/Framework";
import { asset } from "../utils/assets";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const grid2Container = useRef();
  const { t } = useLanguage();

  return (
    <section id='about' className="c-space section-spacing">
      <h2 className="text-heading">{t.about.title}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src={asset("assets/coding-pov.webp")}
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            loading="lazy"
            width="1328"
            height="813"
          />
          <div className="z-10">
            <p className="headtext">{t.about.bio.name}</p>
            <p className="subtext">{t.about.bio.description}</p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div ref={grid2Container} className="flex items-center justify-center h-full">
            <p className="flex items-end text-5xl text-gray-500">{t.about.codeCraft}</p>
            <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="REACT" containerRef={grid2Container} />
            <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="JAVA SCRIPT" containerRef={grid2Container} />
            <Card style={{ rotate: "90deg", bottom: "30%", left: "70%" }} text="PYTHON" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} text="UI/UX" containerRef={grid2Container} />
            <Card style={{ rotate: "20deg", top: "10%", left: "38%" }} text="CSS" containerRef={grid2Container} />
            <Card style={{ rotate: "30deg", top: "70%", left: "70%" }} image={asset("assets/logos/linkidin.webp")} link="https://www.linkedin.com/in/nidio-tilman-b666a7377/" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "70%", left: "25%" }} image={asset("assets/logos/github.webp")} link="https://github.com/nidioganteng" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "5%", left: "10%" }} image={asset("assets/logos/Instagram.webp")} link="https://www.instagram.com/kezarstorski/" containerRef={grid2Container} />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">{t.about.timezone.title}</p>
            <p className="subtext">{t.about.timezone.description}</p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="grid-special-color grid-4">
            <div className="flex flex-col items-center justify-center gap-4 size-full">
              <p className="text-center headtext">{t.about.cta}</p>
              <CopyEmailButton />
            </div>
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">{t.about.tools.title}</p>
            <p className="subtext">{t.about.tools.description}</p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Framework />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
