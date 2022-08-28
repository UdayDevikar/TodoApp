import React from "react";

function TodoList({ TodoArray, HandelUpdateArray }) {
  return (
    <>
      {TodoArray.map((todo, index) => (
        <div className="todo-entry" key={index}>
          <p>{todo.title}</p>
          <button className="delete" onClick={() => HandelUpdateArray(todo)}>delete</button>
        </div>
      ))}
    </>
  );
}

export default TodoList;
