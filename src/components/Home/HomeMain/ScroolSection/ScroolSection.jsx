import harsaniq1 from "../../../assets/images/HomeImages/wedding2.png";
import atamhatik from "../../../assets/images/HomeImages/atamhatik.png";
import mankakan from "../../../assets/images/HomeImages/children.png";
import cnund from "../../../assets/images/HomeImages/birthday.png";
import zang from "../../../assets/images/HomeImages/verjin zang.png";
import harsaniq2 from "../../../assets/images/HomeImages/harsaniq2.png";

import "./ScroolSection.scss";

const ScroolSection = () => {
  const images = [harsaniq1, atamhatik, mankakan, cnund, zang, harsaniq2];

  return (
    <section className="image-scroll-gallery">
      <div className="scroll-container">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`nature-${index}`} />
        ))}
        {images.map((src, index) => (
          <img
            key={index + images.length}
            src={src}
            alt={`nature-copy-${index}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ScroolSection;
