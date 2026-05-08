import { useState } from "react";

function TaskList({ tasks, dispatch }) {

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  // Start Editing
  const startEdit = (task) => {
    setEditId(task.id);
    setEditText(task.text);
  };

  // Save Edited Task
  const saveEdit = (id) => {
    dispatch({
      type: "EDIT_TASK",
      payload: {
        id,
        text: editText,
      },
    });

    setEditId(null);
    setEditText("");
  };

  return (
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>

          {/* Edit Mode */}
          {editId === t.id ? (
            <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          ) : (
            <span>{t.text}</span>
          )}

          <div className="task-buttons">

            {/* Edit / Save */}
            {editId === t.id ? (
              <button onClick={() => saveEdit(t.id)}>
                💾 Save
              </button>
            ) : (
              <button onClick={() => startEdit(t)}>
                ✏ Edit
              </button>
            )}

            {/* Delete */}
            <button
              onClick={() =>
                dispatch({
                  type: "DELETE_TASK",
                  payload: t.id,
                })
              }
            >
              ❌ Delete
            </button>

          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;