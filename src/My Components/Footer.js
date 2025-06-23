import React from 'react';

const Footer = () => {
  const footerStyle = {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    background: 'linear-gradient(90deg, #ffe9ec, #e0f7fa, #f3e5f5, #e8f5e9)', // ✨ pastel gradient
    color: '#444',
    textAlign: 'center',
    padding: '12px 0',
    fontSize: '15px',
    fontFamily: 'cursive',
    boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 10,
  };

  return (
    <footer style={footerStyle}>
      <p>✨ To-Do Notes App &copy; {new Date().getFullYear()} | Built with React</p>
    </footer>
  );
};

export default Footer;
