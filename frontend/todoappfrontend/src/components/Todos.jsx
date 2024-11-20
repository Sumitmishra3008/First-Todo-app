export function Todos({ todo }) {
  return (
    <div>
      {todo.map(function (todo) {
        return (
          <div>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <button>
              {todo.completed == true ? "completed" : "Mark as complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

// { todo.title }
//
