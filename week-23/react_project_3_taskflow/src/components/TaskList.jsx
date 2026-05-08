import { useState } from "react";

function TaskList({ tasks, dispatch }) {
  const [editId,setEditId]=useState(null);
  const [editText,setEditText]=useState("")
  // start editing

  // save Editing Task
  return (
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          {t.text}
          <button>Save</button>
          <button>Edit</button>
          <button 
            onClick={() =>
              dispatch({
                type: "DELETE_TASK",
                payload: t.id,
              })
            }
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;