import React, { useState, useReducer } from "react";
import "./TodoList.css";
import { initialState, reducer } from "./reducers/reducers";

let TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  console.log(state, "initial state");

  const handleChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value, "e target value");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
  };

  return (
    <div className="App">
      <h1>TO DO APP</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button onClick={() => dispatch({ type: "ADD_TODO", payload: name })}>
          Submit
        </button>
        <button onClick={() => dispatch({ type: "CLEAR_SELECTED" })}>
          Clear Selected
        </button>
        <button onClick={() => dispatch({ type: "CLEAR_ALL" })}>
          Clear All
        </button>
      </form>
      <div className="notes">
        {state.map((item) => (
          <p
            key={item.id}
            className={item.completed ? "selected" : ""}
            onClick={() => {
              dispatch({ type: "TOGGLE_TODO", payload: item.id });
            }}
          >
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
//export to index.js
