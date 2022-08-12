
import '../styles/App.css';
import logoHTML from '../images/html5.png';
import logoCSS from '../images/CSSlogo.png';
import logoSASS from '../images/sassLogo.png';
import skill from '../images/skillBar.png'
import jS from '../images/js.png'



function App() {
  return (
    <body><header className='header'>
      <div className='logo'></div>
      <nav><ul className='nav-bar'><li class='home'><a href='https://www.twitch.tv/knekro'>home</a></li>
        <li className='who'><a href='https://www.twitch.tv/knekro'>who</a></li>
        <li className='projects'><a href='https://www.twitch.tv/knekro'>projects</a></li>
        <li className='networks'><a href='https://www.twitch.tv/knekro'>rrss</a></li></ul></nav>
    </header>
      <main className='body-page'>
        <section className='text-div'>
          <h1 className='title1'>Hi there!</h1>
          <h2>My name is Sara Monzón</h2>
          <h3>And this is my portfolio.</h3>
          <h3>Check it!</h3>
        </section>
        <section className='card-div'>
          <div className='card'>
            <h2 className='pj-card'><span className='letritas'>P</span>
              <span className='letritas'>J</span>
              <span className='letritas'>-</span>
              <span className='letritas'>C</span>
              <span className='letritas'>A</span>
              <span className='letritas'>R</span>
              <span className='letritas'>D</span></h2>
            <h3 className='skills'>class</h3>
            <div className='parrafito'><img src={logoHTML} alt='logoHTML5' className='HTML-Logo'></img>
              <img src={logoCSS} alt='logoCSS' className='cssLogo'></img><img src={skill} alt='skill' className='html-skill'></img></div>
            <div className='parrafito'>
              <img src={jS} alt='logoJS' className='jsLogo'></img>
              <img src={skill} alt='skill' className='html-skill'></img></div>
            <div className='parrafito'><img src={logoSASS} alt='logoCSS' className='sass'></img>
              <img src={skill} alt='skill' className='html-skill'></img></div>

          </div>
        </section>

      </main>
    </body >

  );
}

export default App;