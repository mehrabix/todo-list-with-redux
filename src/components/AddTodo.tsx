import { addTodo } from '@/store/slices/todoSlice';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

const AddTodo: React.FC = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState<string>('');

  const handleAddTodo = useCallback(() => {
    if (text.trim() !== '') {
      dispatch(
        addTodo({
          id: Date.now(),
          text,
          completed: false,
          createdAt: undefined,
        })
      );
      setText('');
    }
  }, [dispatch, text]);

  return (
    <div className="mt-4 flex flex-col">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
        className="p-2 border"
      />
      <button
        className="bg-green-800 hover:bg-green-700 transition-all duration-200 rounded-md text-white py-2 w-max px-4 mx-auto mt-2"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
