import { createSlice } from '@reduxjs/toolkit';

const loadFromStorage = () => {
  try {
    const data = localStorage.getItem('todos');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveToStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: loadFromStorage(),
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
      };
      state.push(newTodo);
      saveToStorage(state);
    },
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.find(t => t.id === id);
      if (todo) {
        todo.text = newText;
        saveToStorage(state);
      }
    },
    deleteTodo: (state, action) => {
      const newState = state.filter(t => t.id !== action.payload);
      saveToStorage(newState);
      return newState;
    },
    deleteAll: () => {
      saveToStorage([]);
      return [];
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, deleteAll } = todoSlice.actions;
export default todoSlice.reducer;
