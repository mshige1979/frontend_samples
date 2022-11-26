// TaskItem用
type Task = {
    // タスク名
    taskName: string;
    // ステータス
    status: boolean;
}

// TaskコンポーネントのProps
// Taskを継承
interface TaskProp extends Task {
    // ステータス変更イベント
    onCheck: (event) => void;
}
