import { Link } from 'react-router-dom';

function Header(props) {
    return <header className='header'>
        <div className='logo'></div>
        <nav className='nav-header'><ul className='nav-bar'><li><Link to='/' className='home'>home</Link></li>
            <li ><Link to='/who' className='who'>who</Link></li>
            <li ><Link to='/projects' className='projects'>projects</Link></li>
            <li ><Link to='/networks' className='networks'>rrss</Link></li></ul></nav>
    </header>
}

export default Header;