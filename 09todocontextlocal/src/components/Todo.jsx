import React, {useRef} from 'react'
import { useTodo } from '../context';
import { useState } from 'react';

function Todo({todo}) {

  const inputRef = useRef(null);
  const [updateModeEnabled, setUpdateModeEnabled] = useState(false);
  const {updateTodo, deleteTodo, toggleComplete} = useTodo();

  const onEditButtonClick = () => {
    if (updateModeEnabled) {
      // If in update mode, perform the update and disable it
      editTodo();
      inputRef.current.value = ''; // Clear the input
      setUpdateModeEnabled(false);
    } else {
      // If not in update mode, enable it
      setUpdateModeEnabled(true);
      inputRef.current.focus();
      inputRef.current.value = todo.text; // Set the input to the current todo text
    }
  }

  const editTodo = () => {
    // Logic to update the todo
    const updatedText = inputRef.current.value;

    if (updatedText && updatedText.trim() !== '') {
      updateTodo(todo.id, {
        ...todo,
        text: updatedText.trim(),
        completed: todo.completed // Keep the completed state unchanged
      });
    } else {
      // If the input is empty, we can either reset it or handle it as needed
      inputRef.current.value = todo.text; // Reset to original text
    }
  }

  const onDeleteButtonClick = () => {
    if (updateModeEnabled) {
      // If in update mode, just disable it without deleting
      setUpdateModeEnabled(false);
      inputRef.current.value = ''; // Clear the input
    } else {
      // If not in update mode, delete the todo
      deleteTodo(todo.id);
    }
  }

  return (
    <div className="flex flex-row items-center w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto px-1.5 my-2 bg-purple-200 rounded-md">
      <input
      className=''
      type="checkbox"
      checked={todo.completed}
      onChange={() => toggleComplete(todo.id)}
      />
      <input
      className={`text-gray-900 border-none px-2 py-2 mx-2 rounded-md w-full focus:border-none focus:outline-0 ${updateModeEnabled && 'focus:outline-1 focus:outline-gray-500 focus:bg-purple-200'}`}
      type="text"
      readOnly={!updateModeEnabled}
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
      <button
      className="bg-white hover:bg-red-700 w-10 text-white ml-1 h-8 rounded-md"
      onClick={onDeleteButtonClick}
      >
        {updateModeEnabled ? '↩️' : '🗑'}
      </button>
      </div>
    </div>
  )
}

export default Todo