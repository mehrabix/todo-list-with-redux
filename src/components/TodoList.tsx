import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useMemo } from 'react';
import TodoComponent from './Todo';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const [sortByCompleted, setSortByCompleted] = useState<boolean>(false);

  const sortedTodos = useMemo(() => {
    if (sortByCompleted) {
      return [...todos].sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? -1 : 1));
    } else {
      return [...todos].sort((a, b) => a.createdAt - b.createdAt);
    }
  }, [todos, sortByCompleted]);

  return (
    <div>
      <div className='flex flex-wrap justify-center my-5 gap-4'>
        <button className='bg-slate-300 px-2 py-1 rounded-md' onClick={() => setSortByCompleted(false)}>Sort by Creation Time</button>
        <button className='bg-slate-300 px-2 py-1 rounded-md' onClick={() => setSortByCompleted(true)}>Sort by Completion Status</button>
      </div>
      {sortedTodos.map((todo) => (
        <TodoComponent key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
