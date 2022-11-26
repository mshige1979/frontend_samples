import React, { useState } from "react";

const Counter = () => {
  // count用のstateを定義
  const [count, setCount] = useState(0);

  // カウントUp処理
  const countUp = () => {
    // countの値を更新する場合はsetCountを使用する
    setCount(count + 1);
  };
  // カウントDown処理
  const countDown = () => {
    // countの値を更新する場合はsetCountを使用する
    setCount(count - 1);
  };

  return (
    <>
      <div
        style={{
          padding: "10px",
          width: "200px",
          textAlign: "left",
        }}
      >
        <span>count = {count}</span>
        <div
          style={{
            margin: "5px",
            marginLeft: "0px",
            width: "50px",
          }}
        >
          <button
            style={{
              marginBottom: "5px",
            }}
            onClick={countUp}
          >
            Up
          </button>
          <button onClick={countDown}>Down</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
