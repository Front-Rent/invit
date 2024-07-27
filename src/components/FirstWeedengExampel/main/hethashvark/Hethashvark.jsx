import { useEffect, useRef, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

import {
  updateTimer,
  resetTimer,
} from "../../../../store/timerSlice/timerSlice";

import "./Hethashvark.scss";

const Hethashvark = () => {
  const dispatch = useDispatch();
  const intervalRef = useRef(null);

  const { days, hours, minutes, seconds } = useSelector((state) => state.timer);

  // Использование useCallback для мемоизации функции
  const startTimer = useCallback(() => {
    const countdownDate = new Date("May 30 2025 00:00:00").getTime();

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
      clearInterval(intervalRef.current);
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
    <section id="hethasvark" className="hethashvark">
      <div className="hethashvark-header">
        <h2>Հետհաշվարկ</h2>
        <p>Մինչև հարսանիք մնացել է․․․</p>
      </div>
      <animated.div className="hethashvark-base" style={props} ref={ref}>
        <div className="hethashvark-base-days base">
          <p>{days}</p>
          <span>
            <small>days</small>
          </span>
        </div>
        <div className="hethashvark-base-hours base">
          <p>{hours}</p>
          <span>
            <small>hours</small>
          </span>
        </div>
        <div className="hethashvark-base-minutes base">
          <p>{minutes}</p>
          <span>
            <small>minutes</small>
          </span>
        </div>
        <div className="hethashvark-base-seconds base">
          <p>{seconds}</p>
          <span>
            <small>seconds</small>
          </span>
        </div>
      </animated.div>
      <div className="hethashvark-placeholder">
        <p>Խնդրում ենք էջի ներքևի հատվածում լրացրեք ձեր տվյալները</p>
      </div>
    </section>
  );
};

export default Hethashvark;
