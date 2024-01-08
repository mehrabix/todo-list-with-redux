'use client'
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '../store';
import AddTodo from '@/components/AddTodo';
import TodoList from '@/components/TodoList';

export default function Home() {
  return (
    <Provider store={store}>
      <div className="container mx-auto mt-8 px-7 md:w-6/12">
        <Head>
          <title>Todo App</title>
          <meta name="description" content="Todo App using Next.js, Redux Toolkit, and Tailwind CSS" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='mx-auto text-center'>
        <h1 className="text-4xl font-bold mb-4">Todo App</h1>
        <AddTodo />
        <TodoList />
        </div>
      </div>
    </Provider>
  )
}
