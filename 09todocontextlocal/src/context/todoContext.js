import React, { createContext, useContext } from 'react';

export const TodoContext = createContext({
  todos: [
    { id: 1, text: 'Todo Message', completed: false },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, updatedTodo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {}
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
}