import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import TodoModal from "./TodoModal"


const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  const saveTodos = (updatedTodos) => {
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const addTodo = () => {
    if (input.trim() === '') {
      toast.error('Task cannot be empty');
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: input.trim(),
    };

    const updatedTodos = [...todos, newTodo];
    saveTodos(updatedTodos);
    setInput('');
    toast.success('Task added!');
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    saveTodos(updatedTodos);
    toast.info('Task deleted!');
  };

  const deleteAll = () => {
    saveTodos([]);
    toast.info('All tasks deleted!');
  };

  const startEdit = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  const confirmEdit = () => {
    if (editingText.trim() === '') {
      toast.error('Updated text cannot be empty');
      return;
    }

    const updatedTodos = todos.map(todo =>
      todo.id === editingId ? { ...todo, text: editingText } : todo
    );

    saveTodos(updatedTodos);
    setEditingId(null);
    setEditingText('');
    toast.success('Task updated!');
  };

  return (
    <div style={styles.container}>
      <h2>Todo List</h2>
      <div style={styles.inputGroup}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new task"
          style={styles.input}
        />
        <button onClick={addTodo} style={styles.button}>Create</button>
        <button onClick={deleteAll} style={{ ...styles.button, backgroundColor: '#dc3545' }}>Delete All</button>
      </div>

      {todos.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <ul style={styles.list}>
          {todos.map(todo => (
            <li key={todo.id} style={styles.item}>
              {editingId === todo.id ? (
                <>
                  <input
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    style={styles.input}
                  />
                  <button onClick={confirmEdit} style={styles.button}>Save</button>
                </>
              ) : (
                <>
                  <span>{todo.text}</span>
                  <div>
                    <button onClick={() => startEdit(todo.id, todo.text)} style={styles.button}>Update</button>
                    <button onClick={() => deleteTodo(todo.id)} style={{ ...styles.button, backgroundColor: '#dc3545' }}>Delete</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '30px auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  inputGroup: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 15px',
    fontSize: '14px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #eee',
  },
};

export default TodoList;

