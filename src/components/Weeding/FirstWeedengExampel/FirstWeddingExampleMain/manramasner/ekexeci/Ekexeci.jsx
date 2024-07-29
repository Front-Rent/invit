import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

import ekexeci from "../../../../../assets/images/ekexeci.jpg";
import EkexeciMap from "./ekexeciMap/EkexeciMap";

import "./Ekexeci.scss";

const Ekexeci = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(200px)",
    config: { duration: 600 },
  });
  return (
    <animated.section className="ekexeci" ref={ref} style={props}>
      <div className="ekexeci-img">
        <img src={ekexeci} alt="Սուրբ Սարքիս Եկեղեցի" />
      </div>
      <EkexeciMap className="ekexeci-map" />
    </animated.section>
  );
};

export default Ekexeci;
