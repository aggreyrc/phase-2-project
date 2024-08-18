import React from "react";
import bookIcon from './icons/—Pngtree—book icon vector image_8926794.png';

function Header() {
  return (
    <header className="header">
        <img  src={bookIcon} alt="books"/>
      <h1>E-Book Explorer</h1>
    </header>
  );
}

export default Header;
