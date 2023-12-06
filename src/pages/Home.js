import '../App.css';
import NavBar from '../NavBar';

export default function Home() {
  return (
    <>
      <NavBar/>
      <div className='home-background'></div>
      <h1 id='me'>Lucas Hill.</h1>
      <h2 id='more-me'>
        <span style={{color: 'white'}}>Developer.</span><br/>
        <span style={{color: 'grey'}}>Engineer.</span><br/>
        <span style={{color: 'blue'}}>Scientist.</span>
      </h2>
    </>
  );
}
