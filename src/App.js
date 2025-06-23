import './App.css';
import Header from "./My Components/Header";
import Todos from "./My Components/Todos";
import Footer from "./My Components/Footer";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
  {
    id: 1,
    title: "Title 1",
    text: "Welcome! Double-click to edit this note.",
    color: "lightyellow",
    isPlaceholder: true
  },
  {
    id: 2,
    title: "Title 2",
    text: "Click ➕ to add more colorful notes.",
    color: "lightblue",
    isPlaceholder: true
  }
]);

const [searchQuery, setSearchQuery] = useState('');

  const [showColors, setShowColors] = useState(false);
  const colors = ["lightblue", "lightpink", "lightcoral", "lavender", "lightyellow","aliceblue","crimson"];

  const addTodo = (color) => {
    const newTodo = {
      id: Date.now(),
      title: "Title",
      text: "Type here....",
      color,
      isPlaceholder: true
    };
    setTodos([...todos, newTodo]);
    setShowColors(false);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id, newTitle, newText, isPlaceholder = false) => {
  setTodos((prevTodos) =>
    prevTodos.map((todo) =>
      todo.id === id ? { ...todo, title: newTitle, text: newText, isPlaceholder } : todo
    )
  );
};

  return (
    <>
      <Header title="To-Do List" searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="toolbar">
        <h2 className="todo-heading">📝 To-Do List</h2>
        <button className="add-button" onClick={() => setShowColors(!showColors)}>➕</button>
        {showColors && (
          <div className="color-picker">
            {colors.map((color) => (
              <div
                key={color}
                className="color-swatch"
                style={{ backgroundColor: color }}
                onClick={() => addTodo(color)}
              />
            ))}
          </div>
        )}
      </div>

      <Todos todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} searchQuery={searchQuery}/>

      <Footer />
    </>
  );
}

export default App;
