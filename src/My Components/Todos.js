import React from 'react'
import TodoItem from './TodoItem'

const Todos = ({ todos, deleteTodo, updateTodo, searchQuery }) => {
  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="notes-container">
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};

export default Todos;
  