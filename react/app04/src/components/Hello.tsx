import React from "react";

const Hello = (props: SampleProps) => {
  return (
    <>
      Hello, world, <p>text={props.text}</p>
      {props.memo !== undefined && <div>memo={props.memo}</div>}
    </>
  );
};

export default Hello;
