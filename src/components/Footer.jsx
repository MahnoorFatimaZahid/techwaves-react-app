import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section className="!px-0 !py-0">
      <div className="container flex justify-center sm:justify-between items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          {" "}
          Techwaves © {new Date().getFullYear()}. All rights reserved.
        </p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              href={item.url}
              key={item.id}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} alt={item.title} width={18} height={18} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
