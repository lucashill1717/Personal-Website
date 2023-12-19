import NavBar from '../NavBar';

export default function About() {
  return (
    <div className='about-background'>
      <NavBar/>
      <h1 id='about-me'>About Me</h1>
      <div className='about-box'>
        <div className='text'>
          <p>
            Hello, my name is Lucas Hill. I am an aspiring junior
            developer that wants to leave an impact. This website is
            my first large personal project, and I have plans for more
            to come, hosted here.
          </p>
          <p>
            I have loved computer science since elementary school. From
            simple block programming to advanced algorithms and data
            structures, it has all been incredibly fascinating to me.
            I adore programming, but I also find the actual physical
            inner workings of computers to be very cool as well, with
            a lot to learn from. My favorite programming languages are
            Java and Python, as entirely different as they are from each
            other.
          </p>
          <p>
            I grew up in the Front Range of Colorado, with my sister, parents,
            and various pets. Recently, I have gotten very into rock climbing,
            with my most recent success being completing a V6 bouldering route.
          </p>
          <p>
            I graduated from Front Range Community College in 2023, with Magna
            Cum Laude honors. I studied Computer Information Systems. Now, I
            attend Colorado State University studying Computer Science.
          </p>
          <p>
            The website is a bit barebones now, but I hope whoever sees this
            appreciates the hard work I've put in!
          </p>
        </div>
        <img src='/static/me.jpg' alt='me'/>
      </div>
    </div>
  );
}
