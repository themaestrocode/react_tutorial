import React, {useRef} from 'react'
import { useTodo } from '../context';
import { useState } from 'react';

function Todo({todo}) {

  const inputRef = useRef(null);
  const [updateModeEnabled, setUpdateModeEnabled] = useState(false);
  const {updateTodo, deleteTodo} = useTodo();

  const onEditButtonClick = () => {
    setUpdateModeEnabled(true);
    inputRef.current.focus();
  }

  const performUpdate = () => {
    // Logic to update the todo

  }

  return (
    <div className="flex flex-row items-center w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto px-1.5 my-2 bg-purple-200 rounded-md">
      <input
      className=''
      type="checkbox"
      />
      <input
      className="text-gray-900 border-none px-2 py-2 mx-2 rounded-md w-full focus:outline-1 focus:outline-gray-500 focus:bg-purple-200 focus:border-none"
      type="text"
      placeholder={todo.text.substring(0, 60) + '...'}
      ref={inputRef}
      />

      <div className='flex flex-row items-center'>
        <button
        className="bg-white hover:bg-purple-700 w-10 h-8 text-white mr-1 rounded-md"
        onClick={onEditButtonClick}
        >
        {updateModeEnabled ? '✅' : '✏️'}
      </button>
      <button className="bg-white hover:bg-red-700 w-10 text-white ml-1 h-8 rounded-md">
        🗑
      </button>
      </div>
    </div>
  )
}

export default Todo