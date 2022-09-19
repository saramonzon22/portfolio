import css from '../images/CSSlogo.png';
import html from '../images/html5.png';
import js from '../images/js.png';
import sass from '../images/sassLogo.png';
import react from '../images/react.png';
import git from '../images/github.png';
import sql from '../images/sqlite.png';
import node from '../images/node.png';
import slack from '../images/slack.png';
import zeplin from '../images/zeppling.png';


function Main(props) {

    return <main className='body-page'>
        <section className='text-div' id='home'>
            <div className='description1'>
                <h1 className='title1'>Hi there!</h1>
                <h2>My name is Sara Monzón</h2>
                <h3>And this is my portfolio.</h3>
                <h3>Check it!</h3>
            </div>

            <section className='card-div'>
                <div className='card'>
                    <h2 className='pj-card'>Skills</h2>
                    <div className="container">
                        <img src={css} alt='csslogo' className='css'></img>
                        <img src={html} alt='htmllogo' className='html'></img>
                        <img src={js} alt='jslogo' className='js'></img>
                        <img src={sass} alt='sasslogo' className='sass'></img>
                        <img src={react} alt='reactlogo' className='react'></img>
                        <img src={git} alt='gitlogo' className='git'></img>
                        <img src={sql} alt='sqllogo' className='sql'></img>
                        <img src={node} alt='nodelogo' className='node'></img>
                        <img src={slack} alt='slacklogo' className='slack'></img>
                        <img src={zeplin} alt='zeplinlogo' className='zeplin'></img>
                    </div>
                </div>
            </section>
        </section>

    </main>
}

export default Main;
