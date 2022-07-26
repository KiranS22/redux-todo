import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    todosCount: 0,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todosCount++;
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.todosCount--;
    },
    completeOrNot: (state, action) => {
      //action.payload as the id
      let todo = state.todos.filter((todo) => todo.id === action.payload)[0];
      todo.isComplete = !todo.isComplete;
    },
  },
});
// when using slices you can use methords that mutate the codfe because of Immer
export const selectTodos = (state) => {
  return state.todo.todos;
};

export const selectTodoCount = (state) => {
  return state.todo.todosCount;
};
export const { addTodo, deleteTodo, completeOrNot } = todoSlice.actions;

export default todoSlice.reducer;
