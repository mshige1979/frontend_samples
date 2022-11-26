# useState を利用してデータバインディング

カウンタコンポーネントを作成して、データバインディング

## useState

関数コンポーネントの場合の state によるデータ管理方法

### 参考

https://ja.reactjs.org/docs/hooks-state.html

### カウンタコンポーネント対応

src/components/Counter.tsx

```javascript
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
```

App.tsx に配置して動かす

```javascript
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
```

↓

![sample](https://raw.githubusercontent.com/mshige1979/frontend_samples/image/react/images/lesson5/0001.gif)
