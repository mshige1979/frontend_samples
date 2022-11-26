import React from "react";

const Counter = (props: SampleProps) => {
  return (
    <>
      <div
        style={{
          padding: "10px",
          width: "200px",
          textAlign: "left",
        }}
      >
        <span>count = {props.count}</span>
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
            onClick={props.countUp}
          >
            Up
          </button>
          <button onClick={props.countDown}>Down</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
