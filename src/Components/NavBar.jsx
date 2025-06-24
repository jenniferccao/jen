import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="nav-bar">
      <div className="menu">
        <Link
          to="/"
          className={`nav-link${currentPath === '/' ? ' active' : ''}`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`nav-link${currentPath === '/about' ? ' active' : ''}`}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;