import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalValue, setModalValue] = useState("");

  const isFullName = (text) => {
    const parts = text.trim().split(" ");
    return parts.length >= 2 && parts.every((p) => p.length > 0);
  };

  const handleCreate = () => {
    if (isFullName(inputValue)) {
      setTodos([...todos, inputValue.trim()]);
      setInputValue("");
    } else {
      alert("Please enter both first and last name.");
    }
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleReset = () => {
    setTodos([]);
    setInputValue("");
    setEditIndex(null);
  };

  const openModal = (index) => {
    setEditIndex(index);
    setModalValue(todos[index]);
    setShowModal(true);
  };

  const handleModalUpdate = () => {
    if (isFullName(modalValue)) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = modalValue.trim();
      setTodos(updatedTodos);
      setShowModal(false);
      setEditIndex(null);
    } else {
      alert("Please enter both first and last name.");
    }
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="First Last"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="buttons">
        <button onClick={handleCreate}>Create</button>
        <button onClick={handleReset} className="reset">
          Reset
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span>{todo}</span>
            <div className="todo-actions">
              <button onClick={() => openModal(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Name</h2>
            <input
              type="text"
              value={modalValue}
              onChange={(e) => setModalValue(e.target.value)}
            />
            <div className="modal-buttons">
              <button onClick={handleModalUpdate}>Save</button>
              <button onClick={() => setShowModal(false)} className="reset">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
