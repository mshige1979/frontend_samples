# シンプル TODO リスト作成

app01 - app061 までのまとめ的なもの
`setState`とデータバインディングを駆使して画面制御を行うもの

## 実装

### タスク制御用のデータ型を定義

src/types/common.d.ts

```typescript
// TaskItem用
type Task = {
  // タスク名
  taskName: string;
  // ステータス
  status: boolean;
};

// TaskコンポーネントのProps
// Taskを継承
interface TaskProp extends Task {
  // ステータス変更イベント
  onCheck: (event) => void;
}
```

### タスクコンポーネントを作成

src/components/Task.tsx

```typescript
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
```

### App.tsx で useSatte と連動

src/App.tsx

```typescript
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
```

↓

![sample](https://raw.githubusercontent.com/mshige1979/frontend_samples/image/react/images/lesson7/0001.gif)
