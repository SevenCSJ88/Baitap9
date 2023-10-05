import React, { createContext, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todo from "./components/Todo";


export const TododContext = createContext(null);

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const handleEditItem = (id, newValue) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, name: newValue };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const handleDeleteItem = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  const handleRemoveAllCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.isCompleted);
    setTodos(updatedTodos);
  };
  return (
    <TododContext.Provider
      value={{
        todos,
        handleAddTodo,
        handleToggleComplete,
        handleEditItem,
        handleDeleteItem,
        handleRemoveAllCompleted,
      }}
    >
      <div className="container">
        <h1>TODOLIST</h1>
        <Form />
        <Todo />
      </div>
    </TododContext.Provider>
  );
};

export default App;