import { useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("jan 1 2024");
  date.setDate(date.getDate() + count);

  return (
    <div className="container">
      <div className="block">
        <button
          onClick={() =>
            setStep((currentStep) =>
              currentStep > 1 ? currentStep - 1 : currentStep
            )
          }
        >
          -
        </button>
        <p>Step: {step}</p>
        <button onClick={() => setStep((currentstep) => currentstep + 1)}>
          +
        </button>
      </div>
      <div className="block ">
        <button onClick={() => setCount((currentValue) => currentValue - step)}>
          -
        </button>
        <p>Count:{count}</p>
        <button onClick={() => setCount((currentValue) => currentValue + step)}>
          +
        </button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span> {date.toDateString()}</span>
      </p>
    </div>
  );
}

export default Timer;
