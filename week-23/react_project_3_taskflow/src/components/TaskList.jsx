function TaskList({ tasks, dispatch }) {
  return (
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          {t.text}

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