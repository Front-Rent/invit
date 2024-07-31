// src/MagneticButton.js
import React, { useRef, useEffect } from "react";
import "./GravitationButton.scss";

const GravitationButton = ({ text }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      const distanceX = e.clientX - rect.left - rect.width / 2;
      const distanceY = e.clientY - rect.top - rect.height / 2;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      if (distance < 130) {
        button.style.transform = `translate(${distanceX * 0.2}px, ${
          distanceY * 0.2
        }px)`;
        button.style.boxShadow = `${distanceX * 0.2}px ${
          distanceY * 0.2
        }px 20px rgba(0, 0, 0, 0.2)`;
      } else {
        button.style.transform = "translate(0, 0)";
        button.style.boxShadow = "none";
      }
    };

    const handleMouseLeave = () => {
      button.style.transform = "translate(0, 0)";
      button.style.boxShadow = "none";
    };

    document.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <button ref={buttonRef} className="gravitation-button">
      {text}
    </button>
  );
};

export default GravitationButton;
