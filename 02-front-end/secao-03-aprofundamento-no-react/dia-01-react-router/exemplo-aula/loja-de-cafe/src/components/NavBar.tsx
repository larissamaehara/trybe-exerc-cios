import { NavLink } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
  return (
    <header className="nav-bar">
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/coffees">Cafés</NavLink>
      </nav>
    </header>
  );
}

export default NavBar;

