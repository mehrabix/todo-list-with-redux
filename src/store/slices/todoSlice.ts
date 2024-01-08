import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo } from '../../types/todo';

interface TodosState extends Array<ITodo> {}

const todosSlice = createSlice({
  name: 'todos',
  initialState: [] as TodosState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
