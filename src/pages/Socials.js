import NavBar from '../NavBar';

function Social({ type, link }) {
  let newlink;

  switch (type) {
    case 'Phone':
      newlink = `tel:${link}`;
      break;
    case 'Email':
      newlink = `mailto:${link}`;
      break;
    case 'GitHub':
      newlink = `https://github.com/${link}`;
      break;
    case 'LinkedIn':
      newlink = `https://www.linkedin.com/in/${link}`;
      break;
    default:
      newlink = link;
      break;
  }

  return (
    <div className='social-box'>
      <a href={newlink} target="_blank" rel="noopener noreferrer">{type}</a>
    </div>
  );
}

export default function Socials() {
  return (
    <div className='socials-background'>
      <NavBar/>
      <h1 id='socials'>Socials</h1>
      <div className='box-holder'>
        <Social type='Phone' link='7205740135'/>
        <Social type='Email' link='lucashill1717@gmail.com'/>
        <Social type='GitHub' link='lucashill1717'/>
        <Social type='LinkedIn' link='lucas-hill-77830a237'/>
      </div>
    </div>
  );
}
