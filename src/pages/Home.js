import '../App.css';
import { useState } from 'react';
import NavBar from '../NavBar';

export default function Home() {
  return (
    <>
      <NavBar />
      <div className='background'></div>
      <h1 id='me'>Lucas Hill</h1>
    </>
  );
}
