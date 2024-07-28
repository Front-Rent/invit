import harsaniq1 from "../../../assets/images/wedding2.jpg";
import atamhatik from "../../../assets/images/atamhatik.png";
import mankakan from "../../../assets/images/children.jpg";
import cnund from "../../../assets/images/birthday.jpg";
import zang from "../../../assets/images/verjin zang.png";
import harsaniq2 from "../../../assets/images/harsaniq2.jpg";

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
