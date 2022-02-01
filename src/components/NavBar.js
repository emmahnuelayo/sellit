import React from 'react';

export default function NavBar() {
  return (
    <header className='row'>
      <div>
        <a className='brand' href='/'>
          amazona
        </a>
      </div>
      <div>
        <a href='/cart'>Cart</a>
        <a href='/signin'>Sign In</a>
      </div>
    </header>
  );
}
