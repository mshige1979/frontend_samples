# Lesson3

同じコンポーネントを複数配置する

## 画面内に直接複数配置する

### 同じコンポーネントを複数配置することが可能

src/App.tsx

```javascript
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
}

export default App;
```

## 繰り返しを利用して複数配置する

### for 文などで一定回数の繰り返しを行う場合は即時関数を利用する

```javascript
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";

function App() {
  // 繰り返し回数を指定
  const count = 10;

  // render
  return (
    <div className="App">
      {(() => {
        const _list = [];
        for (let i = 0; i < count; i++) {
          _list.push(
            <div key={i}>
              <span>{i + 1}: </span>
              <Hello key={i} />
            </div>
          );
        }
        return <>{_list}</>;
      })()}
    </div>
  );
}

export default App;
```

### よく利用されるパターンとしては map 関数による繰り返しが多い

```javascript
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";

function App() {
  const list = [
    {
      id: 10,
    },
    {
      id: 20,
    },
    {
      id: 30,
    },
  ];
  return (
    <div className="App">
      {list.map((item, index) => {
        return (
          <div>
            <span>{item.id}:</span>
            <Hello />
          </div>
        );
      })}
    </div>
  );
}

export default App;
```
