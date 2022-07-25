import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    todosCount: 0,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => { 
      state.todos.filter((todo) => todo.id !== action.payload);
      console.log();
    },
    toggleCompletion: (state) => {},
  },
});

export const selectTodos = (state) => {
  return state.todo.todos;
};

export const selectTodoCount = (state) => {
  return state.todo.todosCount;
};
export const { addTodo, deleteTodo, toggleCompletion } = todoSlice.actions;

export default todoSlice.reducer;
