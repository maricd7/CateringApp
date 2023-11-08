import React from "react";
import aboutImage from "../images/about-image.png";
import { Icon } from "@iconify/react";
import { TextAbout } from "./TextAbout";
import { CtaButton } from "../common";
function AboutContainer() {
  return (
    <div className="flex flex-col items-center mr-24 justify-between mt-24 relative">
      <div className="max-w-2xl gap-6 flex flex-col mx-48">
        <span className="text-gray-400 font-bold text-xl">ABOUT US</span>
        <h1 className="text-6xl font-bold text-blackTxt">
          What is <span className="text-primCol">special</span> <br />
          about us?
        </h1>
        <TextAbout/>
        <a className="w-full" href="/"><CtaButton text='Go back to homepage.' /></a>
      </div>
      {/* <img className="max-w-4xl" src={aboutImage} />  */}
    </div>
  );
}

export default AboutContainer;
