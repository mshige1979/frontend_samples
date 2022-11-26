import React from "react";

// タスクコンポーネント
const Task = (props: TaskProp) => {
  return (
    <>
      <div>
        <li>
          <label>
            <input type="checkbox" onChange={props.onCheck} />
            <span
              style={{
                textDecoration:
                  props.status === false ? "auto" : "line-through",
              }}
            >
              {props.taskName}
            </span>
          </label>
        </li>
      </div>
    </>
  );
};

export default Task;
