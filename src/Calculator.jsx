import { useState, useEffect } from "react";
import "./App.css";

const Calculator = () => {
  const [checkAmount, setCheckAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const onSubtotalChange = (event) => {
    let amount = Number(event.target.value);
    setCheckAmount(amount);
    const calculatedTip = (amount * tipPercentage) / 100;
    console.log(`Selected Tip: ${calculatedTip}`);
    setTipAmount(calculatedTip || 0);
  };

  const onTipPercentageChange = (event) => {
    const selected = parseInt(event.target.value);
    setTipPercentage(selected);
  };

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
            onChange={onSubtotalChange}
            type="number"
          ></input>
        </label>
        <label>
          Tip Percentage:
          {/* <select
            name="selectedNumber"
            style={{ zIndex: 9999 }}
            defaultValue={0}
            onChange={onTipPercentageChange}
          >
            <option>0</option>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
            <option>25</option>
          </select> */}
          <input onChange={onTipPercentageChange} type="number"></input>%
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
