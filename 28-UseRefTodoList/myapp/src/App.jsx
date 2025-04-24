import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { text: input, edited: false }]);
    setInput('');
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditText(todos[index].text);
  };

  const saveEdit = (index) => {
    if (editText.trim() === '') return;
    const updated = [...todos];
    updated[index].text = editText;
    updated[index].edited = true;
    setTodos(updated);
    setEditIndex(null);
    setEditText('');
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter') {
      saveEdit(index);
    }
  };

  const deleteTodo = (index) => {
    if (!todos[index].edited) return;
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  const clearAll = () => {
    setTodos([]);
  };

  return (
    <div className="container">
      <div className="app">
        <h1>Task List</h1>
        <div className="input-section">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
          />
          <button onClick={addTodo}>Add Task</button>
        </div>

        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li
              key={index}
              className={`todo ${todo.edited ? 'edited' : 'unedited'}`}
            >
              <span className="index">{index + 1}.</span>
              {editIndex === index ? (
                <input
                  className="edit-input"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onBlur={() => saveEdit(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  autoFocus
                />
              ) : (
                <span className="text" onClick={() => startEditing(index)}>
                  {todo.text}
                </span>
              )}
              <div className="actions">
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
        <button className="clear-btn" onClick={clearAll}>Clear All</button>
      </div>
    </div>
  );
}

export default App;



