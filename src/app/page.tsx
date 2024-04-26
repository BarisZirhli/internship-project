"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [squares, setSquares] = useState(Array(10).fill(""));
  const [stack, setStack] = useState<
    { type: string; index: number; previousValue: string }[]
  >([]);
  const [numbers, setNumbers] = useState(Array.from({ length: stack.length }));

  const onBackButtonClick = () => {
    const lastAction = stack.pop();

    if (!lastAction) {
      return alert("no action");
    }
    const newSquares = [...squares];

    newSquares[lastAction.index] = lastAction.previousValue;

    if (lastAction.index > -1) {
      numbers.splice(lastAction.index, 1); // 2nd parameter means remove one item only
    }
    const newNumbers = stack.map((action) => action.index);

    setSquares(newSquares);
    setNumbers(newNumbers);
  };

  const onSquareClick = (index: number) => {
    const newSquares = [...squares];
    let newStack = [...stack];
    if (newSquares[index] === "x") {
      newSquares[index] = "";
      newStack.push({ type: "toggle", index, previousValue: "x" });
    } else {
      newSquares[index] = "x";
      newStack.push({ type: "toggle", index, previousValue: "" });
    }
    numbers.push(index);
    setSquares(newSquares);
    setStack(newStack);
    setNumbers(numbers);
  };

  return (
    <main className={styles.main}>
      <button className={styles.backButton} onClick={onBackButtonClick}>
        GERİ AL
      </button>

      <div className={styles.squareContainer}>
        {squares.map((value, index) => (
          <div
            key={index}
            className={styles.square}
            onClick={() => onSquareClick(index)}
          >
            {value}
          </div>
        ))}
      </div>
      <div>
        {numbers.map((index) => (
          <div onClick={() => onSquareClick}>{Number(index) + 1}</div>
        ))}
      </div>
    </main>
  );
}
