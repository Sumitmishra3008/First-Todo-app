import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Createtodo } from "./components/Createtodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/gettodos/").then(async function (res) {
      const data = await res.json();
      setTodos(data.todos);
    });
  }, []);

  return (
    <div>
      <h1>React App</h1>
      <Createtodo />
      <Todos todo={todos} />
    </div>
  );
}

export default App;
