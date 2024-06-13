import { useState } from "react";
import Timer from "./timer";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Step />
      <Timer />
    </div>
  );
}

function Step() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((currentStep) => currentStep - 1);
  }
  function handleNext() {
    if (step < 3) {
      setStep((currentStep) => currentStep + 1);
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <div className="message">
            <StepMessage step={step}> {messages[step - 1]}</StepMessage>
            {/* Step {step} : {messages[step - 1]} */}
          </div>
          <div className="buttons">
            <Button bgcolor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈 Previous</span>
            </Button>

            <Button bgcolor="#7950f2" textColor="#fff" onClick={handleNext}>
              <span>Next 👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <p>
      Step : {step} {children}
    </p>
  );
}

function Button({ bgcolor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgcolor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
