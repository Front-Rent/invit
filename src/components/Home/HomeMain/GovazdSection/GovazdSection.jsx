import { useState, useEffect } from "react";

import govazd from "../../../assets/images/HomeImages/govazd.png";
import webdesing from "../../../assets/images/HomeImages/webdesing.png";
import professional from "../../../assets/images/HomeImages/professional.png";

import FirstGovazd from "./FirstGovazd/FirstGovazd";
import SecondGovazd from "./SecondGovazd/SecondGovazd";
import ThierdGovazd from "./ThierdGovazd/ThierdGovazd";

import "./GovazdSection.scss";

const GovazdSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActive = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const images = document.querySelectorAll(".govazd-section-img img");
    images.forEach((img) => img.classList.remove("visible"));

    const currentImage = images[activeIndex];
    if (currentImage) {
      currentImage.classList.add("visible");
    }
  }, [activeIndex]);

  return (
    <section className="govazd-section">
      <div className="govazd-section-img">
        <img
          src={govazd}
          alt="Govazd"
          className={activeIndex === 0 ? "visible" : ""}
        />
        <img
          src={webdesing}
          alt="Web Design"
          className={activeIndex === 1 ? "visible" : ""}
        />
        <img
          src={professional}
          alt="Professional"
          className={activeIndex === 2 ? "visible" : ""}
        />
      </div>
      <div className="govazd-section-txt">
        <FirstGovazd
          isActive={activeIndex === 0}
          onClick={() => handleActive(0)}
        />
        <SecondGovazd
          isActive={activeIndex === 1}
          onClick={() => handleActive(1)}
        />
        <ThierdGovazd
          isActive={activeIndex === 2}
          onClick={() => handleActive(2)}
        />
      </div>
    </section>
  );
};

export default GovazdSection;
