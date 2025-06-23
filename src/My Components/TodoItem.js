import React, { useState, useRef, useEffect } from 'react';

const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(todo.title || '');
  const [currentText, setCurrentText] = useState(todo.text || '');
  const [isDeleting, setIsDeleting] = useState(false);

  const titleRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
  if (isEditing) {
    // Try to focus the title first
    if (titleRef.current) {
      const len = titleRef.current.value.length;
      titleRef.current.selectionStart = len;
      titleRef.current.selectionEnd = len;
    } else if (textareaRef.current) {
      // Fallback to textarea if title is not present yet
      const len = textareaRef.current.value.length;
      textareaRef.current.selectionStart = len;
      textareaRef.current.selectionEnd = len;
    }
  }
}, [isEditing]);

  const handleDelete = () => {
    setIsDeleting(true);
    //animation
    setTimeout(() => deleteTodo(todo.id), 300);
  };

  const handleDoubleClick = () => {
    if (todo.isPlaceholder) {
      setCurrentText("");
      updateTodo(todo.id, "", "", false); // Mark as no longer a placeholder
    }
    setIsEditing(true);
  };

  const handleClick = () => {
    if (todo.isPlaceholder) {
      setCurrentTitle("");
      updateTodo(todo.id, "", "", false); // Mark as no longer a placeholder
    }
    setIsEditing(true);
  };

  const handleBlur = () => {
    updateTodo(todo.id, currentTitle, currentText);
    setIsEditing(false);
  };


  return (
    <div className={`note ${isDeleting ? "fade-out" : ""}`} style={{ backgroundColor: todo.color }}>
      <span className="delete-btn" onClick={handleDelete}>
        <i className="bi bi-trash3"></i>
      </span>
      {isEditing ? (
        <>
          <input
          ref={titleRef}
            className="note-title"
            value={currentTitle}
            onChange={(e) => setCurrentTitle(e.target.value)}
            placeholder="Enter title..."
            onBlur={handleBlur}
          />
          <textarea
            ref={textareaRef}
            className="note-text"
            value={currentText}
            onChange={(e) => setCurrentText(e.target.value)}
            onBlur={handleBlur}
            style={{
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              overflowWrap: "break-word",
              height: "100%",
              width: "100%",
              overflowY: "auto",
              paddingTop: "20px",
              paddingRight: "25px",
              fontSize: "16px"
            }}
          />
        </>
      ) : (
        <>
        <div onClick={handleClick}>
          <div
            className="note-title"
            style={{ fontWeight: 'bold', cursor: 'text' }}>
            {todo.title || 'Untitled'}
          </div>
          </div>
        <div onDoubleClick={handleDoubleClick}>
          <div
            className="note-text"
            style={{
              color: todo.isPlaceholder ? "#888" : "#000",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              overflowWrap: "break-word",
              height: "100%",      // 💡 important
              width: "100%",
              overflowY: "auto",
              cursor: 'text'
            }}>
            {todo.text}
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
