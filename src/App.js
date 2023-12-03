import './App.css';
// eslint-disable-next-line
import { useState } from 'react';

function NavButton({value, link}) {
  function route() {
    // do something with link
  }

  return (
    <button className='nav' onClick={route}>{value}</button>
  )
}

export default function Me() {
  return (
    <>
      <div className='navbar'>
        <NavButton value='Home' />
        <NavButton value='About Me' />
        <NavButton value='Projects' />
        <NavButton value='Socials' />
      </div>
    </>
  );
}
