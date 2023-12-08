import NavBar from '../NavBar';

export default function About() {
  return (
    <div className='about-background'>
      <NavBar/>
      <h1 id='about-me'>About Me</h1>
      <div className='about-box'>
        <p>
          Hello, my name is Lucas Hill. I am an aspiring junior
          developer that wants to leave an impact. This website is
          my first large personal project, and I have plans for more
          to come, hosted here.
        </p>
        <img src='me.jpg' alt='me'/>
      </div>
    </div>
  );
}
