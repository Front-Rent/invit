import { useRef } from "react";

import name from "../../../../assets/images/WeddingImages/WeddingExample2Images/name.png";

import "./SecondWeddingExampleMainGlxavor.scss";

export const scrollToBottom = () => {
  const section = document.querySelector("#mainGlxavor");
  section.scrollIntoView({ behavior: "smooth", block: "end" });
};

const SecondWeddingExampleMainGlxavor = () => {
  const sectionRef = useRef(null);

  return (
    <section
      className="second-wedding-example-main-glxavor"
      id="mainGlxavor"
      ref={sectionRef}
    >
      <div className="second-wedding-example-main-glxavor-snow"></div>
      <div className="second-wedding-example-main-glxavor-animation">
        <div className="second-wedding-example-main-glxavor-animation-txt">
          <img src={name} alt="Wedding name" />
          <h3>28 Հունվար 2025</h3>
          <h1>Հիշեք այս օրը</h1>
        </div>
      </div>
    </section>
  );
};

export default SecondWeddingExampleMainGlxavor;
