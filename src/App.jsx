import React, { useState } from "react";

const messages = [
  "ללמוד react ⚛️",
  "למצוא עבודה 💼",
  "להגדיל הכנסות🤑",
];

export default function App() {
  // מצב לשמירת השלב הנוכחי
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="steps">
      {/* כותרת השלבים */}
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      {/* הצגת ההודעה */}
      <p className="message">
        Step {step} : {messages[step - 1]}
      </p>

      {/* כפתורי ניווט */}
      <div className="buttons">
        <button
          onClick={handlePrev}
          style={{ backgroundColor: "#7350f2", color: "#fff" }}
        >
          <span>👈</span> קודם
        </button>

        <button
          onClick={handleNext}
          style={{ backgroundColor: "#7350f2", color: "#fff" }}
        >
          הבא <span>👉</span>
        </button>
      </div>
    </div>
  );
}
