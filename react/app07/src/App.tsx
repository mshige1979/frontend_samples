import React, { useState } from "react";
import "./App.css";
import Task from "./components/Task";

function App() {
  // タスクリスト用
  const [taskList, setTaskList] = useState<Task[]>([]);
  // タスク名
  const [taskName, setTaskName] = useState<string>("");

  // タスク追加ボタン
  const taskAdd = () => {
    // タスク名が空の場合は処理しない
    console.log(`taskName: ${taskName}`);
    if (taskName === "") {
      return;
    }

    // タスクリストに追加
    const task: Task = {
      taskName: taskName,
      status: false,
    };
    taskList.push(task);
    setTaskList(taskList);

    // タスク名クリア
    setTaskName("");
  };
  return (
    <div className="App">
      <div
        style={{
          width: "400px",
          height: "auto",
          border: "1px solid #333",
          textAlign: "left",
          padding: "5px",
          margin: "10px",
        }}
      >
        <div style={{}}>
          <label>
            <span>タスク名：</span>
            <input
              style={{
                lineHeight: "1.5",
                marginRight: "5px",
              }}
              type="text"
              value={taskName}
              onChange={(event) => {
                setTaskName(event.target.value);
              }}
            />
            <button onClick={taskAdd}>追加</button>
          </label>
        </div>
        <div>
          <ul>
            {taskList.map((item: Task, index: number) => {
              return (
                <Task
                  key={index}
                  taskName={item.taskName}
                  status={item.status}
                  onCheck={(event) => {
                    taskList[index].status = event.target.checked;
                    setTaskList([...taskList]);
                  }}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
