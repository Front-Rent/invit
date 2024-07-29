import React, { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen, resetForm } from "../../../../../store/formslice/formSlice";
import EsHamadzaynEmForm from "./esHamadzaynEmForm/EsHamadzaynEmForm";
import "./EsHamadzaynEm.scss";

const EsHamadzaynEm = () => {
  const dispatch = useDispatch();
  const { isOpen, error, success } = useSelector((state) => state.form);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(200px)",
    config: { duration: 800 },
  });

  const handleHidden = () => {
    dispatch(setIsOpen(false));
  };

  useEffect(() => {
    dispatch(resetForm());
  }, [dispatch]);

  return (
    <animated.section className="es-hamadzayn-em" style={props} ref={ref}>
      <div
        className="envelope-container"
        id="esHamadzaynEm"
        style={{ display: isOpen ? "flex" : "none" }}
      >
        <p>
          Խնդրում ենք ձեր պատասխանը տալ ոչ ուշ, քան 04/12/2022, այն կարևոր է
          նստատեղերի աղյուսակը կազմելուհամար։ Շնորհակալություն!
        </p>

        <div className="envelope">
          <animated.div
            className="envelope-flap"
            style={{
              transform: inView ? "rotateX(180deg)" : "rotateX(0deg)",
              transition: "transform 0.8s ease-out",
            }}
          />
          <div className="envelope-body">
            <animated.div
              className="paper"
              style={{
                transform: inView ? "translateY(0%)" : "translateY(100%)",
                opacity: inView ? 1 : 0,
                transition: "transform 1s ease-out, opacity 0.8s ease-out",
              }}
            >
              <EsHamadzaynEmForm handleHidden={handleHidden} />
            </animated.div>
          </div>
        </div>
      </div>

      <p style={{ display: isOpen ? "none" : "block" }}>
        Ձեր տվյալները արդեն ուղարկվել են, շնորհակալություն:
      </p>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
    </animated.section>
  );
};

export default EsHamadzaynEm;
