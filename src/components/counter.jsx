import { useDispatch, useSelector } from "react-redux";
import {
  decrease,
  divide,
  increase,
  multiply,
  reset,
} from "../features/counter/counterSlice";
import style from "./counter.module.css";
import { useState } from "react";

const Counter = () => {
  const { initialValue } = useSelector((state) => state.counter);
  const [customValue, setCustomValue] = useState(0);
  const dispatch = useDispatch();

  const handleCustomValueInput = (e) => {
    let convertedToInteger = Number(e.target.value);
    setCustomValue(convertedToInteger);
  };

  const handleIncrease = () => {
    dispatch(increase(customValue));
  };

  const handleDecrease = () => {
    dispatch(decrease(customValue));
  };

  const handleMultiply = () => {
    dispatch(multiply(customValue));
  };

  const handleDivide = () => {
    dispatch(divide(customValue));
  };

  const hangleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <div className={style.section}>
        <span>Initial value:</span>
        <input value={initialValue} className={style.input} readOnly />
      </div>
      <div className={style.section}>
        <span>Custom number:</span>
        <input
          onChange={(e) => handleCustomValueInput(e)}
          className={style.input}
          type="number"
        />
      </div>
      <div className={style.button}>
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
        <button onClick={handleMultiply}>*</button>
        <button onClick={handleDivide}>/</button>
        <button onClick={hangleReset}>reset</button>
      </div>
    </div>
  );
};

export default Counter;
