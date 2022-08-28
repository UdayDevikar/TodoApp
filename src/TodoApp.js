import React, { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function TodoApp() {
  const [Todo, setTodo] = useState("");
  const [TodoArray, setTodoArray] = useState([]);

  function HandelTodoArray(e) {
    e.preventDefault()
    setTodoArray([...TodoArray, { title: Todo, id: uuidv4() }]);
  }

  function HandelUpdateArray({id}){
    console.log(id)
    setTodoArray(TodoArray.filter((todo) => todo.id !== id))
  }

  return (
    <div id="main">
      <form className="form" onSubmit={HandelTodoArray}>
        <textarea
          type="text"
          name="todo"
          className="input"
          placeholder="Add Todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="button" type="submit">
          Add Todo
        </button>
      </form>

      <TodoList 
      TodoArray={TodoArray} 
      HandelUpdateArray={HandelUpdateArray}
      />
    </div>
  );
}

export default TodoApp;
