# Lesson2

App コンポーネントを書き換え、Hello コンポーネントを追加する

## Hello コンポーネントの作成

### 新規に src 直下に Hello コンポーネントを作成する

#### src/Hello.tsx

```
import React from "react";

const Hello = () => {
  return <div>hello</div>;
};

export default Hello;
```

## App コンポーネント修正

### App コンポーネントの中身を書き換え

#### src/App.tsx

```
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello";

function App() {
  return (
    <div className="App">
      <Hello />
    </div>
  );
}

export default App;

```

↓

![sample](https://raw.githubusercontent.com/mshige1979/frontend_samples/image/react/images/lesson2/0001.png)

## 参考情報

https://handsonreact.com/docs/labs/ts/04-YourFirstComponent
