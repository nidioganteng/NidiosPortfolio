import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import { asset } from "../utils/assets";
import { useLanguage } from "../context/LanguageContext";

const Project = ({ title, description, subDescription, href, image, tags }) => {
  const [isHidden, setIsHidden] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <div className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0">
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          {t.projects.readMore}
          <img src={asset("assets/arrow-right.svg")} className="w-5" loading="lazy" width="20" height="20" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
