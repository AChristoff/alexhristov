import '@/styles/burger.scss'
import { useState, useEffect } from 'react';

function Burger({mobileNavOpen}: {mobileNavOpen: boolean}) {
console.log('mobileNavOpen:', mobileNavOpen)

  return (
    <div className={`icon-wrapper ${mobileNavOpen ? 'active' : ''}`}>
      <div className="menu-icon"/>
    </div>
  );
}

export default Burger;