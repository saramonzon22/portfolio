
import '../styles/App.scss';
import logoHTML from '../images/html5.png';
import logoCSS from '../images/CSSlogo.png';
import logoSASS from '../images/sassLogo.png';
import skill from '../images/skillBar.png'
import jS from '../images/js.png'



function App() {
  return (
    <body><header className='header'>
      <div className='logo'></div>
      <nav><ul className='nav-bar'><li class='home'><a href='#'>home</a></li>
        <li className='who'><a href='#'>who</a></li>
        <li className='projects'><a href='#'>projects</a></li>
        <li className='networks'><a href='#'>rrss</a></li></ul></nav>
    </header>
      <main className='body-page'>
        <section className='text-div'>
          <div className='description'>
            <h1 className='title1'>Hi there!</h1>
            <h2>My name is Sara Monzón</h2>
            <h3>And this is my portfolio.</h3>
            <h3>Check it!</h3>
          </div>

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
        </section>
        <section className='who-section'>
          <div className='separador'>who</div>
          <div>avatar</div>
          <div className='introduction'><p>Hi! Nice to see you again! For those who wanted to know more about me I made this space. Currently I'm living at Canary Islands, I have History degree and I recently studied at <span><a href='https://adalab.es/'>Adalab</a></span> to become a programmer! </p></div>
        </section>
      </main>
    </body >

  );
}

export default App;