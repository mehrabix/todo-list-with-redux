'use client'
import { setNote } from '@/store/store';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

type Todos = {
  note: string;
  name: string;
};

export default function Home() {
  const dispatch = useDispatch();
  const notesFromReducer = useSelector((state: any) => state.app.notes);

  const [todo, setTodo] = useState<Todos>({
    name: "",
    note: "",
  });

  const [notes, setNotes] = useState<Todos[]>(notesFromReducer);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: keyof Todos) => {
    setTodo({
      ...todo,
      [field]: e.target.value,
    });
  }

  const handleAddNote = () => {
    dispatch(setNote(todo));
    setNotes([...notes, todo]);
    setTodo({
      name: "",
      note: "",
    });
  }

  return (
    <>
      <div className="max-w-96 h-screen flex flex-col justify-between bg-slate-600 m-auto  p-4">
  
        {notes.length > 0 && (
          <div className="space-y-2 h-[calc(100vh - 223px)] overflow-scroll">
            {notes.map((item: Todos, index: number) => (
              <div key={index} className="w-full bg-emerald-900 space-y-4 rounded-md p-4 text-white h-auto">
                <span>name: {item.name}</span>
                <p>note: {item.note}</p>
              </div>
            ))}
          </div>
        )}
  
        <div className="flex flex-col">
          <label>name</label>
          <input value={todo.name} onChange={(e) => handleInputChange(e, 'name')} type="text" />
  
          <label>note</label>
          <textarea value={todo.note} onChange={(e) => handleInputChange(e, 'note')} className="w-full" name="" id=""></textarea>
  
          <button onClick={handleAddNote} className="bg-green-500 text-white w-14 mx-auto rounded-lg overflow-hidden mt-3">Add</button>
        </div>
      </div>
    </>
  );
}
