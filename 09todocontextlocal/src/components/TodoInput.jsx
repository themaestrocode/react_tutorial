import React, {useState, useRef} from 'react'
import { useTodo } from '../context';

function TodoInput() {

  const inputRef = useRef(null);
  const [text, setText] = useState('');
  const {addTodo} = useTodo();

  const addNewTodo = () => {
    if (!text || text.trim() === '') {
      setText('');
      inputRef.current.value = '';
      return;
    }

    addTodo({
      id: Date.now(),
      text: text.trim(),
      completed: false
    });
    setText('');
    inputRef.current.value = '';
  }

  return (
    <div className="flex flex-row items-center w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto px-2 my-6">
      <input
        type="text"
        placeholder="Add a new todo..."
        className="border-none bg-slate-600 px-4 py-2 rounded-l-md w-full focus:outline-none focus:bg-slate-700 focus:border-none"
        onChange={(e) => setText(e.target.value)}
        ref={inputRef}
        onKeyDown={(e) => e.key === 'Enter' && addNewTodo()}
      />
      
      <button
      className="bg-green-600 hover:bg-green-700 w-20 text-white p-2 rounded-r-md"
      onClick={addNewTodo}
      >
        Add
      </button>
    </div>
  )
}

export default TodoInput