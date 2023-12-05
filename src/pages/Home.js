import '../App.css';
import { useState } from 'react';
import NavBar from '../NavBar';

export default function Home() {
  return (
    <>
      <NavBar/>
      <div className='background'></div>
      <h1 id='me'>Lucas Hill.</h1>
      <h2 id='moreme'>
        Developer.<br/>
        Scientist.<br/>
        Engineer.
      </h2>
    </>
  );
}
