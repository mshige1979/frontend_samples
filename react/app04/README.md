# 親コンポーネントからデータを渡して反映する

##　コンポーネントに props をつける

### props 用のデータ型を定義し利用する

src/types/props.d.ts
types ディレクトリに配置した`xxx.d.ts`は自動でロードされどこからでも利用可能となる

```typescript
// props定義用の型
type SampleProps = {
  // 基本、必須となる
  text: string;
  // ?をつけた場合は任意となる
  memo?: string;
};
```

src/components/Hello.tsx
props を関数コンポーネントに定義し、コンポーネントから利用するように修正

```javascript
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
```

呼び出しする場所で props をパラメータで指定する

src/App.tsx

```javascript
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Hello text={"hogehoge"} memo={"foofoo"} />
    </div>
  );
}

export default App;
```

## 参考

https://handsonreact.com/docs/props
