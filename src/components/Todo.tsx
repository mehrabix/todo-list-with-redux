import React, { useCallback, memo } from 'react';
import { useDispatch } from 'react-redux';
import { ITodo } from '../types/todo';
import { deleteTodo, toggleTodo } from '@/store/slices/todoSlice';

interface TodoProps {
  todo: ITodo;
}

const Todo: React.FC<TodoProps> = memo(({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = useCallback(() => {
    dispatch(toggleTodo(todo.id));
  }, [dispatch, todo.id]);

  const handleDelete = useCallback(() => {
    dispatch(deleteTodo(todo.id));
  }, [dispatch, todo.id]);

  return (
    <div className={`flex items-center justify-between p-2 ${todo.completed ? 'line-through' : ''}`}>
      <span>{todo.text}</span>
      <div className='space-x-3'>
        <button onClick={handleToggle} className={`${todo.completed ? 'bg-green-500' : 'bg-blue-500'} text-white px-2 rounded-md`}>
          {todo.completed ? 'revert' : 'complete'}
        </button>
        <button className='bg-red-500 text-white px-2 rounded-md' onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
});

export default Todo;
