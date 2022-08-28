import { useState } from "react";
import "./App.css";
import Header from "./Header";
import TodoApp from "./TodoApp";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : "light"}>
      <button onClick={() => setDark(!dark)}>Toggle</button>
      <Header />
      <TodoApp />
    </div>
  );
}

export default App;
