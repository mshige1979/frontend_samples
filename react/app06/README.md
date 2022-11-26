# 親コンポーネントより子コンポーネントへ関数を props で渡す

props で関数も渡せるかの実験

## 親コンポーネントで useState や処理する関数を定義

props で引き受けるため、props の型定義を行う
src/types/props.d.ts

```typescript
type SampleProps = {
  count: number;
  countUp: () => void;
  countDown: () => void;
};
```

Counter コンポーネントで props を利用する形式で作成
src/components/Counter.tsx

```javascript
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
```

App.tsx で`useState`及び、countUp や countDown を設定
※props で渡すため、関数で定義する必要はなく、直接 props に定義しても良い

```javascript
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Counter
        count={count}
        countUp={() => {
          setCount(count + 10);
        }}
        countDown={() => {
          setCount(count - 10);
        }}
      />
    </div>
  );
}

export default App;
```
