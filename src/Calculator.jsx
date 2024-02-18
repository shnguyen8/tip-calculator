import { useState, useEffect } from "react";
import "./App.css";

const Calculator = () => {
  const [checkAmount, setCheckAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const checkAmountNumber = parseFloat(checkAmount);
    const tipPercentageNumber = parseFloat(tipPercentage);

    const tip = (checkAmountNumber * tipPercentageNumber) / 100;
    const sum = checkAmountNumber + tip;

    setTipAmount(tip);
    setTotal(sum);
  }, [checkAmount, tipPercentage, tipAmount]);

  return (
    <div
      style={{
        border: "2px solid blue",
        minHeight: "500px",
        textAlign: "center",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "100px",
        }}
      >
        <label>
          Check Total{" "}
          <input
            value={checkAmount}
            onChange={(e) => setCheckAmount(e.target.value)}
            type="number"
          ></input>
        </label>
        <label>
          Tip Percentage:
          <input
            onChange={(e) => setTipPercentage(e.target.value)}
            type="number"
          ></input>
          %
        </label>
        <label>
          Tip Amount: <input value={tipAmount}></input>
        </label>
      </form>
      <h1>
        Total w/ Tip: <span style={{ color: "green" }}>${total}</span>
      </h1>
    </div>
  );
};

export default Calculator;
