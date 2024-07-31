import { useSpring, animated } from "@react-spring/web";
import { useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import {
  updateTimer,
  resetTimer,
} from "../../../../../store/timerSlice/timerSlice";
import "./SecondWeddingExampleMainHethashvark.scss";

const SecondWeddingExampleMainHethashvark = () => {
  const dispatch = useDispatch();
  const intervalRef = useRef(null);

  const { days, hours, minutes, seconds } = useSelector((state) => state.timer);

  const startTimer = useCallback(() => {
    const countdownDate = new Date("January 28, 2025 00:00:00").getTime();

    intervalRef.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(intervalRef.current);
        dispatch(resetTimer());
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        dispatch(
          updateTimer({
            days: days.toString().padStart(2, "0"),
            hours: hours.toString().padStart(2, "0"),
            minutes: minutes.toString().padStart(2, "0"),
            seconds: seconds.toString().padStart(2, "0"),
          })
        );
      }
    }, 1000);
  }, [dispatch]);

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startTimer]);

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
    <>
      <section className="second-wedding-example" id="hethashvark">
        <h2>Հանկարծ չմոռանաք!!</h2>
        <animated.div className="countdown-container" style={props} ref={ref}>
          <div className="countdown-item">
            <p className="countdown-value">{days}</p>
            <span className="countdown-label">days</span>
          </div>
          <div className="countdown-item">
            <p className="countdown-value">{hours}</p>
            <span className="countdown-label">hours</span>
          </div>
          <div className="countdown-item">
            <p className="countdown-value">{minutes}</p>
            <span className="countdown-label">minutes</span>
          </div>
          <div className="countdown-item">
            <p className="countdown-value">{seconds}</p>
            <span className="countdown-label">seconds</span>
          </div>
        </animated.div>
        <h2 className="second-wedding-example__closing">մինչև ամուսնանանք!</h2>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default SecondWeddingExampleMainHethashvark;
