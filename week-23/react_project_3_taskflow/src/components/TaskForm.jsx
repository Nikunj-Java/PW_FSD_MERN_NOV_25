import { useState } from "react";

function TaskForm({ dispatch }) {
  const [task, setTask] = useState("");

  const addTask = () => {
    dispatch({
      type: "ADD_TASK",
      payload: {
        id: Date.now(),
        text: task,
      },
    });

    setTask("");
  };

  return (
    <div>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default TaskForm;