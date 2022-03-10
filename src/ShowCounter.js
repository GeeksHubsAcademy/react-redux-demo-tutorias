import "./ShowCounter.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";



function ShowCounter() {
  const count = useSelector((state) => state.count);
  const color = count < 0 ? "red" : "green";
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const increment = () => dispatch({ type: "INCREMENT", payload: step });
  const decrement = () => {
    // debugger;
    dispatch({ type: "DECREMENT", payload: step })
  };
  const reset = () => dispatch({ type: "RESET" });
  const updateStep = (e) => setStep(Number(e.target.value));

  // if(count < 5) {
  //   debugger;
  // }
  return (
    <div className="ShowCounter">
      <div className="actions">
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>-</button>
        <input
          type="number"
          value={step}
          onChange={updateStep}
          style={{ width: "50px" }}
        />
      </div>
      <h1 style={{ color }}>{count}</h1>
    </div>
  );
}

export default ShowCounter;
