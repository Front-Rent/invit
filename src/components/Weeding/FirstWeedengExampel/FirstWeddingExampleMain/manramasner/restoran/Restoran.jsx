import RestoranMap from "./restoranMap/RestoranMap";

import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

import Astfyan from "../../../../../assets/images/Astafyan.jpg";

import "./Restoran.scss";

const Restoran = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-200px)",
    config: { duration: 600 },
  });

  return (
    <animated.section ref={ref} style={props}>
      <div className="restoran">
        <div className="restoran-img">
          <img src={Astfyan} alt="Սուրբ Սարքիս Եկեղեցի" />
        </div>
        <RestoranMap className="restoran-map" />
      </div>
    </animated.section>
  );
};

export default Restoran;
