import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo } from '../../types/todo';

interface TodosState extends Array<ITodo> {}

const todosSlice = createSlice({
  name: 'todos',
  initialState: [] as TodosState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      return [...state, action.payload];
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
