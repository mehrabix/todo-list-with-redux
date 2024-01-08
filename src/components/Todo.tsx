import React, { useCallback, memo } from 'react';
import { useDispatch } from 'react-redux';
import { ITodo } from '../../types/todo';
import { deleteTodo, toggleTodo } from '@/store/slices/todoSlice';

interface TodoProps {
  todo: ITodo;
}

const TodoComponent: React.FC<TodoProps> = memo(({ todo }) => {
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
        <button  onClick={handleToggle} className="bg-green-500 text-white px-2 rounded-md">
          Complate
        </button>
        <button className='bg-red-500 text-white px-2 rounded-md' onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
});

export default TodoComponent;